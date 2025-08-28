export const locales = ["en","nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}
