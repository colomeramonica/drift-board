import { ThemeProvider } from '@/components/theme-provider';
import { DndContext } from '@dnd-kit/core';
import './App.css';

import type { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DndContext>{children}</DndContext>
    </ThemeProvider>
  );
}

export default App;
