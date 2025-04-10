import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import type { TaskProps } from '../types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { FlagIcon } from 'lucide-react';
import { Separator } from './ui/separator';

type CardComponentProps = {
  issue: TaskProps;
  column: string;
};

export default function CardComponent({ issue, column }: CardComponentProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: issue.id,
    data: { column },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  const getRemainingDays = (dueDate: string): number => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-2 rounded shadow-md mb-2"
    >
      <Card className="min-w-2xs m-2 border-0 bg-background">
        <CardHeader>
          <div className="flex flex-row gap-2">
            <Badge variant="default" className="bg-gray-700 text-gray-300">
              {issue?.status}
            </Badge>
            <Badge
              variant="default"
              className={
                issue?.priority === 3
                  ? 'bg-red-500 text-white'
                  : issue?.priority === 2
                  ? 'bg-yellow-500 text-white'
                  : 'bg-blue-500 text-white'
              }
            >
              <FlagIcon size={16} />
              {issue?.priority === 3
                ? 'High'
                : issue?.priority === 2
                ? 'Medium'
                : 'Low'}
            </Badge>
          </div>
          <CardTitle className="text-foreground flex justify-start pt-3">
            {issue?.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground">
          <CardDescription className="flex justify-start text-foreground">
            {issue?.description}
          </CardDescription>
          <Separator className="bg-foreground" />
          <div className="flex flex-row justify-between items-center mt-2">
            <Avatar>
              <AvatarImage src={issue?.responsible.avatar} alt="avatar" />
              <AvatarFallback className="bg-primary text-secondary">
                {issue?.responsible.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Badge
              variant="default"
              className={
                getRemainingDays(issue?.dueDate || '') > 0
                  ? 'bg-green-300 text-green-700'
                  : 'bg-red-300 text-red-700'
              }
            >
              {isNaN(getRemainingDays(issue?.dueDate || ''))
                ? 'Invalid due date'
                : getRemainingDays(issue?.dueDate || '') > 0
                ? `${getRemainingDays(issue?.dueDate || '')} days left`
                : `Late for ${Math.abs(
                    getRemainingDays(issue?.dueDate || '')
                  )} days`}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
