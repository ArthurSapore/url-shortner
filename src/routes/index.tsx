import { AuthPage } from '@/pages/auth/AuthPage'
import { Home } from '@/pages/home/Home'
import { Lab } from '@/pages/lab/Lab'
import { NotFound } from '@/pages/not_found/NotFound'
import { RegisterPage } from '@/pages/register/RegisterPage'
import { createBrowserRouter } from 'react-router-dom'

export const Routes = {
   ROOT: '/',
   AUTH: '/auth',
   REGISTER: '/register',
   LAB: '/lab'
} as const

export const router = createBrowserRouter([
   {
      path: Routes.ROOT,
      element: <Home />
   },
   {
      path: Routes.AUTH,
      element: <AuthPage />
   },
   {
      path: Routes.REGISTER,
      element: <RegisterPage />
   },
   {
      path: Routes.LAB,
      element: <Lab />
   },
   {
      path: '*',
      element: <NotFound />
   }
])
