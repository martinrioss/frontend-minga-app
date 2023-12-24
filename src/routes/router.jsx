import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        index: true
      }
    ]
  }
])

export default router
