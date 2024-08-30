'use client'

import { ArrowLeftSquare, Slash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Logo from '@/app/favicon.ico'

import { LocaleSwitch } from './locale-switch'
import { MarketingMenu } from './marketing/menu'
import { ThemeSwitcher } from './theme/theme-switcher'

export default function Header({ locale }: { locale: string }) {
  const language = locale
  const pathname = usePathname()
  const shouldHaveArrowBack = [
    '/auth',
    '/testimonials',
    '/services',
    '/dashboard',
    '/prices',
    '/about',
  ]

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <div className='sm:mx-auto mx-0 flex max-w-[1200px] items-center justify-between'>
        <div className="flex items-center gap-3 min-w-10 ml-5">
          <Image
            src={Logo}
            className="size-8 border border-black dark:border dark:border-white"
            alt="logo"
          />
        </div>
        {(!pathname.includes('auth') && !pathname.includes('dashboard')) && (
          <div className="justify-center w-full items-center gap-3 flex fixed bottom-0 sm:relative">
            <MarketingMenu />
          </div>
        )}
        <div className="flex items-center gap-3 p-5">
          <LocaleSwitch />
          <ThemeSwitcher />
          {shouldHaveArrowBack.some((href) => pathname.includes(href)) && (
            <Link href={`/${language}`} className="flex items-center gap-1">
              <ArrowLeftSquare className="size-6" />
            </Link> 
          )}
        </div>
      </div>
    </header>
  )
}
