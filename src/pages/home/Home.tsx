import { ModeToggle } from '@/zenith-ui/components/Custom/ModeToogle'
import { TableLinks } from './components/table-links/TableLinks'

export const Home = (): JSX.Element => {
   return (
      <div className=" h-screen w-screen bg-primary-foreground flex justify-center items-center flex-col">
         <ModeToggle />
         {/* <Badge
            variant={'default'}
            className="bg-red-400"
         >
            Time A - vxMedical
         </Badge>
         <ToastDemo /> */}

         {/* <DataTableDemo /> */}
         <TableLinks />
      </div>
   )
}
