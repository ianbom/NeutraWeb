export interface ArticleBlock { tag: string; html: string }
export interface Article {
  slug: string;
  title: string;
  author: string;
  category: string;
  readTime: number;
  date: string;
  avatar: string;
  image: string;
  excerpt: string;
  body: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "pentingnya-website-profesional-untuk-bisnis",
    title: "The Importance of a Professional Website to Increase Business Credibility in the Digital Era",
    author: "LiniWeb Editorial Team",
    category: "Business Strategy",
    readTime: 4,
    date: "2 Nov 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-1.jpg",
    excerpt: "In the digital era, websites are no longer just a complement, but rather the main showcase that determines potential customers' trust in your business.",
    body: [
      {
        tag: "p",
        html: "In today's digital era, potential customers' first impression of your business almost always starts from the internet. When someone hears the name of your brand or product, the first step they often take is to search for it via Google. Without an official and professional website, potential buyers have the potential to doubt the legitimacy of your business."
      },
      {
        tag: "h3",
        html: "Building Trust From the First Second"
      },
      {
        tag: "p",
        html: "A professional website with a neat appearance, clear navigation, and transparent contact information gives visitors a sense of security. Customers feel more at ease when transacting with a company that has an official domain and a solid visual identity compared to just a social media account."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Your Digital Marketing Control Center"
      },
      {
        tag: "p",
        html: "In contrast to social media whose algorithms can change at any time, a website is an independent digital asset that is completely yours. You have full control over how products are displayed, how brand stories are told, as well as incoming visitor data for long-term business development needs."
      },
      {
        tag: "p",
        html: "Investing in the creation of a high-quality website is a fundamental step to lay the foundation for sustainable and competitive business growth in the modern market."
      }
    ]
  },
  {
    slug: "panduan-memilih-jasa-pembuatan-website",
    title: "Complete Guide to Choosing the Right and Trusted Website Creation Services",
    author: "LiniWeb Web Consultant",
    category: "Tips & Guides",
    readTime: 5,
    date: "29 Oct 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-2.jpg",
    excerpt: "Choosing a web development partner requires precision so that the website results match the business vision, are on time, and provide optimal return on investment.",
    body: [
      {
        tag: "p",
        html: "Finding a website creation vendor or agency is often confusing because there are so many choices with very varied price ranges. To avoid making the wrong choice, you need strategic guidance in evaluating potential work partners."
      },
      {
        tag: "h3",
        html: "Check Portfolio and Real Evidence"
      },
      {
        tag: "p",
        html: "See real work that has been done by the vendor. Open their portfolio website directly via laptop and smartphone. Pay attention to whether the display is responsive, the speed is good, and the order flow is easy to understand."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Cost Transparency and After Sales Service"
      },
      {
        tag: "p",
        html: "Make sure the cost breakdown includes domain, hosting, SSL certificate, regular maintenance, as well as post-launch technical support. Professional website creation services always provide transparent details without any hidden costs later on."
      },
      {
        tag: "p",
        html: "Responsive two-way communication and a deep understanding of your business model are key signs of an agency worthy of being a long-term partner."
      }
    ]
  },
  {
    slug: "perbedaan-company-profile-landing-page-toko-online",
    title: "Get to know the differences between company profile websites, landing pages and online stores",
    author: "LiniWeb Editorial Team",
    category: "Web Design",
    readTime: 4,
    date: "25 Oct 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-3.jpg",
    excerpt: "Understand the differences in function, structure and target audience of each type of website so that your development budget is right on target.",
    body: [
      {
        tag: "p",
        html: "Each type of website has a different role in your business ecosystem. Choosing the right type of website from the start will save time and ensure marketing goals are achieved effectively."
      },
      {
        tag: "h3",
        html: "1. Website Company Profile"
      },
      {
        tag: "p",
        html: "Functions as a complete digital profile containing the company's vision, mission, services, portfolio and history. Perfect for B2B businesses, consultants, contractors and service companies looking to build a strong reputation with corporate clients."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "2. Promotional Landing Page"
      },
      {
        tag: "p",
        html: "A one-page website specifically designed for a single purpose (Call-to-Action), such as collecting contact leads, webinar registrations, or selling specific products from paid advertising (Meta Ads/Google Ads)."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "3. Online Store (E-Commerce)"
      },
      {
        tag: "p",
        html: "Complete platform with product catalog, shopping basket, automatic payment gateway integration, and real-time shipping cost calculations for independent buying and selling of goods."
      }
    ]
  },
  {
    slug: "strategi-desain-website-responsif",
    title: "Responsive Web Design Strategy: Reach Customers on All Devices",
    author: "LiniWeb UI/UX Specialist",
    category: "Web Design",
    readTime: 4,
    date: "21 Oct 2026",
    avatar: "/images/v9Uq1lUqZg61tJ253P5096o.png",
    image: "/images/articles/article-4.jpg",
    excerpt: "More than 70% of web traffic now comes from mobile devices. Responsive web design ensures maximum comfort on both mobile and desktop screens.",
    body: [
      {
        tag: "p",
        html: "Currently internet users access websites via various screen sizes, ranging from compact screen smartphones, tablets, to large computer monitors. A website that is stiff and difficult to read on a smartphone will soon be abandoned by visitors."
      },
      {
        tag: "h3",
        html: "Mobile-First Approach"
      },
      {
        tag: "p",
        html: "Designing a website with a mobile-first approach prioritizes essential content and thumb-friendly navigation. The CTA button is made quite large, the text size is comfortable to read without zooming, and the menu is kept simple."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Positive Impact on Google Rankings"
      },
      {
        tag: "p",
        html: "Google firmly implements Mobile-First Indexing. This means that the performance and ease of display of the mobile version of the website are the main benchmarks for Google's algorithm in determining search result rankings."
      }
    ]
  },
  {
    slug: "optimasi-kecepatan-loading-website",
    title: "How to Improve Website Loading Speed and Keep Visitors Engaged",
    author: "LiniWeb Technical Lead",
    category: "Technology & SEO",
    readTime: 5,
    date: "18 Oct 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-5.jpg",
    excerpt: "Access speed is key to user experience and conversion. Learn important techniques to increase your website loading time.",
    body: [
      {
        tag: "p",
        html: "Studies prove that users will leave a website that takes more than 3 seconds to load. Every second of delay has a direct impact on the loss of potential sales and visitor satisfaction."
      },
      {
        tag: "h3",
        html: "Image Compression and Modern Formats"
      },
      {
        tag: "p",
        html: "Large images are often the main cause of slow websites. Use modern formats such as WebP or AVIF that offer superior compression without compromising visual sharpness. Also apply the lazy loading technique to load images when scrolling."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Fast Hosting and CDN Utilization"
      },
      {
        tag: "p",
        html: "Choose a reliable hosting server provider with Content Delivery Network (CDN) support. CDN distributes static website assets to servers closest to the visitor's location, so response times are much shorter."
      }
    ]
  },
  {
    slug: "membangun-toko-online-ramah-pengguna",
    title: "Steps to Build an Online Store (E-Commerce) that is User Friendly and Generates Sales",
    author: "LiniWeb Editorial Team",
    category: "E-Commerce",
    readTime: 6,
    date: "14 Oct 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-6.jpg",
    excerpt: "Building a successful online store is not just about displaying products, but providing a fast, secure and seamless shopping experience.",
    body: [
      {
        tag: "p",
        html: "An effective online store must be able to guide potential buyers from the stage of viewing the product to completing payment smoothly. The slightest obstacle in the checkout process can trigger cart abandonment."
      },
      {
        tag: "h3",
        html: "Smart Navigation and Search Features"
      },
      {
        tag: "p",
        html: "Categorize products logically and provide responsive search and filter features. Customers who can find their dream product in seconds have a much higher transaction propensity."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Complete and Integrated Payment Methods"
      },
      {
        tag: "p",
        html: "Provide various popular payment options in Indonesia, starting from QRIS, national bank Virtual Accounts, e-wallets, to credit cards via safe and reliable official payment gateways."
      }
    ]
  },
  {
    slug: "pentingnya-seo-on-page-sejak-awal",
    title: "Why Should On-Page SEO Optimization Be Applied From the Beginning of Website Creation?",
    author: "LiniWeb Technical Lead",
    category: "Technology & SEO",
    readTime: 5,
    date: "10 Oct 2026",
    avatar: "/images/v9Uq1lUqZg61tJ253P5096o.png",
    image: "/images/articles/article-7.jpg",
    excerpt: "A website structure that is search engine friendly from the first day of launch will bring in potential organic customers on an ongoing basis.",
    body: [
      {
        tag: "p",
        html: "Many business owners only think about Search Engine Optimization (SEO) after the website has been created. In fact, incorporating SEO architecture from the planning stage will be much more cost-effective and provide optimal long-term results."
      },
      {
        tag: "h3",
        html: "Neat URL and Heading Structure"
      },
      {
        tag: "p",
        html: "A clear page hierarchy structure (H1, H2, H3), clean and descriptive URLs, and an automatically updated sitemap (sitemap.xml) help Google crawlers understand your business topics accurately."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Meta Tags and Local Content Optimization"
      },
      {
        tag: "p",
        html: "Each page needs to be equipped with an attractive meta title and meta description. For local businesses, the inclusion of geographic keywords and schema markup will increase the chances of appearing in Google Maps local searches."
      }
    ]
  },
  {
    slug: "memilih-domain-dan-hosting-bisnis",
    title: "Guide to Choosing the Right Domain Name and Hosting for the Foundation of a Business Website",
    author: "LiniWeb Web Consultant",
    category: "Tips & Guides",
    readTime: 4,
    date: "6 Oct 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-8.jpg",
    excerpt: "The domain name is the identity address of your business, while the hosting is the home. Don't make a mistake in determining the basic foundation of your website.",
    body: [
      {
        tag: "p",
        html: "Choosing a domain and hosting is one of the first decisions in starting a website. The wrong choice can cause performance problems, downtime and branding difficulties in the future."
      },
      {
        tag: "h3",
        html: "Tips for Choosing the Right Domain Name"
      },
      {
        tag: "p",
        html: "Choose a domain name that is short, easy to spell, easy to remember, and reflects your business brand name. Avoid using numbers and hyphens (-) which confuse visitors when spoken orally."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Criteria for Choosing a Reliable Hosting Package"
      },
      {
        tag: "p",
        html: "Pay attention to the guaranteed uptime of at least 99.9%, the availability of daily automatic backups, free SSL certificates, and a customer service team that is ready 24/7 to help when technical problems occur."
      }
    ]
  },
  {
    slug: "tanda-waktu-tepat-redesign-website",
    title: "5 Signs It’s Time to Redesign Your Business Website",
    author: "LiniWeb UI/UX Specialist",
    category: "Business Strategy",
    readTime: 4,
    date: "2 Oct 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-9.jpg",
    excerpt: "An outdated website can reduce a company's professional image. Recognize the main signs when your website needs updating.",
    body: [
      {
        tag: "p",
        html: "Web design trends and user expectations are evolving very quickly. A website designed several years ago may no longer be relevant to current market needs."
      },
      {
        tag: "h3",
        html: "Signs that a Website Needs to be Updated"
      },
      {
        tag: "ol",
        html: "<li><strong>Unresponsive Display:</strong> Website feels difficult to navigate on modern smartphone screens.</li><li><strong>Very Slow Loading:</strong> Slow page load time due to old, unoptimized technology.</li><li><strong>Low Conversion Rate:</strong> Lots of visitors coming but no one is contacting or buying.</li><li><strong>Outdated Information:</strong> Difficult to update text or portfolio content due to an outdated CMS system stiff.</li><li><strong>Outdated Design:</strong> Website visuals look outdated compared to competitors in the same industry.</li>"
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "p",
        html: "Redesigning not only rejuvenates the appearance, but also reorganizes the strategy so that the website becomes an effective business lead generation machine again."
      }
    ]
  },
  {
    slug: "menjaga-keamanan-website-bisnis",
    title: "How to Protect Your Business Website from Cyberattacks and Malware",
    author: "LiniWeb Technical Lead",
    category: "Security & Maintenance",
    readTime: 5,
    date: "28 Sep 2026",
    avatar: "/images/v9Uq1lUqZg61tJ253P5096o.png",
    image: "/images/articles/article-10.jpg",
    excerpt: "Website security is not only about protecting company data, but also maintaining the trust of your customers' privacy data.",
    body: [
      {
        tag: "p",
        html: "Every day thousands of websites are targeted by automated cyber attacks. Small to medium scale businesses are often easy targets because they are considered to have minimal protection systems."
      },
      {
        tag: "h3",
        html: "Must Use SSL Certificate (HTTPS)"
      },
      {
        tag: "p",
        html: "SSL certificates encrypt data sent between the visitor's browser and the website server. Without SSL, modern browsers will display a 'Not Secure' warning that immediately scares away potential customers."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Regular Updates and Automatic Backups"
      },
      {
        tag: "p",
        html: "Always update the core framework, plugins and website modules to the latest version to close security gaps (vulnerabilities). Also perform regular backups to an external server so that the website can be restored instantly if an emergency occurs."
      }
    ]
  },
  {
    slug: "pentingnya-maintenance-website-rutin",
    title: "The importance of routine maintenance so that your business website is always in top condition",
    author: "LiniWeb Web Consultant",
    category: "Security & Maintenance",
    readTime: 4,
    date: "24 Sep 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-11.jpg",
    excerpt: "A successful website requires regular maintenance to keep it secure, fast, and always provide the most up-to-date information for customers.",
    body: [
      {
        tag: "p",
        html: "Creating a website is not a one-time process. Without routine maintenance, websites are vulnerable to decreased performance, broken links, and security problems that are detrimental to business."
      },
      {
        tag: "h3",
        html: "What to do during maintenance?"
      },
      {
        tag: "p",
        html: "Maintenance includes speed performance audits, security updates, verifying the functionality of the contact form and WhatsApp integration, cleaning the database from junk data, and checking for broken links."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Maintain Website Readiness All the Time"
      },
      {
        tag: "p",
        html: "With regular maintenance, you can detect potential technical issues before they impact customers. Your website will always be ready to accept potential clients at any time without worry."
      }
    ]
  },
  {
    slug: "tips-landing-page-konversi-tinggi",
    title: "The Secret to Designing a High-Converting Landing Page that Effectively Turns Visitors into Buyers",
    author: "LiniWeb UI/UX Specialist",
    category: "Web Design",
    readTime: 5,
    date: "20 Sep 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-12.jpg",
    excerpt: "Learn landing page structure formulas that are proven to capture visitors' attention and encourage them to take purchasing action.",
    body: [
      {
        tag: "p",
        html: "Landing pages are the spearhead of your digital marketing campaign. An effective landing page doesn't just look beautiful, it has a psychological flow that convinces potential customers gradually."
      },
      {
        tag: "h3",
        html: "Strong Headline and Clear Value Offer"
      },
      {
        tag: "p",
        html: "In the first 5 seconds, visitors should understand what you are offering and how your product or service can solve their problem. Use headlines that are specific and directly touch the customer's main needs."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Hypnotic Social Proof and Action Buttons"
      },
      {
        tag: "p",
        html: "Include client testimonials, partner logos, or achievement statistics to build trust. Place a prominent Call-to-Action (CTA) button with clear call-to-action text, such as 'Consult Now' or 'Get a Free Quote'."
      }
    ]
  }
];

export const featuredArticles = articles.slice(0, 2);
export const newsArticles = articles.slice(2);
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
