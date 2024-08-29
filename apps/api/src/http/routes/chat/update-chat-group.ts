import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { BadRequestError } from '../_errors/bad-request-error'
import { prisma } from '@/lib/prisma'

export async function updateChatGroup(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/chat-group/:id',
    {
      schema: {
        tags: ['chat group'],
        summary: 'Update chat group',
        security: [{ bearerAuth: [] }],
        params: z.object({
          id: z.string().uuid(),
        }),
        body: z.object({
          title: z.string(),
          passcode: z.string(),
        }),
        response: {
          204: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { title, passcode } = request.body
      const { id } = request.params
      
      try {
        await prisma.chatGroup.update({
          where: {
            id
          },
          data: {
            title,
            passcode,
          },
        });

        return reply.status(204).send()
      } catch (error) {
        throw new BadRequestError('Failed to create group')
      }
    },
  )
}
