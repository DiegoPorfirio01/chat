"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import type { PricingCardProps, PricingSwitchProps } from "@/@types"
import { useLocale, useTranslations } from "next-intl"
import { i18nConfig } from "@/config/app"

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => {
  const t  = useTranslations('marketing')

  return (
    <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
      <TabsList className="py-6 px-2">
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

const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive, currentMoney }: PricingCardProps) => {
  const t = useTranslations('marketing')

  return (
    <Card
      className={cn(`sm:w-[266px] flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
        "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
          exclusive,
      })}>
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
              <div
                className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white", {
                  "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
                })}>
                {t('pricingCard.save', { amount: `${currentMoney} ${monthlyPrice * 12 - yearlyPrice}` })}
              </div>
            </div>
          ) : (
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">{yearlyPrice && isYearly ? "$" + yearlyPrice : monthlyPrice ? "$" + monthlyPrice : yearlyPrice === 0 ? '$0' : t('pricingCard.custom')}</h3>
            <span className="flex flex-col justify-end text-sm mb-1">{yearlyPrice && isYearly ? t('pricingCard.perYear') : monthlyPrice ? t('pricingCard.perMonth') : null}</span>
          </div>
          <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1);
  const t = useTranslations('marketing');
  const locale = useLocale();
  const currentMoney = i18nConfig.localeCurrencies[locale];

  const planFree = {
    title: t('planFree.title'),
    description: t('planFree.description'),
    actionLabel: t('planFree.actionLabel'),
    monthlyPrice: t('planFree.monthlyPrice'),
    yearlyPrice: t('planFree.yearlyPrice'),
    features1: t('planFree.feature1'),
    features2: t('planFree.feature2'),
    popular: false,
  };

  const planBasic = {
    title: t('planBasic.title'),
    description: t('planBasic.description'),
    actionLabel: t('planBasic.actionLabel'),
    monthlyPrice: t('planBasic.monthlyPrice'),
    yearlyPrice: t('planBasic.yearlyPrice'),
    feature1: t('planBasic.feature1'),
    feature2: t('planBasic.feature2'),
    popular: false,
  };

  const planPremium = {
    title: t('planPremium.title'),
    description: t('planPremium.description'),
    actionLabel: t('planPremium.actionLabel'),
    monthlyPrice: t('planPremium.monthlyPrice'),
    yearlyPrice: t('planPremium.yearlyPrice'),
    features1: t('planPremium.feature1'),
    features2: t('planPremium.feature2'),
    popular: true,
  };

  const planEnterprise = {
    title: t('planEnterprise.title'),
    description: t('planEnterprise.description'),
    actionLabel: t('planEnterprise.actionLabel'),
    monthlyPrice: t('planEnterprise.monthlyPrice'),
    yearlyPrice: t('planEnterprise.yearlyPrice'),
    features1: t('planEnterprise.feature1'),
    features2: t('planEnterprise.feature2'),
    popular: true,
  };

  return (
    <section className="mt-20">
      <PricingHeader 
        title={t('pricingHeader.title')} 
        subtitle={t('pricingHeader.subtitle')} 
      />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <div  className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        <PricingCard 
          title={planFree.title}
          description={planFree.description}
          actionLabel={planFree.actionLabel}
          monthlyPrice={isYearly ? 0 : Number(planFree.monthlyPrice)}
          yearlyPrice={isYearly ? Number(planFree.yearlyPrice) : 0}
          features={[ planFree.features1, planFree.features2 ]}
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
          features={[ planBasic.feature1, planBasic.feature2 ]}
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
          features={[ planPremium.features1, planPremium.features2 ]}
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
          features={[ planEnterprise.features1, planEnterprise.features2 ]}
          currentMoney={currentMoney}
        />
      </div>
    </section>
  );
}
