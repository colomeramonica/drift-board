import { Form, FormField, FormItem, FormLabel } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import TaskSchema from './task.schema';

export default function NewTaskSidebar() {
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: 'New Task',
      status: 'Open',
      priority: 'Low',
    },
  });

  const onSubmit => (values: z.infer<typeof TaskSchema>) = {
    console.log(values);
  }

  return (
    <div className="fixed inset-0 flex justify-end">
      <div className="bg-slate-950 w-1/3 h-full shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Create a New Task</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
