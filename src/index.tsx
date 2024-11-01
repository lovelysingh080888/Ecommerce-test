import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CartProvider from './utils/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider>
 
    </RecoilRoot>
  </React.StrictMode>
);
