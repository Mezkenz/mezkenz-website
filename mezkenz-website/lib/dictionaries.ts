import en from "@/locales/en.json";
import nl from "@/locales/nl.json";
import type { Locale } from "./i18n";

export async function getDictionary(locale: Locale) {
  return locale === "en" ? en : nl;
}
