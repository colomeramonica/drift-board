import React from 'react';
import Wave from '@/assets/wave';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';

export default function NavBar() {
  return (
    <section>
      <nav className="rounded-sm bg-slate-800 p-2 gap-3 min-w-full flex justify-between shadow-md mb-4">
        <h1 className="justify-center font-kanit flex flex-row gap-2 text-white text-2xl font-light align-middle items-center">
          <Wave stroke="white" width="48px" height="48px" />
          Drift Board
        </h1>
        <Drawer>
          <DrawerTrigger>
            <Button variant="default">Create Task</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col">
              <div className="flex p-4 pb-0 justify-center"></div>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </section>
  );
}
