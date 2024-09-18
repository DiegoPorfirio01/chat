import { FastifyInstance } from 'fastify'
import z from 'zod'

export async function getPing(app: FastifyInstance) {
  app.get('/ping', {
    schema: {
      tags: ['ping'],
      summary: 'Ping the server',
      response: {
        200: z.null,
      },
    },
    async handler(request, reply) {
      return reply.status(200).send()
    },
  })
}
