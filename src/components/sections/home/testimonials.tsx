import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/shared/button";
import { SectionHeader } from "@/components/shared/section-header";
import { Marquee } from "@/components/motion/marquee";

const reviews = [
  {
    bg: "bg-card-steel",
    avatar: "/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png",
    avatarBg: "#d0dfe6",
    quote: "Neutra transformed our website, we've never looked better!",
  },
  {
    bg: "bg-card-lemon",
    avatar: "/images/XfjXHJ2H7SzzlzPr1bGFm1T9BpI.png",
    avatarBg: "#ebee58",
    quote: "Incredible results! Our client engagement has doubled thanks to Neutra.",
  },
  {
    bg: "bg-card-sky",
    avatar: "/images/qCpU7HJtiveCC9wTFuh7L4wc8YM.png",
    avatarBg: "#d4e2e8",
    quote: "Neutra’s intuitive design made our digital overhaul a complete success.",
  },
];

// Width per logo as rendered (24px tall SVG wordmarks).
const logos: [string, number][] = [
  ["R8dilgEbKuaM28BotYk2pOZ0Sgg.svg", 104],
  ["RQtplDgO0QaR12FvioQ15mE35kU.svg", 98],
  ["rim9ymYCtInC2YkivpMBMf8Dn0k.svg", 110],
  ["EwqtQRJ6tQkLQz8wYeL13rdCm5E.svg", 100],
  ["CgaamTpX7MhPEKWQ5nErcXoxdJc.svg", 101],
  ["bD64dsBbmhkS3zkf22186FsX4Ac.svg", 141],
  ["vGXtF9HXsgc9RTwZC0EnFQAc5a0.svg", 101],
  ["9dwWN9t1Rvolj5dKZVTERoTo.svg", 87],
  ["WiaTKEhWhhJvWfoS5B6yeBxEqo.svg", 124],
  ["pWdI1S9RQGdpsjRHvx9SiSIt7Q.svg", 123],
  ["MD3ZaTHRq3jFe94NbAvLnwbQPE.svg", 98],
];
const copyWidth = logos.reduce((s, [, w]) => s + w + 64, 0);

export function Testimonials() {
  return (
    <section className="w-full overflow-clip bg-[#f2f7ff]">
      <Container className="section-y flex flex-col">
        <SectionHeader
          eyebrow={<Eyebrow>Testimonials</Eyebrow>}
          phone="sm"
              title="Worldwide customers"
          description="Neutra empowers global teams with seamless integration and time-saving capabilities. Discover user success!"
        />
        <div className="flex flex-col gap-4 lg:flex-row">
          {reviews.map((r, i) => (
            <Reveal key={r.quote} delay={i * 0.06} className="flex-1">
              <div className={`flex h-full flex-col gap-6 rounded-3xl p-8 ${r.bg}`}>
                <div className="flex items-center gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white p-0.5">
                    <span className="size-11 overflow-hidden rounded-full" style={{ background: r.avatarBg }}>
                      <Image src={r.avatar} alt="" width={44} height={44} className="size-11 object-cover" />
                    </span>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-lg leading-6 font-semibold text-ink">David Johnson</p>
                    <p className="text-sm leading-5 text-ink">Saas company</p>
                  </div>
                </div>
                <blockquote className="text-2xl leading-8 font-semibold text-ink">{r.quote}</blockquote>
              </div>
            </Reveal>
          ))}
        </div>
        <Marquee copyWidth={copyWidth}>
          {logos.map(([f, w]) => (
            // eslint-disable-next-line @next/next/no-img-element -- tiny static SVG wordmarks
            <img key={f} src={`/images/${f}`} alt="" width={w} height={24} className="h-6 w-auto" />
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
