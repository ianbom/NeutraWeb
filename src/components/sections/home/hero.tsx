import Image from "next/image";
import { Appear, Float, Parallax } from "@/components/motion/float";
import { Reveal } from "@/components/motion/reveal";
import { RollLabel } from "@/components/shared/roll-label";
import { ArrowRight } from "@/components/icons";

const shape = (src: string) => ({ src, alt: "Created by Dmytri Ivanov" });
const SHAPE_3 = shape("/images/Es0UNVEZFUO6pTmc3NI38eovew.png");
const SHAPE_2 = shape("/images/Tq3lgO9Qy66CFuDaYW99KQ5xoLM.png");
const SHAPE_1 = shape("/images/LFAxsa4CpX7e4qBI72ijOV2sHg.png");

function ShapeImage({ image, width, height, priority = false }: { image: ReturnType<typeof shape>; width: number; height: number; priority?: boolean }) {
  return (
    <span className="relative block size-full isolate">
      <Image alt={image.alt} src={image.src} width={width} height={height} className="size-full object-cover" priority={priority} />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#32b7ff_0%,#0044ff_45%,#ff7000_100%)] mix-blend-color"
        style={{ maskImage: `url(${image.src})`, maskSize: "100% 100%", maskRepeat: "no-repeat" }}
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="w-full">
      <div className="w-full px-4 pt-12 pb-12 md:px-6 md:pt-6 md:pb-20 lg:pb-24">
        <div className="relative flex min-h-[520px] items-center overflow-visible rounded-[32px] bg-[radial-gradient(ellipse_at_100%_100%,#ff6b00_0%,transparent_43%),radial-gradient(ellipse_at_68%_20%,#117dff_0%,transparent_38%),linear-gradient(120deg,#092d8f_0%,#0750cf_60%,#2451b4_100%)] px-8 pt-24 pb-8 md:min-h-[640px] md:px-16 md:py-24 lg:min-h-[720px]">
          {/* Shape 3 — scroll parallax at -0.2x scrollY */}
          <Parallax
            speed={-0.2}
            className="pointer-events-none absolute top-[-20px] right-8 z-30 size-24 brightness-[2] md:top-12 md:right-12 md:size-36 lg:right-[196px] lg:size-[177px]"
          >
            <Appear>
              <ShapeImage image={SHAPE_3} width={177} height={177} priority />
            </Appear>
          </Parallax>

          {/* Shape 2 — nearly static drift (+0.01x), hidden on phone */}
          <Parallax
            speed={0.01}
            offset={-64}
            className="pointer-events-none absolute top-[266px] right-0 z-30 hidden size-40 brightness-[2] md:block lg:top-[304px] lg:size-[200px]"
          >
            <Appear>
              <ShapeImage image={SHAPE_2} width={200} height={200} />
            </Appear>
          </Parallax>

          {/* Shape 1 — idle float, desktop only */}
          <Float className="pointer-events-none absolute top-[390px] right-[120px] z-30 hidden h-[296px] w-[306px] brightness-[2] lg:block">
            <Appear>
              <ShapeImage image={SHAPE_1} width={306} height={296} priority />
            </Appear>
          </Float>

          <div className="relative z-10 flex min-w-0 flex-col gap-10">
            <Reveal className="flex max-w-[1024px] flex-col gap-4">
              <h1 className="w-full text-[28px] leading-9 font-semibold text-white md:max-w-[480px] md:text-[48px] md:leading-[60px] lg:max-w-[640px] lg:text-[60px] lg:leading-[72px]">
                Design for ambitious software companies
              </h1>
              <p className="w-full text-base leading-6 text-hero-sub md:max-w-[480px] md:text-lg md:leading-7 lg:max-w-[560px]">
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
      </div>
    </section>
  );
}
