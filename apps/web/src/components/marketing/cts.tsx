import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

export const Cta = () => {
  const t = useTranslations('marketing.ctsPage');

  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('title')}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {` ${t('subtitle')} `}
            </span>
            {t('description1')}
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            {t('description2')}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto animate-pulse">{t('button1')}</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            {t('button2')}
          </Button>
        </div>
      </div>
    </section>
  );
};