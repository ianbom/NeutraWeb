import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { GearSix, RocketLaunch, UsersThree } from "@/components/icons";

const features = [
  {
    Icon: RocketLaunch,
    title: "Project Display",
    body: "Showcase portfolio projects with visually appealing and effective layouts to attract potential clients.",
  },
  {
    Icon: UsersThree,
    title: "Client Feedback",
    body: "Build credibility by displaying dynamic testimonials from satisfied clients on your site.",
  },
  {
    Icon: GearSix,
    title: "Services Overview",
    body: "Detailed, interactive listings to engage visitors and provide insights into your services.",
  },
];

export function Features() {
  return (
    <section className="w-full overflow-clip bg-[#eaf3ff]">
      <Container className="section-y flex flex-col">
        <SectionHeader
          reveal={false}
          title="Uncover Our Distinct Features"
          description="Website construction entails the creation and design of online platforms, encompassing layout, content, and user interaction."
        />
        <div className="flex flex-col gap-4 lg:flex-row">
          {features.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.06} className="flex-1">
              <div className="flex h-full flex-col gap-8 rounded-3xl bg-[#f8fbff] p-8 shadow-[inset_0_0_0_1px_#d6e4f7] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_#bcd4f5,0_12px_28px_rgba(36,86,198,0.08)] motion-reduce:transform-none motion-reduce:transition-none">
                <Icon className="size-12 text-[#2456c6]" />
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
