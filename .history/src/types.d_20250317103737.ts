export interface TaskProps {
  id: string;
  title: string;
  description: string;
  assignee: string;
  status: string;
  priority: string;
  due_date: string;
  tags: string[];
}
