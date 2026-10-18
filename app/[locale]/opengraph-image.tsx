import { isLocale } from "@/lib/i18n";
import { renderOg, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Reda Laksyer — BI & Data/AI";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "fr";
  return renderOg({
    eyebrow: `${site.name} — ${site.title[locale]}`,
    title: site.heroTaglines[site.heroTagline][locale],
    footer: site.specialties[locale],
  });
}
