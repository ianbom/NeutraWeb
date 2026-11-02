import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

/** Centered H1-style section header (48/56 bold desktop, 36/44 semibold phone). */
export function SectionHeader({
  title,
  description,
  eyebrow,
  reveal = true,
  phone = "lg",
  className = "",
}: {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  reveal?: boolean;
  /** Phone heading size differs per section in the reference: lg=36/44, sm=24/32. */
  phone?: "lg" | "sm";
  className?: string;
}) {
  const inner = (
    <div className={`mx-auto flex w-full max-w-[720px] flex-col items-center gap-4 text-center ${className}`}>
      {eyebrow}
      <h2 className={`w-full font-semibold text-ink md:text-[48px] md:leading-[56px] md:font-bold ${phone === "lg" ? "text-[36px] leading-[44px]" : "text-2xl leading-8"}`}>
        {title}
      </h2>
      {description ? (
        <p className="w-full max-w-[560px] text-base leading-6 text-body md:text-lg md:leading-7">{description}</p>
      ) : null}
    </div>
  );
  return reveal ? <Reveal className="w-full">{inner}</Reveal> : inner;
}
