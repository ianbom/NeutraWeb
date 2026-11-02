"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav } from "@/data/site";
import { NeutraMark } from "@/components/icons";
import { RollLabel } from "@/components/shared/roll-label";

/**
 * Two states: a full-width navigation row at the top and a centred floating
 * pill after scrolling. Both retain the reference geometry and transitions.
 */
export function Header() {
  const pathname = usePathname();
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


  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
            ? "-mt-2.5 w-fit gap-0 rounded-2xl bg-[#eaf3ff]/90 p-1 shadow-[0_8px_24px_rgba(36,86,198,0.12)] max-md:mt-0"
            : "w-full justify-between rounded-xl bg-[#f8fbff]/90"
        }`}
      >
        <Link
          href="/"
          aria-label="Neutra home"
          className={`flex shrink-0 items-center justify-center bg-[#2456c6] text-white ${
            scrolled ? "size-12 rounded-xl p-3" : "size-9 rounded-lg p-2"
          }`}
        >
          <NeutraMark className={scrolled ? "size-6" : "size-5"} />
        </Link>

        <div className={`flex items-center ${scrolled ? "gap-0" : "gap-4"}`}>
          <div
            className={`hidden items-center md:flex ${
              scrolled ? "ml-1 gap-1 rounded-xl bg-[#f8fbff] p-1" : "gap-1 rounded-xl"
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
                        ? "left-1/2 bg-[#2456c6] opacity-100"
                        : "-left-2.5 bg-[#2456c6] opacity-0 blur-[3px] group-hover:left-1/2 group-hover:opacity-100 group-hover:blur-none"
                    }`}
                  />
                  <span
                    className={`text-sm leading-5 font-medium transition-colors group-hover:text-[#2456c6] ${active ? "text-[#2456c6]" : "text-[#14213d]"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className={`flex items-center ${scrolled ? "ml-2 gap-6" : "gap-6 md:gap-4"}`}>
            <a
              href="https://wa.me/6285151884724"
              target="_blank"
              rel="noopener"
              className={`group inline-flex items-center justify-center ${
                scrolled
                  ? "h-12 rounded-xl bg-[#2456c6] px-5 text-white hover:bg-[#1644af]"
                  : "h-9 rounded-lg bg-[#2456c6] px-4 text-white hover:bg-[#1644af]"
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
                  className={`absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-[#2456c6] transition-transform duration-300 ${
                    open ? "rotate-45" : "-translate-y-[5px]"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-[#2456c6] transition-transform duration-300 ${
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
              className="absolute top-[68px] right-4 left-4 flex flex-col gap-1 rounded-xl bg-[#f8fbff] p-2 shadow-[0_8px_24px_rgba(36,86,198,0.16)] md:hidden"
            >
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex h-10 items-center px-4 py-2.5 text-sm leading-5 font-medium hover:text-[#2456c6] ${active ? "text-[#2456c6]" : "text-[#14213d]"}`}
                  >
                    {active ? (
                      <span className="absolute left-[13px] size-[3px] rounded-full bg-[#2456c6]" />
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
