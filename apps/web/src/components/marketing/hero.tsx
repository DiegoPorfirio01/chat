import { useTranslations, useLocale} from 'next-intl'
import React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import { HeroCards } from './hero-cards'
import GitHubIcon from "@/public/images/github-icon.svg"
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const t = useTranslations('marketing.hero')
  const locale = useLocale()
  
  return (
    <section id='hero' className="grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
    <div className="text-center lg:text-start space-y-6">
      <main className="text-5xl md:text-6xl font-bold">
        <h1 className="inline">
          <span className="inline bg-gradient-to-r from-[#000DFB]  to-[#D247BF] text-transparent bg-clip-text">
            Chat Lucy
          </span>{" "}
        </h1>
        {t('title')}{" "}
        <h2 className="inline">
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
          {t('subtitle')}
          </span>{" "}
        </h2>
      </main>

      <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        {t('description')}
      </p>

      <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-1/3 animate-pulse">
            <Link href={`/${locale}/auth/sign-up`}>
              {t('button')}
            </Link>
          </Button>
        <a
          rel="noreferrer noopener"
          href="https://github.com/DiegoPorfirio/chat-lucy.git"
          target="_blank"
          className={`w-full md:w-1/3 ${buttonVariants({
            variant: "outline",
          })}`}
        >
          Github Repository <Image src={GitHubIcon} alt="Github Icon" className='ml-2 dark:bg-foreground bg-white rounded-full' />
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
