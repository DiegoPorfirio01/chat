import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

import { Card } from '@/components/ui/card'
import { reviews } from '@/config/app'

export default function UserReviews() {
  const t = useTranslations()

  return (
    <section className="bg-gray-50 p-12">
      <h2 className="mb-8 text-center text-3xl font-bold">
        {t('userReviews.sectionTitle')}
      </h2>
      <div className="flex flex-col justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
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
                className="mx-auto rounded-full"
              />
              <div className="mt-2 text-gray-800">
                {t(`userReviews.reviews.${index}.name`)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
