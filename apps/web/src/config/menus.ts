import type { DashboardTab, MarketingMenu, MenuItem } from '@/@types'

export const dashboardMenu: DashboardTab = [
  {
    title: 'Chats',
    href: '/dashboard/chats',
  },
  {
    title: 'History',
    href: '/dashboard/history',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
  },
]

export const marketingMenu: MarketingMenu = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'Prices',
    href: '/prices',
  },
  {
    title: 'testimonials',
    href: '/testimonials',
  },
  {
    title: 'services',
    href: '/services',
  },
  {
    title: 'login',
    href: '/auth/sign-in',
  },
]

export const menuMobile : MarketingMenu = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'testimonials',
    href: '/testimonials',
  },
  {
    title: 'login',
    href: '/auth/sign-in',
  },
]