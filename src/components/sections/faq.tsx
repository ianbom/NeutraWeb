import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { faqs } from "@/data/site";

/** Static 3x2 Q&A grid on #f5f4f6 (not an accordion in the reference). */
export function Faq() {
  return (
    <section className="w-full bg-surface">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4 pt-16 pb-24 md:gap-16 md:px-6 md:pt-20 md:pb-28 lg:pt-24 lg:pb-40">
        <SectionHeader
          className="items-start text-left md:items-center md:text-center"
          title="Explore Our FAQs"
          description="Find quick answers to commonly asked questions about Neutra. Have a question not listed?"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 lg:gap-y-16">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} className="flex flex-col gap-3">
              <h3 className="text-lg leading-6 font-semibold text-ink">{f.q}</h3>
              <p className="text-base leading-6 text-body">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
