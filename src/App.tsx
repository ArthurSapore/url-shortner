import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import './App.css'

import { router } from './routes/index'
import { Toaster } from './zenith-ui/components/ui/toaster'
import { ThemeProvider } from './zenith-ui/providers/theme/ThemeProvider'

const queryClient = new QueryClient()

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <ThemeProvider
            defaultTheme="dark"
            storageKey="vite-ui-theme"
         >
            <RouterProvider router={router} />
            <Toaster />
         </ThemeProvider>
      </QueryClientProvider>
   )
}

export default App
