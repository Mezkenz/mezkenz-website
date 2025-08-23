import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Zelfstandige i18n-config (geen imports nodig)
const locales = ["en", "nl"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // assets/api/ bestanden overslaan
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) return;

  // Heeft het pad al een locale?
  const hasLocale = locales.some((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`));

  // Zo niet: redirect naar default (/en)
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = { matcher: ["/((?!_next|.*\\..*|api).*)"] };

