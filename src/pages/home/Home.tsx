import {
   DropdownMenuCustom,
   menuItems
} from '@/zenith-ui/components/Custom/dropdown/DropdownCustom'
import { data, MenuDemo } from '@/zenith-ui/components/Custom/menu/MenuDemo'
import { ModeToggle } from '@/zenith-ui/components/Custom/ModeToogle'
import {
   Avatar,
   AvatarFallback,
   AvatarImage
} from '@/zenith-ui/components/ui/avatar'
import { Label } from '@/zenith-ui/components/ui/label'
import { ChevronDownIcon } from 'lucide-react'
import { TableLinks } from './components/table-links/TableLinks'
import profilePhoto from '/public/pexels-olly-774909.jpg'

export const Home = (): JSX.Element => {
   return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-primary-foreground">
         <ModeToggle />
         <div className="flex w-screen justify-evenly border-b py-4">
            <MenuDemo items={data} />
            <div className="flex items-center gap-2">
               <Avatar>
                  <AvatarImage
                     src={profilePhoto}
                     className="object-cover object-center"
                  />
                  <AvatarFallback>FN</AvatarFallback>
               </Avatar>
               <Label>Alice Sapore</Label>
               <DropdownMenuCustom items={menuItems}>
                  <ChevronDownIcon
                     className="cursor-pointer"
                     size={15}
                  />
               </DropdownMenuCustom>
            </div>
         </div>

         {/* 
         <Menubar>
            <MenubarMenu>
               <MenubarTrigger>File</MenubarTrigger>
               <MenubarContent>
                  <MenubarItem>
                     New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
               </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
               <MenubarTrigger>File</MenubarTrigger>
               <MenubarContent>
                  <MenubarItem>
                     New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
               </MenubarContent>
            </MenubarMenu>
         </Menubar> */}

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
