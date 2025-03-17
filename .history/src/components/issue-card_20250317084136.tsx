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
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({ id: issue.id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <Card
      className="w-[400px] h-[200px]"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
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
