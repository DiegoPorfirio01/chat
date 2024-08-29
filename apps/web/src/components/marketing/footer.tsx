import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { siteConfig } from '@/config/app'

export default function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 p-6 text-white">
      <div className="flex justify-between">
        <div>
          <div>
            © {currentYear} {siteConfig.name} {t('footer.copyright')}
          </div>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy">{t('')}</Link>
            <Link href="/terms-of-service">{t('footer.termsOfService')}</Link>
          </div>
        </div>
        <div className="space-y-4">
          <Input
            placeholder={t('footer.subscribePlaceholder')}
            className="border-none bg-gray-800"
          />
          <Button>{t('footer.subscribeButton')}</Button>
        </div>
      </div>
    </footer>
  )
}
