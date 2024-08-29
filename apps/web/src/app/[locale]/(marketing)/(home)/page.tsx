import { MarketingMenu } from "@/components/marketing/menu";
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
    <></>
  )
}
