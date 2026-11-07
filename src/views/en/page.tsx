import { Hero } from "@/en/components/sections/home/hero";
import { Features } from "@/en/components/sections/home/features";
import { Services } from "@/en/components/sections/home/services";
import { Statement } from "@/en/components/sections/home/statement";
import { Testimonials } from "@/en/components/sections/home/testimonials";
import { Pricing } from "@/en/components/sections/home/pricing";
import { CaseCard } from "@/en/components/sections/case-card";
import { Faq } from "@/en/components/sections/faq";
import { Footer } from "@/en/components/layout/footer";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { homeCases } from "@/data/cases";
import { pageMetadata, siteUrl } from "@/en/data/site";

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
        <section aria-label="Digital Works We Build." className="w-full bg-surface">
          <Container className="section-y flex flex-col">
            <SectionHeader
              phone="sm"
              title="Building Digital Excellence with LiniWeb."
              description="Explore various websites that we design with the needs of every business in mind."
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
