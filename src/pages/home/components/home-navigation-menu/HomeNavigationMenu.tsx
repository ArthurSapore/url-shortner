import { NavigationMenuListItem } from '@/zenith-ui/components/Custom/navigation-menu/NavigationMenuListItem'
import { Button } from '@/zenith-ui/components/ui/button'
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuList,
   NavigationMenuTrigger
} from '@/zenith-ui/components/ui/navigation-menu'

export const HomeNavigationMenu = () => {
   return (
      <NavigationMenu>
         <NavigationMenuList>
            <NavigationMenuItem>
               <Button variant={'ghost'}>Home</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Button variant={'ghost'}>Domains</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Button variant={'ghost'}>Dashboards</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                     <NavigationMenuListItem
                        title="Docs"
                        href="/"
                     >
                        Learn how to integrate in your system
                     </NavigationMenuListItem>
                     <NavigationMenuListItem title="API Keys">
                        Manage your API Keys
                     </NavigationMenuListItem>
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Button variant={'ghost'}>Pricing</Button>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   )
}
