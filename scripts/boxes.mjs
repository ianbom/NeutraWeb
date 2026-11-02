// node scripts/boxes.mjs <route> <width> <css selector> : rects of matched elements, ref vs local
import { chromium } from 'playwright';
const [route = '', w = '1440', sel = 'a'] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 } });
for (const [k, u] of [['ref', 'https://neutra.framer.website/'], ['loc', 'http://localhost:3100/']]) {
  await p.goto(u + route, { waitUntil: 'networkidle' });
  await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 300) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 30)); } window.scrollTo({ top: 0, behavior: 'instant' }); await new Promise(r => setTimeout(r, 1500)); });
  const r = await p.evaluate((sel) => [...document.querySelectorAll(sel)].slice(0, 8).map(e => { const r = e.getBoundingClientRect(); return `${Math.round(r.left)},${Math.round(r.top + scrollY)} ${Math.round(r.width)}x${Math.round(r.height)}`; }).join(' | '), sel);
  console.log(k, r);
}
await b.close();
