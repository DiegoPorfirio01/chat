import type { DashboardTab, MarketingMenu } from "@/@types";

export const dashboardMenu : DashboardTab = [
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

export const marketingMenu : MarketingMenu = [
  {
    title: 'home',
    href: "/",
  },
  {
    title: 'about',
    href: "/about",
  },
  {
    title: 'pricing',
    href: "/prices",
  },
  {
    title: 'contact',
    href: "/contact",
  },
  {
    title: 'login',
    href: "/auth/login",
  },
  {
    title: 'sign-up',
    href: "/auth/sign-up",
  },
];
