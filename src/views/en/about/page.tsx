import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Faq } from "@/en/components/sections/faq";
import { Footer } from "@/en/components/layout/footer";
import { GearSix, Lightning, LiniWebMark, RocketLaunch } from "@/components/icons";
import { team } from "@/data/team";

import { pageMetadata } from "@/en/data/site";

export const metadata = pageMetadata(
  "/about",
  "Tentang LiniWeb | Mitra Pembuatan Website Bisnis",
  "Kenali LiniWeb, software house berbasis di Surabaya yang memadukan desain modern dan teknologi untuk membangun website profesional bagi bisnis Anda.",
);

const values = [
  { Icon: Lightning, title: "Clarity", description: "Clear ideas for meaningful digital experiences." },
  { Icon: GearSix, title: "Craft", description: "Thoughtful design, carefully brought to life." },
  { Icon: RocketLaunch, title: "Impact", description: "Creative work made to move ideas forward." },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <section aria-label="About LiniWeb" className="w-full bg-white">
          <Container className="flex flex-col items-center pt-10 text-center md:pt-14 lg:pt-16">
            <h1 className="font-serif text-[76px] leading-none tracking-[-0.06em] text-ink italic md:text-[112px] lg:text-[128px]">{"LiniWeb"}</h1>
            <div className="mt-7 flex max-w-[440px] flex-col gap-5 text-base leading-7 text-body">
              <p>{"At LiniWeb, we combine modern design and technology to create websites that are professional, functional and comfortable to use."}</p>
              <p>{"We help businesses build a stronger digital presence through websites designed to increase trust."}</p>
            </div>
            <div className="mt-16 grid w-full max-w-[850px] gap-12 pb-16 md:mt-20 md:grid-cols-3 md:gap-8 md:pb-24">
              {values.map(({ Icon, title, description }) => (
                <div key={title} className="flex flex-col items-center">
                  <Icon aria-hidden="true" className="size-10 text-ink" />
                  <h2 className="mt-5 text-base font-semibold text-ink">{title}</h2>
                  <p className="mt-2 max-w-[220px] text-sm leading-6 text-body">{description}</p>
                </div>
              ))}
            </div>
          </Container>
          <Container className="relative flex min-h-[300px] items-center justify-center overflow-hidden py-20 text-center md:min-h-[380px]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-ink/15">
              <LiniWebMark className="absolute top-[18%] left-[6%] size-7 rotate-[-18deg] md:left-[12%] md:size-10" />
              <LiniWebMark className="absolute bottom-[18%] left-[15%] size-5 rotate-[25deg] md:left-[25%] md:size-8" />
              <LiniWebMark className="absolute top-[24%] right-[7%] size-8 rotate-[20deg] md:right-[14%] md:size-11" />
              <LiniWebMark className="absolute right-[20%] bottom-[16%] size-5 rotate-[-20deg] md:right-[27%] md:size-8" />
            </div>
            <h2 className="relative max-w-[560px] text-[36px] leading-[1.1] font-semibold tracking-tight text-ink md:text-[52px]">{"creative ideas,"} <span className="font-serif font-normal italic">{"lasting impact."}</span></h2>
          </Container>
        </section>

        {/* Team */}
        <section className="w-full overflow-clip">
          <Container className="section-y flex flex-col !gap-8 md:!gap-12">
            <SectionHeader
              title="Meet the Minds Behind LiniWeb"
              description="Meet the roles behind our approach to digital design and development. Names and photos are placeholders."
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={(i % 4) * 0.05}>
                  <div className="flex flex-col gap-4 pt-4">
                    <figure className="relative aspect-square w-full overflow-hidden rounded-[32px]">
                      <Image
                        src={m.image}
                        alt=""
                        fill
                        sizes="(min-width:1200px) 276px, (min-width:810px) 23vw, 45vw"
                        className="object-cover"
                      />
                    </figure>
                    <div className="flex min-w-0 flex-col gap-1">
                      <h3 className="text-lg leading-6 font-semibold text-ink">{m.name}</h3>
                      <p className="text-sm leading-5 text-muted">{m.role}</p>
                    </div>
                  </div>
                </Reveal>
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
