import assert from "node:assert/strict";

const base = process.env.SITE_URL || "http://localhost:3000";
const get = (path, options) => fetch(`${base}${path}`, options);
const sitemap = await (await get("/sitemap.xml")).text();
const urls = [...sitemap.matchAll(/<loc>https:\/\/www\.liniweb\.site(\/[^<]+)<\/loc>/g)].map((m) => m[1]);
assert.equal(urls.length, 34);
for (const path of urls) {
  const response = await get(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const lang = path.split("/")[1];
  assert.match(html, new RegExp(`<html lang="${lang}"`), path);
  assert.ok(html.includes(`rel="canonical" href="https://www.liniweb.site${path}"`), path);
  assert.ok(html.includes(`href="/${lang}/contact"`), path);
  if (path.includes("/article/")) {
    assert.ok(html.includes(`href="/${lang}/article"`), `${path}: article listing link`);
    assert.ok(!html.includes('href="/article"'), `${path}: unlocalized article listing link`);
  }
}
for (const path of ["/", "/about", "/cases", "/contact", "/article", "/article/pentingnya-website-profesional-untuk-bisnis"]) {
  const response = await get(`${path}?source=test`, { redirect: "manual" });
  assert.equal(response.status, 308, path);
  assert.equal(response.headers.get("location"), `/id${path === "/" ? "" : path}?source=test`);
}
assert.equal((await get("/fr")).status, 404);
assert.equal((await get("/en/article/not-an-article")).status, 404);
console.log(`Checked ${urls.length} localized pages, redirects, metadata, and 404s.`);
