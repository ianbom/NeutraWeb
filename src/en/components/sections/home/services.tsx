import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/shared/button";
import { FigmaLogo, FramerLogo, Lightning } from "@/components/icons";

function Logo({ children, ring, className = "" }: { children: ReactNode; ring: string; className?: string }) {
  return (
    <span
      className={`absolute top-0 flex size-12 items-center justify-center rounded-full p-0.5 ${ring} ${className}`}
    >
      {children}
    </span>
  );
}

const FramerDisc = () => (
  <span className="flex size-11 items-center justify-center rounded-full bg-ink">
    <FramerLogo className="h-[22px] w-[15px]" />
  </span>
);

function CardText({ title, body, bodyClass = "" }: { title: string; body: string; bodyClass?: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="text-lg leading-6 font-semibold text-ink">{title}</h3>
      <p className={`text-sm leading-5 text-ink ${bodyClass}`}>{body}</p>
    </div>
  );
}

const avatars = [
  { src: "/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png", bg: "#e0ac90", pos: "-left-0.5" },
  { src: "/images/qCpU7HJtiveCC9wTFuh7L4wc8YM.png", bg: "#afdced", pos: "left-8" },
  { src: "/images/Pm9TTOkN341IYtePLdPGmhG0E.png", bg: "#c6d0f7", pos: "left-16" },
];

export function Services() {
  return (
    <section className="w-full overflow-clip">
      <Container className="section-y flex flex-col">
        <Reveal className="flex flex-col items-center gap-4 md:items-start lg:flex-row lg:items-end lg:gap-16">
          <div className="flex w-full flex-col items-start gap-3 lg:w-[668px]">
            <Eyebrow icon={<Lightning className="size-4 text-[#212121]" />}>{"Our Services"}</Eyebrow>
            <h2 className="w-full text-2xl leading-8 font-semibold text-ink md:text-[36px] md:leading-[44px]">
              {"Website Solutions for Every Business Need"}
            </h2>
          </div>
          <p className="w-full max-w-[420px] text-center text-base leading-6 text-body md:text-left md:text-lg md:leading-7">
            {"From company profile websites to online stores, we present digital solutions designed to suit your needs and business goals."}
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          {/* Col 1 */}
          <Reveal className="w-full lg:w-[370px]">
            <div className="flex flex-col justify-between gap-5 rounded-3xl bg-surface p-6 lg:h-[548px]">
              <div className="flex flex-col gap-5">
                <figure className="relative h-[180px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/home/TerraSite%20Sustainable%20Website%20Builder%20Interface.png"
                    alt="Website Company Profile"
                    fill
                    sizes="(min-width:1200px) 322px, 100vw"
                    className="object-cover"
                  />
                </figure>
                <CardText
                  title="Website Company Profile"
                  body="Build a professional image with a modern, informative website that earns your customers’ trust."
                />
              </div>
              <div className="relative h-12">
                <Logo ring="bg-surface" className="-left-0.5">
                  <FramerDisc />
                </Logo>
                <Logo ring="bg-surface" className="left-8">
                  <Image
                    src="/images/VSHgnszILd4LCOoi9D5kfP1f78.webp"
                    alt="JavaScript"
                    width={44}
                    height={44}
                    className="size-11 rounded-full"
                  />
                </Logo>
              </div>
            </div>
          </Reveal>

          {/* Col 2 */}
          <div className="flex w-full flex-col gap-4 lg:w-[370px]">
            <Reveal>
              <div className="flex flex-col gap-5 rounded-3xl bg-card-violet p-6">
                <CardText
                  title="Landing Pages"
                  body="Showcase your products or services on a focused page designed to turn visitors into customers."
                />
                <div className="relative h-12">
                  {avatars.map(({ src, bg, pos }) => (
                    <Logo key={src} ring="bg-card-violet" className={pos}>
                      <span className="size-11 overflow-hidden rounded-full" style={{ background: bg }}>
                        <Image src={src} alt="" width={44} height={44} className="size-11 object-cover" />
                      </span>
                    </Logo>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-col gap-5 rounded-3xl bg-card-sky px-6 pt-6 lg:h-[318px]">
                <CardText
                  title="Online store"
                  body="Grow your business and reach more customers with a modern, easy-to-use online store."
                />
                {/* The reference collapses this image to 0px on tablet; mirrored. */}
                <figure className="relative h-40 w-full overflow-hidden rounded-t-lg md:h-0 lg:h-[200px]">
                  <Image
                    src="/home/Redline%20Studio%20E-Commerce%20Growth%20Landing%20Page.png"
                    alt="E-Commerce Online Store"
                    fill
                    sizes="(min-width:1200px) 322px, 100vw"
                    className="object-cover"
                  />
                </figure>
              </div>
            </Reveal>
          </div>

          {/* Col 3 */}
          <div className="flex w-full flex-col gap-4 lg:w-[380px]">
            <Reveal>
              <div className="flex flex-col gap-5 rounded-3xl bg-surface p-6">
                <figure className="relative h-[180px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/home/Blue%20Codify%20Agency%20UI%20Collage.png"
                    alt="Website Design & UI/UX"
                    fill
                    sizes="(min-width:1200px) 332px, 100vw"
                    className="object-cover"
                  />
                </figure>
                <CardText
                  title="Website Design & UI/UX"
                  body="Create a comfortable digital experience with an attractive, intuitive design that works across devices."
                />
                <div className="relative h-12">
                  <Logo ring="bg-surface" className="-left-0.5">
                    <span className="flex size-11 items-center justify-center rounded-full bg-ink">
                      <FigmaLogo className="h-[22px] w-[15px]" />
                    </span>
                  </Logo>
                  <Logo ring="bg-surface" className="left-8">
                    <FramerDisc />
                  </Logo>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-col rounded-3xl bg-surface p-6">
                <CardText
                  title="Custom Websites"
                  body="Build a website with custom design and features tailored to your business, workflow, and goals."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
