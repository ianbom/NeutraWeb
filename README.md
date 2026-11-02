# Neutra — Next.js recreation

A pixel-matched frontend recreation of [neutra.framer.website](https://neutra.framer.website/)
(the Neutra Framer template by Stylokit), built with Next.js 16, React 19, Tailwind CSS v4 and
Motion for React.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Asset licensing — read before deploying

`public/images/` holds the **original assets downloaded from the reference site** (3D shapes,
project screenshots, avatars, client wordmarks). They belong to Stylokit / Dmytri Ivanov and are
here for local development only. The build also reproduces Framer-specific chrome on purpose:
the "Remix template" button, the "Made in Framer" badge and the "New release" promo popup, all
pointing at framer.com / stylokit.com.

Before any public deployment, replace the images and remove or re-point that chrome
(`src/components/layout/framer-badge.tsx`, `promo-popup.tsx`, `remixUrl` in `src/data/site.ts`).

## Structure

```
src/app/            routes: /, /about, /cases, /article, /article/[slug], /contact, /legal/[slug]
src/components/
  layout/           header (incl. scrolled pill + mobile menu), footer, framer badge, promo popup
  sections/         home/* section components, shared faq, case-card, article-card, contact-form
  motion/           reveal, parallax/float/appear, blur-text, marquee
  shared/           container, button + tag + eyebrow, section-header, rich-text, roll-label
  icons/            Phosphor-style icons extracted from the reference
src/data/           site, cases, articles, team, legal (scraped reference content)
scripts/            reference-inspection tooling (see below)
```

## Design tokens (measured from the reference)

| token | value |
| --- | --- |
| breakpoints | phone `<810`, tablet `810–1199`, desktop `≥1200` |
| container | 1200 max, 24px gutters (16px phone) |
| section rhythm | phone 64/48, tablet 80/48, desktop 96/64 (`section-y` utility) |
| ink / body / muted / dim | `#1a1a1a` `#383838` `#8e8e8e` `#a7a7a7` |
| surface / line / brand | `#f5f4f6` `#e6e6e6` `#ff620a` |
| fonts | Manrope (body), Instrument Sans (promo), script face for the signature |

## Motion (values measured off the reference, not invented)

- **Scroll reveal** — `opacity 0 → 1` with a 96px rise under `perspective(1200px)`, spring
  `stiffness 90 / damping 20`, triggering ~100px before the element enters the viewport and
  replaying on re-entry (`src/components/motion/reveal.tsx`).
- **Statement heading** — per-character reveal from `opacity .001 / blur(10px) / y 10px`, 26ms
  stagger, plays once.
- **Hero** — shapes fade up from +32px on load; Shape 3 parallaxes at `-0.2 × scrollY`, Shape 2
  drifts at `+0.01 ×`, Shape 1 floats 0 ↔ −32px over 6.4s.
- **Header** — collapses past 85px scroll into a centred `rgba(26,26,26,.5) + blur(5px)` pill.
- **Hover** — nav dot slides in from the left while unblurring; buttons roll their label up one
  line; case images scale 1.1 with the ↗ icon sliding in; article cards shift padding 8/0 → 0/16;
  footer links go orange.
- **Logo marquee** — ~70px/s, 64px gap, 5% edge fade.
- `prefers-reduced-motion` drops transforms and the marquee everywhere.

## Reference-comparison tooling

These scripts drive headless Chromium against the live reference and `localhost:3100`:

| script | purpose |
| --- | --- |
| `scripts/compare.mjs <route> <w> [h]` | side-by-side settled frames into `cmp/` |
| `scripts/sections.mjs <route> <w>` | section top/height table (`SUMMARY=1` for deltas) |
| `scripts/positions.mjs <route> <w> "a\|b"` | settled position of specific elements |
| `scripts/boxes.mjs <route> <w> <sel>` | rects for a selector |
| `scripts/sweep.mjs [widths]` | every route × width: height delta, overflow, broken images, console errors |
| `scripts/motion-check.mjs` | matched interaction states (hover, pill, menu, mid-reveal) |
| `scripts/dump.mjs`, `fetch-assets.mjs`, `content.mjs` | layout dumps, asset download, CMS text extraction |

Run the dev server on port 3100 first (`npm run dev -- -p 3100`); outputs land in `cmp/` and `ref/`
(both git-ignored).
