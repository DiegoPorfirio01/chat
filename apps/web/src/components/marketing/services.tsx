import { useTranslations } from 'next-intl';
import { BarChartIcon, HistoryIcon, WalletIcon } from 'lucide-react';
import undrawMessages from '@/public/images/undraw-messages.svg';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const Services = () => {
  // Use the useTranslations hook to access the translations
  const t = useTranslations('marketing.servicesPage');

  // Define the service list using translations
  const serviceList: ServiceProps[] = [
    {
      title: t('serviceList.title1'),
      description: t('serviceList.description1'),
      icon: <BarChartIcon />,
    },
    {
      title: t('serviceList.title2'),
      description: t('serviceList.description2'),
      icon: <WalletIcon />,
    },
    {
      title: t('serviceList.title3'),
      description: t('serviceList.description3'),
      icon: <HistoryIcon />,
    },
  ];

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {t('title')}
            </span>
            {` ${t('subtitle')}`}
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            {t('description')}
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image
          src={undrawMessages}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
