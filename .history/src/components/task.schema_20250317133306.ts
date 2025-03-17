import { z } from 'zod';

const TaskSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(90).max(360),
  assignee: z.string(),
  status: z.string(),
  priority: z.string(),
  due_date: z.string().date(),
  tags: z.array(z.string()),
});
