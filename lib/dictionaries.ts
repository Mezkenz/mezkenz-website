import "server-only";
import type { Locale } from "./i18n";
const dictionaries = {
  en: () => import("@/locales/en.json").then(m => m.default),
  nl: () => import("@/locales/nl.json").then(m => m.default),
};
export async function getDictionary(locale: Locale) {
  const loader = (dictionaries as any)[locale] as () => Promise<any>;
  return loader();
}
