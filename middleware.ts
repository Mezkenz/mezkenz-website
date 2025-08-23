import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore Next assets, API routes, and files
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) return;

  // Does the path already include a locale?
  const hasLocale = locales.some((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`));

  // If not, redirect to the default locale (/en)
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = { matcher: ["/((?!_next|.*\\..*|api).*)"] };
