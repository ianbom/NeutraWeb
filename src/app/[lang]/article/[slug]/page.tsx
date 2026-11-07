import IdPage, { generateMetadata as idMetadata } from "@/views/id/article/[slug]/page";
import EnPage, { generateMetadata as enMetadata } from "@/views/en/article/[slug]/page";
import { articles } from "@/data/articles";
import { localizedMetadata } from "@/lib/localized-metadata";

export const instant = false;

type Props = PageProps<"/[lang]/article/[slug]">;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  const metadata = await (lang === "en" ? enMetadata : idMetadata)({ params: Promise.resolve({ slug }) });
  return localizedMetadata(metadata, lang, `/article/${slug}`);
}
export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const props = { params: Promise.resolve({ slug }) };
  return lang === "en" ? <EnPage {...props} /> : <IdPage {...props} />;
}
