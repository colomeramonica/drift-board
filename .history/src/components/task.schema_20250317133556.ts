import { z } from 'zod';

const TaskSchema = z.object({
  title: z.string().min(5, {
    message: 'Title must be at least 5 characters long',
  }),
  description: z.string().min(90).max(360, {
    message: 'Description must be between 90 and 360 characters long',
  }),
  assignee: z.string(),
  status: z.string(),
  priority: z.string(),
  due_date: z.string().refine(
    (date) => {
      const today = new Date();
      const inputDate = new Date(date);
      return inputDate >= today;
    },
    {
      message: 'Due date must be today or in the future',
    }
  ),
  tags: z.array(z.string()),
});

export default TaskSchema;
