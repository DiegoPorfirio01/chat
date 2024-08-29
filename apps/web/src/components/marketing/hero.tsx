import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React from 'react'

import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-12 text-center">
      <h1 className="mb-4 text-5xl font-extrabold text-gray-900">
        {t('hero.title')}
      </h1>
      <p className="mb-8 text-xl text-gray-600">{t('hero.description')}</p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          {t('hero.button')}
        </Button>
      </Link>

      <div className="mt-12 flex w-full max-w-5xl justify-center">
        <img
          src="/images/conversation.svg"
          alt={t('hero.illustrationAlt')}
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}
