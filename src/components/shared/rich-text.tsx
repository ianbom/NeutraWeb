/**
 * Framer rich-text block rhythm (measured): paragraphs get 16px top margin
 * (14px on phone), h3 24px; lists take 16px after a paragraph in the article
 * preset only. Empty `<br>` paragraphs are preserved as 26px spacers, as the
 * reference CMS emits them. HTML is trusted static content scraped from the
 * reference, never user input.
 */
export function RichText({
  blocks,
  listGap = true,
}: {
  blocks: { tag: string; html: string }[];
  /** Article preset spaces lists 16px from a preceding paragraph; legal preset does not. */
  listGap?: boolean;
}) {
  return (
    <div className="flex flex-col text-ink [&_strong]:font-bold">
      {blocks.map((b, i) => {
        const first = i === 0;
        const prev = blocks[i - 1]?.tag;
        if (b.tag === "h2")
          return (
            <h2
              key={i}
              className={`text-[36px] leading-[44px] font-semibold ${first ? "" : "mt-6"}`}
              dangerouslySetInnerHTML={{ __html: b.html }}
            />
          );
        if (b.tag === "h3")
          return (
            <h3
              key={i}
              className={`text-2xl leading-8 font-semibold ${first ? "" : "mt-6"}`}
              dangerouslySetInnerHTML={{ __html: b.html }}
            />
          );
        if (b.tag === "ol" || b.tag === "ul") {
          const List = b.tag;
          return (
            <List
              key={i}
              className={`${listGap && prev === "p" ? "mt-4" : ""} list-outside pl-0 text-sm leading-[22px] md:text-base md:leading-[26px] ${
                b.tag === "ol" ? "list-decimal" : "list-disc"
              } [&>li]:ml-[1.22em]`}
              dangerouslySetInnerHTML={{ __html: b.html }}
            />
          );
        }
        return (
          <p
            key={i}
            className={`${first ? "" : "mt-3.5 md:mt-4"} text-sm leading-[22px] md:text-base md:leading-[26px]`}
            dangerouslySetInnerHTML={{ __html: b.html }}
          />
        );
      })}
    </div>
  );
}
