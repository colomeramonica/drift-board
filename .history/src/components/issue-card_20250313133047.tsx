import { Card, CardHeader } from './ui/card';

export interface IssueCardProps {
  title: string;
  description: string;
  assignee: string;
  status: string;
  
}

export default function IssueCard({ issue }: { issue: IssueCardProps }) {
  return (
    <Card>
      <CardHeader>{issue.title}</CardHeader>
    </Card>
  );
}
