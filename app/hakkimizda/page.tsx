import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = generateStaticPageMetadata(
  "Hakkımızda | Ordu Altınordu",
  "Ordu Yaşam Medikal'in hasta yatağı, tekerlekli sandalye ve medikal ürün yaklaşımını, Altınordu mağaza bilgilerini ve çalışma prensiplerini inceleyin.",
  "/hakkimizda",
);

const principles = [
  {
    title: "Kalite",
    description:
      "Sunduğumuz tüm medikal cihazlar ve ekipmanlar en yüksek kalite standartlarına sahiptir.",
  },
  {
    title: "Güven",
    description:
      "Hastalarımızın konforu ve sağlığı için her ürünü özenle seçiyor, teknik destek sağlıyoruz.",
  },
  {
    title: "Teslimat Desteği",
    description:
      "Stok ve bölge koşullarına göre teslimat ve kurulum seçeneklerini sipariş öncesinde paylaşıyoruz.",
  },
];

const processSteps = [
  "İhtiyaçlarınız ve kullanım beklentiniz yetkili personelimizce dinlenir.",
  "Uygun medikal cihaz veya donanım belirlenir.",
  "Teslimat, kurulum ve kullanım detayları sipariş öncesinde paylaşılır.",
];

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
  ];

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow="Ordu Yaşam Medikal"
        title="Hakkımızda"
        description="Ordu'da tekerlekli sandalye, solunum cihazı ve hasta yatağı ihtiyaçlarınızı hızlı, güvenilir ve konfor odaklı bir yaklaşımla karşılıyoruz."
        showTopBar={false}
      />

      <section className="scroll-reveal bg-[#F7EFE6] px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="reveal-item relative">
            <div className="relative bg-transparent">
              <Image
                src="/assets/images/products/tekerlekli-sandalye.webp"
                alt="Ordu Yaşam Medikal Altınordu medikal ürünler"
                width={900}
                height={900}
                className="h-auto w-full object-cover rounded-[32px] drop-shadow-[0_24px_38px_rgba(58,42,36,0.16)] aspect-square"
                priority
              />
            </div>
          </div>

          <div className="reveal-item">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A3429]">
              Şirket Yaklaşımı
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              Sadece ürün değil, güven ve kalite sunan bir medikal deneyim.
            </h2>
            <div className="mt-6 grid gap-5 text-sm leading-8 text-[#5F4E46]">
              <p>
                Ordu Yaşam Medikal; tekerlekli sandalye, solunum cihazları ve hasta yatağı gibi
                ihtiyaçlarınızda güven veren bir süreç sunmak için çalışır.
                Siparişlerinizde hastanın beklentisi ve rahatlığı
                birlikte değerlendirilir.
              </p>
              <p>
                Amacımız yalnızca ürün satışı yapmak değil; teslimat öncesinden kurulum
                sonrasına kadar anlaşılır bilgi veren, konforlu ve düzenli bir hizmet
                oluşturmaktır.
              </p>
            </div>

            <div className="mt-8 grid gap-4 border-y border-[#DDB89F]/50 py-6 sm:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="reveal-item">
                  <h3 className="font-serif text-2xl font-medium text-[#3A2A24]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5F4E46]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal-item">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A3429]">
              Sipariş Akışı
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-tight text-[#3A2A24]">
              İlk mesajdan işlem sonrasına kadar net bir süreç.
            </h2>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="reveal-item grid gap-4 border-t border-[#8F4B38]/24 py-5 sm:grid-cols-[72px_1fr]"
              >
                <span className="font-serif text-3xl font-medium text-[#7A3429]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-8 text-[#3A2A24]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

