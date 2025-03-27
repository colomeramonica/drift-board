import { jsonSchemaTransform } from 'fastify-type-provider-zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { TaskSchema } from '../schemas/zod/task';
import { TeamMemberSchema } from '../schemas/zod/task';

export const swaggerConfig = {
  openapi: {
    info: {
      title: 'Drift Board - Tasks API',
      version: '1.0.0',
    },
    components: {
      schemas: {
        Task: zodToJsonSchema(TaskSchema),
        User: zodToJsonSchema(TeamMemberSchema),
      },
    },
  },
  transform: jsonSchemaTransform,
};
