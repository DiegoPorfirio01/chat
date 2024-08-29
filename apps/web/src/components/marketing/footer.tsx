import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/app';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-6 bg-gray-900 text-white">
      <div className="flex justify-between">
        <div>
          <div>© {currentYear} {siteConfig.name} {t('footer.copyright')}</div>
          <div className="space-x-4 mt-2">
            <Link href="/privacy-policy">{t('')}</Link>
            <Link href="/terms-of-service">{t('footer.termsOfService')}</Link>
          </div>
        </div>
        <div className="space-y-4">
          <Input
            placeholder={t('footer.subscribePlaceholder')}
            className="bg-gray-800 border-none"
          />
          <Button>{t('footer.subscribeButton')}</Button>
        </div>
      </div>
    </footer>
  );
}