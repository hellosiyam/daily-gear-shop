import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Details from './components/Details/Details.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { ContextProvider } from './StateContext/StateContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/details/:product_id',
        loader: () => fetch('/gadgets.json'),
        element: <Details></Details>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    <ToastContainer
      autoClose={600}
    />
  </StrictMode>,
)
