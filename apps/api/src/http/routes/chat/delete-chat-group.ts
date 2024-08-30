import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

import { BadRequestError } from '../_errors/bad-request-error'

export async function deleteChatGroup(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/chat-group/:id',
    {
      schema: {
        tags: ['chat group'],
        summary: 'Delete chat group',
        security: [{ bearerAuth: [] }],
        params: z.object({
          id: z.string().uuid(),
        }),
        response: {
          204: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params

      try {
        await prisma.chatGroup.delete({
          where: {
            id,
          },
        })

        return reply.status(204).send()
      } catch (error) {
        throw new BadRequestError('Failed to create group')
      }
    }
  )
}
