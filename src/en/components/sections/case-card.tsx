import Image from "next/image";
import type { CaseItem } from "@/data/cases";

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <article className="min-w-0">
      <a
        href={item.href}
        target="_blank"
        rel="noopener"
        aria-label={`View ${item.title} (opens in a new tab)`}
        className="group block rounded-3xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-ink"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl leading-7 font-semibold text-ink md:text-2xl">{item.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span key={`${tag}-${i}`} className="rounded-full bg-white px-4 py-2 text-xs font-medium text-body">{tag}</span>
              ))}
            </div>
          </div>
          <span aria-hidden="true" className="flex shrink-0 items-center gap-3 pt-1 text-sm font-semibold text-ink md:text-base">
            <span className="hidden md:inline">{"View"}</span>
            <span className="flex h-9 w-12 items-center justify-center rounded-full border border-white text-xl transition-colors group-hover:bg-white motion-reduce:transition-none">→</span>
          </span>
        </div>
        {item.bg ? (
          <div
            className="relative aspect-[532/322.4] overflow-hidden rounded-[28px] border-[6px] border-white"
            style={{ backgroundColor: item.bg }}
          >
            <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl shadow-[0_12px_30px_rgba(0,0,0,0.3)] md:inset-x-8 md:top-8 md:rounded-t-2xl">
              <Image
                src={item.image}
                alt={`${item.title} template preview`}
                fill
                sizes="(min-width: 1200px) 564px, (min-width: 810px) 46vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>
          </div>
        ) : (
          <div className="relative aspect-[532/322.4] overflow-hidden rounded-[28px] border-[6px] border-white bg-white">
            <Image
              src={item.image}
              alt={`${item.title} template preview`}
              fill
              sizes="(min-width: 1200px) 564px, (min-width: 810px) 46vw, 100vw"
              className={`object-cover ${item.image.startsWith("/portfolio/") ? "object-top" : ""} transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none`}
            />
          </div>
        )}
      </a>
    </article>
  );
}
