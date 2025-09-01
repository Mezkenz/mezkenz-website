import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeroSection from "@/components/HeroSection";
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

      <HeroSection dict={dict} loc={loc} />

      {/* Services / About / Contact secties: identiek aan je vorige versie, maar met dict-teksten */}
    </div>
  );
}

