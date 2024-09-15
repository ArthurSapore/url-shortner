import { Auth } from '@/pages/auth/Auth'
import { Home } from '@/pages/home/Home'
import { NotFound } from '@/pages/not_found/NotFound'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/auth',
      element: <Auth />
   },
   {
      path: '*',
      element: <NotFound />
   }
])
