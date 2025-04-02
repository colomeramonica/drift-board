export interface TaskProps {
  id: string;
  title: string;
  description: string;
  responsible: string;
  status: string;
  priority: string;
  due_date: string;
  tags: string[];
}

export interface MembersProps {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}
