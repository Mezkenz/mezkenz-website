import type { Locale } from "./i18n";
const dicts={en:()=>import("@/locales/en.json").then(m=>m.default),nl:()=>import("@/locales/nl.json").then(m=>m.default)};
export async function getDictionary(locale:Locale){return (dicts as any)[locale]();}