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
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-xs">3 days remaining</span>
        </div>
      </CardContent>
    </Card>
  );
}
