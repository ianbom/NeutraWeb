import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { GearSix, RocketLaunch, UsersThree } from "@/components/icons";

const features = [
  {
    Icon: RocketLaunch,
    title: "Professional Look",
    body: "A modern and attractive website design that strengthens the business image and makes a convincing first impression.",
  },
  {
    Icon: UsersThree,
    title: "Convenient for Customers",
    body: "The display is responsive and easy to use, so customers can access the website comfortably via various devices.",
  },
  {
    Icon: GearSix,
    title: "According to Business Needs",
    body: "Starting from company profiles, landing pages, to online stores, each website is designed according to your business needs and goals.",
  },
];

export function Features() {
  return (
    <section className="w-full overflow-clip">
      <Container className="section-y flex flex-col">
        <SectionHeader
          reveal={false}
          title="Website Designed for Your Business"
          description="We present a website that helps build customer trust and supports business development."
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
