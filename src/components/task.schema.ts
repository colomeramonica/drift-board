import { z } from 'zod';

const TaskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  responsible: z.string(),
  status: z.enum(['Open', 'In Progress', 'Completed']),
  priority: z.enum(['Low', 'Medium', 'High']),
  due_date: z.string().refine(
    (date) => {
      const today = new Date();
      const inputDate = new Date(date);
      return inputDate >= today;
    },
    {
      message: 'Due date cannot be in the past',
    }
  ),
  tags: z.array(z.string()),
});

export default TaskSchema;
