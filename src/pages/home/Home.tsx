import { Avatar, AvatarFallback, AvatarImage } from '@/zenith-ui/components/ui/avatar'
import { Label } from '@/zenith-ui/components/ui/label'
import { HomeDropdownProfileOptions } from './components/home-dropdown-profile-options/HomeDropdownProfleOptions'
import { HomeNavigationMenu } from './components/home-navigation-menu/HomeNavigationMenu'
import { TableLinks } from './components/home-table-links/TableLinks'
import profilePhoto from '/public/pexels-olly-774909.jpg'

export const Home = (): JSX.Element => {
   return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-primary-foreground">
         <div className="absolute top-0 flex w-screen justify-evenly border-b py-4">
            <HomeNavigationMenu />
            <div className="flex items-center gap-2">
               <Avatar className="h-7 w-7">
                  <AvatarImage
                     src={profilePhoto}
                     className="object-cover object-center"
                  />
                  <AvatarFallback>FN</AvatarFallback>
               </Avatar>
               <Label className="text-sm">Alice Sapore</Label>
               <HomeDropdownProfileOptions />
            </div>
         </div>

         <div className="w-full max-w-[1440px] px-9">
            <TableLinks />
         </div>
      </div>
   )
}
