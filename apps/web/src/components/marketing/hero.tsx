import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t  = useTranslations();

  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        {t('hero.title')}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {t('hero.description')}
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          {t('hero.button')}
        </Button>
      </Link>

      <div className="mt-12 w-full max-w-5xl flex justify-center">
        <img
          src="/images/conversation.svg"
          alt={t('hero.illustrationAlt')}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
