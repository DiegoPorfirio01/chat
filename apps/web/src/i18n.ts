import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { i18nConfig } from "@/config/app";

const locales = i18nConfig.locales;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});