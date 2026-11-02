// Functional smoke test against the local dev server (port 3100).
import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
p.on("pageerror", (e) => errs.push(e.message));
p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
const base = "http://localhost:3100";

await p.goto(base + "/contact", { waitUntil: "networkidle" });
await p.click("form button[type=submit]");
console.log("empty submit -> invalid fields:", await p.locator("form [aria-invalid=true]").count());
await p.fill("input[name=name]", "Jane");
await p.fill("input[name=email]", "bad@x");
await p.click("form button[type=submit]");
console.log("bad email ->", await p.locator("form span", { hasText: "Please" }).allTextContents());
await p.fill("input[name=email]", "jane@framer.com");
await p.selectOption("select[name=location]", "Barcelona");
await p.click("form button[type=submit]");
console.log("valid ->", await p.locator("form [aria-live]").textContent(), "| reset:", (await p.inputValue("input[name=name]")) === "");

for (const [l, path] of [["About", "/about"], ["Cases", "/cases"], ["Article", "/article"], ["Contact", "/contact"], ["Home", "/"]]) {
  await p.locator("nav a", { hasText: new RegExp(`^${l}$`) }).first().click();
  await p.waitForURL(base + path);
  console.log("nav", l, "->", new URL(p.url()).pathname);
}
await p.goto(base + "/article", { waitUntil: "networkidle" });
await p.locator('a[href="/article/crafting-exceptional-user-experiences"]').first().click();
await p.waitForURL("**/crafting-exceptional-user-experiences");
console.log("article card ->", new URL(p.url()).pathname);
await p.locator("a", { hasText: "All article" }).first().click();
await p.waitForURL("**/article");
console.log("back link ->", new URL(p.url()).pathname);
for (const r of ["/legal/privacy-policy", "/legal/licensing", "/legal/terms-of-use"]) {
  const res = await p.goto(base + r);
  console.log(r, res.status());
}
console.log("404 /article/nope:", (await p.goto(base + "/article/nope")).status());
console.log("404 /legal/nope:", (await p.goto(base + "/legal/nope")).status());

// keyboard: tab reaches nav links with visible focus
await p.goto(base + "/", { waitUntil: "networkidle" });
await p.keyboard.press("Tab");
await p.keyboard.press("Tab");
console.log("2nd tab focus:", await p.evaluate(() => document.activeElement?.textContent?.trim()));

// mobile menu closes on navigation
await p.setViewportSize({ width: 390, height: 844 });
await p.goto(base + "/", { waitUntil: "networkidle" });
await p.click('nav button[aria-label="Open menu"]');
await p.locator("nav a", { hasText: /^Cases$/ }).last().click();
await p.waitForURL("**/cases");
console.log("mobile menu after nav open?:", await p.locator('nav button[aria-expanded="true"]').count());
console.log("errors:", errs.length ? errs.filter((e) => !e.includes("404")) : "none");
await b.close();
