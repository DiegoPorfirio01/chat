import Image from 'next/image'

import Logo from '@/app/favicon.ico'

import { LocaleSwitch } from '../locale-switch'
import { ThemeSwitcher } from '../theme/theme-switcher'

export default async function Header() {
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
        <div className="flex items-center gap-3 p-5 sm:px-0">
          <LocaleSwitch />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
