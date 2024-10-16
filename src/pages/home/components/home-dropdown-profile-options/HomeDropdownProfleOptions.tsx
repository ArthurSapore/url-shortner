import { Routes } from '@/routes'
import { useUserStore } from '@/store/UserStore'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuPortal,
   DropdownMenuSeparator,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger
} from '@/zenith-ui/components/ui/dropdown-menu'
import { useTheme } from '@/zenith-ui/providers/theme/ThemeProvider'
import {
   ChevronDownIcon,
   CreditCard,
   LogOut,
   MonitorCog,
   Moon,
   Settings,
   Sun,
   SunMoon,
   User
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const HomeDropdownProfileOptions = () => {
   const { setTheme } = useTheme()
   const { clearUser } = useUserStore()
   const navigate = useNavigate()

   function handleLogOut(): void {
      clearUser()
      navigate(Routes.AUTH)
   }

   return (
      <DropdownMenu>
         <DropdownMenuTrigger>
            <ChevronDownIcon
               className="cursor-pointer"
               size={16}
            />
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuGroup>
               <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
               </DropdownMenuItem>
               <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
               </DropdownMenuItem>
               <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                     <SunMoon className="mr-2 h-4 w-4" />
                     <span>Theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                     <DropdownMenuSubContent>
                        <DropdownMenuItem onClick={() => setTheme('light')}>
                           <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                           <span>Light</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('dark')}>
                           <Moon className="mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                           <span>Dark</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('system')}>
                           <MonitorCog className="mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-0" />
                           <span>System</span>
                        </DropdownMenuItem>
                     </DropdownMenuSubContent>
                  </DropdownMenuPortal>
               </DropdownMenuSub>
               <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
               </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem onClick={handleLogOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
               </DropdownMenuItem>
            </DropdownMenuGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
