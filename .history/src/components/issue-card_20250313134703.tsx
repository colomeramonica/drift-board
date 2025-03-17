import type { TaskProps } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { useDraggable } from '@dnd-kit/core';

export default function IssueCard({ issue }: { issue: TaskProps }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id: issue.id });

  return (
    <Card ref={setNodeRef}>
      <CardHeader>
        <CardTitle>{issue.title}</CardTitle>
        <CardDescription>{issue.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {issue.assignee} - {issue.status} - {issue.due_date}
      </CardContent>
    </Card>
  );
}
