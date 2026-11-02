import { CasesExplorer } from "@/components/sections/cases-explorer";
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
        <section aria-labelledby="cases-title" className="w-full bg-surface">
          <Container className="flex flex-col gap-12 pt-12 pb-16 md:pt-12 md:pb-20 lg:gap-16 lg:pt-16 lg:pb-24">
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-4 text-center">
              <h1 id="cases-title" className="text-[36px] leading-[44px] font-semibold text-ink md:text-[48px] md:leading-[56px]">
                Case Studies
              </h1>
              <p className="text-base leading-6 text-body md:text-lg md:leading-7">
                Discover the innovative marketing strategies that set Neutra apart, driving success
                in the digital landscape.
              </p>
            </div>
            <CasesExplorer items={cases} />
          </Container>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
