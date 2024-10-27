import { AuthPage } from '@/pages/auth/AuthPage'
import { Home } from '@/pages/home/Home'
import { NotFound } from '@/pages/not_found/NotFound'
import { RegisterPage } from '@/pages/register/RegisterPage'
import { createBrowserRouter } from 'react-router-dom'

export class Routes {
   public static ROOT = '/'
   public static AUTH = '/auth'
   public static REGISTER = '/register'
}

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
      path: '*',
      element: <NotFound />
   }
])
