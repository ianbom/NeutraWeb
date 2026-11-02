import { Button } from "@/components/shared/button";
import { faqs } from "@/data/site";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="w-full bg-surface">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 pt-16 pb-24 md:px-6 md:pt-20 md:pb-28 lg:grid-cols-[0.85fr_1fr] lg:gap-24 lg:pt-24 lg:pb-40">
        <div>
          <h2 id="faq-title" className="text-6xl leading-none font-semibold tracking-tight text-ink md:text-8xl lg:text-[120px]">
            FAQ
          </h2>
          <p className="mt-6 max-w-sm text-base leading-6 text-body">
            Find quick answers to commonly asked questions about Neutra. Have a question not listed?
          </p>
        </div>
        <div>
          <div className="border-t border-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-line">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-ink outline-offset-4 focus-visible:outline-2 focus-visible:outline-ink md:text-xl [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span aria-hidden="true" className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-ink">
                    <span className="absolute h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current group-open:hidden" />
                  </span>
                </summary>
                <p className="max-w-lg pb-6 pr-12 text-base leading-6 text-body">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
