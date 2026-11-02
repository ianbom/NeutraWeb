// Run with: node scripts/pricing-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
    await page.goto(process.argv[2] || "http://localhost:3100", { waitUntil: "domcontentloaded" });
    const section = page.locator("section").filter({ hasText: "Simple Pricing" });
    const headings = section.locator("h3");
    assert.deepEqual(await headings.allTextContents(), ["Part-time", "Full-time", "Custom", "Enterprise"]);
    for (const [name, price] of [["Part-time", "$2450"], ["Full-time", "$3950"], ["Custom", "$5999"]]) {
      const card = section.getByRole("heading", { name, exact: true }).locator("../../..");
      assert.equal(await card.getByText(price, { exact: true }).count(), 1);
      assert.equal(await card.getByRole("link", { name: "Get Started" }).getAttribute("href"), "https://stylokit.lemonsqueezy.com/buy/e842c934-9e86-4005-9608-8a025089e6a4");
    }
    const enterprise = section.getByRole("heading", { name: "Enterprise", exact: true }).locator("../../..");
    assert.equal(await enterprise.getByText("Contact us", { exact: true }).count(), 1);
    assert.equal(await enterprise.getByText("/ month", { exact: true }).count(), 0);
    const contact = enterprise.getByRole("link", { name: "Contact Us" });
    assert.equal(await contact.getAttribute("href"), "/contact");
    for (const width of [1440, 900, 390]) {
      await page.setViewportSize({ width, height: 900 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    }
    await contact.focus();
    await page.keyboard.press("Enter");
    await page.waitForURL("**/contact");
    console.log("Pricing checks passed");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
