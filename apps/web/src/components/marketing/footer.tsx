import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t('marketing.footer.builtBy')}{' '}
          <a
            href={'https://diego-vianna-porfirio.vercel.app'}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Diego Vianna Porfirio
          </a>
          . {t('marketing.footer.availability')}{' '}
          <a
            href={'https://github.com/DiegoPorfirio01/chat-lucy'}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
