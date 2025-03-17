import type { TaskProps } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function IssueCard({ issue }: { issue: TaskProps }) {
  return (
    <Card>
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
