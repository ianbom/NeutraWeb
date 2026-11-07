import IdPage, { metadata as idMetadata } from "@/views/id/article/page";
import EnPage from "@/views/en/article/page";
import { localizedMetadata } from "@/lib/localized-metadata";
import { pageMetadata } from "@/data/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/article">) {
  const { lang } = await params;
  const metadata = lang === "en" ? pageMetadata("/article", 'Website Development Articles and Guides | LiniWeb', 'Explore guides to website design, pricing, SEO and digital strategy for your business.') : idMetadata;
  return localizedMetadata(metadata, lang, "/article");
}

export default async function Page({ params }: PageProps<"/[lang]/article">) {
  const { lang } = await params;
  return lang === "en" ? <EnPage /> : <IdPage />;
}
