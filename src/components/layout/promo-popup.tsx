"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "@/components/icons";

/**
 * The "New release" promo thumbnail the reference pins above the Framer badge:
 * 138x104, radius 10; hovering fades in a 75% black overlay with the label,
 * plus a close button that removes it for the session.
 */
export function PromoPopup() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="group fixed right-[21px] bottom-[62px] z-40 h-[104px] w-[138px]">
      <div className="relative size-full overflow-clip rounded-[10px]">
        <Image
          src="/images/vYf7Bp88A2oX0r0rBYroXDxsSI.jpg"
          alt="Nivora template preview"
          width={138}
          height={104}
          className="size-full object-cover"
        />
        <a
          href="https://nivora.framer.website/"
          target="_blank"
          rel="noopener"
          className="absolute inset-0 flex items-end bg-black/75 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none"
        >
          <span className="font-instrument text-base leading-6 font-medium tracking-[-0.32px] text-white">
            New release
          </span>
        </a>
      </div>
      <button
        type="button"
        aria-label="Dismiss promotion"
        onClick={() => setVisible(false)}
        className="absolute top-0 right-0 flex size-8 items-center justify-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none"
      >
        <X className="size-4 text-white/50" />
      </button>
    </div>
  );
}
