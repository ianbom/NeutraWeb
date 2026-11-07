import IdPage, { metadata as idMetadata } from "@/views/id/page";
import EnPage from "@/views/en/page";
import { localizedMetadata } from "@/lib/localized-metadata";
import { pageMetadata } from "@/data/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const metadata = lang === "en" ? pageMetadata("", 'Professional Website Development for Businesses | LiniWeb', 'Professional website development, landing pages, company profiles and online stores. Discuss your business website with LiniWeb.') : idMetadata;
  return localizedMetadata(metadata, lang, "");
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return lang === "en" ? <EnPage /> : <IdPage />;
}
