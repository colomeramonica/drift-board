import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export interface IssueCardProps {
  title: string;
  description: string;
  assignee: string;
  status: string;
  due_date: string;
}

export default function IssueCard({ issue }: { issue: IssueCardProps }) {
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
