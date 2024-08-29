// FeatureCard.tsx
import { useTranslations } from 'next-intl'
import React from 'react'

import { Card } from '@/components/ui/card'
export default function FeatureCard({
  icon,
  titleKey,
  descriptionKey,
}: {
  icon: string
  titleKey: string
  descriptionKey: string
}) {
  const t = useTranslations()

  return (
    <Card className="bg-card p-6">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">
        {t(`features.${titleKey}.title`)}
      </h3>
      <p className="text-muted-foreground">
        {t(`features.${descriptionKey}.description`)}
      </p>
    </Card>
  )
}
