import { BarChartIcon, HistoryIcon, WalletIcon } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import undrawMessages from '@/public/images/undraw-messages.svg'

import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

export const Services = () => {
  // Use the useTranslations hook to access the translations
  const t = useTranslations('marketing.servicesPage')

  // Define the service list using translations
  const serviceList: ServiceProps[] = [
    {
      title: t('serviceList.title1'),
      description: t('serviceList.description1'),
      icon: <BarChartIcon />,
    },
    {
      title: t('serviceList.title2'),
      description: t('serviceList.description2'),
      icon: <WalletIcon />,
    },
    {
      title: t('serviceList.title3'),
      description: t('serviceList.description3'),
      icon: <HistoryIcon />,
    },
  ]

  return (
    <section className="container my-0 sm:my-24">
      <div className="grid place-items-center gap-8 lg:grid-cols-[1fr,1fr]">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {t('title')}
            </span>
            {` ${t('subtitle')}`}
          </h2>

          <p className="mb-8 mt-4 text-xl text-muted-foreground">
            {t('description')}
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="mt-1 rounded-2xl bg-primary/20 p-1">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image
          src={undrawMessages}
          className="w-[300px] object-contain md:w-[500px] lg:w-[600px]"
          alt="About services"
        />
      </div>
    </section>
  )
}
