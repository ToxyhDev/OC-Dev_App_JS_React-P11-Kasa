import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ErrorPage from './pages/Error'
import Apartments from './pages/Apartments'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'aPropos',
          element: <AboutUs />,
        },
        {
          path: 'logement/:id',
          element: <Apartments />,
        },
      ],
    },
  ],
  {
    basename: '/projets/11-kasa',
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
