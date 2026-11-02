/** Reproduces the "Made in Framer" badge the reference ships (fixed, bottom-right). */
export function FramerBadge() {
  return (
    <a
      href="https://www.framer.com"
      target="_blank"
      rel="noopener"
      title="Create a free website with Framer, the website builder loved by startups, designers and agencies."
      data-nosnippet="true"
      className="fixed right-5 bottom-5 z-40 flex h-[38px] w-[140px] items-center justify-center gap-1.5 rounded-[10px] bg-white"
      style={{
        boxShadow:
          "rgba(0,0,0,0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0,0,0,0.14) 0px 2.28853px 5.95019px -3px, rgba(0,0,0,0.02) 0px 10px 26px -4.5px, inset 0 0 0 1px rgba(0,0,0,0.04)",
      }}
    >
      <svg viewBox="0 0 30 44" className="h-[14px] w-[9.5px]" fill="#000" aria-hidden>
        <path d="M.671 14.508h14.331l14.66 14.655h-14.66v14.655L.672 29.163V14.508Z" />
        <path d="M.671.182h28.991v14.326h-14.66L.672.182Z" />
      </svg>
      <span className="text-[13px] leading-none font-medium text-black">Made in Framer</span>
    </a>
  );
}
