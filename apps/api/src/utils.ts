import { consumer, producer } from './lib/kafka.config'
import { prisma } from './lib/prisma'

export const produceMessage = async (topic: string, message: unknown) => {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  })
}

export const consumeMessages = async (topic: string) => {
  await consumer.connect()
  await consumer.subscribe({ topic })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const parsedMessage = message.value
        ? JSON.parse(message.value.toString())
        : null

      if (parsedMessage) {
        const { id, message, name, createdAt, groupId } = parsedMessage

        const hasChatGroup = !!(await prisma.chatGroup.findFirst({
          where: {
            id: groupId,
          },
        }))

        if (!hasChatGroup) {
          return
        }

        await prisma.chats.create({
          data: {
            id,
            message,
            name,
            createdAt,
            groupId,
          },
        })
      }
    },
  })
}
