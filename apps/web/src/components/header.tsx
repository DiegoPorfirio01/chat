'use client'

import { ArrowLeftSquare, Slash } from 'lucide-react'
import Image from 'next/image'
import Logo from "@/app/favicon.ico"
import { ThemeSwitcher } from './theme/theme-switcher'
import { LocaleSwitch } from './locale-switch'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MarketingMenu } from './marketing/menu'

export default function Header({ locale }: { locale: string }) {
  const language = locale
  const pathname = usePathname()

  return (
    <nav className="mx-auto flex max-w-[1200px] items-center justify-between p-5">
      <div className="flex items-center gap-3">
        <Image src={Logo} className="size-6 border border-black dark:border-white dark:border" alt="logo" />
        <Slash className="size-3 -rotate-[24deg] text-border" />
      </div>
      <div className="flex items-center gap-3">
        {
          (
           !pathname.includes('auth') ||
           !pathname.includes('dashboard')
          ) &&
          <MarketingMenu />
        }
        <LocaleSwitch/>
        <ThemeSwitcher />
        {
          pathname.includes('auth') && (
            <Link href={`/${language}`} className="flex items-center gap-1">
              <ArrowLeftSquare className="size-6" />
              <span>Back</span>
            </Link>
          )
        }
      </div>
    </nav>
  )
}
