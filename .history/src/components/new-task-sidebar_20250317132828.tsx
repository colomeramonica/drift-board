import { useForm } from 'react-hook-form';
import { Form, FormField } from './ui/form';

export default function NewTaskSidebar() {
  const task = useForm();
  return (
    <div className="fixed inset-0 flex justify-end">
      <div className="bg-slate-950 w-1/3 h-full shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Create a New Task</h2>
        <Form>
          <FormField
            control="input"
            label="Title"
            name="title"
            placeholder="Enter the title of the task"
            required
          />
        </Form>
      </div>
    </div>
  );
}
