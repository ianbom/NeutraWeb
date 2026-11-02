// Usage: node scripts/compare.mjs <route> <width> [height]
// Captures settled frames of reference vs local at identical scroll offsets,
// writes side-by-side frames into cmp/<route>-<w>-NN.png plus page heights.
import { chromium } from 'playwright';
import fs from 'node:fs';
const [route = '', w = '1440', h = '900'] = process.argv.slice(2);
const W = +w, H = +h;
const REF = 'https://neutra.framer.website/' + route;
const LOC = 'http://localhost:3100/' + route;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: W, height: H } });
const settle = async (p) => {
  await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 300) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 40)); } window.scrollTo({ top: 0, behavior: 'instant' }); });
  await p.addStyleTag({ content: '#__framer-badge-container, .__framer-badge{display:none!important}' }).catch(() => {});
};
const [a, l] = [await ctx.newPage(), await ctx.newPage()];
await a.goto(REF, { waitUntil: 'networkidle' }); await l.goto(LOC, { waitUntil: 'networkidle' });
await settle(a); await settle(l);
const ha = await a.evaluate(() => document.documentElement.scrollHeight);
const hl = await l.evaluate(() => document.documentElement.scrollHeight);
const ow = await l.evaluate(() => document.documentElement.scrollWidth > innerWidth);
fs.mkdirSync('cmp', { recursive: true });
const name = (route || 'home').replace(/\//g, '_');
const comp = await b.newPage({ viewport: { width: W * 2 + 8, height: H } });
let i = 0;
for (let y = 0; y < Math.max(ha, hl); y += H) {
  const shots = [];
  for (const p of [a, l]) { await p.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), y); }
  await a.waitForTimeout(1400);
  for (const p of [a, l]) shots.push((await p.screenshot()).toString('base64'));
  await comp.setContent(`<body style="margin:0;display:flex;gap:8px;background:#f0f"><img src="data:image/png;base64,${shots[0]}"><img src="data:image/png;base64,${shots[1]}"></body>`);
  await comp.screenshot({ path: `cmp/${name}-${W}-${String(i++).padStart(2, '0')}.png` });
}
console.log(JSON.stringify({ route, W, refHeight: ha, localHeight: hl, overflowX: ow, frames: i }));
await b.close();
