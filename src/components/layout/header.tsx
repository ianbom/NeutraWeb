"use client";

import { LocalLink as Link } from "@/components/shared/local-link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav } from "@/data/site";
import { LiniWebMark } from "@/components/icons";
import { RollLabel } from "@/components/shared/roll-label";

/**
 * Two states, measured on the reference:
 *  - top: transparent, logo pinned left (36px tile), links right, dark Call Us button.
 *  - scrolled past 85px: everything collapses into a centred floating pill —
 *    rgba(26,26,26,.5) + blur(5px), radius 16, 4px padding, 48px tiles, white
 *    labels, white Call Us button. ~0.7s spring-ish settle.
 */
export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  // Close the menu on navigation by keying it to the current path.
  const open = menu === pathname;
  const setOpen = (v: boolean | ((p: boolean) => boolean)) =>
    setMenu((prev) => ((typeof v === "function" ? v(prev === pathname) : v) ? pathname : null));
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const locale = pathname.startsWith("/en") ? "en" : "id";
  const barePath = pathname.replace(/^\/(id|en)(?=\/|$)/, "") || "/";
  const isActive = (href: string) =>
    href === "/" ? barePath === "/" : barePath.startsWith(href);

  const spring = reduce
    ? { duration: 0 }
    : ({ type: "spring", stiffness: 120, damping: 22 } as const);

  return (
    <nav onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); event.currentTarget.querySelector<HTMLButtonElement>('button[aria-expanded]')?.focus(); } }} className="sticky top-0 z-50 mx-auto h-[68px] w-full max-w-[1200px] px-4 py-4 md:h-[84px] md:p-6">
      <motion.div
        layout
        transition={spring}
        className={`relative mx-auto flex items-center backdrop-blur-[5px] ${
          scrolled
            ? "-mt-2.5 w-fit gap-0 rounded-2xl bg-ink/50 p-1 max-md:mt-0"
            : "w-full justify-between rounded-xl bg-transparent"
        }`}
      >
        <Link
          href="/"
          aria-label="LiniWeb home"
          className={`flex shrink-0 items-center justify-center bg-ink text-white ${
            scrolled ? "size-12 rounded-xl p-3" : "size-9 rounded-lg p-2"
          }`}
        >
          <LiniWebMark className={scrolled ? "size-6" : "size-5"} />
        </Link>

        <div className={`flex items-center ${scrolled ? "gap-0" : "gap-4"}`}>
          <div
            className={`hidden items-center md:flex ${
              scrolled ? "ml-1 gap-1 rounded-xl bg-ink p-1" : "gap-1 rounded-xl"
            }`}
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex items-center ${
                    scrolled ? "px-4 py-2.5" : "px-4 py-2"
                  }`}
                >
                  {/* Dot indicator: active = solid centre dot; hover = slides in from the
                      left edge (-10px) to centre while unblurring 3px -> 0. */}
                  <span
                    className={`absolute bottom-0 size-[3px] -translate-x-1/2 rounded-full transition-[left,opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active
                        ? `left-1/2 opacity-100 ${scrolled ? "bg-white" : "bg-ink"}`
                        : `-left-2.5 opacity-0 blur-[3px] group-hover:left-1/2 group-hover:opacity-100 group-hover:blur-none ${
                            scrolled ? "bg-line" : "bg-muted"
                          }`
                    }`}
                  />
                  <span
                    className={`text-sm leading-5 font-medium ${scrolled ? "text-white" : "text-ink"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className={`flex items-center ${scrolled ? "ml-2 gap-6" : "gap-6 md:gap-4"}`}>
            <button type="button" aria-label={locale === "id" ? "Switch to English" : "Ganti ke bahasa Indonesia"} onClick={() => { router.push(`/${locale === "id" ? "en" : "id"}${barePath === "/" ? "" : barePath}${window.location.search}${window.location.hash}`); }} className={`rounded-lg px-2 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${scrolled ? "text-white" : "text-ink"}`}>{locale === "id" ? "EN" : "ID"}</button>
            <a
              href="https://wa.me/6285151994724"
              target="_blank"
              rel="noopener"
              className={`group inline-flex items-center justify-center ${
                scrolled
                  ? "h-12 rounded-xl bg-white px-5 text-ink"
                  : "h-9 rounded-lg bg-ink px-4 text-white"
              }`}
            >
              <RollLabel>Call Us</RollLabel>
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-xl p-2 md:hidden"
            >
              <span className="relative block size-5">
                <span
                  className={`absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-ink transition-transform duration-300 ${
                    open ? "rotate-45" : "-translate-y-[5px]"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-ink transition-transform duration-300 ${
                    open ? "-rotate-45" : "translate-y-[5px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <>
            {/* Page scrim measured on reference: white 80% + 8px backdrop blur */}
            <motion.button
              type="button"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              className="fixed inset-0 -z-10 bg-white/80 backdrop-blur-[8px] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-[68px] right-4 left-4 flex flex-col gap-1 rounded-xl bg-ink p-2 md:hidden"
            >
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="relative flex h-10 items-center px-4 py-2.5 text-sm leading-5 font-medium text-white"
                  >
                    {active ? (
                      <span className="absolute left-[13px] size-[3px] rounded-full bg-white" />
                    ) : null}
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
