// Captures matched interaction states ref vs local into cmp/motion-*.png
import { chromium } from 'playwright';
const b = await chromium.launch();
const pair = async (name, w, h, fn, clip) => {
  const shots = [];
  for (const base of ['https://neutra.framer.website/', 'http://localhost:3100/']) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    const el = await fn(p, base);
    shots.push((await (el && el.screenshot ? el.screenshot() : p.screenshot(clip ? { clip } : {}))).toString('base64'));
    await p.close();
  }
  const c = await b.newPage({ viewport: { width: (clip?.width ?? w) * 2 + 8, height: clip?.height ?? h } });
  await c.setContent(`<body style="margin:0;display:flex;gap:8px;background:#f0f"><img src="data:image/png;base64,${shots[0]}"><img src="data:image/png;base64,${shots[1]}"></body>`);
  await c.screenshot({ path: `cmp/motion-${name}.png` }); await c.close();
};
const go = async (p, url, y = 0) => { await p.goto(url, { waitUntil: 'networkidle' }); await p.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), y); await p.waitForTimeout(1600); };
await pair('nav-pill', 1440, 200, (p, u) => go(p, u, 1200), { x: 380, y: 0, width: 680, height: 90 });
await pair('nav-hover', 1440, 200, async (p, u) => { await go(p, u); await p.locator('nav a[href$="about"]').first().hover(); await p.waitForTimeout(700); }, { x: 740, y: 10, width: 420, height: 60 });
await pair('btn-hover', 1440, 900, async (p, u) => { await go(p, u); await p.locator('a[href$="contact"]').filter({ hasText: 'Schedule' }).first().hover(); await p.waitForTimeout(250); }, { x: 190, y: 510, width: 220, height: 80 });
await pair('case-hover', 1440, 900, async (p, u) => { await go(p, u, 2900); const l = p.locator('a[href*="codify.framer"]').first(); await l.hover(); await p.waitForTimeout(900); return l; }, { width: 564, height: 480 });
await pair('article-hover', 1440, 900, async (p, u) => { await go(p, u + 'article', 1250); const l = p.locator('a[href*="the-ux-revolution"]').first(); await l.hover(); await p.waitForTimeout(900); return l.locator('..'); }, { width: 368, height: 455 });
await pair('footer-hover', 1440, 900, async (p, u) => { await go(p, u, 99999); await p.locator('footer a[href$="about"]').first().hover(); await p.locator('footer a[href*="x.com"]').first().hover(); await p.waitForTimeout(600); }, { x: 130, y: 380, width: 1180, height: 520 });
await pair('mobile-menu', 390, 844, async (p, u) => { await go(p, u); await p.locator('nav button').first().click(); await p.waitForTimeout(1000); });
await pair('statement-mid', 1440, 900, async (p, u) => { await go(p, u, 1300); await p.evaluate(() => window.scrollTo({ top: 1900, behavior: 'instant' })); await p.waitForTimeout(900); });
await pair('reveal-mid', 1440, 900, async (p, u) => { await go(p, u, 400); await p.evaluate(() => window.scrollTo({ top: 1200, behavior: 'instant' })); await p.waitForTimeout(200); });
await b.close();
console.log('ok');
