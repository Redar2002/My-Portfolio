import type { Localized } from "@/lib/i18n";

/**
 * Informations personnelles et réglages globaux du site.
 * Modifiez ce fichier pour mettre à jour l'identité, les liens et le CV.
 */
export const site = {
  // URL publique : définissez NEXT_PUBLIC_SITE_URL sur Vercel (Settings → Environment Variables).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://reda-laksyer.vercel.app").replace(/\/$/, ""),
  name: "Reda Laksyer",
  initials: "RL",
  title: {
    fr: "Ingénieur BI & Data/IA",
    en: "BI & Data/AI Engineer",
  } satisfies Localized,
  specialties: {
    fr: "Business Intelligence, analyse de données, IA générative",
    en: "Business Intelligence, data analysis, generative AI",
  } satisfies Localized,
  location: { fr: "Rabat – Témara, Maroc", en: "Rabat – Temara, Morocco" } satisfies Localized,

  contact: {
    email: "laksyerreda@gmail.com",
    phoneDisplay: "+212 6 75 57 87 20",
    phoneHref: "tel:+212675578720",
    linkedin: "https://www.linkedin.com/in/reda-laksyer-31704926a",
    github: "https://github.com/Redar2002",
  },

  /** Mettre `null` tant que le fichier n'existe pas dans /public/cv. */
  cv: {
    fr: "/cv/reda-laksyer-cv-fr.pdf",
    en: null,
  } satisfies Localized<string | null>,

  languages: [
    { name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Langue maternelle", en: "Native" } },
    { name: { fr: "Français", en: "French" }, level: { fr: "Courant", en: "Fluent" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Professionnel", en: "Professional" } },
  ] satisfies { name: Localized; level: Localized }[],

  /**
   * Trois propositions de promesse pour le hero, chacune sur deux lignes
   * (la seconde s'affiche en italique, couleur d'accent). `heroTagline` choisit celle qui s'affiche (0, 1 ou 2).
   */
  heroTaglines: [
    { fr: ["De la donnée brute", "à l'indicateur qui tranche."], en: ["From raw data", "to the metric that settles it."] },
    { fr: ["Des chiffres", "qu'on peut défendre."], en: ["Numbers", "you can defend."] },
    { fr: ["Je rends la donnée fiable,", "puis lisible."], en: ["I make data reliable,", "then readable."] },
  ] satisfies Localized<[string, string]>[],
  heroTagline: 0,
};
