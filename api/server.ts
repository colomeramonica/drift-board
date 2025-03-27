import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import BadRequestError from './errors/BadRequestError';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { TaskSchema } from './schemas/zod/task';
import { TeamMemberSchema } from './schemas/zod/team-member';
import db from './config/database';
import { tasksRoutes } from './routes/v1/tasks';
import { membersRoutes } from './routes/v1/team-member';

const app = fastify();

// Configuração do Swagger
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Drift Board - Tasks API',
      version: '1.0.0',
    },
    components: {
      schemas: {
        Task: zodToJsonSchema(TaskSchema),
        TeamMember: zodToJsonSchema(TeamMemberSchema),
      },
    },
  },
});

app.register(fastifySwaggerUi, { routePrefix: '/docs' });
app.register(fastifyCors, { origin: '*' });

app.setErrorHandler((error, _, reply) => {
  return reply.code(400).send({
    statusCode: error.statusCode,
    message: 'Bad Request',
    error: error.message,
  });
});

// Registro de rotas
app.register(tasksRoutes);
app.register(membersRoutes);

// Conexão com MongoDB
if (process.env.NODE_ENV !== 'test') {
  db.once('open', async () => {
    console.log('✅ MongoDB connection established');
    app.listen({ port: 3333 }, (err) => {
      if (err) throw err;
      console.log('🚀 Server running');
    });
  });
}

db.on('error', (error) => {
  console.error('❌ MongoDB connection error:', error);
});

export { app };
