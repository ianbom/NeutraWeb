// Run with: node scripts/articles-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
    const base = process.argv[2] || "http://localhost:3001";

    console.log("Navigating to", `${base}/article`);
    await page.goto(`${base}/article`, { waitUntil: "networkidle" });

    // Check title & headings
    const title = await page.title();
    assert.match(title, /Artikel|Website/i);

    const h1 = await page.locator("h1").first().textContent();
    assert.match(h1, /Wawasan & Panduan Seputar Pembuatan Website/i);

    // Check article cards count: exactly 12
    const cards = page.locator("main a[href^='/article/']");
    const count = await cards.count();
    console.log("Total article cards on /article:", count);
    assert.equal(count, 12, "Must have exactly 12 articles");

    // Check images
    const images = cards.locator("img");
    const imgCount = await images.count();
    console.log("Total images in cards:", imgCount);
    assert(imgCount >= 12, "Each card must have an image");

    // Check read time text in Indonesian
    const readTimes = await page.locator("text=/± \\d+ menit baca/").count();
    console.log("Cards with Indonesian read time format:", readTimes);
    assert.equal(readTimes, 12, "All 12 cards should show Indonesian read time");

    // Collect all article URLs
    const urls = [];
    for (let i = 0; i < count; i++) {
      const href = await cards.nth(i).getAttribute("href");
      assert(href && href.startsWith("/article/"));
      urls.push(href);
    }

    // Verify detail page for first, middle, and last articles
    for (const targetUrl of [urls[0], urls[5], urls[11]]) {
      console.log("Testing detail page:", targetUrl);
      await page.goto(`${base}${targetUrl}`, { waitUntil: "networkidle" });

      const detailH1 = await page.locator("main h1").first().textContent();
      assert(detailH1 && detailH1.length > 5);

      const backLink = page.locator("a", { hasText: "Semua Artikel" });
      assert.equal(await backLink.count(), 1, "Must have 'Semua Artikel' back link");

      // Verify recommendations (Latest Articles) has 3 items
      const recCards = page.locator("section:has-text('Artikel Terbaru') a[href^='/article/']");
      const recCount = await recCards.count();
      assert.equal(recCount, 3, "Detail page must show 3 recommended articles");

      // Recommendations must not include current article
      const recHrefs = await recCards.evaluateAll((els) => els.map((el) => el.getAttribute("href")));
      assert(!recHrefs.includes(targetUrl), "Recommendations must exclude active article");
    }

    // Verify 404 on nonexistent slug
    const res404 = await page.goto(`${base}/article/non-existent-article-slug-xyz`, { waitUntil: "networkidle" });
    assert.equal(res404.status(), 404, "Invalid slug must return 404");

    // Verify mobile responsive
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${base}/article`, { waitUntil: "networkidle" });
    const noOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
    assert(noOverflow, "No horizontal overflow on mobile");

    console.log("All article checks passed successfully!");
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error("Test failed:", err);
  process.exitCode = 1;
});
