import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Tag } from "@/components/shared/button";
import type { Article } from "@/data/articles";

/**
 * Article card. Hover (measured): the whole card shifts its padding from
 * `8px 0` to `0 0 16px` — i.e. the content slides up 16px while the image
 * stays put — no image zoom.
 */
export function ArticleCard({
  article,
  featured = false,
  delay = 0,
  hrefBase = "/article/",
  variant = "default",
}: {
  article: Article;
  featured?: boolean;
  delay?: number;
  hrefBase?: string;
  variant?: "default" | "rich";
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`${hrefBase}${article.slug}`}
        className="group flex flex-col py-2 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pt-0 hover:pb-4 motion-reduce:transition-none"
      >
        <figure
          className={`relative w-full overflow-hidden rounded-3xl ${
            featured ? "aspect-[358/250] md:aspect-[369/257] lg:aspect-[564/393]" : "aspect-[358/250] md:aspect-[369/257]"
          }`}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={featured ? "(min-width:1200px) 564px, (min-width:810px) 369px, 100vw" : "(min-width:810px) 369px, 100vw"}
            className="object-cover"
          />
        </figure>
        <div className="flex flex-col gap-4 px-2 pt-4">
          {variant === "rich" ? (
            <div className="flex items-center justify-between text-sm leading-5 text-muted">
              <div className="flex items-center gap-2">
                <span className="relative size-6 shrink-0 overflow-hidden rounded-full">
                  <Image src={article.avatar} alt={article.author} fill sizes="24px" className="object-cover" />
                </span>
                <span className="text-muted/60">•</span>
                <span className="text-body font-medium">{article.date}</span>
              </div>
              <span className="font-normal text-muted">± {article.readTime} menit baca</span>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <p className="text-sm leading-5 text-body">{article.date}</p>
              <Tag outlined={false}>{article.category}</Tag>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg leading-6 font-semibold text-ink">{article.title}</h3>
            <p className="text-sm leading-5 text-body">{article.excerpt}</p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
