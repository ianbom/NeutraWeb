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
        <section className="w-full overflow-clip bg-white">
          <Container className="section-y flex flex-col">
            <SectionHeader
              phone="sm"
              title="Building Digital Excellence with Neutra."
              description="Discover the innovative marketing strategies that set Neutra apart, driving success in the digital landscape."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {homeCases.map((c, i) => (
                <CaseCard key={c.title} item={c} delay={(i % 2) * 0.06} />
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
