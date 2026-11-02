// Height/overflow/console/broken-image sweep: ref vs local for every route at each width.
import { chromium } from 'playwright';
import fs from 'node:fs';
const slugs = JSON.parse(fs.readFileSync('ref/slugs.json'));
const routes = ['', 'about', 'cases', 'article', 'contact', 'legal/privacy-policy', 'legal/licensing', 'legal/terms-of-use', ...slugs];
const widths = (process.argv[2] || '1440,1280,1024,810,768,430,390,375').split(',').map(Number);
const b = await chromium.launch();
const bad = [];
for (const w of widths) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
  const p = await ctx.newPage(); const errs = [];
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0, 140)); });
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message.slice(0, 140)));
  const line = [];
  for (const r of routes) {
    const H = {};
    for (const [k, u] of [['ref', 'https://neutra.framer.website/'], ['loc', 'http://localhost:3100/']]) {
      if (k === 'ref') p.removeAllListeners('console');
      await p.goto(u + r, { waitUntil: 'networkidle' });
      H[k] = await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 25)); } await new Promise(r => setTimeout(r, 400)); return { h: document.documentElement.scrollHeight, ox: document.documentElement.scrollWidth - innerWidth, broken: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src.slice(-40)) }; });
      if (k === 'ref') { p.on('console', m => { if (m.type() === 'error') errs.push(r + ': ' + m.text().slice(0, 140)); }); }
    }
    const d = H.loc.h - H.ref.h;
    line.push(`${(r || 'home').slice(0, 22)}:${d}${H.loc.ox > 0 ? ' OVERFLOW' + H.loc.ox : ''}${H.loc.broken.length ? ' BROKEN' + H.loc.broken.length : ''}`);
    if (Math.abs(d) > 4 || H.loc.ox > 0 || H.loc.broken.length) bad.push(`${w} ${r || 'home'} Δ${d} ox${H.loc.ox} broken${H.loc.broken.join(',')}`);
  }
  console.log(w, line.join(' | '));
  if (errs.length) console.log('  console errors:', [...new Set(errs)].slice(0, 5));
  await ctx.close();
}
console.log('ISSUES', bad.length ? '\n' + bad.join('\n') : 'none');
await b.close();
