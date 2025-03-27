import { z } from 'zod';

export const TaskSchema = z.object({
  title: z.string().min(5),
  description: z.string().optional(),
  dueDate: z.coerce.date().refine((date) => date >= new Date(), {
    message: 'Date must be in the future',
  }),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).default(1),
  status: z.enum(['Open', 'Ready to Dev', 'In Progress', 'Completed']),
  responsible: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const TaskListSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  dueDate: z.string().optional(),
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
});

export const UpdateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z
    .enum(['Open', 'Ready to Dev', 'In Progress', 'Completed'])
    .optional(),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  responsible: z.string().optional(),
  dueDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
});

export const FilterByIdSchema = z.object({
  taskId: z.string().describe('Task ID'),
});
