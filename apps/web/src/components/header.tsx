'use client'

import { ArrowLeftSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

import Logo from '@/app/favicon.ico'

import { LocaleSwitch } from './locale-switch'
import { MarketingMenu } from './marketing/menu'
import { ThemeSwitcher } from './theme/theme-switcher'

export default function Header() {
  const language = useLocale()
  const pathname = usePathname()
  const shouldHaveArrowBack = [
    '/auth',
    '/testimonials',
    '/services',
    '/prices',
    '/about',
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="mx-0 flex max-w-[1200px] items-center justify-between sm:mx-auto">
        <div className="ml-5 flex min-w-10 items-center gap-3 sm:ml-0">
          <Image
            src={Logo}
            className="size-8 border border-black dark:border dark:border-white"
            alt="logo"
          />
        </div>
        {!pathname.includes('auth') && !pathname.includes('dashboard') && (
          <div className="fixed bottom-0 flex w-full items-center justify-center gap-3 sm:relative">
            <MarketingMenu />
          </div>
        )}
        <div className="flex items-center gap-3 p-5 sm:px-0">
          <LocaleSwitch />
          <ThemeSwitcher />
          {shouldHaveArrowBack.some((href) => pathname.includes(href)) && (
            <Link
              href={`/${language}`}
              className="flex items-center gap-1 sm:hidden"
            >
              <ArrowLeftSquare className="size-6" />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
