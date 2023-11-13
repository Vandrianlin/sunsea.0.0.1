import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom' instead of 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/cli ent';
import MainPage from './component/mainpage/mainpage';

import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);