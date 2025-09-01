import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import "@/styles/globals.css";
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : defaultLocale;
  const dict = await getDictionary(locale);
  return { title: dict.meta.title, description: dict.meta.description };
}
export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : defaultLocale;
  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
