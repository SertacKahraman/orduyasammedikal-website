import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı. Ordu Yaşam Medikal ürünlerini inceleyebilir veya bizimle iletişime geçebilirsiniz.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {

  return (
    <section className="flex min-h-[72vh] items-center bg-[#F7EFE6] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
          404 · Sayfa Bulunamadı
        </p>
        <h1 className="mt-5 font-serif text-5xl font-medium leading-tight text-[#3A2A24] sm:text-7xl">
          Aradığınız sayfaya ulaşamadık.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5F4E46] sm:text-lg">
          Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Medikal ürünleri inceleyebilir,
          ana sayfaya dönebilir ya da ürün bilgisi için bizimle iletişime geçebilirsiniz.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/urunler"
            className="inline-flex justify-center rounded-full bg-[#8F4B38] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3A2A24]"
          >
            Ürünleri İncele
          </Link>
          <Link
            href="/"
            className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#3A2A24] transition hover:border-[#8F4B38] hover:text-[#7A3429]"
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#3A2A24] transition hover:border-[#8F4B38] hover:text-[#7A3429]"
          >
            WhatsApp ile Sor
          </a>
        </div>
      </div>
    </section>
  );
}
