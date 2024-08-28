import { Slash } from 'lucide-react'
import Image from 'next/image'

import logo from '@/public/favicon-32x32.png'
import { ThemeSwitcher } from '../theme/theme-switcher'
import { Separator } from '../ui/separator'
import { ProfileButton } from './profile-button'

export default async function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={logo} className="size-6 border border-black dark:border-white dark:border" alt="logo" />
        <Slash className="size-3 -rotate-[24deg] text-border" />
      </div>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <Separator orientation="vertical" />
        <ProfileButton />
      </div>
    </div>
  )
}
