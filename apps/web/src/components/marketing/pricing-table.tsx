'use client'

import { CheckCircle2 } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'

import type { PricingCardProps, PricingSwitchProps } from '@/@types'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { i18nConfig } from '@/config/app'
import { cn } from '@/lib/utils'

const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => (
  <div className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="pt-1 text-xl">{subtitle}</p>
    <br />
  </div>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => {
  const t = useTranslations('marketing')

  return (
    <Tabs defaultValue="0" className="mx-auto w-40" onValueChange={onSwitch}>
      <TabsList className="px-2 py-6">
        <TabsTrigger value="0" className="text-base">
          {t('pricingSwitch.monthly')}
        </TabsTrigger>
        <TabsTrigger value="1" className="text-base">
          {t('pricingSwitch.yearly')}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  exclusive,
  currentMoney,
}: PricingCardProps) => {
  const t = useTranslations('marketing')

  return (
    <Card
      className={cn(
        `flex flex-col justify-between py-1 sm:w-[266px] ${popular ? 'border-rose-400' : 'border-zinc-700'} mx-auto sm:mx-0`,
        {
          'animate-background-shine bg-white bg-[length:200%_100%] transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]':
            exclusive,
        },
      )}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-lg text-zinc-700 dark:text-zinc-300">
                {title}
              </CardTitle>
              <div
                className={cn(
                  'h-fit rounded-xl bg-zinc-200 px-2.5 py-1 text-sm text-black dark:bg-zinc-800 dark:text-white',
                  {
                    'bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ':
                      popular,
                  },
                )}
              >
                {t('pricingCard.save', {
                  amount: `${currentMoney} ${monthlyPrice * 12 - yearlyPrice}`,
                })}
              </div>
            </div>
          ) : (
            <CardTitle className="text-lg text-zinc-700 dark:text-zinc-300">
              {title}
            </CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {yearlyPrice && isYearly
                ? '$' + yearlyPrice
                : monthlyPrice
                  ? '$' + monthlyPrice
                  : yearlyPrice === 0
                    ? '$0'
                    : t('pricingCard.custom')}
            </h3>
            <span className="mb-1 flex flex-col justify-end text-sm">
              {yearlyPrice && isYearly
                ? t('pricingCard.perYear')
                : monthlyPrice
                  ? t('pricingCard.perMonth')
                  : null}
            </span>
          </div>
          <CardDescription className="h-12 pt-1.5">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black px-6 font-medium text-white transition-colors  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-white dark:text-black">
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-sm text-zinc-700 dark:text-zinc-300">{text}</p>
  </div>
)

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false)
  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1)
  const t = useTranslations('marketing')
  const locale = useLocale()
  const localeCurrency = i18nConfig.localeCurrencies
  const currentMoney = localeCurrency[locale as keyof typeof localeCurrency]

  const planFree = {
    title: t('planFree.title'),
    description: t('planFree.description'),
    actionLabel: t('planFree.actionLabel'),
    monthlyPrice: t('planFree.monthlyPrice'),
    yearlyPrice: t('planFree.yearlyPrice'),
    features1: t('planFree.feature1'),
    features2: t('planFree.feature2'),
    popular: false,
  }

  const planBasic = {
    title: t('planBasic.title'),
    description: t('planBasic.description'),
    actionLabel: t('planBasic.actionLabel'),
    monthlyPrice: t('planBasic.monthlyPrice'),
    yearlyPrice: t('planBasic.yearlyPrice'),
    feature1: t('planBasic.feature1'),
    feature2: t('planBasic.feature2'),
    popular: false,
  }

  const planPremium = {
    title: t('planPremium.title'),
    description: t('planPremium.description'),
    actionLabel: t('planPremium.actionLabel'),
    monthlyPrice: t('planPremium.monthlyPrice'),
    yearlyPrice: t('planPremium.yearlyPrice'),
    features1: t('planPremium.feature1'),
    features2: t('planPremium.feature2'),
    popular: true,
  }

  const planEnterprise = {
    title: t('planEnterprise.title'),
    description: t('planEnterprise.description'),
    actionLabel: t('planEnterprise.actionLabel'),
    monthlyPrice: t('planEnterprise.monthlyPrice'),
    yearlyPrice: t('planEnterprise.yearlyPrice'),
    features1: t('planEnterprise.feature1'),
    features2: t('planEnterprise.feature2'),
    popular: true,
  }

  return (
    <section className="container my-0 sm:my-24 sm:p-0">
      <PricingHeader
        title={t('pricingHeader.title')}
        subtitle={t('pricingHeader.subtitle')}
      />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <div className="mt-8 flex flex-col justify-center gap-8 sm:flex-row sm:flex-wrap">
        <PricingCard
          title={planFree.title}
          description={planFree.description}
          actionLabel={planFree.actionLabel}
          monthlyPrice={isYearly ? 0 : Number(planFree.monthlyPrice)}
          yearlyPrice={isYearly ? Number(planFree.yearlyPrice) : 0}
          features={[planFree.features1, planFree.features2]}
          popular={planFree.popular}
          isYearly={isYearly}
          currentMoney={currentMoney}
        />
        <PricingCard
          title={planBasic.title}
          description={planBasic.description}
          actionLabel={planBasic.actionLabel}
          monthlyPrice={isYearly ? 0 : Number(planBasic.monthlyPrice)}
          yearlyPrice={isYearly ? Number(planBasic.yearlyPrice) : 0}
          features={[planBasic.feature1, planBasic.feature2]}
          popular={planBasic.popular}
          isYearly={isYearly}
          currentMoney={currentMoney}
        />
        <PricingCard
          title={planPremium.title}
          description={planPremium.description}
          actionLabel={planPremium.actionLabel}
          monthlyPrice={isYearly ? 0 : Number(planPremium.monthlyPrice)}
          yearlyPrice={isYearly ? Number(planPremium.yearlyPrice) : 0}
          features={[planPremium.features1, planPremium.features2]}
          popular={planPremium.popular}
          isYearly={isYearly}
          currentMoney={currentMoney}
        />
        <PricingCard
          title={planEnterprise.title}
          description={planEnterprise.description}
          actionLabel={planEnterprise.actionLabel}
          monthlyPrice={isYearly ? 0 : Number(planEnterprise.monthlyPrice)}
          yearlyPrice={isYearly ? Number(planEnterprise.yearlyPrice) : 0}
          features={[planEnterprise.features1, planEnterprise.features2]}
          currentMoney={currentMoney}
        />
      </div>
    </section>
  )
}
