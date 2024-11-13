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

const router = createBrowserRouter([
  {
    path: '/tabletek',
    element: <Tabletek/>
  },
  {
    path: '/tabletadd',
    element: <TabletAdd/>
  },
  {
    path: '/tabletdel',
    element: <TabletDel/>
  }

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
