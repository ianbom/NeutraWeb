export interface CaseItem { title: string; href: string; image: string; tags: string[]; bg?: string }

export const cases: CaseItem[] = [
  {
    title: "VYREN",
    href: "https://vyren-ecom.vercel.app/",
    image: "/portfolio/vyren-ecom.webp",
    tags: ["E-Commerce", "Fashion"],
    bg: "#1b3b2b",
  },
  {
    title: "ATELIER",
    href: "https://arvena.vercel.app/",
    image: "/portfolio/atelier.webp",
    tags: ["Company Profile", "Architecture", "Interior Design"],
    bg: "#7047eb",
  },
  {
    title: "GALERYA",
    href: "https://galerya-living.vercel.app/",
    image: "/portfolio/galerya.webp",
    tags: ["Company Profile", "Furniture"],
    bg: "#1e3a5f",
  },
  {
    title: "NOIREL",
    href: "https://noirel-studio.vercel.app/",
    image: "/portfolio/noirel.webp",
    tags: ["Company Profile", "Interior Design"],
    bg: "#b45309",
  },
  {
    title: "NOIRVA",
    href: "https://studio-noirva.vercel.app/",
    image: "/portfolio/noirva.webp",
    tags: ["Company Profile", "Architecture", "Interior Design"],
    bg: "#0f766e",
  },
  {
    title: "NOIRVA / Studio",
    href: "https://noirva-studio.vercel.app/",
    image: "/portfolio/noirva-2.webp",
    tags: ["Company Profile", "Architecture", "Interior Design"],
    bg: "#581c87",
  },
  {
    title: "VANTRA",
    href: "https://studio-vantra.vercel.app/",
    image: "/portfolio/vantra.webp",
    tags: ["Company Profile", "Architecture", "Construction"],
    bg: "#881337",
  },
  {
    title: "NORTHFORM",
    href: "https://northform-shoes.vercel.app/",
    image: "/portfolio/northform-ecom.webp",
    tags: ["E-Commerce", "Fashion", "Footwear"],
    bg: "#2563eb",
  },
  {
    title: "LIFETIME",
    href: "https://life-livin.vercel.app/",
    image: "/portfolio/lifetime.webp",
    tags: ["Company Profile", "Interior Design", "Architecture"],
    bg: "#284e3a",
  },
  {
    title: "LIFTCO",
    href: "https://vinch.vercel.app/",
    image: "/portfolio/liftco.webp",
    tags: ["Company Profile", "Heavy Equipment"],
    bg: "#c2410c",
  },
  {
    title: "SPIL",
    href: "https://spill-ship.vercel.app/",
    image: "/portfolio/spil.webp",
    tags: ["Company Profile", "Logistics", "Shipping"],
    bg: "#0284c7",
  },
  {
    title: "FOLVIA",
    href: "https://folvia.vercel.app/",
    image: "/portfolio/folvia.webp",
    tags: ["E-Commerce", "Lifestyle"],
    bg: "#334155",
  },
];

export const homeCases: CaseItem[] = [
  cases[0], // VYREN
  cases[1], // ATELIER
  cases[4], // NOIRVA
  cases[3], // NOIREL
];

