// Run with: node scripts/about-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
    await page.goto(`${process.argv[2] || "http://localhost:3100"}/about`, { waitUntil: "domcontentloaded" });
    const intro = page.getByRole("region", { name: /About Neutra|About LiniWeb/i });
    assert.equal(await intro.getByRole("heading", { name: /Neutra|LiniWeb/i, exact: true }).count(), 1);
    for (const text of ["Clarity", "Craft", "Impact"]) assert.equal(await intro.getByRole("heading", { name: text, exact: true }).count(), 1);
    for (const text of ["Not sure how to choose a vendor?", "Insights from Our Director", "700+", "40K", "10K+", "99K+"]) assert.equal(await page.getByText(text, { exact: true }).count(), 0);
    const team = page.locator("section").filter({ has: page.getByRole("heading", { name: /Meet the (Minds|Team)? ?Behind (Neutra|LiniWeb)/i }) });
    assert.equal(await team.locator("h3").count(), 4);
    for (const role of ["Software Engineer", "QA Engineer", "UI/UX Designer", "Cloud Engineer"]) assert.equal(await team.getByText(role, { exact: true }).count(), 1);
    assert.equal(await team.locator('img[src*="team-stock-"]').count(), 4);
    assert.equal(await team.getByText("Names and photos are placeholders.", { exact: false }).count(), 1);
    assert.equal(await page.locator("footer").count(), 1);
    const faq = page.getByRole("region", { name: "FAQ" });
    const first = faq.locator("details").first();
    await first.locator("summary").focus();
    await page.keyboard.press("Enter");
    assert.equal(await first.evaluate((el) => el.open), true);
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    console.log("About checks passed");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
