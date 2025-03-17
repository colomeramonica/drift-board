import { Card, CardDescription, CardHeader } from './ui/card';

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
      <CardHeader>{issue.title}</CardHeader>
      <CardDescription>Card Description</CardDescription>
    </Card>
  );
}
