import type { SiteConfig } from "@/@types";
import { env } from "@chat/env";

export const siteConfig: SiteConfig = {
  name: "The best Chat App",
  description:
    "This is the best chat app you will ever use. It is secure, fast, and easy to use.",
  url: `${env.NEXT_PUBLIC_APP_URL}`,
}

export const menuItems = [
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