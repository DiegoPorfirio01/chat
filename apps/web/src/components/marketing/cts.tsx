import { useTranslations } from 'next-intl'

import { Button } from '../ui/button'

export const Cta = () => {
  const t = useTranslations('marketing.ctsPage')

  return (
    <section id="cta" className="my-24 bg-muted/50 py-16 sm:my-32">
      <div className="container place-items-center lg:grid lg:grid-cols-2">
        <div className="lg:col-start-1">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t('title')}
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {` ${t('subtitle')} `}
            </span>
            {t('description1')}
          </h2>
          <p className="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
            {t('description2')}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full animate-pulse md:mr-4 md:w-auto">
            {t('button1')}
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            {t('button2')}
          </Button>
        </div>
      </div>
    </section>
  )
}
