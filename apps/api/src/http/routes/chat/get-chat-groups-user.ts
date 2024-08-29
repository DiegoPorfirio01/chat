import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

import { BadRequestError } from '../_errors/bad-request-error'

export async function getChatGroupsUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/chat-groups-user',
    {
      schema: {
        tags: ['chat groups user'],
        summary: 'Get chat groups',
        security: [{ bearerAuth: [] }],
        querystring: z.object({
          groupId: z.string().uuid(),
        }),
        response: {
          200: z.object({
            groupsUser: z.array(
              z.object({
                id: z.number(),
                groupId: z.string().uuid(),
                name: z.string(),
                createdAt: z.date(),
              }),
            ),
          }),
        },
      },
    },
    async (request) => {
      const { groupId } = request.query

      const groupsUser = await prisma.groupUsers.findMany({
        where: {
          groupId,
        },
      })

      if (!groupsUser) {
        throw new BadRequestError('Groups not founds')
      }

      return { groupsUser }
    },
  )
}
