import z from 'zod';
import User from './models/userModel';
import Task from './models/taskModel';
import type { FastifyTypedInstance } from './types';

export async function routes(app: FastifyTypedInstance) {
  app.get('/users', {
    schema: {
      tags: ['users'],
      description: 'List users',
      response: {
        200: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            email: z.string(),
          })
        ),
      },
    },
    handler: async (request, reply) => {
      const users = await User.find();
      const formattedUsers = users.map((user) => ({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      }));
      return reply.status(200).send(formattedUsers);
    },
  });

  app.post('/users', {
    schema: {
      tags: ['users'],
      description: 'Create a new user',
      body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      }),
      response: {
        201: z.object({
          message: z.string().describe('User created'),
        }),
        400: z.object({
          message: z.string().describe('Error creating user'),
        }),
      },
    },
    handler: async (request, reply) => {
      try {
        const { name, email, password } = request.body as {
          name: string;
          email: string;
          password: string;
        };
        const user = new User({ name, email, password });
        await user.save();
        return reply.status(201).send({ message: 'User created' });
      } catch (error) {
        return reply.status(400).send({ message: error.message });
      }
    },
  });

  app.get('/tasks', {
    schema: {
      tags: ['tasks'],
      description: 'List tasks',
      response: {
        200: z.array(
          z.object({
            id: z.string(),
            title: z.string(),
            description: z.string(),
            status: z.enum(['Open', 'In Progress', 'Completed']),
            priority: z.enum(['Low', 'Medium', 'High']),
            assignee: z.string().nullable(),
            due_date: z.string().nullable(),
          })
        ),
      },
    },
    handler: async (request, reply) => {
      const tasks = await Task.find().populate('assignee');
      const formattedTasks = tasks.map((task) => ({
        id: task._id.toString(),
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        assignee: task.assignee ? task.assignee.name : null,
        due_date: task.due_date ? task.due_date.toISOString() : null,
      }));
      return reply.status(200).send(formattedTasks);
    },
  });

  app.get('/task', {
    schema: {
      tags: ['tasks'],
      description: 'Get a task by ID',
      querystring: z.object({
        taskId: z.string().describe('Task ID'),
      }),
      response: {
        200: z.object({
          id: z.string(),
          title: z.string(),
          description: z.string(),
          status: z.enum(['Open', 'In Progress', 'Completed']),
          priority: z.enum(['Low', 'Medium', 'High']),
          assignee: z.string().nullable(),
          due_date: z.string().nullable(),
        }),
        404: z.object({
          message: z.string().describe('Task not found'),
        }),
      },
    },
    handler: async (request, reply) => {
      const { taskId } = request.query as { taskId: string };
      const task = await Task.findById(taskId).populate('assignee');
      if (!task) {
        return reply.status(404).send({ message: 'Task not found' });
      }
      const formattedTask = {
        id: task._id.toString(),
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        assignee: task.assignee ? task.assignee.name : null,
        due_date: task.due_date ? task.due_date.toISOString() : null,
      };
      return reply.status(200).send(formattedTask);
    },
  });

  app.post('/tasks', {
    schema: {
      tags: ['tasks'],
      description: 'Create a new task',
      body: z.object({
        title: z.string(),
        description: z.string(),
        assignee: z.string(),
        due_date: z.string(),
        status: z.enum(['Open', 'In Progress', 'Completed']),
        priority: z.enum(['Low', 'Medium', 'High']),
      }),
      response: {
        201: z.object({
          message: z.string().describe('Task created'),
        }),
        400: z.object({
          message: z.string().describe('Error creating task'),
        }),
      },
    },
    handler: async (request, reply) => {
      try {
        const { title, description, assignee, due_date, status, priority } =
          request.body as {
            title: string;
            description: string;
            assignee: string;
            due_date: string;
            status: 'Open' | 'In Progress' | 'Completed';
            priority: 'Low' | 'Medium' | 'High';
          };

        const parsedDueDate = new Date(due_date);

        const task = new Task({
          title,
          description,
          assignee,
          due_date: parsedDueDate,
          status,
          priority,
        });
        await task.save();
        return reply.status(201).send({ message: 'Task created' });
      } catch (error) {
        return reply.status(400).send({ message: error.message });
      }
    },
  });

  app.patch('/task/:taskId', {
    schema: {
      tags: ['tasks'],
      description: 'Update a task',
      params: z.object({
        taskId: z.string().describe('Task ID'),
      }),
      body: z.object({
        status: z.enum(['Open', 'In Progress', 'Completed']).optional(),
        assignee: z.string().nullable().optional(),
      }),
      response: {
        200: z.object({
          message: z.string().describe('Task updated'),
        }),
        400: z.object({
          message: z.string().describe('Error updating task'),
        }),
      },
    },
    handler: async (request, reply) => {
      const { taskId } = request.params as { taskId: string };
      const { status, assignee } = request.body as {
        status?: 'Open' | 'In Progress' | 'Completed';
        assignee?: string | null;
      };

      const task = await Task.findById(taskId);
      if (!task) {
        return reply.status(404).send({ message: 'Task not found' });
      }

      if (status !== undefined) {
        task.status = status;
      }

      if (assignee !== undefined) {
        task.assignee = assignee;
      }

      await task.save();

      return reply.status(200).send({ message: 'Task updated' });
    },
  });
}
