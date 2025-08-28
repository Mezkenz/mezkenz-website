import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const locales = ["en","nl"];
const defaultLocale = "en";
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) return;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
}
export const config = { matcher: ["/((?!_next|.*\\..*|api).*)"] };
