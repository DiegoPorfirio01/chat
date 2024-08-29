import type { DashboardTab, MarketingMenu, MenuItem } from "@/@types";

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

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Pricing",
    href: "/prices",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Login",
    href: "/auth/login",
  },
  {
    label: "Sign Up",
    href: "/auth/sign-up",
  },
];
