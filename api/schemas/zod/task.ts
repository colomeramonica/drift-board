import { z } from 'zod';

export const TaskSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().optional(),
  dueDate: z.coerce.date().refine((date) => date >= new Date(), {
    message: 'Date must be in the future',
  }),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).default(1),
  status: z.enum(['Open', 'Ready to Dev', 'In Progress', 'Completed']),
  responsible: z.string(),
});

export const TaskListSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  dueDate: z.date(),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  status: z
    .enum(['Open', 'Ready to Dev', 'In Progress', 'Completed'])
    .optional(),
  responsible: z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .optional(),
  updatedAt: z.coerce.date(),
});

export const UpdateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z
    .enum(['Open', 'Ready to Dev', 'In Progress', 'Completed'])
    .optional(),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  responsible: z.string().optional(),
  dueDate: z.date().optional(),
});

export const FilterByIdSchema = z.object({
  taskId: z.string().describe('Task ID'),
});
