import { i18nConfig } from "@/config/app";
import createMiddleware from "next-intl/middleware";

const locales = i18nConfig.locales
const defaultLocale = i18nConfig.defaultLocale

export default createMiddleware({
  locales ,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ["/", "/(pt-br|en|es)/:path*"],
};