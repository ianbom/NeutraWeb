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
import { pageMetadata, siteUrl } from "@/data/site";

export const metadata = pageMetadata(
  "/",
  "Jasa Pembuatan Website Profesional untuk Bisnis | LiniWeb",
  "Jasa pembuatan website profesional: landing page mulai Rp1 juta, company profile, dan toko online. Diskusikan kebutuhan website bisnis Anda bersama LiniWeb.",
);

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "LiniWeb",
  url: siteUrl,
  email: "mail@liniweb.site",
  telephone: "+6285151994724",
  sameAs: ["https://www.instagram.com/liniweb.id/"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
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
