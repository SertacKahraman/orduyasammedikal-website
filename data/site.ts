import type {
  BlogPost,
  BusinessInfo,
  FAQ,
  NavItem,
  Service,
} from "@/types";

const baseUrl = "https://orduyasammedikal.com";
const defaultOgImage = `${baseUrl}/assets/images/social/ordu-yasam-medikal-og.png`;

export const targetKeywords = [
  "Ordu Yaşam Medikal",
  "Ordu yaşam medikal",
  "Ordu medikal",
  "Ordu hasta yatağı",
  "Ordu tekerlekli sandalye",
  "Ordu solunum cihazı",
  "Ordu hasta bezi",
  "Ordu havalı yatak",
  "Ordu tansiyon aleti",
  "Altınordu medikal",
  "Altınordu hasta yatağı",
  "tekerlekli sandalye",
  "hasta yatağı",
  "hasta bezi",
  "havalı yatak",
  "oksijen cihazı",
  "solunum cihazı",
  "medikal ürünler",
];

export const businessInfo: BusinessInfo = {
  name: "Ordu Yaşam Medikal",
  slogan: "Kalite ve Güven, Önce Yaşam",
  description:
    "Ordu Altınordu'da hasta yatağı, tekerlekli sandalye, solunum cihazı, havalı yatak ve medikal ürün seçenekleri için Yaşam Medikal'e ulaşın.",
  phone: "0545 687 19 84",
  whatsapp: "0545 687 19 84",
  email: "orduyasammedikal@gmail.com",
  address: "Şahincili Mah. 516. Sok. No: 11A",
  city: "Ordu",
  district: "Altınordu",
  country: "TR",
  postalCode: "52200",
  workingHours: "Pazartesi - Cuma: 08:30 - 18:30; Cumartesi: 08:30 - 15:00; Pazar: Kapalı",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.4537535523014!2d37.89039267551196!3d40.9715439216868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40632140cc9f1ad9%3A0xf415149ec4e2a60!2sordu%20ya%C5%9Fam%20medikal!5e0!3m2!1str!2str!4v1782127882843!5m2!1str!2str",
  logoUrl: `${baseUrl}/assets/brand/yasam-logo.png`,
  baseUrl,
  defaultOgImage,
};

export const whatsappPhone = "905456871984";
export const whatsappHref = `https://wa.me/${whatsappPhone}`;
export function getWhatsAppHref(message?: string): string {
  return message
    ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    : whatsappHref;
}

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const sharedFaqs: FAQ[] = [
  {
    id: "siparis-gerekli-mi",
    question: "Medikal ürünler için ön sipariş gerekli mi?",
    answer: "Stok durumunu teyit etmek ve hızlı teslimat sağlamak için iletişime geçmeniz önerilir.",
  },
  {
    id: "danisma-yapiliyor-mu",
    question: "Ürün seçimi öncesi danışma yapılıyor mu?",
    answer:
      "Evet, kullanım ihtiyacı ve ürün özelliklerine göre uygun seçenekleri karşılaştırmanız için yetkili personelimiz yardımcı olmaktadır.",
  },
  {
    id: "hangi-hizmetler-var",
    question: "Sadece tekerlekli sandalye mi var?",
    answer:
      "Hayır. Tekerlekli sandalyenin yanında hasta yatağı, solunum cihazları, havalı yataklar, hasta bezleri ve tansiyon aletleri gibi geniş ürün seçenekleri sunulmaktadır.",
  },
  {
    id: "kurulum-var-mi",
    question: "Hasta yatağı veya cihaz kurulumu yapıyor musunuz?",
    answer:
      "Büyük hacimli ürünlerde ve karmaşık medikal cihazlarda Ordu içi kurulum ve kullanım bilgilendirmesi yapmaktayız.",
  },
  {
    id: "fiyatlar-nasil-belirleniyor",
    question: "Fiyatlar nasıl belirleniyor?",
    answer:
      "Fiyatlar ürünün özelliklerine ve marka modeline göre değişmektedir. En güncel fiyat ve stok bilgisini WhatsApp üzerinden öğrenebilirsiniz.",
  },
];

export const faqs: FAQ[] = sharedFaqs;

export const services: Service[] = [
  {
    id: "service-tekerlekli-sandalye",
    title: "Tekerlekli Sandalye",
    slug: "tekerlekli-sandalye",
    shortDescription: "Konforlu, hafif ve ergonomik tasarımlı manuel ve akülü seçenekler.",
    description: "Tekerlekli sandalye seçeneklerimiz, hastanın konforu ve kullanım kolaylığı dikkate alınarak sunulur. Farklı model ve boyut seçenekleri ile güvenilir hizmet.",
    image: "/assets/images/products/tekerlekli-sandalye.webp",
    cardImage: "/assets/images/products/tekerlekli-sandalye-card.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: true,
    seo: {
      metaTitle: "Tekerlekli Sandalye",
      metaDescription: "Ordu'da manuel ve akülü tekerlekli sandalye seçenekleri. Ordu Yaşam Medikal'den ürün bilgisi alın.",
      canonicalUrl: `${baseUrl}/urunler/tekerlekli-sandalye`,
      ogTitle: "Tekerlekli Sandalye | Ordu Yaşam Medikal",
      ogDescription: "Konforlu, hafif ve ergonomik tasarımlı manuel ve akülü tekerlekli sandalye seçenekleri.",
      ogImage: `${baseUrl}/assets/images/products/tekerlekli-sandalye.webp`,
      keywords: ["tekerlekli sandalye", "akülü sandalye", "Ordu tekerlekli sandalye"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-hasta-yatagi",
    title: "Hasta Yatakları",
    slug: "hasta-yatagi",
    shortDescription: "Evde veya hastanede maksimum rahatlık sağlayan motorlu yataklar.",
    description: "Hasta yatağı ve havalı yatak ihtiyaçlarınız için 2 veya 3 motorlu seçenekler. Hastanın bakımını kolaylaştıran, kurulum destekli hizmet.",
    image: "/assets/images/products/hasta-yatagi.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: true,
    seo: {
      metaTitle: "Hasta Yatakları",
      metaDescription: "Ordu Altınordu'da ev tipi ve hastane tipi motorlu hasta yatağı modelleri. Ürün, stok, teslimat ve kurulum bilgisi için bize ulaşın.",
      canonicalUrl: `${baseUrl}/urunler/hasta-yatagi`,
      ogTitle: "Hasta Yatakları | Ordu Yaşam Medikal",
      ogDescription: "Evde bakım sürecini kolaylaştıran motorlu hasta yatağı seçenekleri.",
      ogImage: `${baseUrl}/assets/images/products/hasta-yatagi.webp`,
      keywords: ["hasta yatağı", "motorlu yatak", "Ordu hasta yatağı"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-solunum-cihazi",
    title: "Solunum Cihazları",
    slug: "solunum-cihazi",
    shortDescription: "Güvenilir oksijen konsantratörleri ve solunum destek ürünleri.",
    description: "KOAH ve solunum sıkıntısı çeken hastalar için güvenilir ve sessiz çalışan oksijen konsantratörü, CPAP, BPAP cihazı seçenekleri.",
    image: "/assets/images/products/solunum-cihazi.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: true,
    seo: {
      metaTitle: "Solunum Cihazları",
      metaDescription: "Ordu'da oksijen konsantratörü ve solunum cihazı ihtiyaçlarınız için Ordu Yaşam Medikal ile iletişime geçin.",
      canonicalUrl: `${baseUrl}/urunler/solunum-cihazi`,
      ogTitle: "Solunum Cihazları | Ordu Yaşam Medikal",
      ogDescription: "Güvenilir oksijen konsantratörleri ve solunum destek cihazları.",
      ogImage: `${baseUrl}/assets/images/products/solunum-cihazi.webp`,
      keywords: ["solunum cihazı", "oksijen konsantratörü", "Ordu solunum cihazı"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-hasta-bezi",
    title: "Hasta Bezi",
    slug: "hasta-bezi",
    shortDescription: "Yüksek emicilik sağlayan ve cildi koruyan hasta bezleri.",
    description: "Yetişkin hasta bezi ve yatak koruyucu örtü ihtiyaçlarınız için farklı beden ve emicilik seçenekleri. Cilt dostu materyallerle hastanın rahatı sağlanır.",
    image: "/assets/images/products/hasta-bezi-ve-hijyen.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: true,
    seo: {
      metaTitle: "Hasta Bezi",
      metaDescription: "Ordu'da yüksek emicilikli yetişkin hasta bezi seçenekleri için Ordu Yaşam Medikal ile iletişime geçin.",
      canonicalUrl: `${baseUrl}/urunler/hasta-bezi`,
      ogTitle: "Hasta Bezi | Ordu Yaşam Medikal",
      ogDescription: "Cildi koruyan, sızdırmaz yetişkin hasta bezleri.",
      ogImage: `${baseUrl}/assets/images/products/hasta-bezi-ve-hijyen.webp`,
      keywords: ["hasta bezi", "yetişkin hasta bezi", "Ordu hasta bezi"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-havali-yatak",
    title: "Havalı Yatak",
    slug: "havali-yatak",
    shortDescription: "Yatak yaralarını önleyen, bası noktalarını rahatlatan havalı yatak sistemleri.",
    description: "Uzun süreli yatan hastalar için basınç ülserlerini (yatak yarası) önleyen boru tipi veya baklava tipi motorlu havalı yataklar.",
    image: "/assets/images/products/havali-yatak.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: false,
    seo: {
      metaTitle: "Havalı Yatak",
      metaDescription: "Yatak yaralarını engelleyen boru ve baklava tipi havalı yatak sistemleri.",
      canonicalUrl: `${baseUrl}/urunler/havali-yatak`,
      ogTitle: "Havalı Yatak | Ordu Yaşam Medikal",
      ogDescription: "Bası noktalarını rahatlatan havalı yatak çözümleri.",
      ogImage: `${baseUrl}/assets/images/products/havali-yatak.webp`,
      keywords: ["havalı yatak", "boru tipi havalı yatak", "Ordu havalı yatak"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-tansiyon-aleti",
    title: "Tansiyon Aleti",
    slug: "tansiyon-aleti",
    shortDescription: "Hassas ölçüm yapan, dijital koldan veya bilekten ölçer tansiyon aletleri.",
    description: "Kalp atışını ve kan basıncını doğru ve güvenilir şekilde gösteren, kullanımı kolay dijital tansiyon aletleri.",
    image: "/assets/images/products/tansiyon-aleti.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: true,
    seo: {
      metaTitle: "Tansiyon Aleti",
      metaDescription: "Güvenilir dijital tansiyon aletleri ve sağlık ölçüm cihazları Ordu Yaşam Medikal'de.",
      canonicalUrl: `${baseUrl}/urunler/tansiyon-aleti`,
      ogTitle: "Tansiyon Aleti | Ordu Yaşam Medikal",
      ogDescription: "Hassas ölçüm yapan dijital tansiyon aleti seçenekleri.",
      ogImage: `${baseUrl}/assets/images/products/tansiyon-aleti.webp`,
      keywords: ["tansiyon aleti", "dijital tansiyon aleti", "Ordu tansiyon aleti"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-akulu-sandalye",
    title: "Akülü Sandalye",
    slug: "akulu-sandalye",
    shortDescription: "Günlük hayatta tam bağımsızlık sağlayan joystick kontrollü akülü sandalyeler.",
    description: "Hastanın başkasına ihtiyaç duymadan hareket etmesini sağlayan, güçlü motor ve uzun batarya ömrüne sahip akülü tekerlekli sandalye seçenekleri.",
    image: "/assets/images/products/akulu-sandalye.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: true,
    seo: {
      metaTitle: "Akülü Sandalye",
      metaDescription: "Ordu'da uzun batarya ömürlü, joystick kontrollü akülü tekerlekli sandalye seçenekleri.",
      canonicalUrl: `${baseUrl}/urunler/akulu-sandalye`,
      ogTitle: "Akülü Sandalye | Ordu Yaşam Medikal",
      ogDescription: "Günlük hayatta tam bağımsızlık sağlayan akülü sandalye modelleri.",
      ogImage: `${baseUrl}/assets/images/products/akulu-sandalye.webp`,
      keywords: ["akülü sandalye", "motorlu sandalye", "Ordu akülü sandalye"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-uyku-apnesi",
    title: "Uyku Apne Cihazı (CPAP/BPAP)",
    slug: "uyku-apne-cihazi",
    shortDescription: "Uyku apnesi tedavisinde kullanılan güvenilir ve sessiz solunum cihazları.",
    description: "Uyku sırasında solunum durması (uyku apnesi) sorunu yaşayan hastalar için özel olarak tasarlanmış, sessiz çalışan CPAP ve BPAP uyku cihazı seçenekleri.",
    image: "/assets/images/products/uyku-apne-cihazi-cpap.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "Stok ve teslimat bölgesine göre",
    isFeatured: true,
    seo: {
      metaTitle: "Uyku Apne Cihazı (CPAP/BPAP)",
      metaDescription: "Ordu'da uyku apnesi tedavisi için sessiz ve güvenilir CPAP/BPAP uyku cihazları.",
      canonicalUrl: `${baseUrl}/urunler/uyku-apne-cihazi`,
      ogTitle: "Uyku Apne Cihazı | Ordu Yaşam Medikal",
      ogDescription: "Uyku apnesi tedavisinde kullanılan güvenilir CPAP/BPAP cihazları.",
      ogImage: `${baseUrl}/assets/images/products/uyku-apne-cihazi-cpap.webp`,
      keywords: ["uyku apne cihazı", "cpap cihazı", "bpap cihazı", "Ordu uyku cihazı"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
];

type BlogPostSeed = Omit<BlogPost, "author" | "updatedAt" | "seo"> & {
  seoTitle?: string;
  metaDescription: string;
  keywords: string[];
};


function createBlogPost({
  seoTitle,
  metaDescription,
  keywords,
  ...post
}: BlogPostSeed): BlogPost {
  return {
    ...post,
    author: businessInfo.name,
    updatedAt: "2026-08-23",
    seo: {
      metaTitle: seoTitle ?? post.title,
      metaDescription,
      canonicalUrl: `${baseUrl}/blog/${post.slug}`,
      ogTitle: post.title,
      ogDescription: post.excerpt,
      ogImage: post.image,
      keywords,
      noIndex: false,
    },
  };
}

export const blogPosts: BlogPost[] = [
  createBlogPost({
    id: "hasta-yatagi-secim-rehberi",
    title: "Evde Hasta Bakımı Rehberi: İhtiyacınıza En Uygun Hasta Yatağı Nasıl Seçilir?",
    slug: "evde-hasta-bakimi-en-uygun-hasta-yatagi-nasil-secilir",
    excerpt: "Evde bakım sürecini kolaylaştıran ve hastanın yaşam kalitesini artıran hasta yatağı seçimi hakkında merak edilen tüm detaylar.",
    content: "Evde hasta bakımı, hem hasta hem de bakım veren kişi için oldukça hassas bir süreçtir. Hastanın uzun süre yatağa bağımlı olması, doğru ekipman kullanılmadığında bası yaraları, solunum sıkıntıları ve iskelet sistemi sorunlarına yol açabilir. Bu sorunları önlemenin ve yaşam kalitesini artırmanın en etkili yolu, hastanın ihtiyaçlarına uygun motorlu bir hasta yatağı tercih etmektir.",
    sections: [
      {
        id: "hasta-yatagi-neden-onemli",
        title: "Hasta Yatağı Neden Önemlidir?",
        paragraphs: [
          "Standart yataklar, sürekli yatan bir hastanın fiziksel destek ihtiyaçlarını karşılayamaz. Başın kaldırılması, ayakların kalp seviyesine yükseltilmesi ve hastanın rahat bir açıda yemek yiyebilmesi standart yataklarla mümkün değildir.",
          "Hasta yatakları, hastanın otonomisini destekleyerek yataktan daha kolay kalkmasını sağlar. Ayrıca bakım veren kişi için de eğilip kalkma kaynaklı bel rahatsızlıklarını minimuma indirir."
        ],
        subsections: [
          {
            title: "Dolaşım ve Solunum Sistemine Etkisi",
            paragraphs: [
              "Özellikle KOAH veya astım gibi solunum zorluğu çeken hastaların baş kısmının sürekli belirli bir açıda dik tutulması gerekir. Doğru yatak seçimi, nefes alışverişini rahatlatarak kan dolaşımını düzenler."
            ]
          }
        ]
      },
      {
        id: "kac-motorlu-hasta-yatagi-alinmali",
        title: "2, 3 veya 4 Motorlu Yataklar Arasındaki Farklar Nelerdir?",
        paragraphs: [
          "Hasta yatakları genellikle sahip oldukları motor sayısına göre sınıflandırılır. İhtiyacınıza uygun olanı seçmek için bu farkları iyi bilmelisiniz:"
        ],
        subsections: [
          {
            title: "2 Motorlu Hasta Yatağı",
            paragraphs: [
              "Sadece baş ve ayak kısımları hareket eder. Hastanın yatak içinde doğrulmasını, yemek yemesini ve ayaklarını dinlendirmesini sağlar. Temel ihtiyaçlar için en ekonomik çözümdür."
            ]
          },
          {
            title: "3 Motorlu Hasta Yatağı",
            paragraphs: [
              "Baş ve ayak hareketlerine ek olarak yatağın tamamı asansör sistemi gibi yukarı ve aşağı hareket edebilir (Asansör özelliği). Bakım yapan kişinin hastayı temizlemesi veya yataktan tekerlekli sandalyeye transfer etmesi için idealdir."
            ]
          },
          {
            title: "4 Motorlu Hasta Yatağı",
            paragraphs: [
              "Tüm bu özelliklerin yanı sıra Trendelenburg (ters eğim) ve anti-trendelenburg hareketlerini yapabilir. Özellikle kalp ve dolaşım sistemi problemleri yaşayan yoğun bakım seviyesindeki hastalar için uygundur."
            ]
          }
        ]
      },
      {
        id: "yata-seciminde-dikkat-edilmesi-gereken-diger-kriterler",
        title: "Hasta Yatağı Seçerken Nelere Dikkat Edilmeli?",
        paragraphs: [
          "Motor sayısı dışında, yatağın yan korkuluk tipi (tabanca sistem veya tam boy ABS korkuluk), yatağın taşıma kapasitesi ve tekerleklerinin kilitlenebilir olması çok önemlidir. Ahşap görünümlü paneller, evin dekorasyonuna uyum sağlayarak hastane psikolojisini ortadan kaldırır."
        ]
      }
    ],
    faqs: [
      {
        id: "motorlu-yatak-elektrik-kesintisi",
        question: "Elektrik kesintisinde hasta yatağı çalışır mı?",
        answer: "Pek çok kaliteli motorlu hasta yatağında pil (batarya) desteği bulunur. Elektrik kesintisinde yatışı düz konuma getirebilirsiniz."
      },
      {
        id: "hasta-yatagi-satin-alma",
        question: "Hasta yatağı satın alırken nelere dikkat edilmeli?",
        answer: "Motor sayısı, taşıma kapasitesi, korkuluk sistemi, yatak ölçüsü, garanti ve teknik servis koşulları birlikte değerlendirilmelidir. Kullanım ihtiyacınıza uygun model için ürün özelliklerini sipariş öncesinde karşılaştırın."
      }
    ],
    internalLinks: [
      {
        label: "Havalı Yatak Kullanımı",
        href: "/blog/bas-yarasi-nasil-onlenir-dogru-havali-yatak-kullanimi",
        description: "Hasta yatağı ile birlikte kullanılması gereken yatak koruyucu havalı yataklar hakkında bilgi alın."
      },
      {
        label: "Medikal Cihaz Satın Alma Rehberi",
        href: "/blog/medikal-cihaz-satin-alma-rehberi",
        description: "Hasta yatağı ve diğer medikal cihazları satın alırken dikkat edilecek noktaları inceleyin."
      }
    ],
    image: "/assets/images/blog/hasta-yatagi-secimi-ve-bakimi.webp",
    publishedAt: "2026-06-15",
    category: "Evde Bakım ve Yaşam Kalitesi",
    tags: ["hasta yatağı", "hasta yatakları", "evde hasta bakımı", "motorlu hasta yatağı", "Ordu medikal"],
    seoTitle: "Motorlu Hasta Yatağı Seçim Rehberi",
    metaDescription: "Evde hasta bakımı için en uygun motorlu hasta yatağı nasıl seçilir? 2 ve 3 motorlu hasta yataklarının farkları ve satın alma rehberi.",
    keywords: ["hasta yatağı", "hasta yatağı fiyatları", "motorlu yatak", "hasta bakım rehberi"]
  }),

  createBlogPost({
    id: "havali-yatak-rehberi",
    title: "Uzun Süreli Yatışlarda Bası (Yatak) Yarası Nasıl Önlenir? Doğru Havalı Yatak Kullanımı",
    slug: "bas-yarasi-nasil-onlenir-dogru-havali-yatak-kullanimi",
    excerpt: "Yatağa bağımlı hastalarda en büyük tehlikelerden biri olan bası (yatak) yaralarını önlemek için doğru havalı yatak kullanımı hayati önem taşır.",
    content: "Uzun süre aynı pozisyonda yatan hastalarda, vücudun yatağa temas eden noktalarında kan dolaşımı yavaşlar. Cildin oksijensiz kalması sonucu oluşan cilt dokusu ölümlerine 'bası yarası' veya 'yatak yarası' adı verilir. Bu yaralar oluştuktan sonra tedavisi hem çok zor hem de hasta için oldukça acı vericidir. Bası yarası oluşumunu engellemenin altın standardı, doğru özelliklere sahip bir havalı yatak kullanmaktır.",
    sections: [
      {
        id: "yatak-yarasi-nasil-olusur",
        title: "Yatak Yarası (Bası Ülseri) Neden Olur?",
        paragraphs: [
          "Kemik çıkıntılarının belirgin olduğu kuyruk sokumu, topuklar, kalça, omuz ve dirsekler, yatarken en fazla basınca maruz kalan bölgelerdir.",
          "Eğer hasta iki saatte bir düzenli olarak sağa ve sola çevrilmezse, bu bölgelerde kan akışı tamamen durur ve doku ölmeye başlar. Havalı yataklar, bu basıncı sürekli değiştirerek manuel pozisyonlandırma ihtiyacını destekler."
        ]
      },
      {
        id: "havali-yatak-nasil-calisir",
        title: "Havalı Yatak Nedir ve Nasıl Çalışır?",
        paragraphs: [
          "Havalı yataklar, yanlarında bulunan motor kompresörü sayesinde sürekli hava sirkülasyonu sağlayan şişirilebilir yataklardır. İçerisindeki hava kanalları sırasıyla şişip inerek hastanın vücuduna uygulanan basıncı sürekli olarak değiştirir.",
          "Bu masaj ve hareket etkisi, kılcal damarlardaki kan dolaşımının devamlılığını sağlar ve cildin hava almasına yardımcı olur."
        ]
      },
      {
        id: "boru-mu-baklava-mi",
        title: "Boru Tipi mi Yoksa Baklava Tipi mi Seçilmeli?",
        paragraphs: [
          "Piyasada temel olarak iki farklı havalı yatak çeşidi bulunur. Hastanın kilosu ve yatağa bağımlılık derecesi bu seçimi belirler."
        ],
        subsections: [
          {
            title: "Baklava Tipi Havalı Yataklar",
            paragraphs: [
              "Görünümü baklava dilimlerine benzer. Hafif kilolu ve kısa süreli yatış yapacak hastalar için uygundur. Üst yüzeyindeki küçük hücreler sırayla şişip inerek temel bir masaj etkisi yaratır."
            ]
          },
          {
            title: "Boru Tipi Havalı Yataklar",
            paragraphs: [
              "Uzun ve kalın boru hücrelerinden oluşur. A+B veya A+B+C sistemine göre hücreler dönüşümlü olarak iner ve şişer. Ağır hastalar, felçliler ve uzun süreli yatacak hastalar için en koruyucu ve gelişmiş seçenektir. Vücut ağırlığını çok daha geniş bir yüzeye dağıtır."
            ]
          }
        ]
      },
      {
        id: "kullanim-kurallari",
        title: "Havalı Yatak Kullanımında Dikkat Edilecek 3 Kritik Kural",
        paragraphs: [
          "1. Motorun çalışma düzeni için seçilen modelin üretici kılavuzunu izleyin. Sürekli basınç döngüsü için tasarlanmış modellerde motorun kapatılması yatağın işlevini etkileyebilir.",
          "2. Hastanın cildinin direkt plastiğe temas etmemesi için, yatağın üzerine pamuklu ve ince bir çarşaf serilmelidir.",
          "3. Motor yatağın uç kısmına düzgünce asılmalı, hava borularında katlanma veya bükülme olmamalıdır."
        ]
      }
    ],
    faqs: [
      {
        id: "motor-gece-kapatilir-mi",
        question: "Havalı yatak motoru gece uyurken kapatılır mı?",
        answer: "Kesinlikle hayır. Motor gece gündüz sürekli prize takılı ve çalışır durumda olmalıdır. Yeni nesil motorlar uyku bozmayacak kadar sessiz çalışır."
      },
      {
        id: "havali-yatak-kilif-yikanir-mi",
        question: "Havalı yatak yıkanabilir mi?",
        answer: "Boru tipi yatakların koruyucu sıvı geçirmez dış kılıfları çamaşır makinesinde (düşük ısıda) yıkanabilir. Yatağın kendi hücreleri ise nemli sabunlu bir bezle silinerek temizlenmelidir."
      }
    ],
    internalLinks: [
      {
        label: "Hasta Yatağı Seçimi",
        href: "/blog/evde-hasta-bakimi-en-uygun-hasta-yatagi-nasil-secilir",
        description: "Havalı yatağın tam performans göstermesi için kullanılması gereken hasta yataklarını inceleyin."
      }
    ],
    image: "/assets/images/blog/havali-yatak-basi-yarasi-onleme.webp",
    publishedAt: "2026-06-18",
    category: "Evde Bakım ve Yaşam Kalitesi",
    tags: ["havalı yatak", "bası yarası", "boru tipi havalı yatak", "yatak yarası"],
    seoTitle: "Bası Yarası ve Havalı Yatak Rehberi",
    metaDescription: "Yatağa bağımlı hastalarda bası yarası riskini azaltmaya yardımcı havalı yatakların kullanımı. Boru ve baklava tipi modelleri karşılaştırın.",
    keywords: ["havalı yatak", "bası yarası", "yatak yarası önleme", "boru tipi havalı yatak"]
  }),

  createBlogPost({
    id: "medikal-cihaz-satin-alma",
    title: "Medikal Cihaz Satın Alma Rehberi: İhtiyaca Uygun Ürün Nasıl Seçilir?",
    slug: "medikal-cihaz-satin-alma-rehberi",
    excerpt: "Hasta yatağı, solunum cihazı ve tekerlekli sandalye satın alırken ihtiyaç, ölçü, teknik özellik ve servis koşullarını nasıl karşılaştıracağınızı öğrenin.",
    content: "Medikal cihaz satın alırken yalnızca fiyatı değil, kullanıcının ihtiyacını, ürünün teknik özelliklerini, kullanılacağı ortamı ve satış sonrası desteği birlikte değerlendirmek gerekir. Hasta yatağı, oksijen konsantratörü, CPAP/BPAP cihazı veya tekerlekli sandalye gibi ürünlerde doğru model; kullanım süresi, vücut ölçüleri, taşıma kapasitesi, hekim önerisi ve ev koşullarına göre belirlenmelidir. Bu rehber, satın alma öncesinde karşılaştırmanız gereken temel noktaları bir araya getirir.",
    sections: [
      {
        id: "ihtiyaci-dogru-belirleme",
        title: "Medikal Cihaz Satın Almadan Önce İhtiyaç Nasıl Belirlenir?",
        paragraphs: [
          "Satın alma kararından önce ürünü kimin, hangi ortamda ve ne sıklıkla kullanacağı netleştirilmelidir. Kullanıcının hareket kabiliyeti, kilosu, bakım planı ve varsa hekim tarafından belirtilen teknik gereksinimler model seçimini doğrudan etkiler."
        ],
        subsections: [
          {
            title: "Kullanım Süresi ve Ortam",
            paragraphs: [
              "Uzun süreli ve düzenli kullanımda dayanıklılık, yedek parça erişimi ve teknik servis desteği öncelik kazanır. Evde kullanılacak ürünlerde kapı genişliği, oda ölçüsü, priz konumu ve depolama alanı da kontrol edilmelidir."
            ]
          },
          {
            title: "Teknik Ölçüler ve Reçete Bilgileri",
            paragraphs: [
              "Tekerlekli sandalyede oturma genişliği ve taşıma kapasitesi; hasta yatağında motor sayısı, korkuluk ve ölçüler; solunum cihazında ise hekim tarafından belirtilen cihaz türü ve kapasite esas alınmalıdır."
            ]
          }
        ]
      },
      {
        id: "urun-grubuna-gore-secim",
        title: "Ürün Grubuna Göre Seçim Kriterleri",
        paragraphs: [
          "Her medikal ürün grubunun kullanım amacı ve teknik kriterleri farklıdır. Bu nedenle benzer görünen modeller yalnızca fiyat üzerinden karşılaştırılmamalıdır."
        ],
        subsections: [
          {
            title: "Hasta Yatağı",
            paragraphs: [
              "Motor sayısı, taşıma kapasitesi, korkuluk sistemi, tekerlek kilitleri, yatak ölçüsü ve kurulum koşulları birlikte değerlendirilmelidir. Uzun süreli kullanımda garanti ve motor için teknik servis erişimi önemlidir."
            ]
          },
          {
            title: "Solunum Cihazları",
            paragraphs: [
              "Oksijen konsantratörü, CPAP veya BPAP seçiminde hekim reçetesi ve cihazın teknik kapasitesi esas alınmalıdır. Filtre, maske ve hortum gibi sarf malzemelerinin bulunabilirliği de satın alma öncesinde sorulmalıdır."
            ]
          },
          {
            title: "Tekerlekli Sandalyeler",
            paragraphs: [
              "Kullanıcının vücut ölçüleri, sandalye genişliği, taşıma kapasitesi, katlanabilirlik ve kullanılacak zemin dikkate alınmalıdır. Akülü modellerde batarya, şarj ve servis koşulları ayrıca incelenmelidir."
            ]
          }
        ]
      },
      {
        id: "satin-alma-kontrol-listesi",
        title: "Satın Alma Öncesi Kontrol Listesi",
        paragraphs: [
          "Modelin tam adını, kutu içeriğini, dahil olan aksesuarları, garanti süresini, teknik servis koşullarını, teslimat kapsamını ve varsa kurulum hizmetini siparişten önce netleştirin.",
          "Kısa süreli ihtiyaçlarda kiralama piyasada bir alternatif olabilir; ancak hijyen, bakım, arıza, teslim ve toplam maliyet koşulları ayrıca karşılaştırılmalıdır. Düzenli ve uzun süreli kullanımda satın alma, ürüne sürekli erişim ve model seçimi açısından daha öngörülebilir olabilir."
        ]
      }
    ],
    faqs: [
      {
        id: "satin-alma-oncesi-bilgiler",
        question: "Medikal cihaz satın almadan önce hangi bilgileri hazırlamalıyım?",
        answer: "Kullanıcının ihtiyacı, kilosu ve ilgili vücut ölçüleri; kullanım ortamı, tahmini kullanım süresi ve varsa hekim reçetesi veya cihaz teknik değerleri hazır bulundurulmalıdır."
      },
      {
        id: "garanti-teknik-servis",
        question: "Garanti ve teknik servis neden önemlidir?",
        answer: "Motorlu veya elektronik medikal cihazlarda bakım, yedek parça ve arıza desteği ürünün kullanılabilirliğini doğrudan etkiler. Garanti kapsamı ve yetkili servis bilgileri siparişten önce sorulmalıdır."
      }
    ],
    image: "/assets/images/blog/medikal-cihaz-satin-alma-rehberi.webp",
    publishedAt: "2026-06-20",
    category: "Medikal Ürün Rehberleri",
    tags: ["medikal cihaz satın alma", "hasta yatağı satın alma", "medikal ürün seçimi", "Ordu medikal"],
    seoTitle: "Medikal Cihaz Satın Alma Rehberi | Ordu",
    metaDescription: "Hasta yatağı, solunum cihazı ve tekerlekli sandalye satın alırken teknik özellik, ölçü, garanti ve servis kriterlerini karşılaştırın.",
    keywords: ["medikal cihaz satın alma", "hasta yatağı satın alma", "Ordu medikal cihaz", "medikal ürün rehberi"]
  }),

  createBlogPost({
    id: "ortopedik-tabanlik-kullanimi",
    title: "Ortopedik Tabanlık Kullanımı: Ayak ve Bel Ağrılarından Kurtulmanın Etkili Yolları",
    slug: "ortopedik-tabanlik-ayak-ve-bel-agrilari",
    excerpt: "Düz tabanlık, topuk dikeni veya uzun süre ayakta kalmanın neden olduğu ayak ve bel ağrılarını ortopedik tabanlık ile nasıl çözebileceğinizi keşfedin.",
    content: "Günlük hayatta attığımız her adımda vücudumuzun tüm yükünü ayaklarımız çeker. Ancak yanlış ayakkabı seçimi, düz tabanlık, topuk dikeni (plantar fasiit) veya içe/dışa basma gibi ortopedik sorunlar, ayak tabanındaki yük dağılımını bozar. Bu dengesizlik sadece ayaklarda değil, dizlerde, kalçada ve belde şiddetli kronik ağrılara yol açabilir. Ortopedik tabanlıklar, ayak arkını (kavisini) destekleyerek vücut ağırlığının zemine eşit dağılmasını sağlar ve bu ağrıların önlenmesinde en etkili medikal çözümlerden biridir.",
    sections: [
      {
        id: "ortopedik-tabanlik-ne-ise-yarar",
        title: "Ortopedik Tabanlık Ne İşe Yarar?",
        paragraphs: [
          "Ortopedik tabanlıkların temel amacı, ayağın anatomik yapısına uygun destek vererek yürüyüş biyomekaniğini düzeltmektir. Ayak tabanındaki kavisin (ark) çökmesi veya normalden yüksek olması durumunda, yere basış dengesi bozulur. Tabanlık bu dengeyi yeniden kurar."
        ],
        subsections: [
          {
            title: "Darbe Emici Özellik",
            paragraphs: [
              "Özellikle sert zeminlerde yürürken veya koşarken topuğa binen şok dalgalarını emer. Bu sayede diz eklemine ve omurgaya binen yük azalır."
            ]
          },
          {
            title: "Postür (Duruş) Düzeltme",
            paragraphs: [
              "Ayaktaki basış bozuklukları doğrudan omurga eğriliğini etkiler. Doğru bir tabanlık, bedenin dik durmasına yardımcı olur ve duruş bozukluğundan kaynaklanan sırt ağrılarını hafifletir."
            ]
          }
        ]
      },
      {
        id: "hangi-hastaliklarda-kullanilir",
        title: "Hangi Rahatsızlıklarda Ortopedik Tabanlık Kullanılmalı?",
        paragraphs: [
          "Ayak ağrısının nedeni kişiden kişiye değişebilir. Aşağıdaki durumlarda ortopedik değerlendirme sonrasında tabanlık kullanımı önerilebilir:"
        ],
        subsections: [
          {
            title: "Düz Tabanlık (Pes Planus)",
            paragraphs: [
              "Ayak kavisinin olmaması durumudur. Uzun süreli yürüyüşlerde ayak tabanında şiddetli yanma ve yorgunluk yapar. Destekleyici ark (kavis) içeren tabanlıklarla tedavi edilir."
            ]
          },
          {
            title: "Topuk Dikeni (Plantar Fasiit)",
            paragraphs: [
              "Sabah ilk adımlarda belirginleşen topuk ağrısı farklı nedenlerle oluşabilir. Uygun topuk desteği basıncı azaltmaya yardımcı olabilir; tanı ve ürün seçimi için sağlık profesyoneline danışılmalıdır."
            ]
          },
          {
            title: "İçe veya Dışa Basma",
            paragraphs: [
              "Ayakkabı tabanındaki asimetrik aşınma basış biçimi hakkında fikir verebilir ancak tek başına tanı koydurmaz. Değerlendirme sonrasında uygun tabanlık yük dağılımını destekleyebilir."
            ]
          }
        ]
      },
      {
        id: "tabanlik-secimi",
        title: "Kişiye Özel mi, Hazır Tabanlık mı?",
        paragraphs: [
          "Hazır üretilen standart ortopedik tabanlıklar veya silikon topukluklar, hafif derece ağrılar ve günlük yorgunluklar için genellikle yeterlidir. Ancak ileri derece deformasyonlarda ayak analizi yapılarak kişiye özel tabanlık üretilmesi gerekebilir. Eğer diyabet hastasıysanız, dikişsiz ve yumuşak dokulu özel diyabetik tabanlıklar tercih etmelisiniz."
        ]
      }
    ],
    faqs: [
      {
        id: "tabanlik-her-ayakkabiya-uyar-mi",
        question: "Ortopedik tabanlıklar her ayakkabıyla kullanılabilir mi?",
        answer: "Tam boy ortopedik tabanlıkların kullanılabilmesi için ayakkabının kendi iç astarının çıkarılabilir olması (veya ayakkabının biraz geniş olması) gerekir. Dar kalıplı ayakkabılar için sadece kavis veya topuk desteği sağlayan 3/4 (yarım) tabanlıklar tercih edilebilir."
      },
      {
        id: "tabanlik-ne-zaman-degistirilmeli",
        question: "Bir ortopedik tabanlık ne kadar süre kullanılır?",
        answer: "Kullanım sıklığına ve kişinin kilosuna bağlı olarak genellikle 6 ay ile 1 yıl arasında destekleyici özellikleri (şok emme ve kavis desteği) zayıflar. Tabanlığın formunun bozulduğunu hissettiğinizde yenisiyle değiştirmeniz gerekir."
      }
    ],
    internalLinks: [
      {
        label: "Medikal Terlik Seçimi",
        href: "/blog/ayak-sagligi-icin-en-iyi-medikal-terlikler",
        description: "Tabanlık kullanamadığınız ev ortamında veya iş yerinde medikal terliklerle ayak sağlığınızı korumaya devam edin."
      }
    ],
    image: "/assets/images/blog/ortopedik-tabanlik-ayak-sagligi.webp",
    publishedAt: "2026-06-25",
    category: "Günlük Sağlık ve Ortopedi",
    tags: ["ortopedik tabanlık", "topuk dikeni", "düz taban", "bel ağrısı", "ayak sağlığı"],
    seoTitle: "Ortopedik Tabanlık Seçim Rehberi",
    metaDescription: "Düz tabanlık, topuk dikeni ve basış bozuklukları için ortopedik tabanlık kullanımı. Ayak ve bel ağrılarını önleyen tabanlık seçimi rehberi.",
    keywords: ["ortopedik tabanlık", "topuk dikeni tabanlığı", "düz taban tabanlık", "ayak ağrısı", "bel ağrısı için tabanlık"]
  }),

  createBlogPost({
    id: "varis-corabi-kullanimi",
    title: "Varis Çorabı Ne İşe Yarar? Doğru Basınç Sınıfı ve Beden Nasıl Belirlenir?",
    slug: "varis-corabi-ne-ise-yarar-dogru-beden-ve-basinc-secimi",
    excerpt: "Bacaklardaki şişliği, ağrıyı ve damar genişlemelerini önleyen varis çoraplarının basınç sınıfları ve doğru kullanım teknikleri.",
    content: "Varis, bacaklardaki toplardamarların genişlemesiyle ortaya çıkabilir ve ağrı, ağırlık hissi veya şişlik gibi yakınmalara neden olabilir. Medikal kompresyon çorapları bazı kişilerde tedavi planının bir parçası olarak önerilebilir. Basınç sınıfı ve beden seçimi kişinin durumuna göre değiştiği için sağlık profesyoneli önerisi alınmalıdır.",
    sections: [
      {
        id: "varis-corabi-nasil-calisir",
        title: "Varis Çorabı Nasıl Çalışır?",
        paragraphs: [
          "Varis çoraplarının en büyük özelliği 'kademeli basınç' (dereceli kompresyon) uygulamasıdır. Çorap, ayak bileğine en yüksek basıncı uygular ve bu basınç diz veya kasığa doğru gidildikçe kademeli olarak azalır.",
          "Bu sistem, yerçekimine karşı koyamayıp bacaklarda göllenmeye çalışan kanın, adeta bir pompa etkisiyle aşağıdan yukarıya, yani kalbe doğru itilmesini sağlar. Böylece bacaklardaki şişlik, yorgunluk ve zonklama hissi ortadan kalkar."
        ]
      },
      {
        id: "basinc-siniflari",
        title: "Varis Çorabı Basınç Sınıfları Nelerdir?",
        paragraphs: [
          "Varis çorapları doktorun koyduğu teşhise göre farklı basınç (mmHg) sınıflarına ayrılır:"
        ],
        subsections: [
          {
            title: "Hafif Basınçlı (Koruyucu / Dinlendirici) Çoraplar (15-20 mmHg)",
            paragraphs: [
              "Gözle görülür büyük varisleri olmayan ancak uzun süre ayakta duran (öğretmenler, kuaförler) veya uzun yolculuklara çıkan (uçuş çorabı) kişiler için uygundur. Yorgunluğu ve hafif şişlikleri önler."
            ]
          },
          {
            title: "Orta Basınçlı Çoraplar (CCL 1 / 20-30 mmHg)",
            paragraphs: [
              "Belirginleşmiş varis damarları olan, bacaklarında belirgin ödem (şişlik) yaşayan ve hamilelik varisi olan kişilere doktorlar tarafından en çok reçete edilen sınıftır."
            ]
          },
          {
            title: "Yüksek Basınçlı Çoraplar (CCL 2 / 30-40 mmHg ve üzeri)",
            paragraphs: [
              "İleri derece venöz yetmezlik, derin ven trombozu (DVT) geçmişi olan veya varis ülseri (yarası) tedavisi gören hastalar için uzman hekim kontrolünde kullanılır."
            ]
          }
        ]
      },
      {
        id: "boy-secimi",
        title: "Diz Altı mı, Külotlu mu Seçilmeli?",
        paragraphs: [
          "Çorabın boyunu, varisli damarların bacağınızın neresinde olduğu belirler. Eğer varisleriniz sadece baldır bölgesindeyse diz altı varis çorabı yeterlidir. Varisler diz üstünde veya uyluk bölgesindeyse diz üstü (kasık boy) veya külotlu varis çorapları tercih edilmelidir."
        ]
      },
      {
        id: "beden-olcusu-nasil-alinir",
        title: "Varis Çorabı Beden Ölçüsü Nasıl Alınır?",
        paragraphs: [
          "Varis çorabında 'ayakkabı numarasına' veya 'pantolon bedenine' göre seçim yapılmaz. Doğru ölçüm, sabah yataktan kalkmadan (bacaklar henüz şişmeden) mezura ile alınmalıdır.",
          "Ayak bileğinin en ince yeri (cB), baldırın en kalın yeri (cC) ve çorabın boyuna göre uyluğun en kalın yeri ölçülerek kutu üzerindeki beden tablosundan (Size 1, Size 2 vb.) tam uyan beden seçilmelidir."
        ]
      }
    ],
    faqs: [
      {
        id: "varis-corabi-uyurken-giyilir-mi",
        question: "Varis çorabı ile uyunur mu?",
        answer: "Hayır. Varis çorapları yerçekimine karşı kanı yukarı pompalamak için tasarlanmıştır. Yatarken vücut zaten yatay pozisyonda olduğu için çoraba ihtiyaç yoktur. Geceleri çıkarılmalı, sabah yataktan kalkmadan (bacaklar şişmeden) tekrar giyilmelidir."
      },
      {
        id: "nasil-yikanir",
        question: "Varis çorabı nasıl yıkanır?",
        answer: "Esneklik (kompresyon) özelliğini kaybetmemesi için çamaşır makinesinde veya sıcak suyla yıkanmamalıdır. Ilık su ve beyaz sabunla elde nazikçe yıkanıp, sıkılmadan bir havlu üzerine serilerek kurutulmalıdır (kalorifer üzerine asılmamalıdır)."
      }
    ],
    internalLinks: [
      {
        label: "Medikal Terlikler",
        href: "/blog/ayak-sagligi-icin-en-iyi-medikal-terlikler",
        description: "Gün boyu ayakta kalarak varis oluşumuna zemin hazırlayan meslek grupları için ayak sağlığını destekleyen ortopedik terlikleri inceleyin."
      }
    ],
    image: "/assets/images/blog/varis-corabi-ve-kompresyon.webp",
    publishedAt: "2026-06-28",
    category: "Günlük Sağlık ve Ortopedi",
    tags: ["varis çorabı", "varis tedavisi", "kompresyon çorabı", "bacak şişliği", "hamile varis çorabı"],
    seoTitle: "Varis Çorabı Basınç ve Beden Rehberi",
    metaDescription: "Varis çorabı alırken nelere dikkat edilmeli? Orta ve yüksek basınç sınıfları, diz altı ve külotlu varis çorabı ölçüsü alma yöntemleri rehberi.",
    keywords: ["varis çorabı", "varis çorabı bedeni nasıl ölçülür", "orta basınç varis çorabı", "kompresyon çorabı"]
  }),

  createBlogPost({
    id: "medikal-terlik-rehberi",
    title: "Gün Boyu Ayakta Kalanlar İçin Ayak Sağlığını Koruyan En İyi Medikal Terlikler",
    slug: "ayak-sagligi-icin-en-iyi-medikal-terlikler",
    excerpt: "Sağlık çalışanları, öğretmenler ve tüm gün ayakta çalışanlar için omurga sağlığını koruyan ortopedik medikal terlik (sabo) seçimi.",
    content: "Öğretmenler, doktorlar, hemşireler, aşçılar, kuaförler veya perakende sektörü çalışanları... Eğer mesleğiniz gereği günde 8 ila 12 saat arası ayakta kalıyorsanız, vücudunuzun alarm vermesi an meselesidir. Ayak tabanında başlayan sızılar zamanla diz kapaklarına, kalça eklemine ve nihayetinde bele vurur. Uzun süre ayakta kalmanın yarattığı bu fiziksel tahribatı önlemenin en pratik yolu, iş yerinde standart ayakkabılar yerine anatomik destek sunan profesyonel medikal terlikler (sabo terlikler) kullanmaktır.",
    sections: [
      {
        id: "neden-medikal-terlik",
        title: "Standart Ayakkabı Yerine Neden Medikal Terlik?",
        paragraphs: [
          "Günlük spor ayakkabılar yürüyüş veya koşu için tasarlanmıştır; 'sabit durmak' veya 'kısa mesafeli sürekli hareketler' için değil. Ayak, ayakkabı içinde kapalı kaldıkça terler, şişer ve kan dolaşımı yavaşlar.",
          "Medikal terlikler ise ayağın nefes almasını sağlarken, özel iç taban yapılarıyla vücut ağırlığını topuktan parmak uçlarına kadar eşit bir şekilde dağıtır."
        ]
      },
      {
        id: "medikal-terlik-ozellikleri",
        title: "İyi Bir Medikal (Sabo) Terliğin Sahip Olması Gereken 4 Özellik",
        paragraphs: [
          "Her delikli terlik medikal veya ortopedik değildir. Gerçek bir fayda sağlamak için terliğinizin şu özelliklere sahip olmasına dikkat etmelisiniz:"
        ],
        subsections: [
          {
            title: "1. Anatomik Kavis Desteği (Ark Desteği)",
            paragraphs: [
              "Terliğin iç tabanı dümdüz olmamalıdır. Ayağın iç kavisini dolduran özel bir çıkıntıya sahip olmalı, böylece düz tabanlık eğilimini veya taban çökmesini engellemelidir."
            ]
          },
          {
            title: "2. Şok Emici Topuk Yapısı",
            paragraphs: [
              "Sert zeminlerde (fayans, beton) atılan her adımda oluşan darbe dizlere iletilir. Kaliteli medikal terliklerin topuk kısmında poliüretan veya silikon bazlı şok emici yastıkçıklar bulunur."
            ]
          },
          {
            title: "3. Kaymaz (Anti-Slip) Alt Taban",
            paragraphs: [
              "Özellikle hastane veya mutfak gibi ıslak zemin riskinin yüksek olduğu çalışma alanlarında, iş güvenliği açısından terliğin alt tabanının kauçuk veya kaydırmaz özel materyalden yapılmış olması şarttır."
            ]
          },
          {
            title: "4. Hafiflik ve Nefes Alabilirlik",
            paragraphs: [
              "Ayağınızda bütün gün bir ağırlık taşımamalısınız. Mikro gözenekli deri veya antibakteriyel EVA materyallerden üretilen hafif terlikler ayak terlemesini ve mantar oluşumunu engeller."
            ]
          }
        ]
      },
      {
        id: "topuk-dikeni-ve-terlik",
        title: "Topuk Dikeni Hastaları İçin Özel Terlikler",
        paragraphs: [
          "Eğer zaten topuk dikeni (plantar fasiit) rahatsızlığınız varsa, standart ortopedik terlikler yerine topuk bölgesinde ekstra yumuşak silikon ped bulunan (epoksi destekli) medikal terlik modellerini tercih etmelisiniz."
        ]
      }
    ],
    faqs: [
      {
        id: "sabo-terlik-numara-secimi",
        question: "Medikal terlik alırken kendi ayakkabı numaramı mı almalıyım?",
        answer: "Genellikle evet, ancak ayaklarınız gün içinde şişmeye meyilliyse (özellikle ayakta çalışanlarda), ayağı sıkmayan tam kalıp bir tercih yapılmalıdır. Topuk kısmı terliğin dışına taşmamalıdır."
      },
      {
        id: "evde-terlik-kullanimi",
        question: "Medikal terlik evde kullanılabilir mi?",
        answer: "Destekleyici ve ayağa uygun ev terlikleri bazı kişilerde konfor sağlayabilir. Sürekli veya şiddetli ağrıda ürün seçmeden önce sağlık profesyoneline danışılmalıdır."
      }
    ],
    internalLinks: [
      {
        label: "Ortopedik Tabanlık Kullanımı",
        href: "/blog/ortopedik-tabanlik-ayak-ve-bel-agrilari",
        description: "Dışarıda giydiğiniz kapalı ayakkabılarınız için ayak ağrılarını dindiren ortopedik tabanlık çözümlerini öğrenin."
      },
      {
        label: "Varis Çorabı Seçimi",
        href: "/blog/varis-corabi-ne-ise-yarar-dogru-beden-ve-basinc-secimi",
        description: "Sürekli ayakta durmanın getirdiği damar genişlemelerini önlemek için varis çoraplarını inceleyin."
      }
    ],
    image: "/assets/images/blog/ortopedik-medikal-sabo-terlik.webp",
    publishedAt: "2026-07-01",
    category: "Günlük Sağlık ve Ortopedi",
    tags: ["medikal terlik", "sabo terlik", "ayak ağrısı", "topuk dikeni terliği", "ortopedik terlik"],
    seoTitle: "Ortopedik Medikal Terlik Seçim Rehberi",
    metaDescription: "Sağlık çalışanları ve tüm gün ayakta kalanlar için bel ve ayak ağrısını önleyen ortopedik sabo (medikal) terlik seçimi. Topuk dikeni için terlikler.",
    keywords: ["medikal terlik", "sabo terlik", "ortopedik terlik", "ayakta çalışanlar için ayakkabı", "topuk dikeni terliği"]
  }),

  createBlogPost({
    id: "tansiyon-aleti-secim-rehberi",
    title: "Tansiyon Aleti Alırken Dikkat Edilmesi Gereken 5 Önemli Kriter",
    slug: "tansiyon-aleti-alirken-dikkat-edilmesi-gerekenler",
    excerpt: "Bilekten mi yoksa koldan ölçer mi? Evde doğru tansiyon takibi için dijital tansiyon aleti seçerken mutlaka bilmeniz gereken detaylar.",
    content: "Hipertansiyon (yüksek tansiyon), belirti vermeden ilerleyebilen ve kalp-damar sağlığını ciddi şekilde tehdit eden kronik bir hastalıktır. Bu nedenle tansiyon hastalarının düzenli ev takibi yapması hayati önem taşır. Günümüzde manuel (steteskoplu) tansiyon aletlerinin yerini kullanımı çok daha kolay olan dijital tansiyon aletleri almıştır. Ancak her dijital tansiyon aleti doğru ve güvenilir sonuç vermez. Güvenilir bir cihaz seçmek için dikkat etmeniz gereken kritik özellikler vardır.",
    sections: [
      {
        id: "koldan-mi-bilekten-mi",
        title: "1. Koldan Ölçer mi, Bilekten Ölçer mi?",
        paragraphs: [
          "Dijital tansiyon aletleri temel olarak ikiye ayrılır: Üst koldan ölçenler ve bilekten ölçenler."
        ],
        subsections: [
          {
            title: "Üst Koldan Ölçen Tansiyon Aletleri (Önerilen)",
            paragraphs: [
              "Sağlık Bakanlığı rehberlerinde evde tansiyon takibi için kola uygun manşetli, onaylı ve koldan ölçen otomatik cihazlar önerilmektedir. Özel durumlarda cihaz seçimi için hekiminize danışın."
            ]
          },
          {
            title: "Bilekten Ölçen Tansiyon Aletleri",
            paragraphs: [
              "Taşınması kolaydır ve kışın kalın kıyafetleri çıkarmadan ölçüm yapma imkanı sunar. Ancak ölçüm sırasında bileğin tam kalp hizasında tutulması zorunludur. Yanlış pozisyon, ölçüm hatalarına neden olur."
            ]
          }
        ]
      },
      {
        id: "mansek-boyutu",
        title: "2. Manşet Boyutunun Kol Çevresine Uygunluğu",
        paragraphs: [
          "Tansiyon aletinin kola sarılan kısmına 'manşet' denir. Eğer kolunuz çok kalınsa ve standart (M beden) bir manşet kullanıyorsanız, cihaz kolunuzu çok fazla sıkacak ve tansiyonunuzu olduğundan yüksek çıkaracaktır. Eğer kolunuz çok inceyse, tam tersi düşük ölçecektir.",
          "Cihaz satın alırken manşet ölçülerini kontrol edin. Geniş kollu hastalar için geniş manşet (Large - 32-42 cm) destekleyen modeller tercih edilmelidir."
        ]
      },
      {
        id: "aritmi-tespiti",
        title: "3. Aritmi (Düzensiz Kalp Atışı) Tespiti",
        paragraphs: [
          "Özellikle yaşlı hastalarda ritim bozukluğu (aritmi) sık görülür. Ritim bozukluğu olan anlarda cihazın normal bir ölçüm yapması zorlaşır. Kaliteli cihazlar, ölçüm sırasında aritmi tespit ettiğinde ekranda özel bir uyarı ikonu göstererek hastayı hekime başvurması konusunda uyarır."
        ]
      },
      {
        id: "hafiza-ve-coklu-kullanim",
        title: "4. Hafıza Kapasitesi ve Çift Kullanıcı Desteği",
        paragraphs: [
          "Tansiyon takibinde doktorunuz sizden genellikle bir haftalık ölçüm dökümü ister. Geçmiş ölçümleri (tarih ve saat ile birlikte) kaydedebilen 60 veya 90 hafızalı cihazlar işinizi kolaylaştırır. Evde iki tansiyon hastası varsa, 'Kullanıcı 1 / Kullanıcı 2' ayrımı yapabilen cihazlar ölçümlerin birbirine karışmasını engeller."
        ]
      },
      {
        id: "klinik-onay",
        title: "5. Klinik Onay (Validasyon) ve Garanti",
        paragraphs: [
          "Satın alacağınız cihazın mutlaka CE belgesine sahip ve uluslararası hipertansiyon kuruluşları tarafından 'Klinik Olarak Onaylanmış (Clinically Validated)' olması gerekir. Güvenilir markalar genellikle cihazlarına 2 ila 5 yıl arası garanti sunar."
        ]
      }
    ],
    faqs: [
      {
        id: "tansiyon-nasil-olculmeli",
        question: "Evde doğru tansiyon ölçümü nasıl yapılır?",
        answer: "Ölçümden en az 5 dakika önce sakin bir yere oturup dinlenin. Yarım saat öncesinde çay, kahve veya sigara tüketmeyin. Ölçüm sırasında konuşmayın, bacak bacak üstüne atmayın ve kolunuzu bir masaya dayayarak kalp hizasında tutun."
      },
      {
        id: "kalibrasyon-gerekir-mi",
        question: "Dijital tansiyon aletlerinin kalibrasyonu bozulur mu?",
        answer: "Kaliteli dijital cihazlar uzun yıllar kalibrasyon gerektirmeden çalışır. Ancak cihazın şiddetli darbe alması durumunda veya ölçümlerden şüphe ediliyorsa yetkili teknik serviste kalibrasyon kontrolü yaptırılabilir."
      }
    ],
    internalLinks: [
      {
        label: "Şeker Ölçüm Cihazı Rehberi",
        href: "/blog/seker-olcum-cihazi-glukometre-secimi-ve-dogru-olcum",
        description: "Tansiyon hastalarının sıkça takip etmesi gereken bir diğer değer olan kan şekeri ölçümü hakkında bilgi alın."
      }
    ],
    image: "/assets/images/blog/dijital-tansiyon-aleti-olcum.webp",
    publishedAt: "2026-07-05",
    category: "Kronik Hastalıklar ve Takip Cihazları",
    tags: ["tansiyon aleti", "hipertansiyon", "koldan tansiyon aleti", "dijital tansiyon aleti", "aritmi"],
    seoTitle: "Tansiyon Aleti Seçim Rehberi",
    metaDescription: "Koldan mı yoksa bilekten mi ölçen tansiyon aleti almalısınız? Dijital tansiyon aleti alırken manşet boyu ve klinik onay gibi dikkat edilecek 5 özellik.",
    keywords: ["tansiyon aleti alırken nelere dikkat edilmeli", "en iyi tansiyon aleti", "koldan tansiyon aleti", "dijital tansiyon aleti"]
  }),

  createBlogPost({
    id: "nebulizator-secimi-ve-kullanimi",
    title: "Astım ve KOAH Hastaları İçin En Etkili Nebulizatör Modelleri ve Kullanım İpuçları",
    slug: "astim-koah-nebulizator-secimi-ve-kullanim-ipuclari",
    excerpt: "Sıvı ilaçları buhara dönüştürerek doğrudan akciğerlere ulaştıran nebulizatör cihazlarının çeşitleri ve temizlik kuralları.",
    content: "Astım, KOAH (Kronik Obstrüktif Akciğer Hastalığı), bronşit veya şiddetli alerjik reaksiyonlarda, solunum yollarını hızla açmak için ilaçların doğrudan akciğerlere ulaşması gerekir. Hap veya şurup formundaki ilaçların kana karışıp etki etmesi zaman alırken, 'Nebulizatör' (buhar makinesi) cihazları sıvı ilacı mikroskobik damlacıklara (aerosol) dönüştürerek maske yoluyla direkt solunum yollarına iletir. Özellikle bebekler, yaşlılar ve ağır solunum sıkıntısı çekenler için nebulizatör kullanımı hayat kurtarıcıdır.",
    sections: [
      {
        id: "nebulizator-cesitleri",
        title: "Nebulizatör Cihazı Çeşitleri Nelerdir?",
        paragraphs: [
          "Piyasada çalışma prensiplerine göre üç farklı nebulizatör tipi bulunmaktadır:"
        ],
        subsections: [
          {
            title: "1. Kompresörlü (Pistonlu) Nebulizatörler",
            paragraphs: [
              "En yaygın ve ekonomik modellerdir. Bir motor (kompresör) yardımıyla basınçlı hava üreterek ilacı buhara çevirir. Her türlü medikal ilacı sorunsuz parçalar. Dezavantajı ise biraz sesli çalışmalarıdır."
            ]
          },
          {
            title: "2. Ultrasonik Nebulizatörler",
            paragraphs: [
              "Yüksek frekanslı ses dalgaları kullanarak ilacı buharlaştırır. Son derece sessiz çalışırlar. Ancak kortizon bazlı bazı yoğun ilaçları parçalamakta yetersiz kalabilirler, bu yüzden almadan önce doktorunuzun yazdığı ilaç türüne uygunluğunu teyit etmelisiniz."
            ]
          },
          {
            title: "3. Mesh (Elek) Tipi Nebulizatörler",
            paragraphs: [
              "En yeni teknolojidir. Mikro delikli bir elek (mesh) titreşerek ilacı çok ince bir buhara dönüştürür. Pille çalışabilir, cepte taşınacak kadar küçüktür ve tamamen sessizdir. Seyahat eden astım hastaları ve uyurken bebeklere buhar vermek isteyen ebeveynler için idealdir."
            ]
          }
        ]
      },
      {
        id: "nebulizator-alirken-dikkat",
        title: "Cihaz Seçerken Hangi Özelliklere Bakılmalı?",
        paragraphs: [
          "Cihazın sadece buhar çıkarması yeterli değildir. Önemli olan o buharın içindeki ilaç partiküllerinin boyutudur. Akciğerin derinlerine (alveollere) inebilmesi için cihazın partikül boyutu (MMAD) 1 ile 5 mikron arasında olmalıdır. Ayrıca cihazın kutusundan hem yetişkin hem de çocuk/bebek maskesinin çıkıp çıkmadığını kontrol etmelisiniz."
        ]
      },
      {
        id: "temizlik-ve-bakim",
        title: "Nebulizatör Hijyeni: Maske ve İlaç Haznesi Nasıl Temizlenir?",
        paragraphs: [
          "Nebulizatörler sıcak ve nemli ortam yarattığı için bakteri üremesine çok müsaittir. Temizlenmeyen cihazlar akciğere enfeksiyon (zatürre) taşıyabilir:",
          "- Her kullanımdan sonra ilaç haznesinde (hazne) kalan sıvı mutlaka dökülmelidir.",
          "- İlaç haznesi, maske ve ağızlık parçaları ılık su ve birkaç damla bulaşık deterjanı ile yıkanıp, iyice durulanmalı ve kurumaya bırakılmalıdır.",
          "- Hortumun içi kesinlikle yıkanmaz! Eğer hortumda nem birikirse, cihaz boşken çalıştırılarak hortumun içinin hava ile kuruması sağlanır."
        ]
      }
    ],
    faqs: [
      {
        id: "nebulizatore-sadece-su-konur-mu",
        question: "Nebulizatöre sadece su veya serum fizyolojik konur mu?",
        answer: "Evet, özellikle kış aylarında burun tıkanıklığını açmak veya kuru öksürüğü yumuşatmak için ilaçsız olarak sadece steril serum fizyolojik (tuzlu su) konularak da kullanılabilir. Ancak normal musluk suyu veya içme suyu enfeksiyon riski taşıdığı için kesinlikle konulmamalıdır."
      },
      {
        id: "nebulizator-ve-buhar-makinesi-farki",
        question: "Oda nemlendirici (buhar makinesi) ile nebulizatör aynı şey midir?",
        answer: "Hayır. Oda nemlendiricileri sadece odaya su buharı vererek ortam havasını nemlendirir. Nebulizatörler ise medikal sıvı ilaçları mikroskobik boyutta parçalayarak doğrudan hastanın solunum yollarına ileten tıbbi cihazlardır."
      }
    ],
    internalLinks: [
      {
        label: "Solunum Cihazı Satın Alma Rehberi",
        href: "/blog/medikal-cihaz-satin-alma-rehberi",
        description: "Solunum cihazı satın alırken reçete, kapasite, sarf malzemesi ve servis koşullarını inceleyin."
      }
    ],
    image: "/assets/images/blog/nebulizator-buhar-makinesi-koah.webp",
    publishedAt: "2026-07-09",
    category: "Kronik Hastalıklar ve Takip Cihazları",
    tags: ["nebulizatör", "buhar makinesi", "astım", "koah", "mesh nebulizatör"],
    seoTitle: "Nebulizatör Seçimi: Astım ve KOAH",
    metaDescription: "Astım ve KOAH tedavisi için kompresörlü, ultrasonik ve mesh tipi nebulizatör seçimi. Bebekler için sessiz buhar makinesi modelleri ve temizlik kuralları.",
    keywords: ["nebulizatör seçimi", "en iyi buhar makinesi", "mesh nebulizatör", "astım cihazı", "sessiz nebulizatör"]
  }),

  createBlogPost({
    id: "glukometre-secimi-ve-olcum",
    title: "Şeker Ölçüm Cihazı (Glükometre) Seçimi ve Doğru Ölçüm Yapmanın Püf Noktaları",
    slug: "seker-olcum-cihazi-glukometre-secimi-ve-dogru-olcum",
    excerpt: "Diyabet (şeker) hastaları için kan şekeri ölçüm cihazı alırken dikkat edilecekler ve evde acısız, doğru ölçüm yapma teknikleri.",
    content: "Diyabet (şeker hastalığı), kan şekerinin sürekli olarak normal sınırların üzerinde seyretmesi durumudur. İnsülin kullanan Tip 1 diyabetliler ve ilaç kullanan Tip 2 diyabetliler için kan şekerini düzenli takip etmek, hipoglisemi (şeker düşüklüğü) veya hiperglisemi (şeker yüksekliği) krizlerini önlemenin tek yoludur. Evde kendi kendinize ölçüm yapmanızı sağlayan cihazlara 'Glükometre' adı verilir. Çoğu hasta cihazın kendisine odaklansa da, aslında ölçümün doğruluğunu cihaz kadar kullanılan stripler (ölçüm çubukları) ve ölçüm tekniği belirler.",
    sections: [
      {
        id: "glukometre-secim-kriterleri",
        title: "Şeker Ölçüm Cihazı Alırken Nelere Dikkat Edilmeli?",
        paragraphs: [
          "Eczane veya medikallerde onlarca farklı marka cihaz bulunur. Cihazı ücretsiz bile verseler, asıl maliyetin sürekli alacağınız 'ölçüm çubukları (strip)' olduğunu unutmayın."
        ],
        subsections: [
          {
            title: "1. Strip Bulunabilirliği ve Maliyeti",
            paragraphs: [
              "Cihazı almadan önce, o markanın striplerinin piyasada kolay bulunup bulunmadığını ve SGK geri ödemesi kapsamında olup olmadığını mutlaka sorun. Piyasadan çekilmiş bir markanın cihazını alırsanız, çubuk bulamadığınız için cihaz çöp olacaktır."
            ]
          },
          {
            title: "2. Kan Damlası İhtiyacı ve Ölçüm Hızı",
            paragraphs: [
              "Yeni nesil kaliteli cihazlar ölçüm yapmak için çok küçük bir kan damlasına (0.5 mikrolitre) ihtiyaç duyar. Bu da parmağınızı daha az delmeniz ve daha az acı hissetmeniz demektir. Ölçüm hızı genellikle 5 saniyedir."
            ]
          },
          {
            title: "3. Kodlama Gereksinimi (No-Coding)",
            paragraphs: [
              "Eski nesil cihazlarda yeni bir kutu strip alındığında cihaza bir kod girmek (veya çip takmak) gerekiyordu. Bu unutulduğunda yanlış sonuçlar çıkıyordu. Mutlaka 'Kod gerektirmeyen (No-Coding)' yeni nesil cihazları tercih edin."
            ]
          }
        ]
      },
      {
        id: "dogru-olcum-nasil-yapilir",
        title: "Evde Doğru ve Acısız Kan Şekeri Ölçümü İçin 5 Altın Kural",
        paragraphs: [
          "Bazen arka arkaya yapılan iki ölçümün farklı çıkması cihazın bozuk olduğundan değil, hatalı ölçüm tekniğinden kaynaklanır:",
          "1. Ölçümden önce ellerinizi sabun ve ılık suyla yıkayıp tamamen kurulayın.",
          "2. Ölçüm cihazını, stripleri ve lanseti ürünün kullanım kılavuzunda belirtildiği şekilde hazırlayın.",
          "3. Parmağı aşırı sıkmadan cihazın istediği miktarda kan örneğini test stribine uygulayın.",
          "4. Tek kullanımlık lansetleri yeniden kullanmayın ve güvenli biçimde bertaraf edin.",
          "5. Sonuçları kaydedin; ölçüm zamanı ve sıklığı için hekiminizin önerisini izleyin."
        ]
      }
    ],
    faqs: [
      {
        id: "stripler-bozulur-mu",
        question: "Ölçüm çubuklarının (striplerin) son kullanma tarihi var mıdır?",
        answer: "Evet. Tarihi geçmiş stripler kesinlikle yanlış sonuç verir. Ayrıca stripler nemden ve güneşten çok çabuk etkilenir. Strip kutusunun kapağı her zaman sıkıca kapalı tutulmalıdır."
      },
      {
        id: "aclik-tokluk-farki",
        question: "Açlık ve tokluk kan şekeri ne zaman ölçülür?",
        answer: "Açlık kan şekeri, sabah uyanınca (8-10 saatlik açlık sonrası) ölçülür. Tokluk kan şekeri ise yemeğe başlanılan ilk lokmadan tam 2 saat sonra ölçülmelidir (yemeğin bitişinden değil)."
      }
    ],
    internalLinks: [
      {
        label: "Tansiyon Takibi",
        href: "/blog/tansiyon-aleti-alirken-dikkat-edilmesi-gerekenler",
        description: "Diyabet hastalarında sıklıkla eşlik eden yüksek tansiyon rahatsızlığı için doğru tansiyon aleti seçimi."
      }
    ],
    image: "/assets/images/blog/seker-olcum-cihazi-glukometre.webp",
    publishedAt: "2026-07-13",
    category: "Kronik Hastalıklar ve Takip Cihazları",
    tags: ["şeker ölçüm cihazı", "glükometre", "kan şekeri ölçümü", "diyabet", "strip"],
    seoTitle: "Glükometre Seçimi ve Doğru Ölçüm",
    metaDescription: "Diyabet hastaları için en iyi şeker ölçüm cihazı nasıl seçilir? Evde acısız ve doğru kan şekeri ölçümü yapmak için lanset ve strip kullanım teknikleri.",
    keywords: ["şeker ölçüm cihazı", "glükometre", "kan şekeri nasıl ölçülür", "no coding şeker cihazı", "diyabet"]
  }),

  createBlogPost({
    id: "sut-pompasi-secimi",
    title: "Süt Pompası (Göğüs Pompası) Alırken Elektrikli mi Manuel mi Tercih Edilmeli?",
    slug: "sut-pompasi-gogus-pompasi-elektrikli-mi-manuel-mi",
    excerpt: "Çalışan anneler ve emzirme problemi yaşayanlar için en iyi süt pompası hangisi? Elektrikli ve manuel göğüs pompalarının avantajları.",
    content: "Anne sütü, bebeğin bağışıklık sistemini güçlendiren ve ilk 6 ay tek başına yeterli olan en mucizevi besindir. Ancak çalışan anneler, prematüre bebek sahibi olanlar veya göğüs ucu yarası (mastit) nedeniyle doğrudan emziremeyen anneler için sütün sağılarak verilmesi zorunlu hale gelir. Bu noktada en büyük yardımcı 'Süt Pompası' (Göğüs Pompası) cihazlarıdır. Piyasada temel olarak manuel (elle çalışan) ve elektrikli (motorlu) olmak üzere iki tip pompa bulunur. Hangi pompanın sizin için doğru olduğu, süt sağma sıklığınıza ve yaşam tarzınıza bağlıdır.",
    sections: [
      {
        id: "manuel-sut-pompalari",
        title: "Manuel (El Tipi) Süt Pompaları",
        paragraphs: [
          "Bir motor veya elektriğe ihtiyaç duymadan, annenin el gücüyle çalışan pompalardır. Pompanın üzerindeki mandala basıp bırakılarak vakum oluşturulur."
        ],
        subsections: [
          {
            title: "Avantajları Nelerdir?",
            paragraphs: [
              "Hafif ve sessizdir. Çantada kolayca taşınır, her yerde kullanılabilir. Elektrikli modellere göre çok daha ekonomiktir. Sağım ritmini ve vakum gücünü anne kendi el hızıyla kontrol ettiği için acı hissini kolayca ayarlayabilir."
            ]
          },
          {
            title: "Kimler Tercih Etmeli?",
            paragraphs: [
              "Eğer bebeğinizi sürekli kendiniz emziriyorsanız ve sadece nadiren (örneğin dışarı çıktığınızda veya göğsünüz çok dolduğunda) süt sağacaksanız manuel pompa sizin için yeterlidir. Ancak her gün düzenli sağım yapmak el kaslarını yoracağı için sürekli kullanımda zorlayıcıdır."
            ]
          }
        ]
      },
      {
        id: "elektrikli-sut-pompalari",
        title: "Elektrikli Süt Pompaları",
        paragraphs: [
          "Bir motor yardımıyla otomatik olarak vakum yapan cihazlardır. Genellikle bebeklerin doğal emme ritmini (önce hızlı ve kısa uyarı, sonra yavaş ve derin çekiş) taklit eden mikroçiplere sahiptirler."
        ],
        subsections: [
          {
            title: "Tekli ve Çiftli Modeller",
            paragraphs: [
              "Tekli pompalar aynı anda bir göğsü sağarken, çiftli (ikili) pompalar her iki göğsü aynı anda sağarak zamanı yarı yarıya düşürür. Çiftli pompalar ayrıca prolaktin (süt hormonu) seviyesini daha fazla uyararak süt üretimini artırır."
            ]
          },
          {
            title: "Kimler Tercih Etmeli?",
            paragraphs: [
              "İşe geri dönen, bebeğinden ayrı kalmak zorunda olan veya süt üretimi az olduğu için sık sık sütünü sağarak memeyi uyarması gereken anneler kesinlikle elektrikli (mümkünse çiftli) modelleri tercih etmelidir."
            ]
          }
        ]
      },
      {
        id: "hastane-tipi-sut-pompasi",
        title: "Hastane Tipi Süt Pompası Ne Zaman Değerlendirilmeli?",
        paragraphs: [
          "Prematüre doğum veya süt üretiminin başlamadığı özel durumlarda hastane tipi süt pompaları sağlık profesyoneli önerisiyle değerlendirilebilir. Satın alma öncesinde cihazın vakum ayarları, hijyenik sarf parçaları, garanti ve teknik servis koşulları karşılaştırılmalıdır."
        ]
      }
    ],
    faqs: [
      {
        id: "sagilan-sut-nasil-saklanir",
        question: "Sağılan anne sütü ne kadar süre saklanabilir?",
        answer: "Sağılan anne sütü; oda ısısında (22°C civarı) 3 saat, buzdolabında (0-4°C) 3 gün, derin dondurucuda (-18°C) ise 3 aya kadar besin değerini kaybetmeden güvenle saklanabilir. Saklamak için özel steril süt saklama poşetleri veya kapları kullanılmalıdır."
      },
      {
        id: "pompa-temizligi",
        question: "Süt pompası nasıl sterilize edilir?",
        answer: "Motor kısmı ve hava hortumu ASLA yıkanmaz. Anne sütüne temas eden biberon, huni ve silikon valf gibi parçalar ılık sabunlu suyla yıkanıp kaynatılarak veya buharlı sterilizatör cihazlarında steril edilmelidir."
      }
    ],
    internalLinks: [
      {
        label: "Ateş Ölçer Seçimi",
        href: "/blog/ates-olcer-secimi-temassiz-mi-kulaktan-mi",
        description: "Bebeğinizin sağlığı için evde bulunması gereken en önemli cihazlardan biri olan ateş ölçerleri inceleyin."
      }
    ],
    image: "/assets/images/blog/elektrikli-sut-pompasi-anne-bebek.webp",
    publishedAt: "2026-07-16",
    category: "Anne & Bebek Sağlığı",
    tags: ["süt pompası", "göğüs pompası", "elektrikli süt pompası", "anne sütü", "mastit"],
    seoTitle: "Elektrikli ve Manuel Süt Pompası Seçimi",
    metaDescription: "Çalışan anneler ve emzirenler için en iyi elektrikli ve manuel süt pompası (göğüs pompası) seçimi. Süt saklama koşulları ve pompa temizliği.",
    keywords: ["süt pompası önerisi", "elektrikli göğüs pompası", "manuel süt pompası", "hastane tipi süt pompası"]
  }),

  createBlogPost({
    id: "ates-olcer-secimi",
    title: "Ateş Ölçer Seçimi: Temassız mı, Kulaktan mı Daha Güvenilir?",
    slug: "ates-olcer-secimi-temassiz-mi-kulaktan-mi",
    excerpt: "Bebek ve çocuklarda doğru ateş ölçümü yapmak için kızılötesi temassız ateş ölçer mi yoksa kulaktan ateş ölçer mi tercih edilmeli?",
    content: "Bebek ve çocuklarda yüksek ateş, aileleri en çok endişelendiren ve acil müdahale gerektirebilen bir durumdur. Özellikle gece uykusunda bebeği uyandırmadan hızlı ve doğru ölçüm yapmak kritik bir öneme sahiptir. Eski cıvalı termometrelerin tehlikeleri nedeniyle yasaklanmasının ardından, dijital ateş ölçerler hayatımıza girdi. Günümüzde eczane ve medikallerde en çok tercih edilen iki model vardır: Alından ölçen 'Temassız (Kızılötesi)' cihazlar ve 'Kulaktan' ölçen tympanic cihazlar. Peki bebeğiniz için en güvenilir olanı hangisidir?",
    sections: [
      {
        id: "kulaktan-ates-olcer",
        title: "Kulaktan Ateş Ölçerler (Timpanik Termometreler)",
        paragraphs: [
          "Kulak zarı (timpanik membran), vücudun ısı kontrol merkezi olan hipotalamus ile aynı kan damarını paylaşır. Bu nedenle vücut çekirdek ısısını en hızlı ve en doğru gösteren bölgedir."
        ],
        subsections: [
          {
            title: "Avantajları Nelerdir?",
            paragraphs: [
              "Doktorlar ve hastaneler tarafından klinik doğruluk açısından en çok güvenilen cihazlardır. Saniyeler içinde milimetrik ve tutarlı sonuç verir."
            ]
          },
          {
            title: "Dikkat Edilmesi Gerekenler",
            paragraphs: [
              "Yeni doğan bebeklerin (0-6 ay) kulak kanalları çok dar olduğu için probun kulak zarına doğru açıyla yerleştirilmesi zordur, bu yüzden yanıltıcı ölçüm yapabilir. Ayrıca doğru ölçüm için cihazın ucuna takılan 'hijyenik koruyucu filtrenin' temiz olması ve her ölçümde veya her farklı hastada değiştirilmesi gerekir. Kulakta aşırı kir (buşon) varsa düşük ölçüm yapabilir."
            ]
          }
        ]
      },
      {
        id: "temassiz-ates-olcer",
        title: "Alından Temassız Ateş Ölçerler (Kızılötesi)",
        paragraphs: [
          "Cihazı cilt yüzeyine temas ettirmeden, alından 3-5 cm uzaklıktan kızılötesi dalgalarla ortam ısısını vücut ısısına çevirerek ölçüm yapan cihazlardır."
        ],
        subsections: [
          {
            title: "Avantajları Nelerdir?",
            paragraphs: [
              "Kesinlikle en konforlu yöntemdir. Gece uyuyan, ağlayan veya hareket eden bir bebeğin ateşini onu hiç rahatsız etmeden anında ölçebilirsiniz. Ayrıca koruyucu filtre gerektirmez ve cihaz temas etmediği için enfeksiyon bulaşma riski sıfırdır. İyi cihazlarla ortam (oda) ve banyo suyunun ısısı da ölçülebilir."
            ]
          },
          {
            title: "Dikkat Edilmesi Gerekenler",
            paragraphs: [
              "Çevresel faktörlerden çok etkilenir. Bebek terliyse, alnında soğuk bir bez varsa veya cihaz soğuk bir odadan alınıp hemen sıcak odada kullanılırsa yanlış sonuçlar verir. Ölçüm yapmadan önce hem cihazın hem de bebeğin aynı oda sıcaklığında en az 10-15 dakika kalmış olması gerekir. Alın tamamen kuru olmalıdır."
            ]
          }
        ]
      },
      {
        id: "hangisi-alinmali",
        title: "Sonuç: Hangisini Almalısınız?",
        paragraphs: [
          "Temassız ateş ölçerler hızlı ve temas gerektirmeyen kullanım sunar; doğru sonuç için cihazın mesafe ve ortam koşulu talimatları izlenmelidir.",
          "Kulaktan ölçen modellerde yaşa uygunluk, doğru yerleştirme ve hijyen başlıkları önemlidir. Seçimde üretici talimatları ve sağlık profesyoneli önerisi dikkate alınmalıdır."
        ]
      }
    ],
    faqs: [
      {
        id: "koltuk-alti-olcum",
        question: "Koltuk altından dijital çubuk termometre ile ölçüm güvenilir mi?",
        answer: "Evet güvenilirdir ancak ölçüm süresi uzundur (yaklaşık 1-2 dakika). Hareketli çocuklarda bu süreyi beklemek zor olduğu için genellikle yetişkinler için daha uygundur."
      },
      {
        id: "ates-kac-olmali",
        question: "Normal vücut sıcaklığı (ateş) kaç derece olmalıdır?",
        answer: "Bebek ve çocuklarda koltuk altı ve alından ölçümlerde 36.5°C - 37.2°C arası normal kabul edilir. 37.5°C üzeri subfebril (hafif ateş), 38.0°C ve üzeri ise yüksek ateş olarak değerlendirilir ve çocuk doktoruna başvurulmalıdır."
      }
    ],
    internalLinks: [
      {
        label: "Süt Pompası Seçimi",
        href: "/blog/sut-pompasi-gogus-pompasi-elektrikli-mi-manuel-mi",
        description: "Yenidoğan döneminde annelerin en çok ihtiyaç duyduğu göğüs pompaları hakkında bilgi alın."
      }
    ],
    image: "/assets/images/blog/temassiz-ates-olcer-bebek.webp",
    publishedAt: "2026-07-20",
    category: "Anne & Bebek Sağlığı",
    tags: ["ateş ölçer", "temassız ateş ölçer", "kulaktan ateş ölçer", "bebek ateşi", "termometre"],
    seoTitle: "Temassız ve Kulaktan Ateş Ölçer Seçimi",
    metaDescription: "Bebekler için en iyi ve en doğru ölçen ateş ölçer hangisi? Temassız (alından) ateş ölçer ile kulaktan ateş ölçer (termometre) arasındaki farklar ve tavsiyeler.",
    keywords: ["ateş ölçer", "temassız ateş ölçer", "kulaktan ateş ölçer", "en iyi ateş ölçer", "bebek termometresi"]
  })
];
