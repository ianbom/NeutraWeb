import type { Metadata } from "next";

export const siteUrl = "https://www.liniweb.site";

export function pageMetadata(path: string, title: string, description: string, image = "/opengraph-image"): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "LiniWeb",
      locale: "id_ID",
      url: path,
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cases", href: "/cases" },
  { label: "Articles", href: "/article" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Cases", href: "/cases" },
    { label: "Articles", href: "/article" },
  ],
  contact: [
    { label: "Instagram", href: "https://www.instagram.com/liniweb.id/" },
    { label: "WhatsApp", href: "https://wa.me/6285151994724" },
    { label: "E-mail", href: "mailto:mail@liniweb.site" },
  ],
};

export const faqs = [
  {
    q: "What websites can be created on LiniWeb?",
    a: "LiniWeb provides services for creating Landing Pages, Company Profiles, Online Stores (E-Commerce), and Custom Websites. Each website is designed according to your needs, character and business goals.",
  },
  {
    q: "How much does it cost to create a website?",
    a: "Prices for creating a website start from **IDR 1 million for Landing Page**, **IDR 1.5 million for Company Profile**, and **IDR 2.5 million for E-Commerce**. For custom websites, prices are adjusted to feature requirements and project complexity.",
  },
  {
    q: "How long does the website creation process take?",
    a: "Processing time depends on the type of website, number of pages, feature complexity, and material readiness. Work estimates will be provided after project requirements have been discussed.",
  },
  {
    q: "Can the website be accessed via cellphone?",
    a: "Of course. The website is designed to be responsive so that it appears comfortably on smartphones, tablets and desktops. Basic SEO optimization can also be adjusted to suit the package and website needs.",
  },
  {
    q: "Does the price include domain and hosting?",
    a: "Domain and hosting will be adjusted to your needs and the package you choose. We will explain the options, costs, and services included before the project begins.",
  },
  {
    q: "Can I request a website revision?",
    a: "Can. Revisions are carried out according to the project scope and agreement. Additional requirements or feature changes beyond the initial agreement can be discussed in advance.",
  },
  {
    q: "How do I order a website on LiniWeb?",
    a: "Easy! Contact LiniWeb via WhatsApp and tell us about your website needs. We will help determine the appropriate solution, discuss features, and provide a quote before work begins.",
  },
];
