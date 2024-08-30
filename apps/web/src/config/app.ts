import { env } from '@chat/env'

import type { I18nConfig, Review, SiteConfig } from '@/@types'

export const i18nConfig: I18nConfig = {
  locales: ['en', 'es', 'pt-br'] as const,
  defaultLocale: 'en' as const,
  localeLabels: {
    en: 'English',
    es: 'Español',
    'pt-br': 'Português Brazil',
  },
  localeCurrencies: {
    en: 'USD',
    es: 'USD',
    'pt-br': 'BRL',
  },
}

export const siteConfig: SiteConfig = {
  name: 'Chat Lucy',
  description:
    'This is the best chat app you will ever use. It is secure, fast, and easy to use.',
  url: `${env.NEXT_PUBLIC_APP_URL}`,
}

export const marketingReviewUsers: Review[] = [
  {
    name: 'Chat Lucy',
    quote:
      'This product exceeded my expectations! The quality is top-notch and the customer service was exceptional. Highly recommended!',
    avatarUrl: 'https://github.com/diegoporfirio01.png',
  },
  {
    name: 'Bob Brown',
    quote:
      'A fantastic experience from start to finish. The attention to detail and the ease of use made this a must-have for our team.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/2345678?v=4',
  },
  {
    name: 'Emily Davis',
    quote:
      'I was impressed by how well this product solved our needs. It’s intuitive and efficient, and the support team was incredibly helpful.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/3456789?v=4',
  },
  {
    name: 'Michael Wilson',
    quote:
      'Excellent value for the price. The features are exactly what we were looking for, and the setup was a breeze. Will definitely continue using it.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/4567890?v=4',
  },
  {
    name: 'Sarah Lee',
    quote:
      'An outstanding tool that has significantly improved our workflow. It’s reliable and user-friendly. I can’t imagine working without it.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/5678901?v=4',
  },
]
