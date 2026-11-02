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
    title: "Pentingnya Website Profesional untuk Meningkatkan Kredibilitas Bisnis di Era Digital",
    author: "Tim Editorial LiniWeb",
    category: "Strategi Bisnis",
    readTime: 4,
    date: "2 Nov 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-1.jpg",
    excerpt: "Di era digital, website bukan lagi sekadar pelengkap, melainkan etalase utama yang menentukan kepercayaan calon pelanggan terhadap bisnis Anda.",
    body: [
      {
        tag: "p",
        html: "Di era serba digital saat ini, kesan pertama calon pelanggan terhadap bisnis Anda hampir selalu dimulai dari internet. Ketika seseorang mendengar nama merek atau produk Anda, langkah pertama yang sering mereka lakukan adalah mencarinya melalui Google. Tanpa website yang resmi dan profesional, calon pembeli berpotensi meragukan keabsahan usaha Anda."
      },
      {
        tag: "h3",
        html: "Membangun Kepercayaan Sejak Detik Pertama"
      },
      {
        tag: "p",
        html: "Website profesional dengan tampilan rapi, navigasi jelas, dan informasi kontak yang transparan memberikan rasa aman kepada pengunjung. Pelanggan merasa lebih tenang bertransaksi dengan perusahaan yang memiliki domain resmi dan identitas visual yang solid dibandingkan akun media sosial semata."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Pusat Kendali Pemasaran Digital Anda"
      },
      {
        tag: "p",
        html: "Berbeda dengan media sosial yang algoritmanya bisa berubah sewaktu-waktu, website adalah aset digital mandiri milik Anda seutuhnya. Anda memegang kendali penuh atas bagaimana produk ditampilkan, bagaimana cerita merek disampaikan, serta data pengunjung yang masuk untuk kebutuhan pengembangan bisnis jangka panjang."
      },
      {
        tag: "p",
        html: "Investasi pada pembuatan website berkualitas tinggi adalah langkah mendasar untuk meletakkan fondasi pertumbuhan bisnis yang berkelanjutan dan kompetitif di pasar modern."
      }
    ]
  },
  {
    slug: "panduan-memilih-jasa-pembuatan-website",
    title: "Panduan Lengkap Memilih Jasa Pembuatan Website yang Tepat dan Terpercaya",
    author: "Konsultan Web LiniWeb",
    category: "Tips & Panduan",
    readTime: 5,
    date: "29 Okt 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-2.jpg",
    excerpt: "Memilih mitra pengembang web memerlukan ketelitian agar hasil website sesuai visi bisnis, tepat waktu, dan memberikan return on investment optimal.",
    body: [
      {
        tag: "p",
        html: "Menemukan vendor atau agency pembuatan website sering kali membingungkan karena banyaknya pilihan dengan rentang harga yang sangat variatif. Agar tidak salah pilih, Anda memerlukan panduan strategis dalam mengevaluasi calon mitra kerja."
      },
      {
        tag: "h3",
        html: "Periksa Portofolio dan Bukti Nyata"
      },
      {
        tag: "p",
        html: "Lihat karya nyata yang pernah dikerjakan oleh vendor tersebut. Buka website portofolio mereka secara langsung melalui laptop dan smartphone. Perhatikan apakah tampilannya responsif, kecepatannya baik, dan alur pemesanannya mudah dipahami."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Transparansi Biaya dan Layanan Purna Jual"
      },
      {
        tag: "p",
        html: "Pastikan rincian biaya mencakup domain, hosting, sertifikat SSL, pemeliharaan rutin, serta dukungan teknis pasca-peluncuran. Jasa pembuatan website profesional selalu memberikan rincian transparan tanpa ada biaya tersembunyi di kemudian hari."
      },
      {
        tag: "p",
        html: "Komunikasi dua arah yang responsif dan pemahaman mendalam tentang model bisnis Anda adalah tanda utama agensi yang layak dijadikan mitra jangka panjang."
      }
    ]
  },
  {
    slug: "perbedaan-company-profile-landing-page-toko-online",
    title: "Mengenal Perbedaan Website Company Profile, Landing Page, dan Toko Online",
    author: "Tim Editorial LiniWeb",
    category: "Web Design",
    readTime: 4,
    date: "25 Okt 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-3.jpg",
    excerpt: "Pahami perbedaan fungsi, struktur, dan target audiens dari masing-masing jenis website agar anggaran pengembangan Anda tepat sasaran.",
    body: [
      {
        tag: "p",
        html: "Setiap jenis website memiliki peran yang berbeda dalam ekosistem bisnis Anda. Memilih tipe website yang tepat sejak awal akan menghemat waktu dan memastikan tujuan pemasaran tercapai secara efektif."
      },
      {
        tag: "h3",
        html: "1. Website Company Profile"
      },
      {
        tag: "p",
        html: "Berfungsi sebagai profil digital lengkap yang memuat visi, misi, layanan, portofolio, dan sejarah perusahaan. Sangat cocok untuk bisnis B2B, konsultan, kontraktor, dan perusahaan jasa yang ingin membangun reputasi kuat di mata klien korporat."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "2. Landing Page Promosi"
      },
      {
        tag: "p",
        html: "Website satu halaman yang dirancang khusus untuk satu tujuan tunggal (Call-to-Action), seperti mengumpulkan prospek kontak, pendaftaran webinar, atau penjualan produk spesifik dari iklan berbayar (Meta Ads/Google Ads)."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "3. Toko Online (E-Commerce)"
      },
      {
        tag: "p",
        html: "Platform lengkap dengan katalog produk, keranjang belanja, integrasi payment gateway otomatis, serta kalkulasi ongkos kirim real-time untuk transaksi jual beli barang secara mandiri."
      }
    ]
  },
  {
    slug: "strategi-desain-website-responsif",
    title: "Strategi Desain Web Responsif: Menjangkau Pelanggan di Semua Perangkat",
    author: "Spesialis UI/UX LiniWeb",
    category: "Web Design",
    readTime: 4,
    date: "21 Okt 2026",
    avatar: "/images/v9Uq1lUqZg61tJ253P5096o.png",
    image: "/images/articles/article-4.jpg",
    excerpt: "Lebih dari 70% lalu lintas web kini berasal dari perangkat seluler. Desain web responsif memastikan kenyamanan maksimal di layar ponsel maupun desktop.",
    body: [
      {
        tag: "p",
        html: "Saat ini pengguna internet mengakses website melalui berbagai ukuran layar, mulai dari smartphone berlayar kompak, tablet, hingga monitor komputer berukuran besar. Website yang kaku dan sulit dibaca di smartphone akan segera ditinggalkan pengunjung."
      },
      {
        tag: "h3",
        html: "Pendekatan Mobile-First"
      },
      {
        tag: "p",
        html: "Merancang website dengan pendekatan mobile-first memprioritaskan konten esensial dan navigasi yang mudah disentuh dengan ibu jari. Tombol CTA dibuat cukup besar, ukuran teks nyaman dibaca tanpa zoom, dan menu dibuat simpel."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Dampak Positif terhadap Peringkat Google"
      },
      {
        tag: "p",
        html: "Google secara tegas menerapkan Mobile-First Indexing. Artinya, performa dan kemudahan tampilan website versi seluler menjadi tolok ukur utama algoritma Google dalam menentukan peringkat hasil pencarian."
      }
    ]
  },
  {
    slug: "optimasi-kecepatan-loading-website",
    title: "Cara Efektif Mengoptimalkan Kecepatan Loading Website agar Pengunjung Tidak Kabur",
    author: "Technical Lead LiniWeb",
    category: "Teknologi & SEO",
    readTime: 5,
    date: "18 Okt 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-5.jpg",
    excerpt: "Kecepatan akses adalah kunci pengalaman pengguna dan konversi. Pelajari teknik penting meningkatkan loading time website Anda.",
    body: [
      {
        tag: "p",
        html: "Studi membuktikan bahwa pengguna akan meninggalkan website yang membutuhkan waktu loading lebih dari 3 detik. Setiap detik keterlambatan berdampak langsung pada hilangnya potensi penjualan dan kepuasan pengunjung."
      },
      {
        tag: "h3",
        html: "Kompresi Gambar dan Format Modern"
      },
      {
        tag: "p",
        html: "Gambar berukuran besar sering menjadi penyebab utama website lambat. Gunakan format modern seperti WebP atau AVIF yang menawarkan kompresi superior tanpa menurunkan ketajaman visual. Terapkan juga teknik lazy loading untuk memuat gambar saat di-scroll."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Hosting Cepat dan Pemanfaatan CDN"
      },
      {
        tag: "p",
        html: "Pilih penyedia server hosting yang handal dengan dukungan Content Delivery Network (CDN). CDN mendistribusikan aset statis website ke server terdekat dengan lokasi pengunjung, sehingga waktu respon menjadi jauh lebih singkat."
      }
    ]
  },
  {
    slug: "membangun-toko-online-ramah-pengguna",
    title: "Langkah Membangun Toko Online (E-Commerce) yang Ramah Pengguna dan Menghasilkan Penjualan",
    author: "Tim Editorial LiniWeb",
    category: "E-Commerce",
    readTime: 6,
    date: "14 Okt 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-6.jpg",
    excerpt: "Membangun toko online sukses bukan hanya soal memajang produk, tetapi menghadirkan pengalaman belanja yang cepat, aman, dan tanpa hambatan.",
    body: [
      {
        tag: "p",
        html: "Toko online yang efektif harus mampu membimbing calon pembeli dari tahap melihat produk hingga menyelesaikan pembayaran dengan mulus. Hambatan sekecil apa pun pada proses checkout dapat memicu keranjang belanja ditinggalkan (cart abandonment)."
      },
      {
        tag: "h3",
        html: "Navigasi dan Fitur Pencarian yang Cerdas"
      },
      {
        tag: "p",
        html: "Kategorikan produk secara logis dan sediakan fitur pencarian serta filter yang responsif. Pelanggan yang dapat menemukan produk impian mereka dalam hitungan detik memiliki kecenderungan transaksi jauh lebih tinggi."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Metode Pembayaran Lengkap dan Terintegrasi"
      },
      {
        tag: "p",
        html: "Sediakan berbagai opsi pembayaran populer di Indonesia, mulai dari QRIS, Virtual Account bank nasional, e-wallet, hingga kartu kredit melalui payment gateway resmi yang aman dan terpercaya."
      }
    ]
  },
  {
    slug: "pentingnya-seo-on-page-sejak-awal",
    title: "Mengapa Optimasi SEO On-Page Harus Diterapkan Sejak Awal Pembuatan Website?",
    author: "Technical Lead LiniWeb",
    category: "Teknologi & SEO",
    readTime: 5,
    date: "10 Okt 2026",
    avatar: "/images/v9Uq1lUqZg61tJ253P5096o.png",
    image: "/images/articles/article-7.jpg",
    excerpt: "Struktur website yang ramah mesin pencari sejak hari pertama peluncuran akan mendatangkan calon pelanggan organik secara berkelanjutan.",
    body: [
      {
        tag: "p",
        html: "Banyak pemilik bisnis baru memikirkan Search Engine Optimization (SEO) setelah website selesai dibuat. Padahal, memasukkan arsitektur SEO sejak tahap perencanaan akan jauh lebih hemat biaya dan memberikan hasil jangka panjang yang optimal."
      },
      {
        tag: "h3",
        html: "Struktur URL dan Heading yang Rapi"
      },
      {
        tag: "p",
        html: "Struktur hierarki halaman yang jelas (H1, H2, H3), URL yang bersih dan deskriptif, serta peta situs (sitemap.xml) yang otomatis terbarui membantu perayap Google memahami topik bisnis Anda dengan akurat."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Meta Tag dan Optimasi Konten Lokal"
      },
      {
        tag: "p",
        html: "Setiap halaman perlu dilengkapi dengan meta title dan meta description yang menarik. Bagi bisnis lokal, penyertaan kata kunci geografis dan schema markup akan meningkatkan peluang muncul di pencarian lokal Google Maps."
      }
    ]
  },
  {
    slug: "memilih-domain-dan-hosting-bisnis",
    title: "Panduan Memilih Nama Domain dan Hosting yang Tepat untuk Fondasi Website Bisnis",
    author: "Konsultan Web LiniWeb",
    category: "Tips & Panduan",
    readTime: 4,
    date: "6 Okt 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-8.jpg",
    excerpt: "Nama domain adalah alamat identitas bisnis Anda, sedangkan hosting adalah rumahnya. Jangan salah menentukan fondasi dasar website Anda.",
    body: [
      {
        tag: "p",
        html: "Memilih domain dan hosting adalah salah satu keputusan pertama dalam memulai website. Pilihan yang keliru dapat menimbulkan masalah performa, gangguan downtime, hingga kesulitan branding di masa depan."
      },
      {
        tag: "h3",
        html: "Tips Memilih Nama Domain yang Tepat"
      },
      {
        tag: "p",
        html: "Pilihlah nama domain yang singkat, mudah dieja, mudah diingat, dan mencerminkan nama merek bisnis Anda. Hindari penggunaan angka dan tanda hubung (-) yang membingungkan pengunjung ketika diucapkan secara lisan."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Kriteria Memilih Paket Hosting Handal"
      },
      {
        tag: "p",
        html: "Perhatikan jaminan uptime minimal 99.9%, ketersediaan backup otomatis harian, sertifikat SSL gratis, serta tim layanan pelanggan yang siaga 24/7 untuk membantu saat terjadi kendala teknis."
      }
    ]
  },
  {
    slug: "tanda-waktu-tepat-redesign-website",
    title: "5 Tanda Jelas Bahwa Website Bisnis Anda Sudah Saatnya Melakukan Redesign",
    author: "Spesialis UI/UX LiniWeb",
    category: "Strategi Bisnis",
    readTime: 4,
    date: "2 Okt 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-9.jpg",
    excerpt: "Website yang usang dapat menurunkan citra profesional perusahaan. Kenali tanda-tanda utama kapan website Anda perlu diperbarui.",
    body: [
      {
        tag: "p",
        html: "Tren desain web dan ekspektasi pengguna berkembang sangat cepat. Website yang dirancang beberapa tahun lalu mungkin sudah tidak relevan lagi dengan kebutuhan pasar saat ini."
      },
      {
        tag: "h3",
        html: "Tanda-Tanda Website Perlu Diperbarui"
      },
      {
        tag: "ol",
        html: "<li><strong>Tampilan Tidak Responsif:</strong> Website terasa sulit dinavigasi pada layar ponsel pintar modern.</li><li><strong>Loading Sangat Lambat:</strong> Waktu buka halaman lambat akibat teknologi lama yang tidak dioptimalkan.</li><li><strong>Tingkat Konversi Rendah:</strong> Pengunjung banyak yang datang tetapi tidak ada yang menghubungi atau membeli.</li><li><strong>Informasi Sudah Usang:</strong> Sulit memperbarui teks atau konten portofolio karena sistem CMS yang kaku.</li><li><strong>Desain Ketinggalan Zaman:</strong> Visual website terlihat kuno dibandingkan dengan kompetitor di industri yang sama.</li>"
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "p",
        html: "Melakukan redesign bukan hanya meremajakan tampilan, tetapi juga menata ulang strategi agar website kembali menjadi mesin penghasil prospek bisnis yang efektif."
      }
    ]
  },
  {
    slug: "menjaga-keamanan-website-bisnis",
    title: "Langkah Proaktif Menjaga Keamanan Website Bisnis dari Serangan Siber dan Malware",
    author: "Technical Lead LiniWeb",
    category: "Keamanan & Maintenance",
    readTime: 5,
    date: "28 Sep 2026",
    avatar: "/images/v9Uq1lUqZg61tJ253P5096o.png",
    image: "/images/articles/article-10.jpg",
    excerpt: "Keamanan website bukan hanya soal melindungi data perusahaan, tetapi juga menjaga kepercayaan data privasi pelanggan Anda.",
    body: [
      {
        tag: "p",
        html: "Setiap hari ribuan website menjadi sasaran serangan siber otomatis. Bisnis skala kecil hingga menengah sering menjadi target empuk karena dianggap memiliki sistem proteksi yang minim."
      },
      {
        tag: "h3",
        html: "Wajib Menggunakan Sertifikat SSL (HTTPS)"
      },
      {
        tag: "p",
        html: "Sertifikat SSL mengenkripsi data yang dikirimkan antara browser pengunjung dan server website. Tanpa SSL, browser modern akan menampilkan peringatan 'Not Secure' yang langsung menakuti calon pelanggan."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Pembaruan Berkala dan Backup Otomatis"
      },
      {
        tag: "p",
        html: "Selalu perbarui core framework, plugin, dan modul website ke versi terbaru untuk menutup celah keamanan (vulnerability). Lakukan juga backup berkala ke server eksternal agar website dapat dipulihkan seketika jika terjadi hal darurat."
      }
    ]
  },
  {
    slug: "pentingnya-maintenance-website-rutin",
    title: "Pentingnya Pemeliharaan (Maintenance) Rutin agar Website Bisnis Selalu Prima",
    author: "Konsultan Web LiniWeb",
    category: "Keamanan & Maintenance",
    readTime: 4,
    date: "24 Sep 2026",
    avatar: "/images/cfae5rVbOPJ9IKMr5XZltSR4.png",
    image: "/images/articles/article-11.jpg",
    excerpt: "Website yang sukses membutuhkan perawatan rutin agar tetap aman, cepat, dan selalu menyajikan informasi terkini bagi pelanggan.",
    body: [
      {
        tag: "p",
        html: "Membuat website bukanlah proses satu kali selesai. Tanpa perawatan rutin, website rentan mengalami penurunan performa, broken links, hingga gangguan keamanan yang merugikan bisnis."
      },
      {
        tag: "h3",
        html: "Apa Saja yang Dilakukan Saat Maintenance?"
      },
      {
        tag: "p",
        html: "Pemeliharaan mencakup audit performa kecepatan, pembaruan keamanan, verifikasi fungsi formulir kontak dan integrasi WhatsApp, pembersihan database dari data sampah, serta pengecekan tautan yang rusak."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Menjaga Kesiapan Website Sepanjang Waktu"
      },
      {
        tag: "p",
        html: "Dengan perawatan teratur, Anda dapat mendeteksi potensi masalah teknis sebelum berdampak pada pelanggan. Website Anda akan selalu siap menerima calon klien setiap saat tanpa rasa cemas."
      }
    ]
  },
  {
    slug: "tips-landing-page-konversi-tinggi",
    title: "Rahasia Merancang Landing Page Berkonversi Tinggi yang Efektif Mengubah Pengunjung Menjadi Pembeli",
    author: "Spesialis UI/UX LiniWeb",
    category: "Web Design",
    readTime: 5,
    date: "20 Sep 2026",
    avatar: "/images/t5uzwsiwsFXTYFR0OZYCfVZEw.png",
    image: "/images/articles/article-12.jpg",
    excerpt: "Pelajari formula struktur landing page yang terbukti memikat perhatian pengunjung dan mendorong mereka mengambil tindakan pembelian.",
    body: [
      {
        tag: "p",
        html: "Landing page adalah ujung tombak kampanye pemasaran digital Anda. Landing page yang efektif tidak sekadar terlihat cantik, melainkan memiliki alur psikologis yang meyakinkan calon pelanggan secara bertahap."
      },
      {
        tag: "h3",
        html: "Headline yang Kuat dan Penawaran Nilai Jelas"
      },
      {
        tag: "p",
        html: "Dalam 5 detik pertama, pengunjung harus memahami apa yang Anda tawarkan dan bagaimana produk atau jasa Anda dapat menyelesaikan masalah mereka. Gunakan headline yang spesifik dan langsung menyentuh kebutuhan utama pelanggan."
      },
      {
        tag: "p",
        html: "<br>"
      },
      {
        tag: "h3",
        html: "Bukti Sosial dan Tombol Aksi yang Menghipnotis"
      },
      {
        tag: "p",
        html: "Sertakan testimoni klien, logo partner, atau statistik pencapaian untuk membangun rasa percaya. Tempatkan tombol Call-to-Action (CTA) yang mencolok dengan teks ajakan yang jelas, seperti 'Konsultasi Sekarang' atau 'Dapatkan Penawaran Gratis'."
      }
    ]
  }
];

export const featuredArticles = articles.slice(0, 2);
export const newsArticles = articles.slice(2);
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
