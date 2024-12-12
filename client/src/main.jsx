import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WishlistProvider } from './context/WishlistContext';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </StrictMode>,
);