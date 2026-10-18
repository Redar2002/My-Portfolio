import { isLocale } from "@/lib/i18n";
import { renderOg, ogSize } from "@/lib/og";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Reda Laksyer — case study";

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "fr";
  const project = getProject(slug);
  return renderOg({
    eyebrow: project ? project.category[locale] : site.title[locale],
    title: project ? project.title[locale] : site.name,
    footer: `${site.name} — ${site.title[locale]}`,
  });
}
