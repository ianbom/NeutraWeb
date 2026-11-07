"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export function LocalLink({ href, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "en" ? "en" : "id";
  const localized = typeof href === "string" && href.startsWith("/") && !href.startsWith("//") ? `/${locale}${href === "/" ? "" : href}` : href;
  return <Link href={localized} {...props} />;
}
