import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { GearSix, RocketLaunch, UsersThree } from "@/components/icons";

const features = [
  {
    Icon: RocketLaunch,
    title: "Tampilan Profesional",
    body: "Desain website modern dan menarik yang memperkuat citra bisnis serta memberikan kesan pertama yang meyakinkan.",
  },
  {
    Icon: UsersThree,
    title: "Nyaman untuk Pelanggan",
    body: "Tampilan responsif dan mudah digunakan, sehingga pelanggan dapat mengakses website dengan nyaman melalui berbagai perangkat.",
  },
  {
    Icon: GearSix,
    title: "Sesuai Kebutuhan Bisnis",
    body: "Mulai dari company profile, landing page, hingga toko online, setiap website dirancang sesuai kebutuhan dan tujuan bisnis Anda.",
  },
];

export function Features() {
  return (
    <section className="w-full overflow-clip">
      <Container className="section-y flex flex-col">
        <SectionHeader
          reveal={false}
          title="Website yang Dirancang untuk Bisnis Anda"
          description="Kami menghadirkan website yang membantu membangun kepercayaan pelanggan dan mendukung perkembangan bisnis."
        />
        <div className="flex flex-col gap-4 lg:flex-row">
          {features.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.06} className="flex-1">
              <div className="flex h-full flex-col gap-8 rounded-3xl bg-linear-to-br from-[#dfeaff] via-[#f9f9fc] to-[#ffdfce] p-8">
                <Icon className="size-12 text-muted" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl leading-8 font-semibold text-ink">{title}</h3>
                  <p className="text-base leading-6 text-body">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
