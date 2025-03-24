import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform,
} from 'fastify-type-provider-zod';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { routes } from './routes';
import db from './app';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: '*' });
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Drift Board - Tasks API',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

db.once('open', async () => {
  console.log('✅ MongoDB connection established');

  app.register(routes);

  app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running on port 3333 🌿');
  });
});

db.on('error', (error) => {
  console.error('❌ MongoDB connection error:', error);
});
