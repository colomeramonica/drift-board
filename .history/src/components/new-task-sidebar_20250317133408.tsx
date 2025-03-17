import { Form, FormField, FormItem, FormLabel } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function NewTaskSidebar() {
  const task = useForm();

  return (
    <div className="fixed inset-0 flex justify-end">
      <div className="bg-slate-950 w-1/3 h-full shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Create a New Task</h2>
        <Form>
          <FormField
            control={task.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <input
                  {...field}
                  {...task.register('title', { required: true })}
                  className="input"
                />
              </FormItem>
            )}
          />
        </Form>
      </div>
    </div>
  );
}
