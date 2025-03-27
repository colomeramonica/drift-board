import React from 'react';
import type { TaskProps } from '@/types';
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

export default function IssueCard({ issue }: { issue: TaskProps }) {
  const getRemainingDays = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diff = due.getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <Card className="bg-slate-900 min-w-2xs m-2 border-0">
      <CardHeader>
        <div className="flex flex-row gap-2">
          <Badge variant="default" className="bg-gray-700 text-gray-300">
            {issue.status}
          </Badge>
          <Badge
            variant="default"
            className={
              issue.priority === 'High'
                ? 'bg-red-500 text-white'
                : issue.priority === 'Medium'
                ? 'bg-yellow-500 text-white'
                : 'bg-blue-500 text-white'
            }
          >
            <FlagIcon size={16} />
            {issue.priority}
          </Badge>
        </div>
        <CardTitle className="text-gray-300 flex justify-start">
          {issue.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-gray-300">
        <CardDescription className="flex justify-start text-gray-300">
          {issue.description}
        </CardDescription>
        <Separator />
        <div className="flex flex-row justify-between items-center mt-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge
            variant="default"
            className={
              getRemainingDays(issue.due_date) > 0
                ? 'bg-green-300 text-green-700'
                : 'bg-red-300 text-red-700'
            }
          >
            {getRemainingDays(issue.due_date) > 0
              ? `${getRemainingDays(issue.due_date)} days left`
              : `Late for ${Math.abs(getRemainingDays(issue.due_date))} days`}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
