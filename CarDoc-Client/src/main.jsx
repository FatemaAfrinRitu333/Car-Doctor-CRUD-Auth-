import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
)
