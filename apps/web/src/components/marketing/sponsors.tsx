import { Radar } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface SponsorProps {
  icon: JSX.Element
  name: string
}

const sponsors: SponsorProps = {
  icon: <Radar size={20} />,
  name: 'Sponsor',
}

export const Sponsors = () => {
  const t = useTranslations('marketing.sponsors')

  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-md mb-8 text-center font-bold text-primary lg:text-xl">
        {t('title')}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8">
        {Array.from(Array(5)).map((index) => (
          <div
            key={index}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{sponsors.icon}</span>
            <h3 className="text-md  font-bold">
              {sponsors.name} {index}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
