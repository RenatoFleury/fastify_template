import { z } from 'zod';

export default async function hello(fastify): Promise<void> {
  fastify.get('/hello', {
    schema: {
      description: 'Diz olá para o mundo',
      tags: ['Teste'],
      summary: 'Rota de exemplo',
      response: {
        200: z.object({ message: z.string() }),
        
      },
    },
    handler: async (request, reply) => {
      return { message: 'Olá do Fastify com Swagger e TypeScript!' };
    },
  });
};

