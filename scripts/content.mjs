import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://neutra.framer.website/';
const slugs = JSON.parse(fs.readFileSync('ref/slugs.json'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const articles = {};
for (const s of slugs) {
  await page.goto(base + s); await page.waitForTimeout(800);
  articles[s.replace('article/', '')] = await page.evaluate(() => {
    const sec = document.querySelector('section[data-framer-name="Content"]');
    const h1 = sec.querySelector('h1').textContent.trim();
    const info = [...sec.querySelectorAll('[data-framer-name="Info content"] p')].map(p => p.textContent.trim());
    const avatar = sec.querySelector('[data-framer-name="Info content"] img')?.src.split('?')[0].split('/').pop();
    const thumb = sec.querySelector('[data-framer-name="Thumbnail"] img')?.src.split('?')[0].split('/').pop();
    const rt = [...sec.querySelectorAll('h1 ~ *, [data-framer-name="Thumbnail"] ~ *')];
    const body = [...sec.querySelectorAll('[data-framer-component-type="RichTextContainer"]')].filter(r => r.closest('[data-framer-name="Thumbnail"]') === null && !r.querySelector('h1') && !r.closest('[data-framer-name="Info content"]') && !r.closest('a'))
      .flatMap(r => [...r.children].map(c => ({ tag: c.tagName.toLowerCase(), html: c.innerHTML })));
    return { title: h1, info, avatar, thumb, body };
  });
}
const legal = {};
for (const s of ['privacy-policy', 'licensing', 'terms-of-use']) {
  await page.goto(base + 'legal/' + s); await page.waitForTimeout(800);
  legal[s] = await page.evaluate(() => {
    const rts = [...document.querySelectorAll('[data-framer-component-type="RichTextContainer"]')].filter(r => !r.closest('nav') && !r.closest('footer') && !r.closest('[data-framer-name="Desktop"]'));
    return rts.map(r => ({ text: r.innerText.slice(0, 80), children: [...r.children].map(c => ({ tag: c.tagName.toLowerCase(), html: c.innerHTML })) })).filter(r => r.children.length);
  });
}
fs.writeFileSync('ref/articles.json', JSON.stringify(articles, null, 1));
fs.writeFileSync('ref/legal.json', JSON.stringify(legal, null, 1));
await browser.close();
console.log(Object.keys(articles).length);
