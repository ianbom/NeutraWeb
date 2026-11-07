"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { Marquee } from "@/components/motion/marquee";

const reviews = [
  {
    avatar: "/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png",
    avatarBg: "#d0dfe6",
    quote: "LiniWeb transformed our website. It now looks much more professional and attractive!",
  },
  {
    avatar: "/images/XfjXHJ2H7SzzlzPr1bGFm1T9BpI.png",
    avatarBg: "#ebee58",
    quote: "Amazing results! Our customer engagement doubled thanks to LiniWeb.",
  },
  {
    avatar: "/images/qCpU7HJtiveCC9wTFuh7L4wc8YM.png",
    avatarBg: "#d4e2e8",
    quote: "LiniWeb’s intuitive design made our digital update a success.",
  },
];

// Width per logo as rendered (24px tall SVG wordmarks).
const logos: [string, number][] = [
  ["R8dilgEbKuaM28BotYk2pOZ0Sgg.svg", 104],
  ["RQtplDgO0QaR12FvioQ15mE35kU.svg", 98],
  ["rim9ymYCtInC2YkivpMBMf8Dn0k.svg", 110],
  ["EwqtQRJ6tQkLQz8wYeL13rdCm5E.svg", 100],
  ["CgaamTpX7MhPEKWQ5nErcXoxdJc.svg", 101],
  ["bD64dsBbmhkS3zkf22186FsX4Ac.svg", 141],
  ["vGXtF9HXsgc9RTwZC0EnFQAc5a0.svg", 101],
  ["9dwWN9t1Rvolj5dKZVTERoTo.svg", 87],
  ["WiaTKEhWhhJvWfoS5B6yeBxEqo.svg", 124],
  ["pWdI1S9RQGdpsjRHvx9SiSIt7Q.svg", 123],
  ["MD3ZaTHRq3jFe94NbAvLnwbQPE.svg", 98],
];
const copyWidth = logos.reduce((s, [, w]) => s + w + 64, 0);

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [position, setPosition] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const max = element.scrollWidth - element.clientWidth;
      setPosition(max > 0 ? Math.max(0, Math.min(1, element.scrollLeft / max)) : 0);
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    setReady(true);
    return () => observer.disconnect();
  }, []);

  const updatePosition = () => {
    const element = track.current;
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    setPosition(max > 0 ? Math.max(0, Math.min(1, element.scrollLeft / max)) : 0);
  };
  const move = (direction: number) => {
    const element = track.current;
    const card = element?.firstElementChild as HTMLElement | null;
    if (!element || !card) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    const left = Math.max(0, Math.min(element.scrollWidth - element.clientWidth, element.scrollLeft + direction * (card.offsetWidth + gap)));
    element.scrollLeft = left;
  };

  return (
    <section aria-label="Testimonials" className="w-full overflow-clip bg-[#f3f3f3]">
      <Container className="section-y flex flex-col gap-12">
        <div className="overflow-hidden rounded-[24px] bg-white px-5 py-10 md:px-8 md:py-12">
          <Reveal className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12">
            <div>
              <p className="mb-6 text-sm font-medium text-ink">{"TESTIMONIALS"}</p>
              <h2 className="max-w-[600px] text-[36px] leading-[1.1] font-semibold tracking-[-0.04em] text-ink md:text-[56px] lg:text-[68px]">{"Worldwide customers"}</h2>
            </div>
            <p className="max-w-[400px] text-base leading-7 text-body md:text-lg">{"LiniWeb helps various businesses grow with website solutions that are modern, efficient and have a real impact. Check out our client satisfaction!"}</p>
          </Reveal>
          <div ref={track} data-testid="testimonial-track" onScroll={updatePosition} onDragStart={(event) => event.preventDefault()} onPointerDown={(event) => {
            if (event.pointerType !== "mouse" || event.currentTarget.scrollWidth <= event.currentTarget.clientWidth) return;
            drag.current = { x: event.clientX, left: event.currentTarget.scrollLeft };
            event.currentTarget.style.scrollSnapType = "none";
            event.currentTarget.setPointerCapture(event.pointerId);
          }} onPointerMove={(event) => {
            if (drag.current) event.currentTarget.scrollLeft = drag.current.left + drag.current.x - event.clientX;
          }} onLostPointerCapture={(event) => { drag.current = null; event.currentTarget.style.removeProperty("scroll-snap-type"); }} className="flex flex-col gap-5 lg:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((r) => (
              <div key={r.quote} className="flex min-h-[250px] flex-col gap-6 rounded-2xl bg-[#f2f2f2] p-6 md:flex-row md:justify-between md:gap-8 lg:w-[47%] lg:shrink-0 lg:snap-start">
                <div className="flex shrink-0 flex-col items-start gap-4 md:w-[38%]">
                  <span className="size-16 overflow-hidden rounded-full" style={{ background: r.avatarBg }}>
                    <Image src={r.avatar} alt="" width={64} height={64} className="size-full object-cover" />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-ink">{"David Johnson"}</p>
                    <p className="text-sm text-body">{"SaaS Company"}</p>
                  </div>
                </div>
                <blockquote className="text-xl leading-8 text-ink">{r.quote}</blockquote>
              </div>
            ))}
          </div>
          <div className="mt-6 hidden items-center gap-5 lg:flex">
            <div role="progressbar" aria-label="Testimonial position" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(position * 100)} className="h-[3px] flex-1 bg-neutral-300">
              <div className="h-full bg-black" style={{ width: `${(1 + position * (reviews.length - 1)) / reviews.length * 100}%` }} />
            </div>
            <button type="button" aria-label="Previous testimonial" disabled={!ready || position <= 0.001} onClick={() => move(-1)} className="flex size-10 items-center justify-center rounded-full bg-black text-xl text-white disabled:bg-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">←</button>
            <button type="button" aria-label="Next testimonial" disabled={!ready || position >= 0.999} onClick={() => move(1)} className="flex size-10 items-center justify-center rounded-full bg-black text-xl text-white disabled:bg-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">→</button>
          </div>
        </div>
        <Marquee copyWidth={copyWidth}>
          {logos.map(([f, w]) => (
            // eslint-disable-next-line @next/next/no-img-element -- tiny static SVG wordmarks
            <img key={f} src={`/images/${f}`} alt="" width={w} height={24} className="h-6 w-auto" />
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
