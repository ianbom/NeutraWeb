import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/button";
import type { ReactNode } from "react";
import { Chats, MapPin, PhoneCall, RocketLaunch } from "@/components/icons";

export const metadata = {
  title: "Contact - Neutra - Innovate Develop Succeed",
  description:
    "Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.",
};

const cards: { Icon: typeof Chats; title: string; body: ReactNode; link: string; href?: string }[] = [
  { Icon: Chats, title: "Message us", body: "Message us using our online chat system for quick and efficient support.", link: "support@neutra.com", href: "mailto:support@neutra.com" },
  { Icon: PhoneCall, title: "Call us", body: "Let's have a chat – there's nothing quite like talking to another person.", link: "+1(438) 000-0000", href: "tel:+14380000000" },
  { Icon: MapPin, title: "Address", body: <>We&apos;d be delighted to welcome you to our <span className="md:max-lg:hidden">Head </span>Office.</>, link: "Montreal, Canada, 110 Notre-Dame St W", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <main className="flex w-full justify-center">
        <Container className="flex flex-col items-center gap-12 pt-12 pb-16 md:pb-20 lg:gap-16 lg:pt-16 lg:pb-24">
          <div className="flex w-full max-w-[720px] flex-col items-center gap-4 text-center">
            <Eyebrow size="xs">NEUTRA CONTACT</Eyebrow>
            <h1 className="w-full text-[36px] leading-[44px] font-semibold text-ink md:text-[48px] md:leading-[56px] md:font-bold">
              Get in touch with us today!
            </h1>
            <p className="w-full max-w-[560px] text-base leading-6 text-body md:text-lg md:leading-7">
              Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {cards.map(({ Icon, title, body, link, href }) => (
                <div key={title} className="rounded-3xl bg-surface p-2">
                  <div className="flex h-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-[inset_0_0_0_1px_var(--color-line)]">
                    <Icon className="size-8 text-body" />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg leading-6 font-semibold text-ink">{title}</h2>
                      <p className="text-sm leading-5 text-body">{body}</p>
                    </div>
                    <div className="h-px w-full bg-line" />
                    {href ? (
                      <a href={href} className="text-sm leading-5 font-semibold text-ink">{link}</a>
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
                        Feel free to send our friendly team a message
                      </h2>
                      <p className="text-sm leading-5 text-body">
                        Message us using our online chat system for quick and efficient support.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
                    {["Free 7-day trial", "No credit card required", "Cancel anytime"].map((t) => (
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
