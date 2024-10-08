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

type MenuMessages = {
  home: string
  about: string
  prices: string
  services: string
  testimonials: string
  login: string
  signUp: string
}

type MarketingMessages = {
  menu: MenuMessages
}

type Messages = {
  marketing: MarketingMessages
}

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
  name: string
  quote: string
  avatarUrl: string
}

type GroupChatType = {
  id: string
  userId: number
  title: string
  passcode: string
  createdAt: string
  open: boolean
}

type GroupChatsType = {
  groups: GroupChatType[]
}

type GroupChatUserType = {
  id: number
  name: string
  groupId: string
  createdAt: string
  isOnline?: boolean
}

type GroupsChatUserType = {
  groupsUser: GroupChatUserType[] | []
}

type MessageType = {
  id: string
  message: string
  groupId: string
  name: string
  createdAt: string
}

type MessagesType = {
  chats: MessageType[]
}

export interface User {
  id?: string | null
  name?: string | null
  email?: string | null
}
