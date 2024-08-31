import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import GitHubIcon from '@/public/images/github-icon.svg'

import { HeroCards } from './hero-cards'

export default function HeroSection() {
  const t = useTranslations('marketing.hero')
  const locale = useLocale()

  return (
    <section
      id="hero"
      className="grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2"
    >
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#000DFB]  to-[#D247BF] bg-clip-text text-transparent">
              Chat Lucy
            </span>{' '}
          </h1>
          {t('title')}{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              {t('subtitle')}
            </span>{' '}
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          {t('description')}
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Button asChild className="w-full animate-pulse md:w-1/3">
            <Link href={`/${locale}/auth/sign-up`}>{t('button')}</Link>
          </Button>
          <a
            rel="noreferrer noopener"
            href="https://github.com/DiegoPorfirio/chat.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: 'outline',
            })}`}
          >
            Github Repository{' '}
            <Image
              src={GitHubIcon}
              alt="Github Icon"
              className="ml-2 rounded-full bg-white dark:bg-foreground"
            />
          </a>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  )
}
