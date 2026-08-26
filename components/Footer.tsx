import Image from "next/image";
import Link from "next/link";
import { businessInfo, navItems, services, whatsappHref } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#2F211C] text-[#F7EFE6]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-[#DDB89F]/18 pb-12 lg:grid-cols-[1.1fr_1.6fr]">
          <div>
            <Link href="/" aria-label="Ordu Yaşam Medikal ana sayfa" className="inline-flex">
              <Image
                src="/assets/brand/yasam-logo-360.webp"
                alt="Ordu Yaşam Medikal"
                width={360}
                height={87}
                sizes="132px"
                className="h-auto w-[132px] object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#F7EFE6]/82">
              Ordu'da hasta yatağı, tekerlekli sandalye ve solunum cihazı gibi medikal
              ürünlerde doğru bilgilendirme ve teslimat desteği.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-[#8F4B38] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#6F3328]"
              >
                WhatsApp Sipariş
              </a>
              <Link
                href="/iletisim"
                className="inline-flex justify-center rounded-full border border-[#DDB89F]/35 px-6 py-3 text-sm font-semibold text-[#F7EFE6] transition hover:-translate-y-0.5 hover:border-[#DDB89F] hover:text-white"
              >
                İletişime Geç
              </Link>
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E8C9B2]">
                Sayfalar
              </p>
              <nav className="mt-5 grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[#F7EFE6]/82 transition hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E8C9B2]">
                Ürünler
              </p>
              <nav className="mt-5 grid gap-3">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/urunler/${service.slug}`}
                    className="text-sm text-[#F7EFE6]/82 transition hover:translate-x-1 hover:text-white"
                  >
                    {service.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E8C9B2]">
                İletişim
              </p>
              <div className="mt-5 grid gap-3 text-sm leading-6 text-[#F7EFE6]/82">
                <div>
                  <p className="font-semibold text-[#F7EFE6]">Altınordu / Ordu</p>
                  <p className="mt-1">{businessInfo.address}</p>
                </div>
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-white"
                >
                  {businessInfo.phone}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp ile yaz
                </a>
                <a href={`mailto:${businessInfo.email}`} className="transition hover:text-white">
                  {businessInfo.email}
                </a>
                <p>{businessInfo.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-[#F7EFE6]/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {businessInfo.name}. Tüm hakları saklıdır.</p>
          <p>
            Design by{" "}
            <a
              href="https://www.sertackahraman.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#DDB89F]/45 underline-offset-4 transition hover:text-white"
            >
              Sertaç Kahraman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
