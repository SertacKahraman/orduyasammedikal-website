import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { businessInfo, services } from "@/data/site";
import { generateBreadcrumbSchema, generateStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = generateStaticPageMetadata(
  "Medikal Ürünler ve Satış",
  "Ordu Altınordu'da hasta yatağı, tekerlekli sandalye, solunum cihazı, havalı yatak, hasta bezi ve medikal ürün seçeneklerini inceleyin.",
  "/urunler",
);

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
  ];
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ordu Yaşam Medikal Ürünleri",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: service.seo.canonicalUrl,
      description: service.shortDescription,
    })),
  };

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={serviceListSchema} />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow="Medikal Çözümler"
        title="Ürünlerimiz"
        description="Tekerlekli sandalyeden solunum cihazlarına kadar geniş medikal ürün yelpazemiz."
        showTopBar={false}
      />

      <section className="scroll-reveal service-scroll bg-[#F7EFE6] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-5 border-y border-[#DDB89F]/65 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Ordu Altınordu'da medikal ürün seçenekleri
            </h2>
            <div className="grid gap-4 text-sm leading-7 text-[#5F4E46]">
              <p>
                Ordu Yaşam Medikal'de tekerlekli sandalye, hasta yatağı, solunum cihazları, tansiyon aletleri ve ortopedik ürünler gibi temel ihtiyaçlar en hızlı şekilde teslim edilir.
              </p>
              <p>
                Her ürün kartından detay sayfasına geçerek kullanım özellikleri, garanti süresi,
                kurulum detayları ve sık sorulan sorular hakkında bilgi alabilirsiniz.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/urunler/${service.slug}`}
                className="group overflow-hidden rounded-lg border border-[#DDB89F]/55 bg-[#FFF8F3] transition hover:-translate-y-1 hover:border-[#8F4B38]/55"
              >
                <span className="relative block h-60 bg-[#E8C9B2]">
                  <Image
                    src={service.cardImage ?? service.image}
                    alt={`${service.title} ürünü - ${businessInfo.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </span>

                <span className="block p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                    Medikal Ürün
                  </span>
                  <span className="mt-3 block text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                    {service.title}
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-[#5F4E46]">
                    {service.shortDescription}
                  </span>

                  <span className="mt-5 grid gap-2 border-t border-[#E8C9B2]/80 pt-4 text-sm text-[#5F4E46]">
                    <span className="flex items-center justify-between gap-4">
                      <span>Teslimat</span>
                      <strong className="font-semibold text-[#2F211C]">{service.duration}</strong>
                    </span>
                    <span className="flex items-center justify-between gap-4">
                      <span>Fiyat</span>
                      <strong className="text-right font-semibold text-[#2F211C]">
                        {service.priceText}
                      </strong>
                    </span>
                  </span>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7A3429]">
                    Detayları İncele
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-5 border-t border-[#DDB89F]/65 pt-7 text-sm leading-7 text-[#5F4E46] lg:grid-cols-3">
            <p>
              Ürün seçimi yapılırken hastanın ağırlığı, kullanım alanı ve sürekli ihtiyaçları
              birlikte değerlendirilmelidir.
            </p>
            <p>
              Medikal ekipman tedariğinde kalite, doğru bilgilendirme ve hızlı servis,
              hasta yakınları için konforlu bir süreç sağlar.
            </p>
            <p>
              Ordu Altınordu'da sipariş oluşturmak için WhatsApp üzerinden ürün adını ve teslimat
              adresini paylaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
