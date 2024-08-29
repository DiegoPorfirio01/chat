import { fastifyCors } from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import { env } from '@chat/env'
import { fastify } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { errorHandler } from './error-handler'
import { authenticateWithPassword } from './routes/auth/authenticate-with-password'
import { createAccount } from './routes/auth/create-account'
import { getProfile } from './routes/auth/get-profile'
import { requestPasswordRecover } from './routes/auth/request-password-recover'
import { resetPassword } from './routes/auth/reset-password'
import { createAdapter } from '@socket.io/redis-streams-adapter';
import { instrument } from '@socket.io/admin-ui';
import { Server } from 'socket.io'
import { createServer } from 'http'
import redis from '@/lib/redis'
import { setupSocket } from '@/socket'
import { connectKafkaProducer } from '@/lib/kafka.config'
import { consumeMessages } from '@/utils'

// validates and parse
const app = fastify().withTypeProvider<ZodTypeProvider>()
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

// cors
app.register(fastifyCors, {
  origin: [env.NEXT_PUBLIC_APP_URL, 'https://admin.socket.io']
});

// socket with redis
const server = createServer(app.server);
const io = new Server(server, {
  cors: {
    origin: [env.NEXT_PUBLIC_APP_URL, 'https://admin.socket.io'],
  },
  adapter: createAdapter(redis),
});

instrument(io, {
  auth: false,
  mode: 'development',
});

app.decorate('io', io);  

setupSocket(io);

// ### kafka ###
// * Add Kafka Producer
connectKafkaProducer().catch((err) => console.log("Kafka Consumer error", err));

consumeMessages(process.env.KAFKA_TOPIC).catch((err) =>
  console.log("The Kafka Consume error", err)
);

// documentation
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Chat Realtime API"',
      description: 'The best API ever',
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

// handler
app.setErrorHandler(errorHandler)

// ### routes ###

// -> chat


// -> auth
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})
app.register(createAccount)
app.register(getProfile)

app.register(authenticateWithPassword)

app.register(requestPasswordRecover)
app.register(resetPassword)

app.listen({ port: env.SERVER_PORT }).then(() => {
  console.log('Server is running on port 3333')
})
