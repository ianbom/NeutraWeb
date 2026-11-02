import type { ReactNode } from "react";

/** Framer page container: 1200 max, 24px gutters (16px on phone). */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 md:px-6 ${className}`}>{children}</div>
  );
}
