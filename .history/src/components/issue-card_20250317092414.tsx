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
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-300 min-w-2xs"
    >
      <CardHeader>
        <CardTitle className="text-gray-800">{issue.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-800">
        <CardDescription className="text-gray-800">
          {issue.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
