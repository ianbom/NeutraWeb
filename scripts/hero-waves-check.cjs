// Run with: node scripts/hero-waves-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
    await page.addInitScript(() => {
      window.waveDraws = 0;
      const draw = WebGLRenderingContext.prototype.drawArrays;
      WebGLRenderingContext.prototype.drawArrays = function (...args) { window.waveDraws++; return draw.apply(this, args); };
    });
    const url = process.argv[2] || "http://localhost:3100";
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const canvas = page.locator("main canvas");
    await canvas.waitFor();
    await page.waitForFunction(() => window.waveDraws > 2);
    const count = () => page.evaluate(() => window.waveDraws);
    let before = await count();
    await page.waitForTimeout(300);
    assert.ok(await count() > before, "waves animate");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForTimeout(200);
    before = await count();
    await page.waitForTimeout(300);
    assert.equal(await count(), before, "reduced motion stops frames");
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.waitForTimeout(250);
    before = await count();
    await page.waitForTimeout(300);
    assert.ok(await count() > before, "animation resumes");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    before = await count();
    await page.waitForTimeout(300);
    assert.equal(await count(), before, "offscreen animation stops");
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await canvas.evaluate((element) => element.dispatchEvent(new Event("webglcontextlost")));
    assert.equal(await canvas.evaluate((element) => getComputedStyle(element).opacity), "0", "context loss shows fallback");
    await page.goto(`${url}/about`, { waitUntil: "domcontentloaded" });
    assert.equal(await page.locator("main:visible canvas").count(), 0, "canvas unmounts on navigation");

    const fallback = await browser.newPage();
    await fallback.addInitScript(() => {
      const getContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, ...args) {
        return type === "webgl" ? null : getContext.call(this, type, ...args);
      };
    });
    await fallback.goto(url, { waitUntil: "domcontentloaded" });
    await fallback.locator("main canvas").waitFor();
    assert.equal(await fallback.locator("main canvas").evaluate((element) => getComputedStyle(element).opacity), "0", "missing WebGL shows fallback");
    console.log("Hero waves lifecycle checks passed");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
