import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import { ThemedProvider } from './contexts/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemedProvider>
      <AppRoutes />
    </ThemedProvider>
  </BrowserRouter>
)
