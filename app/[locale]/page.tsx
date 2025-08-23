import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Linkedin, CheckCircle2 } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale, defaultLocale } from "@/lib/i18n";

// ✅ Server Component
export default async function Page({ params }: { params: { locale: string } }) {
  const loc = isLocale(params.locale) ? (params.locale as Locale) : defaultLocale;
  const dict = await getDictionary(loc);

  return (
    <div className="min-h-screen bg-[rgb(11,12,16)] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(11,12,16,0.65)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Link href={`/${loc}`} className="flex items-center gap-3">
            <img src="/MEZKENZ_logo_gray.jpg" alt="Mezkenz logo" className="h-10 w-10 object-contain grayscale" />
            <strong className="tracking-wider">MEZKENZ</strong>
          </Link>
          <nav className="hidden gap-2 md:flex">
            <Link className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5" href={`/${loc}#diensten`}>{dict.nav.services}</Link>
            <Link className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5" href={`/${loc}#over`}>{dict.nav.about}</Link>
            <Link className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5" href={`/${loc}#contact`}>{dict.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={loc} />
            <Button asChild className="bg-gradient-to-tr from-sky-500 to-sky-300 text-slate-900 font-bold">
              <Link href={`/${loc}#contact`}>{dict.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 md:pt-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">{dict.hero.tag}</span>
            <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{dict.hero.title}</h1>
            <p className="mt-3 max-w-xl text-lg text-zinc-300" dangerouslySetInnerHTML={{ __html: dict.hero.lead }} />
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-to-tr from-sky-500 to-sky-300 text-slate-900 font-bold">
                <Link href={`/${loc}#contact`} className="flex items-center gap-2">{dict.hero.ctaPrimary} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-white/15 bg-white/5">
                <Link href={`/${loc}#diensten`}>{dict.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card>
              <CardHeader><CardTitle>{dict.hero.why}</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3 text-zinc-300">
                  {dict.hero.whyPoints.map((t: string, i: number) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-400" /> <span dangerouslySetInnerHTML={{ __html: t }} /></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services / About / Contact secties: identiek aan je vorige versie, maar met dict-teksten */}
    </div>
  );
}

