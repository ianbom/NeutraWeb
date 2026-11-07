import IdPage, { metadata as idMetadata } from "@/views/id/contact/page";
import EnPage from "@/views/en/contact/page";
import { localizedMetadata } from "@/lib/localized-metadata";
import { pageMetadata } from "@/data/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  const metadata = lang === "en" ? pageMetadata("/contact", 'Contact LiniWeb | Website Development', 'Contact LiniWeb to discuss your website project.') : idMetadata;
  return localizedMetadata(metadata, lang, "/contact");
}

export default async function Page({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  return lang === "en" ? <EnPage /> : <IdPage />;
}
