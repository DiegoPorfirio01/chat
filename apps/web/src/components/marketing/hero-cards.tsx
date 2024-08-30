import { AvatarFallback } from '@radix-ui/react-avatar'
import { Check, LightbulbIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Avatar, AvatarImage } from '../ui/avatar'

export const HeroCards = () => {
  const t = useTranslations('marketing.hero.cards')

  return (
    <div className="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex">
      <Card className="absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Diego Vianna Porfírio Avatar"
              src="https://github.com/DiegoPorfirio01.png"
            />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Diego Vianna Porfírio</CardTitle>
            <CardDescription>@DiegoPorfirio01</CardDescription>
          </div>
        </CardHeader>
        <CardContent>{t('card1.title')}</CardContent>
      </Card>

      <Card className="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="mt-8 flex items-center justify-center pb-2">
          <img
            src="https://github.com/DiegoPorfirio01.png"
            alt="user avatar"
            className="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover grayscale-[0%]"
          />
          <CardTitle className="text-center">Diego Vianna Porfírio</CardTitle>
          <CardDescription className="font-normal text-primary">
            Full Stack Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-2 text-center">
          <p>{t('card2.description')}</p>
        </CardContent>
      </Card>

      <Card className="absolute left-[50px] top-[150px] w-72  shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <hr className="m-auto mb-4 w-4/5" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              'Next 15 e Node with Fastify',
              'Server actions',
              'Next-intl',
              'Intercepting routes',
              'TS',
              'Redis',
              'Kafka',
              'Swagger',
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{' '}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
            ...
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute -right-[10px] bottom-[35px] w-[350px]  shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
          <div className="mt-1 rounded-2xl bg-primary/20 p-1">
            <LightbulbIcon />
          </div>
          <div>
            <CardTitle>{t('card4.title')}</CardTitle>
            <CardDescription className="text-md mt-2">
              {t('card4.description')}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
