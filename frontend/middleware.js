import { NextResponse } from "next/server";

export default function middleware(req) {
  const hasCookie = req.cookies.get("token");
  const path = req.nextUrl.pathname;

  const home = "/";
const publicPath = [
  "/login",
  "/register",
  "/verify",
  "/verify/",
  "/service-worker.js",
];
  const isPublicPath =
    publicPath.some((p) => path.startsWith(p)) || path.startsWith("/verify/");

  if (path !== home && !isPublicPath && !hasCookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|manifest\\.json$|service-worker\\.js$).*)",
  ],
};
