import { Button } from '@/zenith-ui/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const NotFound = (): JSX.Element => {
   const navigate = useNavigate()
   return (
      <div className="w-screen h-screen flex justify-center items-center bg-primary-foreground">
         <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-8xl font-semibold">404</h1>
            <h3 className="text-5xl font-semibold">Page Not Found</h3>
            <h6 className="text-2xl font-normal">
               we’re sorry. the page you requested could no be found Please go
               back to the home page
            </h6>

            <Button onClick={() => navigate('/')}>Go back home</Button>
         </div>
      </div>
   )
}
