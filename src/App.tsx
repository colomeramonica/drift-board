import React from 'react';

import KanbanBoard from './components/kanban-board';
import NavBar from './components/navbar';

function App() {
  return (
    <section className="min-h-screen w-full p-4 bg-background">
      <NavBar />
      <KanbanBoard />
    </section>
  );
}

export default App;
