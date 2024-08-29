import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { reviews } from '@/config/app';

export default function UserReviews() {
  const t  = useTranslations();

  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t('userReviews.sectionTitle')}
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {reviews.map((review, index) => (
          <Card key={index} className="p-6 text-center">
            <p className="text-lg text-gray-700">
              {t(`userReviews.reviews.${index}.quote`)}
            </p>
            <div className="mt-4">
              <Image
                src="https://github.com/diegoporfirio01.png" // O URL é fixo neste exemplo
                alt={t(`userReviews.reviews.${index}.imageAlt`)}
                width={48} // Ajuste o tamanho conforme necessário
                height={48} // Ajuste o tamanho conforme necessário
                className="rounded-full mx-auto"
              />
              <div className="mt-2 text-gray-800">
                {t(`userReviews.reviews.${index}.name`)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
