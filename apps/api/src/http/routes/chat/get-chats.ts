import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

import { BadRequestError } from '../_errors/bad-request-error'

export async function getChats(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/chats/:groupId',
    {
      schema: {
        tags: ['chat'],
        summary: 'Get chats',
        security: [{ bearerAuth: [] }],
        params: z.object({
          groupId: z.string().uuid(),
        }),
        response: {
          200: z.object({
            chats: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                message: z.string().nullable(),
                file: z.string().nullable(),
                createdAt: z.date(),
              })
            ),
          }),
        },
      },
    },
    async (request) => {
      const { groupId } = request.params

      const chats = await prisma.chats.findMany({
        where: {
          groupId,
        },
      })

      if (!chats) {
        throw new BadRequestError('Group not found')
      }

      return { chats }
    }
  )
}
