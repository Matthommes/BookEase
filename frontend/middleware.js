import { NextResponse } from "next/server";

export default function middleware(req) {
  const hasCookie = req.cookies.get("token");
  const path = req.nextUrl.pathname;

  const publicPath = ["/", "/login", "/register", "/verify"];

  const isPublicPath = publicPath.includes(path);

  if (!isPublicPath && !hasCookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$).*)",
  ],
};

