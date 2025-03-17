import { Card, CardHeader } from './ui/card';

export default function IssueCard({ issue }: { issue: string[] }) {
  return (
    <Card>
      <CardHeader>{issue.title}</CardHeader>
    </Card>
  );
}
