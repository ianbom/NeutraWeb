// One-off: pull reference assets locally. ponytail: originals used for local dev only; swap before public deploy.
import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://neutra.framer.website/';
const routes = ['', 'about', 'cases', 'article', 'contact', 'legal/privacy-policy', 'legal/licensing', 'legal/terms-of-use'];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(base + 'article');
const slugs = await page.$$eval('a[href^="./article/"]', as => [...new Set(as.map(a => a.getAttribute('href').replace('./', '')))]);
routes.push(...slugs);
const imgs = new Set(); const svgs = {};
for (const r of routes) {
  await page.goto(base + r);
  await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); } });
  const found = await page.evaluate(() => {
    const im = [...document.querySelectorAll('img')].map(i => i.src.split('?')[0]);
    for (const s of document.querySelectorAll('[style*="background-image"]')) { const m = s.style.backgroundImage.match(/url\("?([^")]+)/); if (m) im.push(m[1].split('?')[0]); }
    const sv = {};
    document.querySelectorAll('svg').forEach(s => {
      const c = s.cloneNode(true);
      c.querySelectorAll('use').forEach(u => { const id = (u.getAttribute('href') || u.getAttribute('xlink:href') || '').slice(1); const ref = id && document.getElementById(id); if (ref) { const g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); g.innerHTML = ref.innerHTML; if (ref.getAttribute('viewBox') && !c.getAttribute('viewBox')) c.setAttribute('viewBox', ref.getAttribute('viewBox')); u.replaceWith(g); } });
      let n = s, ctx = []; while (n && ctx.length < 3) { if (n.dataset && n.dataset.framerName) ctx.push(n.dataset.framerName); n = n.parentElement; }
      const r = s.getBoundingClientRect(); const key = ctx.join('<') + ' ' + Math.round(r.width) + 'x' + Math.round(r.height);
      const html = c.outerHTML; if (html.length > 60 && !Object.values(sv).includes(html)) sv[key + ' #' + Object.keys(sv).length] = html;
    });
    return { im, sv };
  });
  found.im.forEach(u => imgs.add(u));
  for (const [k, v] of Object.entries(found.sv)) if (!Object.values(svgs).includes(v)) svgs[(r || 'home') + ': ' + k] = v;
}
fs.mkdirSync('public/images', { recursive: true });
let n = 0;
for (const u of imgs) {
  if (!u.startsWith('http')) continue;
  const name = u.split('/').pop(); const dest = 'public/images/' + name;
  if (fs.existsSync(dest)) continue;
  const res = await fetch(u); if (!res.ok) { console.error('fail', u); continue; }
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer())); n++;
}
fs.writeFileSync('ref/svgs.json', JSON.stringify(svgs, null, 1));
fs.writeFileSync('ref/slugs.json', JSON.stringify(slugs));
console.log('images', imgs.size, 'downloaded', n, 'svgs', Object.keys(svgs).length, 'slugs', slugs.length);
await browser.close();
