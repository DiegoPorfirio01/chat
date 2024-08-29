import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

import { BadRequestError } from '../_errors/bad-request-error'

export async function createChatGroup(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/chat-group',
    {
      schema: {
        tags: ['chat group'],
        summary: 'Create chat group',
        security: [{ bearerAuth: [] }],
        body: z.object({
          userId: z.string().uuid(),
          title: z.string(),
          passcode: z.string(),
        }),
        response: {
          201: z.object({
            chatGroupId: z.string().uuid(),
          }),
        },
      },
    },
    async (request) => {
      const { title, userId, passcode } = request.body

      try {
        const group = await prisma.chatGroup.create({
          data: {
            title,
            passcode,
            userId,
          },
        })
        return { chatGroupId: group.id }
      } catch (error) {
        throw new BadRequestError('Failed to create group')
      }
    },
  )
}
