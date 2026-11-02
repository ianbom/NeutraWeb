import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://neutra.framer.website/';
const b = await chromium.launch(); const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
const out = {};
const dumpEl = (sel) => page.evaluate((sel) => { const e = document.querySelector(sel); if (!e) return null; const walk = (el, d) => { const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); let s = '  '.repeat(d) + el.tagName.toLowerCase() + '[' + (el.dataset.framerName || '') + '] ' + Math.round(r.x) + ',' + Math.round(r.y) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ' bg=' + cs.backgroundColor + ' rad=' + cs.borderRadius + ' pad=' + cs.padding + ' op=' + cs.opacity + ' tf=' + cs.transform + ' sh=' + cs.boxShadow + ' bd=' + cs.borderWidth + ' ' + cs.borderColor + ' bf=' + cs.backdropFilter + ' color=' + cs.color + (el.children.length ? '' : ' "' + el.textContent.trim().slice(0, 40) + '"'); return [s, ...[...el.children].filter(c => c.tagName !== 'svg').flatMap(c => walk(c, d + 1))]; }; return walk(e, 0).join('\n'); }, sel);
await page.goto(base); await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo({ top: 1200, behavior: 'instant' })); await page.waitForTimeout(1500);
out.navScrolled = await dumpEl('nav[data-framer-name="Navigation"]');
await page.screenshot({ path: 'ref/state-nav-scrolled.png', clip: { x: 380, y: 0, width: 680, height: 90 } });
// nav transition timing
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' })); await page.waitForTimeout(1500);
out.navTiming = await page.evaluate(async () => { const c = document.querySelector('nav[data-framer-name="Navigation"] [data-framer-name="Container"]'); const res = []; let th = null; for (let y = 0; y < 300; y += 5) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 50)); if (getComputedStyle(c).backgroundColor !== 'rgba(26, 26, 26, 0)') { th = y; break; } } const t0 = performance.now(); while (performance.now() - t0 < 900) { await new Promise(r => requestAnimationFrame(r)); res.push(Math.round(performance.now() - t0) + ' ' + getComputedStyle(c).backgroundColor + ' w' + Math.round(c.getBoundingClientRect().width) + ' x' + Math.round(c.getBoundingClientRect().x)); } return { th, res: res.filter((_, i) => i % 4 == 0) }; });
// card hover
await page.evaluate(() => window.scrollTo({ top: 2900, behavior: 'instant' })); await page.waitForTimeout(1500);
const card = page.locator('a[href="https://codify.framer.website/"]').first();
out.caseBefore = await dumpEl('a[href="https://codify.framer.website/"]');
await card.hover(); await page.waitForTimeout(900);
out.caseAfter = await dumpEl('a[href="https://codify.framer.website/"]');
await card.screenshot({ path: 'ref/state-case-hover.png' });
// button hover sample timing on Get Started
await page.evaluate(() => window.scrollTo({ top: 5600, behavior: 'instant' })); await page.waitForTimeout(1500);
const gs = page.locator('a[href*="lemonsqueezy"]').nth(1);
await gs.hover();
out.btnRoll = await page.evaluate(async () => { const l = document.querySelector('a[data-framer-name="Primary"] p') || document.querySelector('a[href*="lemonsqueezy"] p'); const s = []; const t0 = performance.now(); while (performance.now() - t0 < 700) { await new Promise(r => requestAnimationFrame(r)); s.push(Math.round(performance.now() - t0) + ' y' + l.getBoundingClientRect().y.toFixed(1)); } return s.filter((_, i) => i % 3 == 0); });
out.btnAfter = await dumpEl('a[href*="lemonsqueezy"]');
// nav hover dot
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' })); await page.waitForTimeout(1200);
await page.locator('a[href="./about"]').first().hover(); await page.waitForTimeout(800);
out.navHover = await dumpEl('a[href="./about"]');
await page.screenshot({ path: 'ref/state-nav-hover.png', clip: { x: 740, y: 10, width: 420, height: 60 } });
// footer link hover
// article card hover
await page.goto(base + 'article'); await page.waitForTimeout(1500);
const ac = page.locator('a[href="./article/the-ux-revolution-shaping-digital-experiences"]').first();
await ac.scrollIntoViewIfNeeded(); await page.waitForTimeout(1500);
out.artBefore = await dumpEl('a[href="./article/the-ux-revolution-shaping-digital-experiences"]');
await ac.hover(); await page.waitForTimeout(900);
out.artAfter = await dumpEl('a[href="./article/the-ux-revolution-shaping-digital-experiences"]');
// team hover
await page.goto(base + 'about'); await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo({ top: 1700, behavior: 'instant' })); await page.waitForTimeout(1500);
const tm = page.locator('[data-framer-name="Team"] [data-framer-name="Default"]').first();
out.teamBefore = await page.evaluate(() => { const e = document.querySelector('[data-framer-name="Team"] [data-framer-name="Default"]'); return e.outerHTML.length; });
await tm.hover(); await page.waitForTimeout(900);
await tm.screenshot({ path: 'ref/state-team-hover.png' });
out.teamAfter = await dumpEl('[data-framer-name="Team"] [data-framer-name="Default"]');
// mobile menu
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base); await page.waitForTimeout(1500);
await page.locator('button[data-framer-name="Open md"]').click(); await page.waitForTimeout(1200);
await page.screenshot({ path: 'ref/state-mobile-menu.png' });
out.mobileMenu = await dumpEl('nav[data-framer-name="Navigation"]');
// tablet nav
await page.setViewportSize({ width: 1024, height: 900 }); await page.goto(base); await page.waitForTimeout(1500);
await page.screenshot({ path: 'ref/state-1024.png' });
await page.setViewportSize({ width: 768, height: 1024 }); await page.goto(base); await page.waitForTimeout(1500);
await page.screenshot({ path: 'ref/state-768.png', fullPage: true });
fs.writeFileSync('ref/states.txt', Object.entries(out).map(([k, v]) => '#### ' + k + '\n' + (typeof v === 'string' ? v : JSON.stringify(v, null, 1))).join('\n\n'));
await b.close();
