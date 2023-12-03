export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/settings", "/order/:path", "/transaction/:path*"],
};
