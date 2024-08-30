import { getMessages } from 'next-intl/server'

import { About } from '@/components/marketing/about'
import FeatureSection from '@/components/marketing/feature'
import Footer from '@/components/marketing/footer'
import HeroSection from '@/components/marketing/hero'
import { Sponsors } from '@/components/marketing/sponsors'
import UserReviews from '@/components/marketing/users-review'
import TransitionFadeIn from '@/components/transition-fade-in'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { marketing }: any = await getMessages({ locale })
  const title = marketing.menu.about

  return {
    title,
  }
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] p-4">
      <TransitionFadeIn>
        <Sponsors />
        <About />
      </TransitionFadeIn>
    </div>
  )
}
