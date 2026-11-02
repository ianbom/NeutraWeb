import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://neutra.framer.website/';
const b = await chromium.launch(); const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
const out = {};
await page.goto(base); await page.waitForTimeout(1500);
// statement: find trigger + per-char timeline
out.stmt = await page.evaluate(async () => {
  const h2 = document.querySelector('section[data-framer-name="About"] h2');
  const C = () => [...document.querySelector('section[data-framer-name="About"] h2').querySelectorAll('span span')]; const chars = C();
  const s4 = document.querySelector('[data-framer-name="Shape 4"]'), s5 = document.querySelector('[data-framer-name="Shape 5"]');
  window.scrollTo({ top: 1200, behavior: 'instant' }); await new Promise(r => setTimeout(r, 1500));
  const init = chars.slice(0, 3).map(c => c.style.cssText);
  let trig = null;
  for (let y = 1200; y < 2400; y += 10) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 60)); if (C()[0] && +getComputedStyle(C()[0]).opacity > 0.02) { trig = { y, h2Top: h2.getBoundingClientRect().top }; break; } }
  const t0 = performance.now(); const tl = [];
  while (performance.now() - t0 < 3500) { await new Promise(r => setTimeout(r, 100)); { const c = C(); tl.push(Math.round(performance.now() - t0) + ' ' + [0, 10, 30, 60, 90, 999].map(i => Math.min(i, c.length - 1)).filter(i => i >= 0).map(i => (+getComputedStyle(c[i]).opacity).toFixed(2) + '/' + getComputedStyle(c[i]).filter + '/' + c[i].style.transform).join(' | ')); } }
  const sh = [];
  for (const y of [1800, 2000, 2200, 2400]) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 800)); sh.push(y + ' s4 ' + s4.style.transform + ' s5 ' + s5.style.transform + ' s4top ' + Math.round(s4.getBoundingClientRect().top)); }
  window.scrollTo({ top: 0, behavior: 'instant' }); await new Promise(r => setTimeout(r, 1000));
  const after = C().length + ' ' + (C()[0] ? getComputedStyle(C()[0]).opacity : 'none');
  return { n: chars.length, init, trig, tl, sh, replayResetOpacity: after };
});
// badge
out.badge = await page.evaluate(() => { const a = [...document.querySelectorAll('a')].find(a => a.textContent.includes('Made in Framer') || (a.href && a.href.includes('framer.com') && a.getBoundingClientRect().y > 700)); if (!a) return 'none'; const host = a.closest('#__framer-badge-container') || a; const w = (el, d) => { const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); return ['  '.repeat(d) + el.tagName + ' ' + el.id + ' ' + Math.round(r.x) + ',' + Math.round(r.y) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ' bg=' + cs.backgroundColor + ' rad=' + cs.borderRadius + ' sh=' + cs.boxShadow + ' pad=' + cs.padding + ' font=' + cs.fontFamily.slice(0, 30) + ' ' + cs.fontSize + ' ' + cs.fontWeight + ' ' + cs.color + ' pos=' + cs.position + ' right=' + cs.right + ' bottom=' + cs.bottom + (el.children.length ? '' : ' "' + el.textContent.trim() + '"'), ...[...el.children].flatMap(c => w(c, d + 1))]; }; return w(host.parentElement, 0).join('\n') + '\nHREF ' + a.href + '\nSVG ' + (a.querySelector('svg')?.outerHTML.slice(0, 600)); });
out.popup = await page.evaluate(() => { const s = document.querySelector('[data-framer-name="Show"]'); if (!s) return 'gone'; const p = s.parentElement; const cs = getComputedStyle(p); return 'pos ' + cs.position + ' right ' + cs.right + ' bottom ' + cs.bottom + ' ' + JSON.stringify(p.getBoundingClientRect()) + ' innerW ' + innerWidth + ' clientW ' + document.documentElement.clientWidth; });
// popup hover
await page.hover('[data-framer-name="Show"]').catch(()=>{}); await page.waitForTimeout(800);
out.popupHover = await page.evaluate(() => { const s = document.querySelector('[data-framer-name="Show"]'); if (!s) return 'gone'; return [...s.querySelectorAll('*')].map(e => (e.dataset.framerName || e.tagName) + ' op=' + getComputedStyle(e).opacity + ' tf=' + getComputedStyle(e).transform).join('\n'); });
await page.screenshot({ path: 'ref/state-popup-hover.png', clip: { x: 1240, y: 700, width: 200, height: 200 } });
// team hover
await page.goto(base + 'about'); await page.waitForTimeout(1200);
await page.evaluate(() => window.scrollTo({ top: 1700, behavior: 'instant' })); await page.waitForTimeout(1500);
const fig = page.locator('figure[data-framer-name="Avatar"]').first();
const before = await fig.evaluate(e => { const i = e.querySelector('img'); return getComputedStyle(e).transform + ' ' + JSON.stringify(i.getBoundingClientRect()) + ' ' + getComputedStyle(i).filter; });
await fig.hover(); await page.waitForTimeout(900);
const after = await fig.evaluate(e => { const i = e.querySelector('img'); return getComputedStyle(e).transform + ' ' + JSON.stringify(i.getBoundingClientRect()) + ' ' + getComputedStyle(i).filter; });
out.team = { before, after };
// footer link hover, social hover
await page.goto(base); await page.waitForTimeout(1000);
await page.evaluate(() => window.scrollTo({ top: 99999, behavior: 'instant' })); await page.waitForTimeout(1500);
const fl = page.locator('footer a[href="./about"]').first();
const fb = await fl.evaluate(e => getComputedStyle(e).color + ' ' + getComputedStyle(e).textDecorationLine + ' op' + getComputedStyle(e).opacity);
await fl.hover(); await page.waitForTimeout(600);
const fa = await fl.evaluate(e => getComputedStyle(e).color + ' ' + getComputedStyle(e).textDecorationLine + ' op' + getComputedStyle(e).opacity);
const so = page.locator('footer a[href*="x.com"]').first();
const sb = await so.evaluate(e => e.querySelector('svg') ? getComputedStyle(e.querySelector('svg')).color + getComputedStyle(e.querySelector('svg')).fill : '');
await so.hover(); await page.waitForTimeout(600);
const sa = await so.evaluate(e => e.querySelector('svg') ? getComputedStyle(e.querySelector('svg')).color + getComputedStyle(e.querySelector('svg')).fill : '');
out.footer = { fb, fa, sb, sa };
fs.writeFileSync('ref/states2.txt', JSON.stringify(out, null, 1));
await b.close();
