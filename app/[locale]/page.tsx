import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale, defaultLocale } from "@/lib/i18n";

export default async function Page({ params }: { params: { locale: string } }) {
  const loc = isLocale(params.locale) ? (params.locale as Locale) : defaultLocale;
  const dict = await getDictionary(loc);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e1117] to-black text-gray-100">
      <header className="border-b border-gray-800 bg-black/60 text-gray-200 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href={`/${loc}`} className="flex items-center gap-3">
            <img src="/MEZKENZ_logo_gray.jpg" alt="Mezkenz logo" className="h-8 w-8 object-contain" />
            <strong className="tracking-wider">MEZKENZ</strong>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link className="text-gray-300 hover:text-white" href={`/${loc}#diensten`}>{dict.nav.services}</Link>
            <Link className="text-gray-300 hover:text-white" href={`/${loc}#over`}>{dict.nav.about}</Link>
            <Link className="text-gray-300 hover:text-white" href={`/${loc}#contact`}>{dict.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={loc} />
            <Button asChild>
              <Link href={`/${loc}#contact`}>{dict.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
        <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400">{dict.hero.tag}</span>
        <h1 className="mt-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">{dict.hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300" dangerouslySetInnerHTML={{ __html: dict.hero.lead }} />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href={`/${loc}#contact`}>{dict.hero.ctaPrimary}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${loc}#diensten`}>{dict.hero.ctaSecondary}</Link>
          </Button>
        </div>
        <ul className="mt-10 space-y-2 text-left">
          {dict.hero.whyPoints.map((t: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 text-purple-400" />
              <span dangerouslySetInnerHTML={{ __html: t }} />
            </li>
          ))}
        </ul>
      </section>

      <section id="diensten" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-white">{dict.services.title}</h2>
        <p className="mt-2 text-lg text-gray-300">{dict.services.subtitle}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {dict.services.items.map((item: any, i: number) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-gray-300">
                  {item.bullets.map((b: string, j: number) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="over" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-white">{dict.about.title}</h2>
        <p className="mt-4 text-gray-300" dangerouslySetInnerHTML={{ __html: dict.about.text1 }} />
        <p className="mt-4 font-semibold text-gray-200">{dict.about.mission}</p>
        <h3 className="mt-6 text-xl font-semibold text-white">{dict.about.strengthsTitle}</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-300">
          {dict.about.strengths.map((s: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
          ))}
        </ul>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-white">{dict.contact.title}</h2>
        <p className="mt-2 text-lg text-gray-300">{dict.contact.subtitle}</p>
        <ContactForm dict={dict.contact.form} />
        <p className="mt-6 text-gray-300">
          {dict.contact.form.orMail}: <a href="mailto:info@mezkenz.com" className="text-purple-400">info@mezkenz.com</a>
        </p>
        <div className="mt-6">
          <h3 className="font-semibold text-white">{dict.contact.business.heading}</h3>
          <p className="text-sm text-gray-400">{dict.contact.business.kbo}</p>
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-black/60 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-sm text-gray-400 md:flex-row md:justify-between">
          <p>{dict.footer.made}</p>
          <p>{dict.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
