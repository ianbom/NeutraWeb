// Run with: node scripts/cases-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

const projects = [
  ["VYREN", ["E-Commerce", "Fashion"]],
  ["ATELIER", ["Company Profile", "Architecture", "Interior Design"]],
  ["GALERYA", ["Company Profile", "Furniture"]],
  ["NOIREL", ["Company Profile", "Interior Design"]],
  ["NOIRVA", ["Company Profile", "Architecture", "Interior Design"]],
  ["NOIRVA / Studio", ["Company Profile", "Architecture", "Interior Design"]],
  ["VANTRA", ["Company Profile", "Architecture", "Construction"]],
  ["NORTHFORM", ["E-Commerce", "Fashion", "Footwear"]],
  ["LIFETIME", ["Company Profile", "Interior Design", "Architecture"]],
  ["LIFTCO", ["Company Profile", "Heavy Equipment"]],
  ["SPIL", ["Company Profile", "Logistics", "Shipping"]],
  ["FOLVIA", ["E-Commerce", "Lifestyle"]],
];

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
    const base = process.argv[2] || "http://localhost:3100";
    await page.goto(base, { waitUntil: "networkidle" });
    const home = page.getByRole("region", { name: /Building Digital Excellence|Karya Digital/i });
    assert.equal(await home.locator("article").count(), 4);
    const badges = (card) => card.locator("h3 + div span").allTextContents();
    for (const [index, name] of ["VYREN", "ATELIER", "NOIRVA", "NOIREL"].entries()) {
      const tags = projects.find(([title]) => title === name)[1];
      assert.deepEqual(await badges(home.locator("article").nth(index)), tags);
    }
    assert.equal(await home.getByRole("searchbox").count(), 0);
    assert.equal(await home.getByRole("button", { name: "All" }).count(), 0);
    assert.equal(await page.getByRole("region", { name: "Testimonials" }).count(), 1);
    await page.goto(`${base}/cases`, { waitUntil: "networkidle" });
    const section = page.getByRole("region", { name: /Case Studies|Portofolio/i });
    const cards = section.locator("article");
    const names = () => cards.locator("h2, h3").allTextContents();
    await page.getByRole("searchbox", { name: "Search projects" }).waitFor();
    assert.deepEqual(await names(), projects.map(([name]) => name));
    for (const [index, [, tags]] of projects.entries()) {
      assert.ok(tags.length <= 3 && tags.length > 1);
      assert.deepEqual(await badges(cards.nth(index)), tags);
    }
    assert.equal(await section.getByRole("button", { name: "Situs Web", exact: true }).count(), 0);
    assert.equal(await cards.locator("img").count(), 12);
    assert.equal(await cards.first().locator('a[href="https://vyren-ecom.vercel.app/"]').count(), 1);
    const excluded = ["Heavy Equipment", "Logistics", "Shipping", "Lifestyle"];
    const categories = [...new Set(projects.flatMap(([, tags]) => tags))].filter((tag) => !excluded.includes(tag));
    assert.equal(categories.length, 8);
    assert.equal(await section.getByRole("group", { name: "Project categories" }).getByRole("button").count(), 9);
    for (const tag of excluded) assert.equal(await section.getByRole("button", { name: tag, exact: true }).count(), 0);
    for (const tag of categories) {
      const button = section.getByRole("button", { name: tag, exact: true });
      await button.click();
      assert.equal(await button.getAttribute("aria-pressed"), "true");
      assert.deepEqual(await names(), projects.filter(([, tags]) => tags.includes(tag)).map(([name]) => name));
    }
    const all = section.getByRole("button", { name: "All", exact: true });
    const search = section.getByRole("searchbox", { name: "Search projects" });
    await all.click();
    await search.fill("  VyReN  ");
    assert.deepEqual(await names(), ["VYREN"]);
    await search.fill("architecture");
    assert.deepEqual(await names(), projects.filter(([, tags]) => tags.includes("Architecture")).map(([name]) => name));
    await search.fill("e-com");
    assert.deepEqual(await names(), projects.filter(([name, tags]) => name.toLowerCase().includes("e-com") || tags.some((tag) => tag.toLowerCase().includes("e-com"))).map(([name]) => name));
    await section.getByRole("button", { name: "E-Commerce", exact: true }).click();
    await search.fill("north");
    assert.deepEqual(await names(), ["NORTHFORM"]);
    await search.fill("atelier");
    assert.equal(await cards.count(), 0);
    assert.equal(await section.getByText("No projects found").isVisible(), true);
    await search.fill("");
    await all.click();
    assert.equal(await cards.count(), 12);
    await page.keyboard.press("Tab");
    await search.focus();
    assert.equal(await search.evaluate((el) => el.matches(":focus-visible")), true);
    const ecommerce = section.getByRole("button", { name: "E-Commerce", exact: true });
    await ecommerce.focus();
    await page.keyboard.press("Enter");
    assert.equal(await ecommerce.getAttribute("aria-pressed"), "true");
    assert.deepEqual(await names(), projects.filter(([, tags]) => tags.includes("E-Commerce")).map(([name]) => name));
    await all.click();
    assert.equal(await page.getByRole("region", { name: "FAQ" }).count(), 1);
    assert.equal(await page.locator("footer").count(), 1);
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    console.log("Project list checks passed");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
