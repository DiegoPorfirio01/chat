// FeatureCard.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
export default function FeatureCard({
  icon,
  titleKey,
  descriptionKey
}: {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}) {
  const t = useTranslations();

  return (
    <Card className="p-6 bg-card">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{t(`features.${titleKey}.title`)}</h3>
      <p className="text-muted-foreground">{t(`features.${descriptionKey}.description`)}</p>
    </Card>
  );
}