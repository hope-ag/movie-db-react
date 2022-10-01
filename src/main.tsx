import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/modules/i18n';
import App from './App';
import './styles/main.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
