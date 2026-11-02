import { CaseCard } from "@/components/sections/case-card";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { cases } from "@/data/cases";

export const metadata = {
  title: "Cases - Neutra - Innovate Develop Succeed",
  description:
    "Discover the innovative marketing strategies that set Neutra apart, driving success in the digital landscape.",
};

export default function CasesPage() {
  return (
    <>
      <main>
        <section className="w-full overflow-clip bg-white">
          <Container className="flex flex-col gap-12 pt-12 pb-16 md:pt-12 md:pb-20 lg:gap-16 lg:pt-16 lg:pb-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-24">
              <h1 className="w-full text-[36px] leading-[44px] font-semibold text-ink md:text-[48px] md:leading-[60px] lg:w-[636px] lg:text-[60px] lg:leading-[72px]">
                Case Studies
              </h1>
              <p className="w-full text-base leading-6 text-body md:text-lg md:leading-7 lg:w-[420px]">
                Discover the innovative marketing strategies that set Neutra apart, driving success
                in the digital landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {cases.map((c, i) => (
                <CaseCard key={c.title} item={c} delay={(i % 2) * 0.06} />
              ))}
            </div>
          </Container>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
