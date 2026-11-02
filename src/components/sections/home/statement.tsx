import Image from "next/image";
import { Container } from "@/components/shared/container";
import { BlurText } from "@/components/motion/blur-text";
import { Parallax } from "@/components/motion/float";

/** "Since 2010…": per-char blur reveal; two greyscale shapes drift at -0.03x / -0.05x scrollY. */
export function Statement() {
  return (
    <section className="relative w-full">
      <Container className="relative py-24 md:py-20 lg:py-24">
        <h2 className="mx-auto max-w-[810px] text-center text-[36px] leading-[44px] font-semibold text-ink">
          <BlurText text="Since 2010, we have been creating projects that remain relevant today, tomorrow, and for decades to come" />
        </h2>
      </Container>
      <Parallax
        speed={-0.03}
        className="pointer-events-none absolute top-[-16px] right-[calc(50%-472px)] z-10 hidden size-24 brightness-[2] saturate-0 lg:block"
      >
        <Image src="/images/nVwfJfYTJH4GZwm9UXcHF6NVsr4.png" alt="" width={96} height={96} />
      </Parallax>
      <Parallax
        speed={-0.05}
        className="pointer-events-none absolute top-[460px] left-2 z-10 size-16 brightness-[2] saturate-0 md:top-[228px] md:left-16 lg:top-[260px] lg:left-[calc(50%-440px)]"
      >
        <Image src="/images/Gy6oyLvyryjSizdl2va3wLbiYjc.png" alt="" width={64} height={64} />
      </Parallax>
    </section>
  );
}
