import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { BadRequestError } from '../_errors/bad-request-error'
import { prisma } from '@/lib/prisma'

export async function createChatGroupsUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/chat-groups-user',
    {
      schema: {
        tags: ['chat groups user'],
        summary: 'create chat group user',
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
    async (request, reply) => {
      const { groupId, name } = request.body
      
      try {
        const groupUser = await prisma.groupUsers.create({
          data: {
            groupId,
            name,
          }
        })

        return { groupUserId: groupUser.id }
      } catch (error) {
        throw new BadRequestError('Failed to create group')
      }
    },
  )
}
