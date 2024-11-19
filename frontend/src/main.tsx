import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tabletek from './components/tabletek'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TabletAdd from './components/tabletAdd'
import Header from './components/header'
import TabletDel from './components/tabletDel'
import Kezdooldal from './components/Kezdooldal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Kezdooldal />
  },
  {
    path: '/kezdooldal',
    element: <Kezdooldal />
   },
  {
    path: '/tabletek',
    element: <Tabletek />
  },
  {
    path: '/tabletadd',
    element: <TabletAdd />
  },
  {
    path: '/tabletdel',
    element: <TabletDel />
  }

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
