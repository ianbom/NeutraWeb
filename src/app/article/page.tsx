import { ArticleCard } from "@/components/sections/article-card";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { featuredArticles, newsArticles } from "@/data/articles";

export const metadata = {
  title: "Article - Neutra - Innovate Develop Succeed",
  description: "Discover articles and tutorials to help you build better.",
};

export default function ArticlePage() {
  return (
    <>
      <main>
        <section className="flex w-full items-center justify-center">
          <Container className="flex flex-col items-center gap-12 pt-12 pb-16 md:gap-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
            <h1 className="w-full text-center text-[36px] leading-[44px] font-bold text-ink md:max-w-[640px] md:text-[48px] md:leading-[56px]">
              Discover articles and tutorials to help you build better.
            </h1>
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-6">
              {featuredArticles.map((a, i) => (
                <div key={a.slug} className="w-full flex-1">
                  <ArticleCard article={a} featured variant="rich" delay={i * 0.06} />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <div className="w-full">
          <Container>
            <div className="h-px w-full bg-line" />
          </Container>
        </div>

        <section className="w-full overflow-clip">
          <Container className="flex flex-col items-center gap-8 py-16 md:gap-12 md:py-24 lg:gap-16">
            <SectionHeader
              title="News Articles"
              description="Stay informed with the latest guides and news."
            />
            <div className="grid w-full grid-cols-1 md:auto-rows-fr gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {newsArticles.map((a, i) => (
                <ArticleCard key={a.slug} article={a} variant="rich" delay={(i % 3) * 0.05} />
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
