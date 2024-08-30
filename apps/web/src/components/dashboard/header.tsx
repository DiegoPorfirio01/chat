import Image from 'next/image'
import Logo from '@/app/favicon.ico'
import { LocaleSwitch } from '../locale-switch'
import { ThemeSwitcher } from '../theme/theme-switcher'
import { ProfileButton } from './profile-button'

export default async function Header() {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <div className='sm:mx-auto mx-0 flex max-w-[1200px] items-center justify-between'>
        <div className="flex items-center gap-3 min-w-10 ml-5 sm:ml-0">
          <Image
            src={Logo}
            className="size-8 border border-black dark:border dark:border-white"
            alt="logo"
          />
        </div>
       
        <div className="flex items-center gap-3 p-5 sm:px-0">
          <LocaleSwitch />
          <ThemeSwitcher />
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}
