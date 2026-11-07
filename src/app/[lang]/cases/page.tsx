import IdPage, { metadata as idMetadata } from "@/views/id/cases/page";
import EnPage from "@/views/en/cases/page";
import { localizedMetadata } from "@/lib/localized-metadata";
import { pageMetadata } from "@/data/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/cases">) {
  const { lang } = await params;
  const metadata = lang === "en" ? pageMetadata("/cases", 'Our Website Portfolio | LiniWeb', 'Explore websites designed and developed by LiniWeb.') : idMetadata;
  return localizedMetadata(metadata, lang, "/cases");
}

export default async function Page({ params }: PageProps<"/[lang]/cases">) {
  const { lang } = await params;
  return lang === "en" ? <EnPage /> : <IdPage />;
}
