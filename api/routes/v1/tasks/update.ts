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
        400: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            error: { type: 'string' },
            message: { type: 'string' },
            issues: { type: 'array', items: { type: 'object' } },
          },
        },
        404: {
          type: 'object',
          properties: {
            statusCode: { type: 'number' },
            error: { type: 'string' },
            message: { type: 'string' },
          },
        },
      },
    },
    handler: async (request, reply) => {
      const { taskId } = request.params as { taskId: string };

      const validation = UpdateTaskSchema.safeParse(request.body);

      if (!validation.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Validation error',
          issues: validation.error.errors,
        });
      }

      const task = await TaskController.updateTask(taskId, validation.data);

      return reply
        .status(200)
        .send({ message: 'Task updated successfully!', task });
    },
  });
}
