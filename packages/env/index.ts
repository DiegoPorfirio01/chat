import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    PORT: z.coerce.number().default(3333),
    JWT_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    KAFKA_BROKER: z.string(),
    KAFKA_USERNAME: z.string(),
    KAFKA_PASSWORD: z.string(),
    KAFKA_TOPIC: z.string(),
  },
  client: {},
  shared: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    KAFKA_BROKER: process.env.KAFKA_BROKER,
    KAFKA_USERNAME: process.env.KAFKA_USERNAME,
    KAFKA_PASSWORD: process.env.KAFKA_PASSWORD,
    KAFKA_TOPIC: process.env.KAFKA_TOPIC,
  },
  emptyStringAsUndefined: true,
})
