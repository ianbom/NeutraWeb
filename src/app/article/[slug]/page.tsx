import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/sections/article-card";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { RollLabel } from "@/components/shared/roll-label";
import { RichText } from "@/components/shared/rich-text";
import { ArrowLeft, Calendar, Lightning, Tag as TagIcon } from "@/components/icons";
import { articles, getArticle } from "@/data/articles";

const LATEST = [
  "the-ux-revolution-shaping-digital-experiences",
  "mastering-ui-design-trends-a-deep-dive",
  "the-power-of-responsive-web-design",
  "crafting-exceptional-user-experiences",
];

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/article/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: `${article?.title ?? "Article"} - Neutra - Innovate Develop Succeed`,
    description: article?.excerpt,
  };
}

export default async function ArticleDetail({ params }: PageProps<"/article/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  // Reference CMS query: these four in order, minus the current post, first three.
  const latest = LATEST.filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => getArticle(s)!);

  const meta = [
    { Icon: TagIcon, text: article.category },
    { Icon: Lightning, text: `${article.readTime} min read` },
    { Icon: Calendar, text: article.date },
  ];

  return (
    <>
      <main>
        <section className="flex w-full justify-center">
          <div className="flex w-full max-w-[810px] flex-col gap-6 px-4 pt-4 pb-16 md:gap-16 md:px-6 md:pt-6 md:pb-20 lg:pb-24">
            <Link
              href="/article"
              className="group inline-flex w-fit items-center gap-2 text-ink"
            >
              <ArrowLeft className="size-4" />
              <RollLabel>All article</RollLabel>
            </Link>

            <div className="flex flex-col gap-8">
              <h1 className="text-[36px] leading-[44px] font-bold text-ink md:text-[48px] md:leading-[56px]">
                {article.title}
              </h1>
              <div className="grid grid-cols-2 gap-6 rounded-xl bg-surface px-6 py-5 *:h-6 md:flex md:flex-row md:items-center md:*:h-auto">
                <div className="flex items-center gap-2">
                  <span className="relative size-6 shrink-0 overflow-hidden rounded-full">
                    <Image src={article.avatar} alt="" fill sizes="24px" className="object-cover" />
                  </span>
                  <p className="text-sm leading-5 font-medium text-ink">{article.author}</p>
                </div>
                {meta.map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="size-5 shrink-0 text-muted" />
                    <p className="text-sm leading-5 font-medium text-ink">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <figure className="relative aspect-[358/226] w-full overflow-hidden rounded-xl md:aspect-[762/480]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width:810px) 762px, 100vw"
                className="object-cover"
                priority
              />
            </figure>

            <RichText blocks={article.body} />
          </div>
        </section>

        <div className="w-full">
          <Container>
            <div className="h-px w-full bg-line" />
          </Container>
        </div>

        <section className="w-full overflow-clip">
          <Container className="section-y flex flex-col items-center max-md:!gap-8">
            <SectionHeader
              title="Latest Articles"
              description="Stay informed with the latest guides and news."
            />
            <div className="grid w-full grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:max-lg:[&>*:nth-child(3)]:hidden">
              {latest.map((a, i) => (
                <ArticleCard key={a.slug} article={a} delay={i * 0.05} />
              ))}
            </div>
          </Container>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
