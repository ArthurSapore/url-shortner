import { createRandomShortnedUrlResponseData } from '@/helpers/FakerShortnedURLResponse'
import { TableProvider } from '@/zenith-ui/components/Custom/Table/context/TableContext'
import { TableBodyCustom } from '@/zenith-ui/components/Custom/Table/table-body/TableBodyCustom'
import { TableHeaderCustom } from '@/zenith-ui/components/Custom/Table/table-header/TableHeaderCustom'
import { Table } from '@/zenith-ui/components/ui/table'
import {
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   useReactTable
} from '@tanstack/react-table'
import { TableLinkColumnHelper } from './helper/TableLinkColumnHelper'

export const TableLinks = (): JSX.Element => {
   const data = createRandomShortnedUrlResponseData()
   const columns = TableLinkColumnHelper()

   const table = useReactTable({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel()
   })

   return (
      <TableProvider table={table}>
         <Table>
            <TableHeaderCustom />
            <TableBodyCustom />
         </Table>
      </TableProvider>
   )
}
