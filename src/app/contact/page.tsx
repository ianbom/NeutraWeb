import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/button";
import type { ReactNode } from "react";
import { Chats, MapPin, PhoneCall, RocketLaunch } from "@/components/icons";

export const metadata = {
  title: "Kontak - LiniWeb - Jasa Pembuatan Website",
  description:
    "Hubungi kami untuk konsultasi pembuatan website, penawaran harga, dan diskusi kebutuhan proyek digital bisnis Anda.",
};

const cards: { Icon: typeof Chats; title: string; body: ReactNode; link: string; href?: string; gradient: string }[] = [
  {
    Icon: Chats,
    title: "Message us",
    body: "Diskusikan ruang lingkup dan langkah pembuatan website bersama kami melalui WhatsApp.",
    link: "+62 851-5199-4724",
    href: "https://wa.me/6285151994724?text=Halo%20LiniWeb%2C%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20pembuatan%20website.",
    gradient: "bg-linear-to-br from-[#dbeafe] via-[#f0f7ff] to-[#e0e7ff]",
  },
  {
    Icon: PhoneCall,
    title: "Call us",
    body: "Konsultasikan langsung kebutuhan website, fitur yang ingin dikembangkan, dan penawaran biaya.",
    link: "+62 851-5199-4724",
    href: "tel:+6285151994724",
    gradient: "bg-linear-to-br from-[#ffedd5] via-[#fff7ed] to-[#ffe4d6]",
  },
  {
    Icon: MapPin,
    title: "Address",
    body: "Software house berbasis di Surabaya yang berfokus pada jasa pembuatan website profesional.",
    link: "Surabaya, Jawa Timur, Indonesia",
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
            <Eyebrow size="xs">HUBUNGI KAMI</Eyebrow>
            <h1 className="w-full text-[36px] leading-[44px] font-semibold text-ink md:text-[48px] md:leading-[56px] md:font-bold">
              Konsultasikan Kebutuhan Website Anda
            </h1>
            <p className="w-full max-w-[560px] text-base leading-6 text-body md:text-lg md:leading-7">
              Ceritakan bisnis Anda, halaman yang dibutuhkan, dan fitur yang ingin dikembangkan bersama tim kami.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {cards.map(({ Icon, title, body, link, href, gradient }) => (
                <div key={title} className="rounded-3xl bg-surface p-2">
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
                        className="text-sm leading-5 font-semibold text-ink transition-colors hover:text-brand"
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
                        Kirimkan pesan seputar kebutuhan website Anda
                      </h2>
                      <p className="text-sm leading-5 text-body">
                        Ceritakan ide dan kebutuhan proyek Anda. Tim kami akan menghubungi Anda kembali untuk diskusi lebih lanjut.
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
