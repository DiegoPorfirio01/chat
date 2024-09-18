import {
  Home,
  LogIn,
  Quote,
  ServerCogIcon,
  ShoppingBagIcon,
} from 'lucide-react'

import type { DashboardTab, MarketingMenu } from '@/@types'

export const dashboardMenu: DashboardTab = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Chats',
    href: '/dashboard/chats',
  },
  {
    title: 'History',
    href: '/dashboard/history',
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

interface MenuItem {
  title: string
  icon: React.ComponentType
  href: string
}

export const menuMobile: MenuItem[] = [
  {
    title: 'home',
    icon: Home,
    href: '/',
  },
  {
    title: 'prices',
    icon: ShoppingBagIcon,
    href: '/prices',
  },
  {
    title: 'services',
    icon: ServerCogIcon,
    href: '/services',
  },
  {
    title: 'testimonials',
    icon: Quote,
    href: '/testimonials',
  },
  {
    title: 'login',
    icon: LogIn,
    href: '/auth/sign-in',
  },
]
