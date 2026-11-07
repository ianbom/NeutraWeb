import { Container } from "@/components/shared/container";
import { BlurText } from "@/components/motion/blur-text";

/** "Since 2010…": per-char blur reveal; two greyscale shapes drift at -0.03x / -0.05x scrollY. */
export function Statement() {
  return (
    <section className="relative w-full">
      <Container className="relative py-24 md:py-20 lg:py-24">
        <h2 className="mx-auto max-w-[810px] text-center text-[36px] leading-[44px] font-semibold text-ink">
          <BlurText text="We create websites that look great today and support your business as it grows." />
        </h2>
      </Container>
    </section>
  );
}
