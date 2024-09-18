import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Hero from '@/public/images/conversation.svg'

import { Statistics } from './statstics'

export const About = () => {
  const t = useTranslations('marketing.aboutPage')

  return (
    <section id="about" className="container my-24">
      <div className="rounded-lg border bg-muted/50 py-12">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <Image
            src={Hero}
            alt=""
            className="w-[300px] rounded-lg object-contain"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
                  {t('title')}{' '}
                </span>
                {t('subtitle')}
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                {t('description')}
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  )
}
