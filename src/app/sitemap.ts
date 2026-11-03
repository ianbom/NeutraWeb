import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { nav, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav.map(({ href }) => href), ...articles.map(({ slug }) => `/article/${slug}`)]
    .map((path) => ({ url: new URL(path, siteUrl).href }));
}
