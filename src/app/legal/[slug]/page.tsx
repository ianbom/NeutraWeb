import { notFound } from "next/navigation";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { RichText } from "@/components/shared/rich-text";
import { legal } from "@/data/legal";

export function generateStaticParams() {
  return Object.keys(legal).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  return { title: `${legal[slug]?.title ?? "Legal"} - Neutra - Innovate Develop Succeed` };
}

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const doc = legal[slug];
  if (!doc) notFound();
  return (
    <>
      <main className="flex w-full justify-center">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-12 px-4 py-12 md:gap-16 md:px-6 md:py-20 lg:py-24">
          <div className="flex w-full max-w-[720px] flex-col gap-4">
            <h1 className="text-[36px] leading-[44px] font-semibold text-ink md:text-[48px] md:leading-[56px] md:font-bold">
              {doc.title}
            </h1>
            <p className="text-base leading-6 text-body">{doc.date}</p>
          </div>
          <div className="w-full max-w-[720px]">
            <RichText blocks={doc.body} listGap={false} />
          </div>
        </div>
      </main>
      <Faq />
      <Footer />
    </>
  );
}
