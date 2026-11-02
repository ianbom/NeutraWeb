// Run with: node scripts/testimonials-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(process.argv[2] || "http://localhost:3100", { waitUntil: "domcontentloaded" });
    const section = page.getByRole("region", { name: "Testimonials" });
    const previous = section.getByRole("button", { name: "Previous testimonial" });
    const next = section.getByRole("button", { name: "Next testimonial" });
    const progress = section.getByRole("progressbar", { name: "Testimonial position" });
    await section.scrollIntoViewIfNeeded();
    await previous.waitFor();
    await page.waitForFunction(() => {
      const track = document.querySelector('[data-testid="testimonial-track"]');
      return track.scrollWidth > track.clientWidth && !document.querySelector('[aria-label="Next testimonial"]').disabled;
    });
    assert.equal(await previous.isDisabled(), true);
    await next.click();
    await page.waitForFunction(() => document.querySelector('[data-testid="testimonial-track"]').scrollLeft > 0);
    await page.waitForFunction(() => !document.querySelector('[aria-label="Previous testimonial"]').disabled);
    assert.ok(Number(await progress.getAttribute("aria-valuenow")) > 0);
    await page.waitForFunction(() => document.querySelector('[aria-label="Next testimonial"]').disabled);
    await previous.click();
    await page.waitForFunction(() => !document.querySelector('[aria-label="Next testimonial"]').disabled);
    await page.waitForFunction(() => document.querySelector('[aria-label="Previous testimonial"]').disabled);
    const box = await section.getByTestId("testimonial-track").boundingBox();
    await page.mouse.move(box.x + box.width * 0.7, box.y + 100);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.2, box.y + 100, { steps: 10 });
    await page.mouse.up();
    await page.waitForFunction(() => document.querySelector('[data-testid="testimonial-track"]').scrollLeft > 0);
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await next.isVisible(), false);
    assert.equal(await section.locator("blockquote:visible").count(), 3);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    console.log("Testimonial layout checks passed");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
