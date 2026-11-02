// node scripts/positions.mjs <route> <width> "text1|text2|..."  -> settled page-Y of elements whose text starts with each needle
import { chromium } from 'playwright';
const [route = '', w = '1440', needles = ''] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 } });
const out = {};
for (const [k, base] of [['ref', 'https://neutra.framer.website/'], ['loc', 'http://localhost:3100/']]) {
  await p.goto(base + route, { waitUntil: 'networkidle' });
  const res = [];
  for (const n of needles.split('|')) {
    const y = await p.evaluate(async (n) => {
      const norm = (s) => s.replace(/\s+/g, ' ').trim();
      const el = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,span,blockquote,figure,img')].find(e => norm(e.getAttribute('aria-label') || e.textContent || e.getAttribute('src') || '').startsWith(n));
      if (!el) return null;
      const r0 = el.getBoundingClientRect(); window.scrollTo({ top: r0.top + scrollY - 300, behavior: 'instant' });
      await new Promise(r => setTimeout(r, 1800));
      const r = el.getBoundingClientRect();
      return `${Math.round(r.top + scrollY)} x${Math.round(r.left)} ${Math.round(r.width)}x${Math.round(r.height)}`;
    }, n);
    res.push(n.slice(0, 18) + ' ' + y);
  }
  out[k] = res;
}
for (let i = 0; i < out.ref.length; i++) console.log((out.ref[i] || '').padEnd(48), '|', out.loc[i]);
await b.close();
