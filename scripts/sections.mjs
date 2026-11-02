// node scripts/sections.mjs <route> <width>: section top/height ref vs local (in DOM order)
import { chromium } from 'playwright';
const [route = '', w = '1440'] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 } });
const res = {};
for (const [k, u] of [['ref', 'https://neutra.framer.website/'], ['loc', 'http://localhost:3100/']]) {
  await p.goto(u + route, { waitUntil: 'networkidle' });
  res[k] = await p.evaluate(() => [...document.querySelectorAll('section, footer, main[data-framer-name]')].filter(s => !s.parentElement.closest('section') && !s.parentElement.closest('footer') && s.getBoundingClientRect().height > 2).map(s => { const r = s.getBoundingClientRect(); return [(s.dataset.framerName || s.tagName).slice(0, 14), Math.round(r.top + scrollY), Math.round(r.height)]; }));
}
if (process.env.SUMMARY) { const d = res.ref.map((a, i) => (res.loc[i] ? res.loc[i][2] - a[2] : 'X')); console.log(route, w, 'heights Δ:', d.join(' '), '| total', (res.loc.at(-1)?.[1] ?? 0) - (res.ref.at(-1)?.[1] ?? 0)); await b.close(); process.exit(0); }
const n = Math.max(res.ref.length, res.loc.length);
for (let i = 0; i < n; i++) { const a = res.ref[i] || ['', '', '']; const c = res.loc[i] || ['', '', '']; console.log(String(a[0]).padEnd(15), String(a[1]).padStart(6), String(a[2]).padStart(6), ' | ', String(c[0]).padEnd(10), String(c[1]).padStart(6), String(c[2]).padStart(6), c[2] && a[2] ? (c[2] - a[2] ? '  Δ' + (c[2] - a[2]) : '') : ''); }
await b.close();
