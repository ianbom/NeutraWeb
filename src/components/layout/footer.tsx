import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { NeutraMark, TwitterLogo, DribbbleLogo, LinkedinLogo } from "@/components/icons";
import { footerLinks, social } from "@/data/site";

const socialIcons = [
  { href: social.x, label: "X", Icon: TwitterLogo },
  { href: social.dribbble, label: "Dribbble", Icon: DribbbleLogo },
  { href: social.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <Reveal className="flex w-[139px] flex-col gap-4 md:w-[130px] lg:w-[205px]">
      <p className="text-sm leading-5 font-medium text-[#c7dfff]">{title}</p>
      <div className="flex flex-col gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm leading-5 font-medium text-white transition-colors hover:text-[#c7dfff]"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </Reveal>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#f2f7ff] p-2">
      <div className="mx-auto w-full max-w-[1152px] rounded-2xl bg-[radial-gradient(ellipse_at_85%_0%,rgba(76,155,255,0.3),transparent_55%),linear-gradient(125deg,#1644af,#2456c6)] md:rounded-[32px]">
        <div className="flex flex-col gap-12 px-8 py-8 md:gap-16 md:px-8 md:pt-12 md:pb-8 lg:px-6 lg:pt-16 lg:pb-8">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
            <Reveal className="flex max-w-[442px] flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <NeutraMark className="size-6 text-white" />
                <span className="text-xl leading-[26px] font-semibold text-white">Neutra</span>
              </Link>
              <p className="text-sm leading-5 text-white">
                Get in touch to find out more about digital experiences to effectively reach and
                engage customers and target audiences.
              </p>
            </Reveal>
            <div className="flex gap-8 md:w-[292px] md:justify-between lg:w-[442px]">
              <Column title="Company" links={footerLinks.company} />
              <Column title="Legal" links={footerLinks.legal} />
            </div>
          </div>

          <div className="flex flex-col gap-8 border-t border-[#93c5fd]/40 pt-[31px] md:flex-row md:items-start md:justify-between md:gap-0">
            <p className="text-sm leading-5 text-[#dcebff]">
              © Neutra Template | Created by{" "}
              <a href="https://stylokit.com/" target="_blank" rel="noopener" className="text-white">
                Stylokit
              </a>{" "}
              - Powered by{" "}
              <a href="https://framer.com/" target="_blank" rel="noopener" className="text-white">
                Framer
              </a>
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="text-[#dcebff] transition-colors hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
