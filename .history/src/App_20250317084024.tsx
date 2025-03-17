import { ThemeProvider } from '@/components/theme-provider';
import './App.css';

import KanbanBoard from './components/kanban-board';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="min-h-screen h-full">
        <KanbanBoard />
      </section>
    </ThemeProvider>
  );
}

export default App;
