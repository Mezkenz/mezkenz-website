import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale, defaultLocale } from "@/lib/i18n";

export default async function Page({ params }: { params: { locale: string } }) {
  const loc = isLocale(params.locale) ? (params.locale as Locale) : defaultLocale;
  const dict = await getDictionary(loc);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-[#24292f] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href={`/${loc}`} className="flex items-center gap-3">
            <img src="/MEZKENZ_logo_gray.jpg" alt="Mezkenz logo" className="h-8 w-8 object-contain" />
            <strong className="tracking-wider">MEZKENZ</strong>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link className="hover:text-gray-300" href={`/${loc}#diensten`}>{dict.nav.services}</Link>
            <Link className="hover:text-gray-300" href={`/${loc}#over`}>{dict.nav.about}</Link>
            <Link className="hover:text-gray-300" href={`/${loc}#contact`}>{dict.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={loc} />
            <Button asChild>
              <Link href={`/${loc}#contact`}>{dict.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">{dict.hero.tag}</span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">{dict.hero.title}</h1>
        <p className="mt-4 max-w-2xl text-lg" dangerouslySetInnerHTML={{ __html: dict.hero.lead }} />
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild>
            <Link href={`/${loc}#contact`}>{dict.hero.ctaPrimary}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${loc}#diensten`}>{dict.hero.ctaSecondary}</Link>
          </Button>
        </div>
        <ul className="mt-10 space-y-2">
          {dict.hero.whyPoints.map((t: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 text-[#2ea44f]" />
              <span dangerouslySetInnerHTML={{ __html: t }} />
            </li>
          ))}
        </ul>
      </section>

      <section id="diensten" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">{dict.services.title}</h2>
        <p className="mt-2 text-lg">{dict.services.subtitle}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {dict.services.items.map((item: any, i: number) => (
            <Card key={i} className="border border-gray-200">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5">
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
        <h2 className="text-3xl font-bold">{dict.about.title}</h2>
        <p className="mt-4" dangerouslySetInnerHTML={{ __html: dict.about.text1 }} />
        <p className="mt-4 font-semibold">{dict.about.mission}</p>
        <h3 className="mt-6 text-xl font-semibold">{dict.about.strengthsTitle}</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {dict.about.strengths.map((s: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
          ))}
        </ul>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">{dict.contact.title}</h2>
        <p className="mt-2 text-lg">{dict.contact.subtitle}</p>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <Input placeholder={dict.contact.form.name} />
          <Input placeholder={dict.contact.form.company} />
          <Input placeholder={dict.contact.form.email} className="md:col-span-2" />
          <Textarea placeholder={dict.contact.form.message} className="md:col-span-2" />
          <Button className="md:col-span-2">{dict.contact.form.send}</Button>
        </form>
        <p className="mt-6">
          {dict.contact.form.orMail}: <a href="mailto:info@mezkenz.com" className="text-[#0969da]">info@mezkenz.com</a>
        </p>
        <div className="mt-6">
          <h3 className="font-semibold">{dict.contact.business.heading}</h3>
          <p className="text-sm text-gray-600">{dict.contact.business.kbo}</p>
        </div>
      </section>

      <footer className="border-t bg-gray-100 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-sm text-gray-600 md:flex-row md:justify-between">
          <p>{dict.footer.made}</p>
          <p>{dict.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
