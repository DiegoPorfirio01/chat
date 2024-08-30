import { useTranslations } from 'next-intl';

export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const t = useTranslations('marketing.statistics');

  const stats: StatsProps[] = [
    { quantity: t('statistic1.quantity'), description: t('statistic1.description') },
    { quantity: t('statistic2.quantity'), description: t('statistic2.description') },
    { quantity: t('statistic3.quantity'), description: t('statistic3.description') },
    { quantity: t('statistic4.quantity'), description: t('statistic4.description') }
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
