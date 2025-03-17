import { ThemeProvider } from '@/components/theme-provider';
import './App.css';

import KanbanBoard from './components/kanban-board';

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
      className="min-h-screen"
    >
      <KanbanBoard />
    </ThemeProvider>
  );
}

export default App;
