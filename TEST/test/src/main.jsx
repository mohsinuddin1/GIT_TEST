import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'

import './index.css'
import ProductProvider from './contexts/ProductContext.jsx';
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartProvider, { CartContext } from './contexts/CartContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>

);
