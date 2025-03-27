import { FastifyTypedInstance, TaskFilter } from '../../../types';
import { TaskListSchema } from '../../../schemas/zod/task';
import { TaskController } from '../../../controllers/taskController';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

export async function list(app: FastifyTypedInstance) {
  app.get('/tasks', {
    schema: {
      tags: ['tasks'],
      description: 'List tasks with filters',
      querystring: {
        type: 'object',
        required: [],
        properties: {
          status: {
            type: 'string',
            enum: ['Open', 'Ready to Dev', 'In Progress', 'Completed'],
          },
          priority: {
            type: 'string',
            enum: ['Low', 'Medium', 'High'],
          },
        },
      },
      response: {
        200: {
          type: 'array',
          items: zodToJsonSchema(TaskListSchema),
        },
      },
    },
    handler: async (request, reply) => {
      const querySchema = z.object({
        status: z
          .enum(['Open', 'Ready to Dev', 'In Progress', 'Completed'])
          .optional(),
        priority: z
          .union([z.literal(1), z.literal(2), z.literal(3)])
          .optional(),
        dueDate: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/)
          .optional(),
      });

      const parsedQuery = querySchema.safeParse(request.query);

      if (!parsedQuery.success) {
        console.error('Validation errors:', parsedQuery.error.errors); // Log de erro
        throw new BadRequestError(
          'Query validation error',
          parsedQuery.error.errors
        );
      }

      const filters: TaskFilter = {
        status: parsedQuery.data.status,
        priority: parsedQuery.data.priority,
        due_date: parsedQuery.data.dueDate,
      };

      const tasks = await TaskController.listTasks(filters);
      return reply.status(200).send(tasks);
    },
  });
}
