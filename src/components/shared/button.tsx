import Link from "next/link";
import type { ReactNode } from "react";
import { RollLabel } from "./roll-label";

type Variant = "primary" | "outline" | "brand" | "inverse" | "primary-sm";

const styles: Record<Variant, string> = {
  primary: "h-12 rounded-xl bg-ink px-5 text-white",
  outline: "h-12 rounded-xl border-2 border-ink px-5 text-ink",
  brand: "h-12 rounded-xl bg-brand px-5 text-white",
  inverse: "h-12 rounded-xl bg-white px-5 text-ink",
  "primary-sm": "h-9 rounded-lg bg-ink px-4 text-white",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external,
}: {
  href: string;
  variant?: Variant;
  children: string;
  className?: string;
  external?: boolean;
}) {
  const cls = `group inline-flex items-center justify-center gap-2 ${styles[variant]} ${className}`;
  const label = <RollLabel>{children}</RollLabel>;
  return external ? (
    <a href={href} target="_blank" rel="noopener" className={cls}>
      {label}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

/** Pill tag used on cards ("xs" in Framer). */
export function Tag({ children, outlined = true, tone = "surface" }: { children: ReactNode; outlined?: boolean; tone?: "surface" | "dark" }) {
  return (
    <span
      className={`inline-flex h-[30px] items-center rounded-full py-1.5 pr-3.5 pl-3 text-xs leading-[18px] font-medium ${
        tone === "dark" ? "border border-brand-light bg-transparent text-brand-light" : "bg-surface text-ink"
      } ${outlined && tone === "surface" ? "border border-ink" : tone === "surface" ? "border border-transparent" : ""}`}
    >
      {children}
    </span>
  );
}

/** Section eyebrow badge ("sm"): white pill, 1px #e6e6e6 border. */
export function Eyebrow({ children, icon, size = "sm" }: { children: ReactNode; icon?: ReactNode; size?: "sm" | "xs" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-white font-medium text-ink ${
        size === "sm" ? "h-8 gap-1.5 py-1.5 pr-4 pl-3.5 text-sm leading-5" : "h-[30px] gap-1 py-1.5 pr-3.5 pl-3 text-xs leading-[18px]"
      }`}
    >
      {icon}
      {children}
    </span>
  );
}
