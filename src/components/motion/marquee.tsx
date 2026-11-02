import type { ReactNode } from "react";

/**
 * Logo cloud: continuous leftward scroll (~70px/s measured) with a 64px gap
 * and a 5% edge fade. Track is doubled and shifted by exactly -50%, so the
 * loop is seamless regardless of item widths. `copyWidth` only sets speed.
 */
export function Marquee({
  children,
  copyWidth,
  gap = 64,
  speed = 70,
}: {
  children: ReactNode[];
  copyWidth: number;
  gap?: number;
  speed?: number;
}) {
  const fade = "linear-gradient(90deg, transparent 0%, #000 5%, #000 94.5%, transparent 100%)";
  return (
    <div className="w-full overflow-clip" style={{ maskImage: fade, WebkitMaskImage: fade }}>
      <ul
        className="marquee-track flex w-max list-none items-center p-0"
        style={{
          ["--marquee-shift" as string]: "-50%",
          animation: `marquee ${copyWidth / speed}s linear infinite`,
        }}
      >
        {[...children, ...children].map((child, i) => (
          <li key={i} className="shrink-0" style={{ paddingRight: gap }} aria-hidden={i >= children.length}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}
