
 export const i18nConfig = {
    locales: ["en", "es", "pt-br"] as const,
    defaultLocale: "en" as const,
    localeLabels: {
      en: "English",
      es: "Español",
      "pt-br": "Português Brazil",
    },
    localeCurrencies: {
      en: "USD",
      es: "USD",
      "pt-br": "BRL",
    },
  }