import fastifyAutoload from '@fastify/autoload'
import fp from 'fastify-plugin'
import { join } from 'node:path/posix'

export default fp(
  async (fastify, opts) => {
    await fastify.register(fastifyAutoload, {
      dir: join(__dirname, '../../application/routes'),
      options: opts,
      forceESM: true,
    })
  },
  { name: 'routes' ,dependencies: ['swagger'] },
)