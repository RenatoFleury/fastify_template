import { FastifyBaseLogger, FastifyInstance, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { jsonSchemaTransform, ZodTypeProvider } from "fastify-type-provider-zod";
import fp from "fastify-plugin";

type FastifyTypedInstance = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  ZodTypeProvider
>;

export default fp(
  async (fastify: FastifyInstance) => {
    await fastify.register(fastifySwagger, {
      openapi: {
        info: {
          title: "Minha API",
          description: "Documentação da API com Fastify e Swagger",
          version: "1.0.0",
        },
        servers: [],
      },
      transform: jsonSchemaTransform,
    });

    await fastify.register(fastifySwaggerUi, {
      routePrefix: "/docs", // rota para acessar o Swagger UI
    });
  },
  { name: "swagger" }
);
