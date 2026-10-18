import type { Metadata } from "next";
import { site } from "@/content/site";
import { locales, ogLocale, type Locale } from "./i18n";

/** Métadonnées communes (canonique, alternates hreflang, Open Graph, Twitter) pour un chemin donné. */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  type = "website",
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  type?: "website" | "article";
}): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ...languages, "x-default": `/fr${path}` },
    },
    openGraph: {
      type,
      title,
      description,
      url: `/${locale}${path}`,
      siteName: site.name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
