'use client'

import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { Languages } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { i18nConfig } from '@/config/app'

import { Button } from './ui/button'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const { localeLabels, locales } = i18nConfig

export function LocaleSwitch() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (locale: string) => {
    const path = pathname.split('/').slice(2).join('/')
    router.push(`/${locale}/${path}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className="flex items-center"
          >
            <span className="mr-2">{localeLabels[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
