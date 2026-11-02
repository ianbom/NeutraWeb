// Run with: node scripts/pricing-check.cjs
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS executable */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const htmlPath = path.join(__dirname, "..", ".next", "server", "app", "index.html");
const html = fs.readFileSync(htmlPath, "utf-8");

console.log("Checking index.html for pricing section requirements...");

// 1. Section Header & Badge
assert.ok(html.includes("Paket Website"), "Header badge 'Paket Website' missing");
assert.ok(html.includes("Pilih Paket Website Sesuai Kebutuhan"), "Heading 'Pilih Paket Website Sesuai Kebutuhan' missing");
assert.ok(
  html.includes("Mulai dari landing page hingga toko online, temukan solusi website profesional"),
  "Section description missing"
);

// 2. Package Names
assert.ok(html.includes("Landing Page"), "Card 1 'Landing Page' missing");
assert.ok(html.includes("Company Profile"), "Card 2 'Company Profile' missing");
assert.ok(html.includes("E-Commerce"), "Card 3 'E-Commerce' missing");
assert.ok(html.includes("Custom Website"), "Card 4 'Custom Website' missing");

// 3. Badge "Paling Diminati" on Company Profile
assert.ok(html.includes("Paling Diminati"), "Badge 'Paling Diminati' missing");

// 4. Price & Format
assert.ok(html.includes("Rp1.000.000"), "Price Rp1.000.000 missing");
assert.ok(html.includes("Rp1.500.000"), "Price Rp1.500.000 missing");
assert.ok(html.includes("Rp2.500.000"), "Price Rp2.500.000 missing");
assert.ok(html.includes("Harga Sesuai Kebutuhan"), "Price 'Harga Sesuai Kebutuhan' missing");
assert.ok(
  html.includes("Penawaran disesuaikan dengan fitur dan kompleksitas proyek."),
  "Price note missing"
);

// 5. No subscription terms in pricing section
assert.ok(!html.includes("/ month"), "Subscription text '/ month' still exists");
assert.ok(!html.includes("/month"), "Subscription text '/month' still exists");
assert.ok(!html.includes("/ bulan"), "Subscription text '/ bulan' still exists");
assert.ok(!html.includes("Unlimited request"), "Subscription text 'Unlimited request' still exists");
assert.ok(!html.includes("Pause / cancel anytime"), "Subscription text 'Pause / cancel anytime' still exists");

// 6. Selected features from all 4 cards
const expectedFeatures = [
  // Card 1
  "1 halaman landing page",
  "Hero section dengan CTA yang jelas",
  "Integrasi tombol WhatsApp",
  // Card 2
  "Hingga 5 halaman website",
  "Halaman Beranda",
  "Integrasi Google Maps",
  // Card 3
  "Website toko online responsif",
  "Checkout melalui formulir atau WhatsApp",
  "Informasi pembayaran transfer manual",
  // Card 4
  "Sistem booking atau reservasi",
  "Dashboard admin custom",
  "Konsultasi kebutuhan proyek",
];

for (const feature of expectedFeatures) {
  assert.ok(html.includes(feature), `Expected feature missing: ${feature}`);
}

// 7. WhatsApp CTAs with phone and prefilled text
const waNumber = "6285151994724";
assert.ok(html.includes(`https://wa.me/${waNumber}`), "WhatsApp base URL missing");

const expectedMessages = [
  "Halo LiniWeb, saya tertarik dengan paket Landing Page mulai Rp1.000.000. Saya ingin konsultasi mengenai pembuatan website.",
  "Halo LiniWeb, saya tertarik dengan paket Company Profile mulai Rp1.500.000. Saya ingin mengetahui detail layanan dan proses pengerjaannya.",
  "Halo LiniWeb, saya tertarik dengan paket E-Commerce mulai Rp2.500.000. Saya ingin konsultasi mengenai website toko online.",
  "Halo LiniWeb, saya ingin konsultasi untuk pembuatan website custom sesuai kebutuhan bisnis saya.",
];

for (const msg of expectedMessages) {
  const encoded = encodeURIComponent(msg);
  assert.ok(html.includes(encoded), `WhatsApp message URL encoding missing: ${msg}`);
}

// 8. Transparency note
assert.ok(
  html.includes("Harga merupakan estimasi awal dan dapat berubah sesuai kebutuhan fitur serta kompleksitas proyek"),
  "Transparency note missing"
);

console.log("All pricing section checks PASSED successfully!");
