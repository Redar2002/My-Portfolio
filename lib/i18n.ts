import { fr } from "@/content/i18n/fr";
import { en } from "@/content/i18n/en";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** Texte bilingue : chaque champ de contenu existe en FR et en EN. */
export type Localized<T = string> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale) {
  return locale === "fr" ? fr : en;
}

export const ogLocale: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };
