import { Button } from '@/zenith-ui/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const NotFound = (): JSX.Element => {
   const navigate = useNavigate()
   return (
      <div className="w-screen h-screen flex justify-center items-center bg-404_Not_Found">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
         >
            <path
               d="M14.5292 28.9884C6.53079 29.0013 0.0362763 22.5278 0.0233377 14.5293C0.010399 6.53088 6.48393 0.0363661 14.4824 0.0234275C22.4808 0.0104888 28.9753 6.48402 28.9883 14.4825C29.0012 22.4809 22.5277 28.9754 14.5292 28.9884ZM14.4878 3.37599C8.34092 3.38593 3.36596 8.37702 3.3759 14.5239C3.38584 20.6708 8.37693 25.6457 14.5238 25.6358C20.6707 25.6259 25.6457 20.6348 25.6357 14.4879C25.6258 8.34101 20.6347 3.36605 14.4878 3.37599Z"
               fill="black"
            />
         </svg>
         <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
         >
            <rect
               x="3.49023"
               y="1.30396"
               width="23.1358"
               height="5.33999"
               rx="2.67"
               transform="rotate(40.8151 3.49023 1.30396)"
               fill="black"
            />
            <rect
               x="18.3542"
               y="2.6839"
               width="24.1196"
               height="5.33966"
               rx="2.66983"
               transform="rotate(120.174 18.3542 2.6839)"
               fill="black"
            />
         </svg>
         <svg
            className="w-17 h-17"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
         >
            <rect
               x="3.49023"
               y="1.30396"
               width="23.1358"
               height="5.33999"
               rx="2.67"
               transform="rotate(40.8151 3.49023 1.30396)"
               fill="black"
            />
            <rect
               x="18.3542"
               y="2.6839"
               width="24.1196"
               height="5.33966"
               rx="2.66983"
               transform="rotate(120.174 18.3542 2.6839)"
               fill="black"
            />
         </svg>

         <svg
            className="w-10 h-12"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
         >
            <rect
               x="3.49023"
               y="1.30396"
               width="23.1358"
               height="5.33999"
               rx="2.67"
               transform="rotate(40.8151 3.49023 1.30396)"
               fill="black"
            />
            <rect
               x="18.3542"
               y="2.6839"
               width="24.1196"
               height="5.33966"
               rx="2.66983"
               transform="rotate(120.174 18.3542 2.6839)"
               fill="black"
            />
         </svg>

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
