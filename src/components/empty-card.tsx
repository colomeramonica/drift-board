import React from 'react';
import { Card, CardContent, CardDescription } from './ui/card';

export default function EmptyCard() {
  return (
    <Card className="bg-slate-900 min-w-2xs m-2 border-0">
      <CardContent className="text-gray-300">
        <CardDescription className="flex justify-start text-gray-300">
          There are no tasks in this column.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
