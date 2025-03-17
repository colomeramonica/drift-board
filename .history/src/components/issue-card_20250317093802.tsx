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
        <div className="flex flex-row justify-between items-center mt-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xs border p-1 bg-green-300 rounded-full text-green-700 items-center align-middle">
            3 days remaining
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
