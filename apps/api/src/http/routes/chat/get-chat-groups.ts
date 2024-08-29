import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

import { BadRequestError } from '../_errors/bad-request-error'

export async function getChatGroups(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/chat-groups',
    {
      schema: {
        tags: ['chat group'],
        summary: 'Get chat groups',
        security: [{ bearerAuth: [] }],
        response: {
          200: z.object({
            groups: z.array(
              z.object({
                id: z.string().uuid(),
                userId: z.string().uuid(),
                title: z.string(),
                passcode: z.string(),
                createdAt: z.date(),
              }),
            ),
          }),
        },
      },
    },
    async (request) => {
      const userId = await request.getCurrentUserId()

      const groups = await prisma.chatGroup.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })

      if (!groups) {
        throw new BadRequestError('Groups not founds')
      }

      return { groups }
    },
  )
}
