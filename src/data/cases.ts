export interface CaseItem { title: string; href: string; image: string; tags: string[]; bg?: string }

export const cases: CaseItem[] = [
  {
    title: "VYREN",
    href: "https://vyren-ecom.vercel.app/",
    image: "/portfolio/vyren-ecom.webp",
    tags: ["E-Commerce"],
    bg: "#1b3b2b",
  },
  {
    title: "ATELIER",
    href: "https://arvena.vercel.app/",
    image: "/portfolio/atelier.webp",
    tags: ["Situs Web"],
    bg: "#7047eb",
  },
  {
    title: "GALERYA",
    href: "https://galerya-living.vercel.app/",
    image: "/portfolio/galerya.webp",
    tags: ["Situs Web"],
    bg: "#1e3a5f",
  },
  {
    title: "NOIREL",
    href: "https://noirel-studio.vercel.app/",
    image: "/portfolio/noirel.webp",
    tags: ["Situs Web"],
    bg: "#b45309",
  },
  {
    title: "NOIRVA",
    href: "https://studio-noirva.vercel.app/",
    image: "/portfolio/noirva.webp",
    tags: ["Situs Web"],
    bg: "#0f766e",
  },
  {
    title: "NOIRVA / Studio",
    href: "https://noirva-studio.vercel.app/",
    image: "/portfolio/noirva-2.webp",
    tags: ["Situs Web"],
    bg: "#581c87",
  },
  {
    title: "VANTRA",
    href: "https://studio-vantra.vercel.app/",
    image: "/portfolio/vantra.webp",
    tags: ["Situs Web"],
    bg: "#881337",
  },
  {
    title: "NORTHFORM",
    href: "https://northform-shoes.vercel.app/",
    image: "/portfolio/northform-ecom.webp",
    tags: ["E-Commerce"],
    bg: "#2563eb",
  },
  {
    title: "LIFETIME",
    href: "https://life-livin.vercel.app/",
    image: "/portfolio/lifetime.webp",
    tags: ["Situs Web"],
    bg: "#284e3a",
  },
  {
    title: "LIFTCO",
    href: "https://vinch.vercel.app/",
    image: "/portfolio/liftco.webp",
    tags: ["Situs Web"],
    bg: "#c2410c",
  },
  {
    title: "SPIL",
    href: "https://spill-ship.vercel.app/",
    image: "/portfolio/spil.webp",
    tags: ["Situs Web"],
    bg: "#0284c7",
  },
  {
    title: "FOLVIA",
    href: "https://folvia.vercel.app/",
    image: "/portfolio/folvia.webp",
    tags: ["E-Commerce"],
    bg: "#334155",
  },
];

export const homeCases: CaseItem[] = [
  cases[0], // VYREN
  cases[1], // ATELIER
  cases[4], // NOIRVA
  cases[3], // NOIREL
];

