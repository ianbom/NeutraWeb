import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { Button, Eyebrow, Tag } from "@/components/shared/button";
import { SectionHeader } from "@/components/shared/section-header";
import { buyUrl } from "@/data/site";

const base = ["Fast delivery & response", "Pause / cancel anytime", "Dedicated project manager"];
const plans = [
  { name: "Part-time", price: "$2450", features: [...base, "1 request at the time", "SEO Marketing"], cta: "outline" as const },
  { name: "Full-time", price: "$3950", features: [...base, "10 request at the time", "E-commerce integration"], cta: "primary" as const },
  { name: "Custom", price: "$5999", features: [...base, "Unlimited request", "E-commerce integration"], cta: "brand" as const, popular: true },
  { name: "Enterprise", price: "Contact us", features: [], cta: "outline" as const, contact: true },
];

export function Pricing() {
  return (
    <section className="w-full overflow-clip">
      <Container className="section-y flex flex-col">
        <SectionHeader eyebrow={<Eyebrow>Simple Pricing</Eyebrow>} title="Unlock Your Growth" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => {
            const dark = p.popular;
            return (
              <Reveal key={p.name} delay={i * 0.06} className="h-full">
                <div className={`flex h-full flex-col gap-8 rounded-3xl p-6 ${dark ? "bg-ink" : "bg-surface"}`}>
                  <div className="flex flex-1 flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-2xl leading-8 font-semibold ${dark ? "text-white" : "text-ink"}`}>
                        {p.name}
                      </h3>
                      {dark ? <Tag tone="dark">Popular</Tag> : null}
                    </div>
                    <div className={`h-px w-full ${dark ? "bg-body" : "bg-line"}`} />
                    {p.contact ? (
                      <p className="text-base leading-6 text-body">Contact us to discuss your project and pricing.</p>
                    ) : (
                      <ul className="flex list-none flex-col gap-3 p-0">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5">
                            <span className="size-1 shrink-0 rounded-full bg-muted" />
                            <span className={`text-base leading-6 ${dark ? "text-dim" : "text-body"}`}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto flex flex-wrap items-end gap-x-0.5">
                      <span className={`text-[32px] leading-[44px] font-semibold ${dark ? "text-white" : "text-ink"}`}>
                        {p.price}
                      </span>
                      {!p.contact && <span className="pb-1 text-base leading-6 text-muted">/ month</span>}
                    </div>
                  </div>
                  <Button href={p.contact ? "/contact" : buyUrl} external={!p.contact} variant={p.cta} className="w-full">
                    {p.contact ? "Contact Us" : "Get Started"}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
