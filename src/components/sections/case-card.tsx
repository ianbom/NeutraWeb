import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Tag } from "@/components/shared/button";
import { ArrowUpRight } from "@/components/icons";
import type { CaseItem } from "@/data/cases";

/**
 * Case card. Hover (measured): image scales ~1.1 inside its 8px-radius clip,
 * and the ↗ arrow fades in while sliding 8px right-to-place next to the title.
 */
export function CaseCard({ item, delay = 0 }: { item: CaseItem; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener"
        className="group flex flex-col gap-5 rounded-3xl bg-surface p-4 md:gap-8"
      >
        <div className="relative aspect-[532/322.4] w-full overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={`${item.title} template preview`}
            fill
            sizes="(min-width:1200px) 532px, (min-width:810px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 motion-reduce:transition-none"
          />
        </div>
        <div className="flex flex-col gap-4 px-2 pb-2 md:px-4 md:pb-4">
          <div className="relative flex items-center">
            <h3 className="flex-1 text-2xl leading-8 font-semibold text-ink">{item.title}</h3>
            <ArrowUpRight className="absolute right-0 size-8 -translate-x-2 text-ink opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {item.tags.map((t, i) => (
              <Tag key={`${t}-${i}`}>{t}</Tag>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}
