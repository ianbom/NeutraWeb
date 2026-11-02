import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Appear, Float, Parallax } from "@/components/motion/float";
import { Reveal } from "@/components/motion/reveal";
import { RollLabel } from "@/components/shared/roll-label";
import { ArrowRight } from "@/components/icons";

const shape = (src: string) => ({ src, alt: "Created by Dmytri Ivanov" });
const SHAPE_3 = shape("/images/Es0UNVEZFUO6pTmc3NI38eovew.png");
const SHAPE_2 = shape("/images/Tq3lgO9Qy66CFuDaYW99KQ5xoLM.png");
const SHAPE_1 = shape("/images/LFAxsa4CpX7e4qBI72ijOV2sHg.png");

export function Hero() {
  return (
    <section className="w-full">
      <Container className="pt-12 pb-12 md:pt-6 md:pb-20 lg:pb-24">
        <div className="relative overflow-visible rounded-[32px] bg-ink px-8 pt-24 pb-8 md:px-16 md:pt-40 md:pb-16">
          {/* Shape 3 — scroll parallax at -0.2x scrollY */}
          <Parallax
            speed={-0.2}
            className="pointer-events-none absolute top-[-20px] right-8 z-30 size-24 brightness-[2] md:top-12 md:right-12 md:size-36 lg:right-[196px] lg:size-[177px]"
          >
            <Appear>
              <Image alt={SHAPE_3.alt} src={SHAPE_3.src} width={177} height={177} className="size-full object-cover" priority />
            </Appear>
          </Parallax>

          {/* Shape 2 — nearly static drift (+0.01x), hidden on phone */}
          <Parallax
            speed={0.01}
            offset={-64}
            className="pointer-events-none absolute top-[266px] -right-6 z-30 hidden size-40 brightness-[2] md:block lg:top-[304px] lg:-right-8 lg:size-[200px]"
          >
            <Appear>
              <Image alt={SHAPE_2.alt} src={SHAPE_2.src} width={200} height={200} className="size-full object-cover" />
            </Appear>
          </Parallax>

          {/* Shape 1 — idle float, desktop only */}
          <Float className="pointer-events-none absolute top-[335px] right-[160px] z-30 hidden h-[296px] w-[306px] brightness-[2] lg:block">
            <Appear>
              <Image alt={SHAPE_1.alt} src={SHAPE_1.src} width={306} height={296} className="size-full object-cover" priority />
            </Appear>
          </Float>

          <div className="relative z-10 flex flex-col gap-10">
            <Reveal className="flex max-w-[1024px] flex-col gap-4">
              <h1 className="w-full text-[28px] leading-9 font-semibold text-white md:max-w-[634px] md:text-[48px] md:leading-[60px] lg:max-w-[640px] lg:text-[60px] lg:leading-[72px]">
                Design for ambitious software companies
              </h1>
              <p className="w-full text-base leading-6 text-hero-sub md:max-w-[560px] md:text-lg md:leading-7">
                At Neutra, we merge creativity and strategy to craft designs that both captivate and
                elevate.
              </p>
            </Reveal>
            <a
              href="/contact"
              className="group relative inline-flex h-12 w-full items-center justify-center rounded-xl bg-white/20 py-3.5 pr-16 pl-5 backdrop-blur-[8px] md:w-fit md:justify-start"
            >
              <span className="text-white">
                <RollLabel>Schedule a call</RollLabel>
              </span>
              <span className="absolute top-1 right-1 flex size-10 items-center justify-center rounded-lg bg-brand p-2.5">
                <ArrowRight className="size-5 text-white" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
