import type { Metadata } from "next";
import { Manrope, Instrument_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { siteUrl } from "@/data/site";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"] });
// ponytail: reference uses the licensed "Great Vibes"-class script for the director signature.
const script = Great_Vibes({ variable: "--font-script", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LiniWeb - Jasa Pembuatan Website Profesional",
  description:
    "LiniWeb adalah software house di Surabaya yang berfokus pada jasa pembuatan website profesional, landing page, company profile, dan e-commerce.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${manrope.variable} ${instrument.variable} ${script.variable}`}>
      <body className="overflow-x-clip">
        <Header />
        {children}
      </body>
    </html>
  );
}
