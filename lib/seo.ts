import type { Metadata } from "next";
import { businessInfo, services } from "@/data/site";
import type { BlogPost, BreadcrumbItem, FAQ, SEOFields, Service } from "@/types";

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "08:30",
    closes: "15:00",
  },
];

const businessGeo = {
  "@type": "GeoCoordinates",
  latitude: 40.9715439216868,
  longitude: 37.89039267551196,
};

const businessMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Ordu%20Ya%C5%9Fam%20Medikal%2C%20Alt%C4%B1nordu%2C%20Ordu";

function toAbsoluteUrl(url: string): string {
  if (url.startsWith("http")) {
    return url;
  }

  return `${businessInfo.baseUrl}${url}`;
}

export function generatePageMetadata(seo: SEOFields): Metadata {
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: seo.canonicalUrl,
      images: [
        {
          url: seo.ogImage,
          alt: seo.ogTitle,
        },
      ],
      locale: "tr_TR",
      siteName: businessInfo.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [seo.ogImage],
    },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noIndex,
    },
  };
}

export function generateStaticPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonicalUrl = `${businessInfo.baseUrl}${path}`;

  return generatePageMetadata({
    metaTitle: title,
    metaDescription: description,
    canonicalUrl,
    ogTitle: `${title} | ${businessInfo.name}`,
    ogDescription: description,
    ogImage: businessInfo.defaultOgImage,
    keywords: [],
    noIndex: false,
  });
}

export function generateServiceMetadata(service: Service): Metadata {
  return generatePageMetadata(service.seo);
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  return {
    ...generatePageMetadata(post.seo),
    openGraph: {
      ...generatePageMetadata(post.seo).openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${businessInfo.baseUrl}/#localbusiness`,
    name: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.baseUrl,
    logo: businessInfo.logoUrl,
    image: businessInfo.defaultOgImage,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressLocality: businessInfo.district,
      addressRegion: businessInfo.city,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.country,
    },
    geo: businessGeo,
    hasMap: businessMapUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "sales",
      areaServed: "TR-52",
      availableLanguage: "Turkish",
    },
    areaServed: [businessInfo.city, businessInfo.district],
    openingHours: businessInfo.workingHours,
    openingHoursSpecification,
    priceRange: "$$",
    currenciesAccepted: "TRY",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tıbbi cihazlar ve medikal ürünler",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: service.seo.canonicalUrl,
          areaServed: [businessInfo.city, businessInfo.district],
        },
      })),
    },
  };
}

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    image: toAbsoluteUrl(service.image),
    url: service.seo.canonicalUrl,
    provider: {
      "@type": "MedicalBusiness",
      "@id": `${businessInfo.baseUrl}/#localbusiness`,
      name: businessInfo.name,
      url: businessInfo.baseUrl,
      telephone: businessInfo.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address,
        addressLocality: businessInfo.district,
        addressRegion: businessInfo.city,
        postalCode: businessInfo.postalCode,
        addressCountry: businessInfo.country,
      },
      geo: businessGeo,
      hasMap: businessMapUrl,
      openingHoursSpecification,
    },
    areaServed: [businessInfo.city, businessInfo.district],
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${businessInfo.baseUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };
}
