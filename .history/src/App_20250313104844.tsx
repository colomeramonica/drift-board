import { ThemeProvider } from '@/components/theme-provider';
import './App.css';

import type { ReactNode } from 'react';
import KanbanBoard from './components/kanban-board';

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <KanbanBoard>
    </ThemeProvider>
  );
}

export default App;
