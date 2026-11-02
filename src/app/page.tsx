import { Hero } from "@/components/sections/home/hero";
import { Features } from "@/components/sections/home/features";
import { Services } from "@/components/sections/home/services";
import { Statement } from "@/components/sections/home/statement";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Pricing } from "@/components/sections/home/pricing";
import { CaseCard } from "@/components/sections/case-card";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { homeCases } from "@/data/cases";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Services />
        <Statement />
        <section aria-label="Karya Digital yang Kami Bangun." className="w-full bg-surface">
          <Container className="section-y flex flex-col">
            <SectionHeader
              phone="sm"
              title="Building Digital Excellence with LiniWeb."
              description="Jelajahi berbagai website yang kami rancang dengan mengutamakan kebutuhan setiap bisnis."
            />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16">
              {homeCases.map((c) => (
                <CaseCard key={c.title} item={c} />
              ))}
            </div>
          </Container>
        </section>
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
