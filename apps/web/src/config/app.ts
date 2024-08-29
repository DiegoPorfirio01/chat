import type { I18nConfig, SiteConfig } from "@/@types";
import { env } from "@chat/env";

export const i18nConfig: I18nConfig = {
  locales: ["en", "es", "pt-br"] as const,
  defaultLocale: "en" as const,
  localeLabels: {
    en: "English",
    es: "Español",
    "pt-br": "Português Brazil",
  },
  localeCurrencies: {
    en: "USD",
    es: "USD",
    "pt-br": "BRL",
  },
}

export const siteConfig: SiteConfig = {
  name: "Chat Lucy",
  description:
    "This is the best chat app you will ever use. It is secure, fast, and easy to use.",
  url: `${env.NEXT_PUBLIC_APP_URL}`,
}

export const reviews = [
  {
    quote: "“QuickChat is a game-changer! The fastest way to start a chat.”",
    name: "John Doe, Developer",
  },
  {
    quote: "“The encryption is top-notch. I feel secure using QuickChat.”",
    name: "Jane Smith, Designer",
  }
];
