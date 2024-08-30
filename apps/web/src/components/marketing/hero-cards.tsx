import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, LightbulbIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useTranslations } from "next-intl";

export const HeroCards = () => {
  const t = useTranslations("marketing.hero.cards");

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Diego Vianna Porfírio Avatar"
              src="https://github.com/DiegoPorfirio01.png"
            />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Diego Vianna Porfírio</CardTitle>
            <CardDescription>@DiegoPorfirio01</CardDescription>
          </div>
        </CardHeader>
        <CardContent>{t('card1.title')}</CardContent>
      </Card>

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://github.com/DiegoPorfirio01.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Diego Vianna Porfírio</CardTitle>
          <CardDescription className="font-normal text-primary">
            Full Stack Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            {t('card2.description')}
          </p>
        </CardContent>
      </Card>

      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {["Next 15 e Node with Fastify","Server actions",'Next-intl','Intercepting routes',"TS","Redis","Kafka","Swagger"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
            ...
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightbulbIcon />
          </div>
          <div>
            <CardTitle>{t('card4.title')}</CardTitle>
            <CardDescription className="text-md mt-2">
              {t('card4.description')}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};