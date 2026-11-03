import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const base = process.argv[2] || "http://localhost:3000";
const origin = "https://www.liniweb.site";
const source = await readFile(new URL("../src/data/articles.ts", import.meta.url), "utf8");
const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
assert(slugs.length > 0, "Article inventory must not be empty");
const paths = ["/", "/about", "/cases", "/article", "/contact", ...slugs.map((slug) => `/article/${slug}`)];
async function get(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: status`);
  return response.text();
}
const robots = await get("/robots.txt");
assert.match(robots, /Allow: \/(?:\r?\n|$)/);
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const sitemap = await get("/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(urls.sort(), paths.map((path) => new URL(path, origin).href).sort());
const titles = new Set();
for (const path of paths) {
  const html = await get(path);
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  assert.equal(canonical.length, 1, `${path}: one canonical`);
  assert.equal(canonical[0][1], new URL(path, origin).href.replace(/\/$/, ""), `${path}: canonical`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${path}: unique title`);
  titles.add(title);
  for (const field of ['name="description"', 'property="og:title"', 'property="og:description"', 'property="og:url"', 'property="og:image"', 'name="twitter:card"']) {
    assert(html.includes(field), `${path}: ${field}`);
  }
  assert(!/name="robots"[^>]*content="[^"]*noindex/.test(html), `${path}: indexable`);
  const data = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  if (path === "/") assert(data.some((item) => item["@type"] === "Organization"));
  if (path.startsWith("/article/")) {
    const article = data.find((item) => item["@type"] === "Article");
    assert.equal(article?.url, `${origin}${path}`, `${path}: article schema`);
    assert(article.headline && article.author?.name && article.image);
  }
}
const missing = await fetch(new URL("/article/seo-check-does-not-exist", base));
const missingHtml = await missing.text();
// Streaming Next.js responses may return 200 with an explicit noindex for notFound().
assert(missing.status === 404 || (missing.status === 200 && /name="robots"[^>]*content="[^"]*noindex/.test(missingHtml)), "Unknown article must not be indexable");
const image = await fetch(new URL("/opengraph-image", base));
assert.equal(image.status, 200);
assert.match(image.headers.get("content-type") || "", /^image\/png/);
console.log(`SEO checks passed: ${paths.length} pages, robots, sitemap, structured data, OG image, unknown article.`);
