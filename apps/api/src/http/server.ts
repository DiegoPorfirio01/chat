import { env } from '@chat/env'
import { fastifyCors } from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import { instrument } from '@socket.io/admin-ui'
import { createAdapter } from '@socket.io/redis-streams-adapter'
import { fastify } from 'fastify'
import FastifySocketIO from 'fastify-socket.io'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { Server } from 'socket.io'

import { connectKafkaProducer } from '@/lib/kafka.config'
import redis from '@/lib/redis'
import { setupSocket } from '@/socket'
import { consumeMessages } from '@/utils'

import { errorHandler } from './error-handler'
import { auth } from './middlewares/auth'
import { authenticateWithPassword } from './routes/auth/authenticate-with-password'
import { createAccount } from './routes/auth/create-account'
import { getProfile } from './routes/auth/get-profile'
import { requestPasswordRecover } from './routes/auth/request-password-recover'
import { resetPassword } from './routes/auth/reset-password'
import { createChatGroup } from './routes/chat/create-chat-group'
import { createChatGroupsUser } from './routes/chat/create-chat-group-user'
import { deleteChatGroup } from './routes/chat/delete-chat-group'
import { getChatGroup } from './routes/chat/get-chat-group'
import { getChatGroups } from './routes/chat/get-chat-groups'
import { getChatGroupsUser } from './routes/chat/get-chat-groups-user'
import { getChats } from './routes/chat/get-chats'
import { updateChatGroup } from './routes/chat/update-chat-group'

// Initialize Fastify
const app = fastify().withTypeProvider<ZodTypeProvider>()
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

// Register CORS
app.register(fastifyCors, {
  origin: [env.NEXT_PUBLIC_APP_URL, 'https://admin.socket.io'],
})

// Register Socket.io
app.register(FastifySocketIO, {
  cors: {
    origin: [env.NEXT_PUBLIC_APP_URL, 'https://admin.socket.io'],
  },
  adapter: createAdapter(redis),
})

// Setup Socket.io instance
app.ready().then(() => {
  const io = app.io as Server
  instrument(io, {
    auth: false,
    mode: 'development',
  })

  setupSocket(io)
})

// ### kafka ###
// * Add Kafka Producer
connectKafkaProducer().catch((err) => console.log('Kafka Producer error', err))

consumeMessages(env.KAFKA_TOPIC).catch((err) =>
  console.log('Kafka Consumer error', err)
)

// Register Swagger
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Chat Lucy API',
      description: 'Welcome to the Chat Lucy API',
      version: '0.1.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

// Register Error Handler
app.setErrorHandler(errorHandler)

// ### Routes ###

// -> Auth
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(auth)

app.register(createAccount)
app.register(getProfile)

app.register(authenticateWithPassword)

app.register(requestPasswordRecover)
app.register(resetPassword)

// -> Chat
app.register(createChatGroup)
app.register(createChatGroupsUser)

app.register(updateChatGroup)

app.register(deleteChatGroup)

app.register(getChatGroup)
app.register(getChatGroups)
app.register(getChatGroupsUser)
app.register(getChats)

// Start Server
app.listen({ port: env.SERVER_PORT }).then(() => {
  console.log('Server is running on port', env.SERVER_PORT)
})
