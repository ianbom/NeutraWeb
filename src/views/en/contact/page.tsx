import { Faq } from "@/en/components/sections/faq";
import { Footer } from "@/en/components/layout/footer";
import { ContactForm } from "@/en/components/sections/contact-form";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/button";
import type { ReactNode } from "react";
import { Chats, MapPin, PhoneCall, RocketLaunch } from "@/components/icons";

import { pageMetadata } from "@/en/data/site";

export const metadata = pageMetadata(
  "/contact",
  "Konsultasi & Penawaran Jasa Pembuatan Website | LiniWeb",
  "Hubungi LiniWeb melalui WhatsApp atau email untuk konsultasi pembuatan website, rincian biaya, dan diskusi kebutuhan website bisnis Anda.",
);

const cards: { Icon: typeof Chats; title: string; body: ReactNode; link: string; href?: string; gradient: string }[] = [
  {
    Icon: Chats,
    title: "Message us",
    body: "Discuss the scope and steps for creating a website with us via WhatsApp.",
    link: "+62 851-5199-4724",
    href: "https://wa.me/6285151994724?text=Hello%20LiniWeb%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.",
    gradient: "bg-linear-to-br from-[#dbeafe] via-[#f0f7ff] to-[#e0e7ff]",
  },
  {
    Icon: PhoneCall,
    title: "Call us",
    body: "Contact us via WhatsApp to discuss website needs and cost quotes.",
    link: "+62 851-5199-4724",
    href: "https://wa.me/6285151994724",
    gradient: "bg-linear-to-br from-[#ffedd5] via-[#fff7ed] to-[#ffe4d6]",
  },
  {
    Icon: MapPin,
    title: "Address",
    body: "Surabaya-based software house that focuses on professional website creation services.",
    link: "Surabaya, East Java, Indonesia",
    href: undefined,
    gradient: "bg-linear-to-br from-[#ede9fe] via-[#f5f3ff] to-[#fae8ff]",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="flex w-full justify-center">
        <Container className="flex flex-col items-center gap-12 pt-12 pb-16 md:pb-20 lg:gap-16 lg:pt-16 lg:pb-24">
          <div className="flex w-full max-w-[720px] flex-col items-center gap-4 text-center">
            <Eyebrow size="xs">{"CONTACT US"}</Eyebrow>
            <h1 className="w-full text-[36px] leading-[44px] font-semibold text-ink md:text-[48px] md:leading-[56px] md:font-bold">
              {"Consult your website needs"}
            </h1>
            <p className="w-full max-w-[560px] text-base leading-6 text-body md:text-lg md:leading-7">
              {"Tell us about your business, the pages you need, and the features you want to develop with our team."}
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {cards.map(({ Icon, title, body, link, href, gradient }) => (
                <div key={title} className="relative rounded-3xl bg-surface p-2">
                  <div className={`flex h-full flex-col gap-6 rounded-2xl p-6 shadow-[inset_0_0_0_1px_var(--color-line)] ${gradient}`}>
                    <Icon className="size-8 text-body" />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg leading-6 font-semibold text-ink">{title}</h2>
                      <p className="text-sm leading-5 text-body">{body}</p>
                    </div>
                    <div className="h-px w-full bg-line" />
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                        className="text-sm leading-5 font-semibold text-ink transition-colors after:absolute after:inset-0 after:rounded-3xl hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                      >
                        {link}
                      </a>
                    ) : (
                      <p className="text-sm leading-5 font-semibold text-ink">{link}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-surface p-2">
              <div className="flex flex-col gap-12 rounded-2xl bg-white p-6 md:flex-row md:gap-24 md:p-12">
                <div className="flex w-full flex-col gap-8 md:min-w-0 md:flex-1">
                  <div className="flex flex-col gap-6">
                    <RocketLaunch className="size-8 text-body" />
                    <div className="flex flex-col gap-3">
                      <h2 className="max-w-[480px] text-2xl leading-8 font-semibold text-ink">
                        {"Send messages about your website needs"}
                      </h2>
                      <p className="text-sm leading-5 text-body">
                        {"Tell us your project ideas and needs, then send a message via WhatsApp."}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
                    {["Konsultasi Gratis", "Penawaran Transparan", "Solusi Tepat Bisnis"].map((t) => (
                      <p key={t} className="text-sm leading-5 font-semibold text-ink">{t}</p>
                    ))}
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Faq />
      <Footer />
    </>
  );
}
