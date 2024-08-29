import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

import { BadRequestError } from '../_errors/bad-request-error'

export async function createChatGroupsUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/chat-groups-user',
    {
      schema: {
        tags: ['chat groups user'],
        summary: 'Create chat group user',
        security: [{ bearerAuth: [] }],
        body: z.object({
          groupId: z.string().uuid(),
          name: z.string(),
        }),
        response: {
          201: z.object({
            groupUserId: z.number(),
          }),
        },
      },
    },
    async (request) => {
      const { groupId, name } = request.body

      try {
        const groupUser = await prisma.groupUsers.create({
          data: {
            groupId,
            name,
          },
        })

        return { groupUserId: groupUser.id }
      } catch (error) {
        throw new BadRequestError('Failed to create group')
      }
    },
  )
}
