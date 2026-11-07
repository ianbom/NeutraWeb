import IdPage, { metadata as idMetadata } from "@/views/id/about/page";
import EnPage from "@/views/en/about/page";
import { localizedMetadata } from "@/lib/localized-metadata";
import { pageMetadata } from "@/data/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  const metadata = lang === "en" ? pageMetadata("/about", 'About LiniWeb | Website Design and Development', 'Meet LiniWeb, a Surabaya-based team creating professional websites for businesses.') : idMetadata;
  return localizedMetadata(metadata, lang, "/about");
}

export default async function Page({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  return lang === "en" ? <EnPage /> : <IdPage />;
}
