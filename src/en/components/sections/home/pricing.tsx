import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/motion/reveal";
import { Button, Eyebrow, Tag } from "@/components/shared/button";
import { SectionHeader } from "@/components/shared/section-header";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  pricePrefix?: string;
  priceNote?: string;
  features: string[];
  popular?: boolean;
  badge?: string;
  ctaVariant: "outline" | "primary" | "brand";
  ctaLabel: string;
  whatsappMessage: string;
}

const WA_BASE_URL = "https://wa.me/6285151994724";

const plans: PricingPlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    price: "Rp1.000.000",
    pricePrefix: "Starting from",
    description:
      "The right solution for promoting products, services or business campaigns through one attractive and targeted website page.",
    features: [
      "1 page landing page",
      "Modern design according to business identity",
      "Responsive on desktop, tablet & mobile",
      "Hero section with a clear CTA",
      "Product or service section",
      "Business excellence section",
      "Image gallery or testimonials",
      "Contact or prospecting form",
      "WhatsApp button integration",
      "Social media integration",
      "Basic SEO optimization",
      "Basic speed optimization",
      "Website publication assistance",
    ],
    ctaVariant: "outline",
    ctaLabel: "Select Landing Page",
    whatsappMessage:
      "Hello LiniWeb, I am interested in the Landing Page package starting from IDR 1,000,000. I want to consult about creating a website.",
  },
  {
    id: "company-profile",
    name: "Company Profile",
    price: "Rp1.500.000",
    pricePrefix: "Starting from",
    popular: true,
    badge: "Popular",
    description:
      "Build a more professional business image with an informative website that introduces your company, services and portfolio.",
    features: [
      "Up to 5 website pages",
      "Professional design according to branding",
      "Responsive on all devices",
      "Home Page",
      "About Us Page",
      "Services Page",
      "Portfolio or Gallery Page",
      "Contact Page",
      "Customer contact form",
      "WhatsApp integration",
      "Google Maps integration",
      "Social media integration",
      "Clear navigation and CTAs",
      "Basic SEO optimization",
      "Basic speed optimization",
      "Website publication assistance",
    ],
    ctaVariant: "brand",
    ctaLabel: "Select Company Profile",
    whatsappMessage:
      "Hello LiniWeb, I am interested in the Company Profile package starting from IDR 1,500,000. I want to know the details of the service and the work process.",
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    price: "Rp2.500.000",
    pricePrefix: "Starting from",
    description:
      "Start selling online with a shop website that makes it easy for customers to explore products and place orders.",
    features: [
      "Responsive online shop website",
      "Modern design matches the store's identity",
      "Product catalog page",
      "Product category",
      "Product details page",
      "Basic product search and filter",
      "shopping cart",
      "Checkout via form or WhatsApp",
      "Product management dashboard",
      "Product category management",
      "Simple stock management",
      "Basic order management",
      "Manual transfer payment information",
      "WhatsApp integration",
      "Basic SEO optimization",
      "Website publication assistance",
    ],
    ctaVariant: "primary",
    ctaLabel: "Select E-Commerce",
    whatsappMessage:
      "Hello LiniWeb, I am interested in the E-Commerce package starting from IDR 2,500,000. I want to consult about an online shop website.",
  },
  {
    id: "custom-website",
    name: "Custom Website",
    price: "Custom pricing",
    priceNote: "Offers are tailored to the features and complexity of the project.",
    description:
      "Website development solutions and web-based systems with designs, features and workflows tailored to your business needs.",
    features: [
      "Design and features according to needs",
      "Booking or reservation system",
      "Custom admin dashboard",
      "Operational management system",
      "Multi-user and access rights",
      "Membership or customer portal",
      "Payment gateway integration",
      "Third party API integration",
      "Reporting and analytics system",
      "Inventory or sales system",
      "Business process automation",
      "Delivery service integration",
      "Custom system development",
      "Consultation on project needs",
    ],
    ctaVariant: "outline",
    ctaLabel: "Consult Projects",
    whatsappMessage:
      "Hello LiniWeb, I would like a consultation on creating a custom website according to my business needs.",
  },
];

export function Pricing() {
  return (
    <section aria-label="Website Package" className="w-full overflow-clip">
      <Container className="section-y flex flex-col gap-12 md:gap-14">
        <SectionHeader
          eyebrow={<Eyebrow>{"Website Package"}</Eyebrow>}
          title="Choose a Website Package According to Your Needs"
          description="From landing pages to online stores, find professional website solutions with transparent prices and features that suit your business needs."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {plans.map((p, i) => {
            const dark = p.popular;
            const waUrl = `${WA_BASE_URL}?text=${encodeURIComponent(p.whatsappMessage)}`;

            return (
              <Reveal key={p.id} delay={i * 0.06} className="h-full">
                <div
                  className={`flex h-full flex-col justify-between rounded-3xl p-6 ${
                    dark ? "bg-ink" : "bg-surface"
                  }`}
                >
                  <div className="flex flex-1 flex-col gap-6">
                    <div className="flex items-center justify-between min-h-[32px]">
                      <h3
                        className={`text-2xl leading-8 font-semibold ${
                          dark ? "text-white" : "text-ink"
                        }`}
                      >
                        {p.name}
                      </h3>
                      {dark && p.badge ? <Tag tone="dark">{p.badge}</Tag> : null}
                    </div>

                    <div className={`h-px w-full ${dark ? "bg-body" : "bg-line"}`} />

                    <p className={`text-sm leading-6 ${dark ? "text-dim" : "text-body"}`}>
                      {p.description}
                    </p>

                    <ul className="flex list-none flex-col gap-3 p-0">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span
                            className={`size-1 shrink-0 rounded-full mt-2.5 ${
                              dark ? "bg-dim" : "bg-muted"
                            }`}
                          />
                          <span
                            className={`text-sm leading-6 ${
                              dark ? "text-dim" : "text-body"
                            }`}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 flex flex-col gap-1">
                      {p.pricePrefix ? (
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            dark ? "text-dim" : "text-muted"
                          }`}
                        >
                          {p.pricePrefix}
                        </span>
                      ) : null}
                      <span
                        className={`text-[32px] leading-[44px] font-semibold ${
                          dark ? "text-white" : "text-ink"
                        }`}
                      >
                        {p.price}
                      </span>
                      {p.priceNote ? (
                        <span
                          className={`text-xs leading-relaxed ${
                            dark ? "text-dim" : "text-muted"
                          }`}
                        >
                          {p.priceNote}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button
                      href={waUrl}
                      external
                      variant={p.ctaVariant}
                      className="w-full"
                    >
                      {p.ctaLabel}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto max-w-[920px] text-center text-xs leading-5 text-muted px-4">
          {"*Prices are initial estimates and may change based on features and requirements\n          project complexity."}
        </p>
      </Container>
    </section>
  );
}
