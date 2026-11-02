// Run with: node scripts/faq-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

const answers = [
  "Initial setup is quick and user-friendly, allowing immediate use.",
  "Various pricing plans are available to suit different budget needs.",
  "24/7 customer support is available via email, chat, and phone.",
  "Fully customizable to match your brand’s style and preferences.",
  "Full refunds provided within 30 days if not satisfied.",
  "Easy upgrades available for additional features and capabilities.",
];

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
    await page.goto(process.argv[2] || "http://localhost:3100", { waitUntil: "domcontentloaded" });
    const section = page.getByRole("region", { name: "FAQ" });
    const items = section.locator("details");
    assert.equal(await items.count(), 6);
    for (let i = 0; i < answers.length; i++) {
      const item = items.nth(i);
      const summary = item.locator("summary");
      assert.equal(await item.evaluate((el) => el.open), false);
      await summary.click();
      assert.equal(await item.evaluate (el => el.open), true);
      assert.equal(await item.locator("p").innerText(), answers[i]);
      await summary.click();
      assert.equal(await item.evaluate((el) => el.open), false);
    }
    const first = items.first().locator("summary");
    await page.keyboard.press("Tab");
    await first.focus();
    assert.equal(await first.evaluate((el) => el.matches(":focus-visible")), true);
    await page.keyboard.press("Enter");
    assert.equal(await items.first().evaluate((el) => el.open), true);
    await page.keyboard.press("Space");
    assert.equal(await items.first().evaluate((el) => el.open), false);
    assert.equal(await section.getByRole("link", { name: "Contact Us" }).getAttribute("href"), "/contact");
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    console.log("FAQ checks passed");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
