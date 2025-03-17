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
      className="bg-slate-900 min-w-2xs"
    >
      <CardHeader>
        <CardTitle className="text-gray-300">{issue.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-300">
        <CardDescription className="text-gray-300">
          {issue.description}
        </CardDescription>
        <div className="flex justify-between items-center mt-4">
          <img
            src="https://unsplash.com/pt-br/fotografias/closeup-photography-of-woman-smiling-mEZ3PoFGs_k"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-xs">Due Date: {issue.due_date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
