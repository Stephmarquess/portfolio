import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

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
        path: "contact",
        element: <Contact />
      },
      {
        path: "projects",
        element: <Projects />
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


