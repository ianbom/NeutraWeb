import type { Metadata } from "next";
import { Manrope, Instrument_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { FramerBadge } from "@/components/layout/framer-badge";
import { PromoPopup } from "@/components/layout/promo-popup";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"] });
// ponytail: reference uses the licensed "Great Vibes"-class script for the director signature.
const script = Great_Vibes({ variable: "--font-script", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Neutra - Innovate with Design",
  description:
    "At Neutra, we merge creativity and strategy to craft designs that both captivate and elevate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrument.variable} ${script.variable}`}>
      <body className="overflow-x-clip">
        <Header />
        {children}
        <FramerBadge />
        <PromoPopup />
      </body>
    </html>
  );
}
