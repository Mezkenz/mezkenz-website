import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const locales = ["en","nl"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) return;
  const hasLocale = locales.some((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`));
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
}
export const config = { matcher: ["/((?!_next|.*\\..*|api).*)"] };
