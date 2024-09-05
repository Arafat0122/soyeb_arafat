import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Works from './pages/Works/Works.jsx';
import Services from './pages/Services/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },      
      {
        path: "/about",
        element: <About></About>
      },      
      {
        path: "/works",
        element: <Works></Works>
      },      
      {
        path: "/contact",
        element: <Contact></Contact>
      },    
      {
        path: "/services",
        element: <Services></Services>
      },      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
