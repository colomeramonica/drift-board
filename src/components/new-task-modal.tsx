import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { Button } from './ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { cn } from '../lib/utils';

import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { createTask, getMembers } from '../api';
import { MembersProps } from '../types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MultiSelect } from './ui/multi-select';

export default function NewTaskModal({ onClose }: { onClose: () => void }) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    responsible: '',
    status: 'Open',
    priority: '1',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    tags: [],
  });
  const [members, setMembers] = useState<MembersProps[]>([]);
  const [tags, setTags] = useState<string[]>(['development']);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const tagsList = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'test', label: 'Test' },
  ];

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await getMembers();
      setMembers(response as MembersProps[]);
    };
    fetchMembers();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    setNewTask((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const task = { ...newTask, tags };
    setLoading(true);
    setResponse('');
    try {
      const response = await createTask(task);
      setResponse(response?.message || 'Task created successfully!');
      if (!response?.error) {
        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (error) {
      setResponse('Failed to create task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle className="text-blue-950">New task</DialogTitle>
        {response && (
          <div
            className={cn(
              'text-sm',
              response.includes('Failed') ? 'text-red-500' : 'text-green-500'
            )}
          >
            {response}
          </div>
        )}
      </DialogHeader>
      <div className="flex flex-col gap-4 py-4">
        <div className="md:grid md:grid-cols-4 flex flex-col items-start md:items-center gap-2">
          <Label htmlFor="name" className="text-right text-blue-900">
            Title
          </Label>
          <Input
            id="title"
            onChange={(e) => handleChange(e, 'title')}
            className="md:col-span-3 w-auto text-gray-600"
          />
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col items-start md:items-center gap-2">
          <Label htmlFor="username" className="text-right text-indigo-900">
            Description
          </Label>
          <Textarea
            id="description"
            value={newTask.description}
            onChange={(e) => handleChange(e, 'description')}
            className="md:col-span-3 w-auto text-gray-600"
          />
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col items-start md:items-center gap-2">
          <Label htmlFor="priority" className="text-right text-blue-900">
            Priority
          </Label>
          <Select
            onValueChange={(value) =>
              setNewTask((prev) => ({ ...prev, priority: value }))
            }
          >
            <SelectTrigger className="md:col-span-3 w-auto text-gray-600">
              <SelectValue placeholder="Priority" className="text-gray-600" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1" className="text-gray-600">
                  Low
                </SelectItem>
                <SelectItem value="2" className="text-gray-600">
                  Medium
                </SelectItem>
                <SelectItem value="3" className="text-gray-600">
                  High
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col items-start md:items-center gap-2">
          <Label htmlFor="responsible" className="text-right text-blue-900">
            Responsible
          </Label>
          <Select
            onValueChange={(value) =>
              setNewTask((prev) => ({ ...prev, responsible: value }))
            }
          >
            <SelectTrigger className="md:col-span-3 w-auto text-gray-600">
              <SelectValue
                placeholder="Responsible"
                className="text-gray-600"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {members.map((member) => (
                  <SelectItem
                    key={member._id}
                    value={member._id}
                    className="text-gray-600"
                  >
                    <Avatar className="mr-2">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    {member.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col items-start md:items-center gap-2">
          <Label htmlFor="due_date" className="text-right text-blue-900">
            Due date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'md:col-span-3 w-auto text-gray-600 text-left font-normal',
                  !newTask.dueDate && 'text-muted-foreground'
                )}
              >
                {newTask.dueDate ? (
                  format(newTask.dueDate, 'PPP')
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="md:col-span-3 w-auto text-gray-600">
              <Calendar
                mode="single"
                selected={newTask.dueDate}
                onSelect={(e) => handleChange(e, 'dueDate')}
                disabled={(date) =>
                  date < new Date(new Date().setDate(new Date().getDate() - 1))
                }
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col items-start md:items-center gap-2">
          <Label htmlFor="tags" className="text-right text-blue-900">
            Tags
          </Label>
          <MultiSelect
            className="md:col-span-3 w-auto text-gray-600"
            options={tagsList}
            onValueChange={setTags}
            defaultValue={tags}
            placeholder="Select tags"
            variant="inverted"
            maxCount={3}
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          className={`bg-blue-950 ${
            loading ? 'cursor-progress' : 'cursor-pointer'
          }`}
          onClick={handleSubmit}
          disabled={loading}
        >
          Create
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
