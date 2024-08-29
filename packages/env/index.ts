import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SERVER_PORT: z.coerce.number().default(3333),
    JWT_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
  },
  client: {},
  shared: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    SERVER_PORT: process.env.SERVER_PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  emptyStringAsUndefined: true,
})
