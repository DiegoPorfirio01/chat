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
    eachMessage: async ({ partition, message }) => {
      const data = message.value ? JSON.parse(message.value.toString()) : null
      console.log({
        partition,
        offset: message.offset,
        value: data,
      })

      await prisma.chats.create({
        data,
      })

      // Process the message (e.g., save to DB, trigger some action, etc.)
    },
  })
}
