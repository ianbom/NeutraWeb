import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { DribbbleLogo, LinkedinLogo, Smiley, TwitterLogo } from "@/components/icons";
import { social } from "@/data/site";
import { team } from "@/data/team";

export const metadata = {
  title: "About - Neutra - Innovate Develop Succeed",
  description:
    "At Fulcrum we always find a way, also, we are courageously honest and we most certainly give a damn.",
};

const stats = [
  ["700+", "Clients"],
  ["40K", "Projects"],
  ["10K+", "Units sold"],
  ["99K+", "Designed"],
];

const socials = [
  { href: social.x, label: "X", Icon: TwitterLogo },
  { href: social.dribbble, label: "Dribbble", Icon: DribbbleLogo },
  { href: social.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="flex w-full items-center justify-center">
          <Container className="flex flex-col items-center gap-16 pt-4 pb-16 md:pt-6 md:pb-20 lg:pb-24">
            {/* Intro hero */}
            <div className="flex w-full flex-col gap-6 rounded-[32px] bg-white md:gap-16">
              <div className="flex flex-col items-end gap-4 pt-8 md:flex-row md:items-end md:gap-16 md:px-8 md:pt-8 lg:px-12 lg:pt-12">
                <h1 className="w-full text-[36px] leading-[44px] font-semibold text-ink md:flex-1 md:text-[48px] md:leading-[56px] md:font-bold lg:w-[540px] lg:flex-none">
                  Not sure how to choose a vendor?
                </h1>
                <p className="w-full text-base leading-6 text-body md:flex-1 md:text-lg md:leading-7 lg:w-[420px] lg:flex-none">
                  At Fulcrum we always find a way, also, we are courageously honest and we most
                  certainly give a damn.
                </p>
              </div>
              <figure className="relative h-[360px] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/5iuQOEMKfBLccEeTbmc2fFLN7Q.jpg"
                  alt="The Neutra team at work"
                  fill
                  sizes="(min-width:1200px) 1152px, 100vw"
                  className="object-cover"
                  priority
                />
              </figure>
            </div>

            {/* Director */}
            <div className="flex w-full flex-col items-center gap-8 rounded-[32px] bg-white">
              <span className="flex size-16 items-center justify-center rounded-full bg-surface">
                <Smiley className="size-8 text-[#212121]" />
              </span>
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <h2 className="w-full text-[36px] leading-[44px] font-bold text-ink md:max-w-[640px] md:text-[48px] md:leading-[56px]">
                  Insights from Our Director
                </h2>
                <p className="w-full text-base leading-6 text-muted md:max-w-[768px] md:text-lg md:leading-7">
                  Hear directly from our Agency Director about how Neutra is shaping the future of
                  digital design and innovation.
                </p>
              </div>
              <div className="flex w-full flex-col items-center gap-4 pt-12">
                <p className="w-full max-w-[420px] text-center font-script text-[32px] leading-8 text-ink">David Johnson</p>
                <p className="w-full max-w-[420px] text-center text-sm leading-5 text-muted">CEO FOUNDER</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex w-full flex-col items-center gap-8 rounded-[32px] bg-surface px-4 py-12 md:flex-row md:gap-8 md:p-16">
              {stats.map(([value, label], i) => (
                <Reveal key={label} delay={i * 0.06} className="flex-1">
                  <div className="flex flex-col gap-1 text-center">
                    <p className="text-[36px] leading-[44px] font-bold text-ink md:text-[48px] md:leading-[56px]">
                      {value}
                    </p>
                    <p className="text-base leading-6 text-muted md:text-lg md:leading-7">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Team */}
        <section className="w-full overflow-clip">
          <Container className="section-y flex flex-col !gap-8 md:!gap-12">
            <SectionHeader
              title="Meet the Minds Behind Neutra"
              description="Discover the talented individuals who bring Neutra to life, each dedicated to pushing the boundaries of digital design."
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={(i % 4) * 0.05}>
                  <div className="flex flex-col gap-4 pt-4">
                    <figure className="relative aspect-square w-full overflow-hidden rounded-[32px]">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(min-width:1200px) 276px, (min-width:810px) 244px, 45vw"
                        className="object-cover"
                      />
                    </figure>
                    <div className="flex w-[232px] flex-col gap-1">
                      <h3 className="text-lg leading-6 font-semibold text-ink">{m.name}</h3>
                      <p className="text-sm leading-5 text-muted">{m.role}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {socials.map(({ href, label, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener"
                          aria-label={`${m.name} on ${label}`}
                          className="text-muted transition-colors hover:text-brand"
                        >
                          <Icon className="size-5" />
                        </a>
                      ))}
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
