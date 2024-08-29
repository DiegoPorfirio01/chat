import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { BadRequestError } from '../_errors/bad-request-error'
import { prisma } from '@/lib/prisma'

export async function getChatGroup(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/chat-groups/:id',
    {
      schema: {
        tags: ['chat group'],
        summary: 'Get chat groups',
        security: [{ bearerAuth: [] }],
        params: z.object({
          id: z.string().uuid(),
        }),
        response: {
          200: z.object({
            group: z.object({
              id: z.string().uuid(),
              userId: z.string().uuid(),
              title: z.string(),
              passcode: z.string(),
              createdAt: z.date()
            }),
          }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params
      
      const group = await prisma.chatGroup.findUnique({
        where: {
          id
        },
      });

      if (! group) {
        throw new BadRequestError('Groups not founds')
      }

      return { group }
    },
  )
}
