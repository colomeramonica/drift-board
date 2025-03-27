import { TaskController } from '../../../controllers/taskController';
import { BadRequestError } from '../../../errors';
import { TaskListSchema, TaskSchema } from '../../../schemas/zod/task';
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
          200: {
            type: 'array',
            items: zodToJsonSchema(TaskListSchema),
          },
        },
      },
    },
    async (request, reply) => {
      const validation = TaskSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Validation error',
          issues: validation.error.errors,
        });
      }

      const task = await TaskController.createTask(validation.data);

      return reply
        .status(201)
        .send({ message: 'Task created successfully!', data: task });
    }
  );
}
