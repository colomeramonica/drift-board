import { z } from 'zod';
import { TaskController } from '../../../controllers/taskController';
import { BadRequestError } from '../../../errors';
import { Task } from '../../../schemas/mongoose/task';
import {
  FilterByIdSchema,
  TaskListSchema,
  TaskSchema,
  UpdateTaskSchema,
} from '../../../schemas/zod/task';
import { FastifyTypedInstance } from '../../../types';
import { zodToJsonSchema } from 'zod-to-json-schema';

export async function update(app: FastifyTypedInstance) {
  app.patch('/task/:taskId', {
    schema: {
      tags: ['tasks'],
      description: 'Update a task',
      params: zodToJsonSchema(FilterByIdSchema),
      body: zodToJsonSchema(UpdateTaskSchema.partial()),
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
            task: zodToJsonSchema(TaskListSchema),
          },
        },
      },
    },
    handler: async (request, reply) => {
      const { taskId } = request.params as { taskId: string };

      if (!taskId) {
        console.error('Task ID is missing in request params');
        throw new BadRequestError('Task ID is required', []);
      }

      const validation = UpdateTaskSchema.safeParse(request.body);

      if (!validation.success) {
        throw new BadRequestError('Request error', validation.error.errors);
      }

      const task = await TaskController.updateTask(taskId, validation.data);

      if (!task) {
        console.error('Task not found for ID:', taskId);
        throw new BadRequestError('Task not found', []);
      }

      return reply.status(200).send({ message: 'Task updated', task });
    },
  });
}
