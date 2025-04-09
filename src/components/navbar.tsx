import React from 'react';
import Wave from '@/assets/wave';
import { Button } from './ui/button';
import { Dialog, DialogTrigger } from './ui/dialog';
import NewTaskModal from './new-task-modal';
import KanbanBoard from './kanban-board';

export default function NavBar() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleTaskCreated = () => {
    setIsDialogOpen(false);
  };

  return (
    <section>
      <nav className="rounded-sm p-2 gap-3 min-w-full flex justify-between shadow-md mb-4 bg-secondary-foreground">
        <h1 className="justify-center font-kanit flex flex-row gap-2 text-white text-2xl font-light align-middle items-center">
          <Wave stroke="white" width="48px" height="48px" />
          Drift Board
        </h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger>
            <Button
              variant="default"
              className="cursor-pointer bg-secondary text-foreground"
            >
              Create Task
            </Button>
          </DialogTrigger>
          <NewTaskModal onClose={handleTaskCreated} />
        </Dialog>
      </nav>
    </section>
  );
}
