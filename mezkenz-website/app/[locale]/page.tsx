import * as React from "react";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";

export default async function Page({ params }: { params: { locale: string } }) {
  // Debug: print React versie in build logs
  console.log("React version at build:", (React as any).version);

  const loc = isLocale(params.locale) ? (params.locale as Locale) : defaultLocale;
  const dict = await getDictionary(loc);
  return (
    <main style={{ padding: 24 }}>
      <h1>{dict.hero.title}</h1>
      <p>{dict.hero.lead}</p>
      <p>Locale: {loc}</p>
      <p><a href={`/${loc === "en" ? "nl" : "en"}`}>Switch language</a></p>
    </main>
  );
}
