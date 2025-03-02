import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css'; // Assuming you have Tailwind CSS or any other styles here

import { SuccessProvider } from './context/Successcontext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
 
    <SuccessProvider>
            <App />
        </SuccessProvider>
      
 
      
    </BrowserRouter>
  </React.StrictMode>
);