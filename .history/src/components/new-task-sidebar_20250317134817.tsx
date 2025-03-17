import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import TaskSchema from './task.schema';
import { Input } from './ui/input';
import { Button } from './ui/button';
import type { z } from 'zod';

export default function NewTaskSidebar() {
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: 'New Task',
      status: 'Open',
      priority: 'Low',
    },
  });

  const onSubmit = (values: z.infer<typeof TaskSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex inset-0 justify-end">
      <div className="bg-slate-950 h-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create a New Task</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
