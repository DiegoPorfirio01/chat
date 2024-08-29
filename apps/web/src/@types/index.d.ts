export type SiteConfig = {
  name: string
  description: string
  url: string
}

export type DashboardTab = {
  title: string
  href: string
}[]

export type MarketingMenu = {
  title: string
  href: string
}[]

export type Locale = "en" | "es" | "pt-br";

export interface LocaleLabels {
  [key in Locale]: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface LocaleCurrencies {
  [key in Locale]: string;
}

export interface I18nConfig {
  locales: readonly Locale[];
  defaultLocale: Locale;
  localeLabels: LocaleLabels;
  localeCurrencies: LocaleCurrencies;
}