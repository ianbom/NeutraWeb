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
];

export function Pricing() {
  return (
    <section className="w-full overflow-clip">
      <Container className="section-y flex flex-col">
        <SectionHeader eyebrow={<Eyebrow>Simple Pricing</Eyebrow>} title="Unlock Your Growth" />
        <div className="flex flex-col gap-4 lg:flex-row">
          {plans.map((p, i) => {
            const dark = p.popular;
            return (
              <Reveal key={p.name} delay={i * 0.06} className="flex-1">
                <div className={`flex flex-col gap-8 rounded-3xl p-8 ${dark ? "bg-[linear-gradient(145deg,#1644af,#2456c6_65%,#326ed4)] shadow-[0_16px_40px_rgba(36,86,198,0.18)]" : i === 0 ? "bg-[#eaf3ff]" : "bg-[#f8fbff] shadow-[inset_0_0_0_1px_#d6e4f7]"}`}>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-2xl leading-8 font-semibold ${dark ? "text-white" : "text-ink"}`}>
                        {p.name}
                      </h3>
                      {dark ? <Tag tone="dark">Popular</Tag> : null}
                    </div>
                    <div className={`h-px w-full ${dark ? "bg-[#93c5fd]/40" : "bg-line"}`} />
                    <ul className="flex list-none flex-col gap-3 p-0">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <span className={`size-1 shrink-0 rounded-full ${dark ? "bg-[#c7dfff]" : "bg-muted"}`} />
                          <span className={`text-base leading-6 ${dark ? "text-dim" : "text-body"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-end gap-0.5">
                      <span className={`text-[36px] leading-[44px] font-semibold ${dark ? "text-white" : "text-ink"}`}>
                        {p.price}
                      </span>
                      <span className={`pb-1 text-base leading-6 ${dark ? "text-[#dcebff]" : "text-muted"}`}>/ month</span>
                    </div>
                  </div>
                  <Button href={buyUrl} external variant={p.cta} className={`w-full ${dark ? "!bg-white !text-[#1644af]" : i === 0 ? "!border-[#2456c6] !text-[#1644af]" : "!bg-[#2456c6]"}`}>
                    Get Started
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
