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
    pricePrefix: "Mulai dari",
    description:
      "Solusi tepat untuk mempromosikan produk, layanan, atau campaign bisnis melalui satu halaman website yang menarik dan terarah.",
    features: [
      "1 halaman landing page",
      "Desain modern sesuai identitas bisnis",
      "Responsif di desktop, tablet & mobile",
      "Hero section dengan CTA yang jelas",
      "Section produk atau layanan",
      "Section keunggulan bisnis",
      "Galeri gambar atau testimoni",
      "Formulir kontak atau calon pelanggan",
      "Integrasi tombol WhatsApp",
      "Integrasi media sosial",
      "Optimasi SEO dasar",
      "Optimasi kecepatan dasar",
      "Bantuan publikasi website",
    ],
    ctaVariant: "outline",
    ctaLabel: "Pilih Landing Page",
    whatsappMessage:
      "Halo LiniWeb, saya tertarik dengan paket Landing Page mulai Rp1.000.000. Saya ingin konsultasi mengenai pembuatan website.",
  },
  {
    id: "company-profile",
    name: "Company Profile",
    price: "Rp1.500.000",
    pricePrefix: "Mulai dari",
    popular: true,
    badge: "Populer",
    description:
      "Bangun citra bisnis yang lebih profesional dengan website informatif yang memperkenalkan perusahaan, layanan, dan portofolio Anda.",
    features: [
      "Hingga 5 halaman website",
      "Desain profesional sesuai branding",
      "Responsif di semua perangkat",
      "Halaman Beranda",
      "Halaman Tentang Kami",
      "Halaman Layanan",
      "Halaman Portofolio atau Galeri",
      "Halaman Kontak",
      "Formulir kontak pelanggan",
      "Integrasi WhatsApp",
      "Integrasi Google Maps",
      "Integrasi media sosial",
      "Navigasi dan CTA yang jelas",
      "Optimasi SEO dasar",
      "Optimasi kecepatan dasar",
      "Bantuan publikasi website",
    ],
    ctaVariant: "brand",
    ctaLabel: "Pilih Company Profile",
    whatsappMessage:
      "Halo LiniWeb, saya tertarik dengan paket Company Profile mulai Rp1.500.000. Saya ingin mengetahui detail layanan dan proses pengerjaannya.",
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    price: "Rp2.500.000",
    pricePrefix: "Mulai dari",
    description:
      "Mulai berjualan secara online dengan website toko yang memudahkan pelanggan menjelajahi produk dan melakukan pemesanan.",
    features: [
      "Website toko online responsif",
      "Desain modern sesuai identitas toko",
      "Halaman katalog produk",
      "Kategori produk",
      "Halaman detail produk",
      "Pencarian dan filter produk dasar",
      "Keranjang belanja",
      "Checkout melalui formulir atau WhatsApp",
      "Dashboard pengelolaan produk",
      "Pengelolaan kategori produk",
      "Pengelolaan stok sederhana",
      "Pengelolaan pesanan dasar",
      "Informasi pembayaran transfer manual",
      "Integrasi WhatsApp",
      "Optimasi SEO dasar",
      "Bantuan publikasi website",
    ],
    ctaVariant: "primary",
    ctaLabel: "Pilih E-Commerce",
    whatsappMessage:
      "Halo LiniWeb, saya tertarik dengan paket E-Commerce mulai Rp2.500.000. Saya ingin konsultasi mengenai website toko online.",
  },
  {
    id: "custom-website",
    name: "Custom Website",
    price: "Harga Sesuai Kebutuhan",
    priceNote: "Penawaran disesuaikan dengan fitur dan kompleksitas proyek.",
    description:
      "Solusi pengembangan website dan sistem berbasis web dengan desain, fitur, dan alur kerja yang disesuaikan dengan kebutuhan bisnis Anda.",
    features: [
      "Desain dan fitur sesuai kebutuhan",
      "Sistem booking atau reservasi",
      "Dashboard admin custom",
      "Sistem manajemen operasional",
      "Multi-user dan hak akses",
      "Membership atau portal pelanggan",
      "Integrasi payment gateway",
      "Integrasi API pihak ketiga",
      "Sistem laporan dan analitik",
      "Sistem inventaris atau penjualan",
      "Otomatisasi proses bisnis",
      "Integrasi layanan pengiriman",
      "Pengembangan sistem khusus",
      "Konsultasi kebutuhan proyek",
    ],
    ctaVariant: "outline",
    ctaLabel: "Konsultasikan Proyek",
    whatsappMessage:
      "Halo LiniWeb, saya ingin konsultasi untuk pembuatan website custom sesuai kebutuhan bisnis saya.",
  },
];

export function Pricing() {
  return (
    <section aria-label="Paket Website" className="w-full overflow-clip">
      <Container className="section-y flex flex-col gap-12 md:gap-14">
        <SectionHeader
          eyebrow={<Eyebrow>Paket Website</Eyebrow>}
          title="Pilih Paket Website Sesuai Kebutuhan"
          description="Mulai dari landing page hingga toko online, temukan solusi website profesional dengan harga transparan dan fitur yang sesuai kebutuhan bisnis Anda."
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
          *Harga merupakan estimasi awal dan dapat berubah sesuai kebutuhan fitur serta
          kompleksitas proyek.
        </p>
      </Container>
    </section>
  );
}
