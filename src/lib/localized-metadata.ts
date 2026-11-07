import type { Metadata } from "next";

export function localizedMetadata(metadata: Metadata, lang: string, path: string): Metadata {
  const url = `/${lang}${path}`;
  return {
    ...metadata,
    alternates: { canonical: url, languages: { id: `/id${path}`, en: `/en${path}` } },
    openGraph: { ...metadata.openGraph, url, locale: lang === "en" ? "en_US" : "id_ID", ...(lang === "en" && !path.startsWith("/article/") ? { images: [{ url: "/opengraph-image-en" }] } : {}) },
    ...(lang === "en" && !path.startsWith("/article/") ? { twitter: { ...metadata.twitter, images: ["/opengraph-image-en"] } } : {}),
  };
}
