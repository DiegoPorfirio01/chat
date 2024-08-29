import FeatureSection from "@/components/marketing/feature";
import HeroSection from "@/components/marketing/hero";
import { MarketingMenu } from "@/components/marketing/menu";
import UserReviews from "@/components/marketing/users-review";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { marketing }: any = await getMessages({ locale });
  const title = marketing.title;

  return {
    title,
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <UserReviews />
      <Footer />
    </>
  )
}
