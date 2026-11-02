// Run with: node scripts/faq-check.cjs [base URL]
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// 1. Static check against prerendered HTML if available
const htmlPath = path.join(__dirname, "..", ".next", "server", "app", "index.html");
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, "utf-8");
  console.log("Checking index.html for FAQ section requirements...");

  assert.ok(html.includes("Pertanyaan Umum"), "Badge 'Pertanyaan Umum' missing");
  assert.ok(html.includes("FAQ"), "Title 'FAQ' missing");
  assert.ok(
    html.includes("Temukan jawaban seputar layanan, harga, dan proses pembuatan website di LiniWeb"),
    "Description missing"
  );

  const expectedQuestions = [
    "Website apa saja yang bisa dibuat di LiniWeb?",
    "Berapa biaya pembuatan website?",
    "Berapa lama proses pembuatan website?",
    "Apakah website bisa diakses melalui HP?",
    "Apakah harga sudah termasuk domain dan hosting?",
    "Apakah saya bisa meminta revisi website?",
    "Bagaimana cara memesan website di LiniWeb?",
  ];

  for (const q of expectedQuestions) {
    assert.ok(html.includes(q), `Question missing: ${q}`);
  }

  assert.ok(html.includes("Hubungi Kami"), "CTA 'Hubungi Kami' missing");
  console.log("Static FAQ checks passed!");
}

// 2. Playwright check if base URL or local server is requested
const targetUrl = process.argv[2];
if (targetUrl) {
  const { chromium } = require("playwright");

  const expectedAnswers = [
    "LiniWeb menyediakan jasa pembuatan Landing Page, Company Profile, Toko Online (E-Commerce), hingga Website Custom. Setiap website dirancang sesuai kebutuhan, karakter, dan tujuan bisnis Anda.",
    "Harga pembuatan website mulai dari Rp1 juta untuk Landing Page, Rp1,5 juta untuk Company Profile, dan Rp2,5 juta untuk E-Commerce. Untuk website custom, harga disesuaikan dengan kebutuhan fitur dan kompleksitas proyek.",
    "Waktu pengerjaan bergantung pada jenis website, jumlah halaman, kompleksitas fitur, dan kesiapan materi. Estimasi pengerjaan akan diinformasikan setelah kebutuhan proyek dibahas.",
    "Tentu. Website dirancang responsif agar tampil nyaman di smartphone, tablet, maupun desktop. Optimasi SEO dasar juga dapat disesuaikan dengan paket dan kebutuhan website.",
    "Domain dan hosting akan disesuaikan dengan kebutuhan serta paket yang dipilih. Kami akan menjelaskan pilihan, biaya, dan layanan yang termasuk sebelum proyek dimulai.",
    "Bisa. Revisi dilakukan sesuai ruang lingkup dan kesepakatan proyek. Kebutuhan tambahan atau perubahan fitur di luar kesepakatan awal dapat didiskusikan terlebih dahulu.",
    "Mudah! Hubungi LiniWeb melalui WhatsApp dan ceritakan kebutuhan website Anda. Kami akan membantu menentukan solusi yang sesuai, mendiskusikan fitur, serta memberikan penawaran sebelum pengerjaan dimulai.",
  ];

  (async () => {
    const browser = await chromium.launch({ headless: true, args: ["--enable-unsafe-swiftshader"] });
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
      await page.goto(targetUrl, { waitUntil: "domcontentloaded" });
      const section = page.getByRole("region", { name: "FAQ" });
      const items = section.locator("details");
      assert.equal(await items.count(), 7);
      for (let i = 0; i < expectedAnswers.length; i++) {
        const item = items.nth(i);
        const summary = item.locator("summary");
        assert.equal(await item.evaluate((el) => el.open), false);
        await summary.click();
        assert.equal(await item.evaluate((el) => el.open), true);
        assert.equal(await item.locator("p").innerText(), expectedAnswers[i]);
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
      assert.equal(await section.getByRole("link", { name: "Hubungi Kami" }).getAttribute("href"), "/contact");
      await page.setViewportSize({ width: 390, height: 844 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      console.log("Interactive FAQ checks passed!");
    } finally {
      await browser.close();
    }
  })().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
