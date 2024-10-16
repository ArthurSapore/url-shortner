import {
   shortnedURLdataTP,
   StatusLinksEnum,
   StatusLinksLabelEnum
} from '@/helpers/FakerShortnedURLResponse'
import { Badge } from '@/zenith-ui/components/ui/badge'
import { ColumnDef } from '@tanstack/react-table'
import { formatDistanceToNow } from 'date-fns'

export function TableLinkColumnHelper() {
   const columns: ColumnDef<shortnedURLdataTP>[] = [
      {
         accessorKey: 'shortnedURL',
         header: () => <> Shortned URL</>,
         cell: ({ row }) => (
            <div>
               <p>{row.getValue('shortnedURL')}</p>
            </div>
         ),
         enableSorting: false,
         enableHiding: false
      },
      {
         accessorKey: 'amountOfClicks',
         header: () => <>Amount of clicks</>,
         cell: ({ row }) => (
            <div>
               <p>{`${row.getValue('amountOfClicks')} clicks`}</p>
            </div>
         ),
         enableSorting: true,
         enableHiding: true
      },
      {
         accessorKey: 'creationDate',
         header: () => <>Creation date</>,
         cell: ({ row }) => (
            <div>
               <p>{`${formatDistanceToNow(
                  row.getValue('creationDate')
               )} ago`}</p>
            </div>
         ),
         enableSorting: true,
         enableHiding: true
      },
      {
         accessorKey: 'status',
         header: () => <>Status</>,
         cell: ({ row }) => {
            const value = row.getValue('status') as StatusLinksEnum

            return (
               <div>
                  <Badge
                     variant={
                        value === StatusLinksEnum.DISABLED
                           ? 'outline'
                           : 'default'
                     }
                     className={`${
                        value === StatusLinksEnum.ACTIVE &&
                        'bg-success hover:bg-success/80'
                     }`}
                  >
                     {StatusLinksLabelEnum[value]}
                  </Badge>
               </div>
            )
         },
         enableSorting: true,
         enableHiding: true
      }
   ]

   return columns
}
