import { Radar } from "lucide-react";
import { useTranslations } from "next-intl";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps = {  
  icon: <Radar size={34} />,
  name: "Sponsor",
}  

export const Sponsors = () => {
  const t = useTranslations('marketing.sponsors');

  return (
    <section id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        {t('title')}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {Array.from(Array(5)).map(index => (
          <div
            key={index}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{sponsors.icon}</span>
            <h3 className="text-xl  font-bold">{sponsors.name} {index}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};