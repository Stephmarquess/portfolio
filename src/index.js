import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Sobre from './pages/Sobre/Sobre';
import Projetos from './pages/Projetos/Projetos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Sobre",
        element: <Sobre />
      },
      {
        path: "Projetos",
        element: <Projetos />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


