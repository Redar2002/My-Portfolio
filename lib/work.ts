import type { MDXContent } from "mdx/types";
import type { Locale } from "./i18n";
import type { ProjectSlug } from "@/content/projects";

type Loader = () => Promise<{ default: MDXContent }>;

/** Imports explicites : chaque étude de cas est compilée au build. */
const loaders: Record<Locale, Record<ProjectSlug, Loader>> = {
  fr: {
    "meeting-intelligence": () => import("@/content/work/fr/meeting-intelligence.mdx"),
    "elia-forecasting": () => import("@/content/work/fr/elia-forecasting.mdx"),
    "hospital-data-mart": () => import("@/content/work/fr/hospital-data-mart.mdx"),
    "cope-orientation": () => import("@/content/work/fr/cope-orientation.mdx"),
  },
  en: {
    "meeting-intelligence": () => import("@/content/work/en/meeting-intelligence.mdx"),
    "elia-forecasting": () => import("@/content/work/en/elia-forecasting.mdx"),
    "hospital-data-mart": () => import("@/content/work/en/hospital-data-mart.mdx"),
    "cope-orientation": () => import("@/content/work/en/cope-orientation.mdx"),
  },
};

export async function loadCaseStudy(locale: Locale, slug: ProjectSlug) {
  const mod = await loaders[locale][slug]();
  return mod.default;
}
