// Run with BASE_URL=http://localhost:3100 node scripts/smoke.mjs
import assert from "node:assert/strict";
import { chromium } from "playwright";

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const base = process.env.BASE_URL || "http://localhost:3100";
  await page.goto(`${base}/contact`, { waitUntil: "networkidle" });
  const footer = page.locator("footer");
  assert.equal(await footer.getByRole("link", { name: "Instagram" }).getAttribute("href"), "https://www.instagram.com/liniweb.site/");
  assert.equal(await footer.getByRole("link", { name: "WhatsApp" }).getAttribute("href"), "https://wa.me/6285151994724");
  assert.equal(await footer.getByRole("link", { name: "Email" }).getAttribute("href"), "mailto:mail@liniweb.site");
  for (const title of ["Message us", "Call us"]) {
    const card = page.locator("main div.relative").filter({ has: page.getByRole("heading", { name: title, exact: true }) });
    assert.match(await card.getByRole("link").getAttribute("href"), /^https:\/\/wa\.me\/6285151994724/);
  }
  const form = page.locator("form");
  assert.equal(await form.locator('input[name="email"], select[name="location"]').count(), 0);
  await form.getByRole("button", { name: "Kirim Pesan" }).click();
  assert.equal(await form.locator('[aria-invalid="true"]').count(), 2);
  await form.locator('[name="name"]').fill("  ");
  await form.locator('[name="message"]').fill("  ");
  await form.getByRole("button", { name: "Kirim Pesan" }).click();
  assert.equal(await form.locator('[aria-invalid="true"]').count(), 2);
  await form.locator('[name="name"]').fill("Éka & Co");
  await form.locator('[name="message"]').fill("Website + toko\nTerima kasih!");
  let target;
  await page.route("https://wa.me/**", async (route) => { target = route.request().url(); await route.abort(); });
  await form.getByRole("button", { name: "Kirim Pesan" }).click();
  await page.waitForURL(/wa\.me|chrome-error/, { timeout: 5000 }).catch(() => {});
  assert.ok(target, "WhatsApp navigation missing");
  assert.equal(new URL(target).searchParams.get("text"), "Halo LiniWeb, saya Éka & Co.\n\nWebsite + toko\nTerima kasih!");
  for (const slug of ["privacy-policy", "licensing", "terms-of-use"]) {
    assert.equal((await page.goto(`${base}/legal/${slug}`)).status(), 404);
  }
  console.log("Contact and footer checks passed");
} finally {
  await browser.close();
}
