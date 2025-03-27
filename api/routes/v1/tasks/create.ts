import { TaskController } from '../../../controllers/taskController';
import { BadRequestError } from '../../../errors';
import { TaskSchema } from '../../../schemas/zod/task';
import { FastifyTypedInstance } from '../../../types';
import { zodToJsonSchema } from 'zod-to-json-schema';

export async function create(app: FastifyTypedInstance) {
  app.post(
    '/task',
    {
      schema: {
        tags: ['tasks'],
        description: 'Creates a task',
        body: zodToJsonSchema(TaskSchema),
        response: {
          201: zodToJsonSchema(TaskSchema),
        },
      },
    },
    async (request, reply) => {
      const validation = TaskSchema.safeParse(request.body);

      if (!validation.success) {
        throw new BadRequestError('Request error', validation.error.errors);
      }
      const task = await TaskController.createTask(validation.data);
      return reply.status(201).send(task);
    }
  );
}
