import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

export const metadata = {
  title: "Mezkenz",
  description: "IT TeamLead Services & Coaching"
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const loc = isLocale(params.locale) ? (params.locale as Locale) : defaultLocale;
  return (
    <html lang={loc}>
      <body>
        {children}
      </body>
    </html>
  );
}
