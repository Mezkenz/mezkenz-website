'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.slice(1).join('/');
  const targetPath = (l: string) => `/${l}${rest ? '/' + rest : ''}`;
  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map(l => (
        <Link key={l} href={targetPath(l)} className={`rounded-md px-2 py-1 ${l === locale ? "bg-white/10" : "hover:bg-white/5"} `} aria-current={l === locale ? "page" : undefined}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
