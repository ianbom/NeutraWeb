import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { nav, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...nav.map(({ href }) => href === "/" ? "" : href), ...articles.map(({ slug }) => `/article/${slug}`)];
  return paths.flatMap((path) => ["id", "en"].map((lang) => ({
    url: `${siteUrl}/${lang}${path}`,
    alternates: { languages: { id: `${siteUrl}/id${path}`, en: `${siteUrl}/en${path}` } },
  })));
}
