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

export type Locale = 'en' | 'es' | 'pt-br'

export interface LocaleLabels {
  [key in Locale]: string
}

export interface MenuItem {
  label: string
  href: string
}

export interface LocaleCurrencies {
  [key in Locale]: string
}

export interface I18nConfig {
  locales: readonly Locale[]
  defaultLocale: Locale
  localeLabels: LocaleLabels
  localeCurrencies: LocaleCurrencies
}

export type PricingSwitchProps = {
  onSwitch: (value: string) => void
}

export type PricingCardProps = {
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
  currentMoney: string
}

interface Review {
  name: string;
  quote: string;
  avatarUrl: string;
}