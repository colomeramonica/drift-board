import { z } from 'zod';

const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  assignee: z.string(),
  status: z.string(),
  priority: z.string(),
  due_date: z.string(),
  tags: z.array(z.string()),
});
