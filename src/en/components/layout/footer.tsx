import { LocalLink as Link } from "@/components/shared/local-link";
import { Reveal } from "@/components/motion/reveal";
import { LiniWebMark } from "@/components/icons";
import { footerLinks } from "@/en/data/site";

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <Reveal className="flex w-[139px] flex-col gap-4 md:w-[130px] lg:w-[205px]">
      <p className="text-sm leading-5 font-medium text-dim">{title}</p>
      <div className="flex flex-col gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm leading-5 font-medium text-white transition-colors hover:text-[#ff4800]"
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
    <footer className="w-full bg-surface p-2">
      <div className="mx-auto w-full max-w-[1152px] rounded-2xl bg-[#03050b] bg-[radial-gradient(ellipse_65%_80%_at_90%_120%,rgba(165,62,0,0.6),transparent_70%),radial-gradient(ellipse_100%_100%_at_35%_125%,#073ba6,transparent_75%)] md:rounded-[32px]">
        <div className="flex flex-col gap-12 px-8 py-8 md:gap-16 md:px-8 md:pt-12 md:pb-8 lg:px-6 lg:pt-16 lg:pb-8">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
            <Reveal className="flex max-w-[442px] flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <LiniWebMark className="size-6 text-white" />
                <span className="text-xl leading-[26px] font-semibold text-white">{"LiniWeb"}</span>
              </Link>
              <p className="text-sm leading-5 text-white">
                {"Software house in Surabaya that focuses on professional website creation services, landing pages, company profiles and e-commerce to advance your business."}
              </p>
            </Reveal>
            <div className="flex gap-8 md:w-[292px] md:justify-between lg:w-[442px]">
              <Column title="Company" links={footerLinks.company} />
              <Column title="Contact" links={footerLinks.contact} />
            </div>
          </div>

          <div className="flex flex-col gap-8 border-t border-body pt-[31px] md:flex-row md:items-start md:justify-between md:gap-0">
            <p className="text-sm leading-5 text-gray-300">
              {"© 2026 LiniWeb. All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
