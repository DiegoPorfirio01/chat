import { env } from '@chat/env'
import { Kafka, logLevel } from 'kafkajs'

export const kafka = new Kafka({
  brokers: [env.KAFKA_BROKER!],
  ssl: true,
  sasl: {
    mechanism: 'scram-sha-256',
    username: env.KAFKA_USERNAME!,
    password: env.KAFKA_PASSWORD!,
  },
  logLevel: logLevel.ERROR,
})

export const producer = kafka.producer()
export const consumer = kafka.consumer({ groupId: 'chats' })

export const connectKafkaProducer = async () => {
  await producer.connect()
  console.log('Kafka Producer connected...')
}
