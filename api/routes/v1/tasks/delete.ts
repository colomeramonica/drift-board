import { TaskController } from '../../../controllers/taskController';
import { BadRequestError } from '../../../errors';
import {
  FilterByIdSchema,
  TaskListSchema,
  TaskSchema,
} from '../../../schemas/zod/task';
import { FastifyTypedInstance } from '../../../types';
import { zodToJsonSchema } from 'zod-to-json-schema';

export async function deleteTask(app: FastifyTypedInstance) {
  app.delete(
    '/task/:taskId',
    {
      schema: {
        tags: ['tasks'],
        description: 'Deletes a task',
        params: zodToJsonSchema(FilterByIdSchema),
      },
    },
    async (request, reply) => {
      const { taskId } = request.params as { taskId: string };

      await TaskController.deleteTask(taskId);

      return reply.status(200).send({ message: 'Task deleted!' });
    }
  );
}

export async function deleteAll(app: FastifyTypedInstance) {
  app.delete(
    '/tasks',
    {
      schema: {
        tags: ['tasks'],
        description: 'Deletes all tasks',
      },
    },
    async (request, reply) => {
      await TaskController.deleteAllTasks();

      return reply.status(200).send({ message: 'All tasks deleted!' });
    }
  );
}
