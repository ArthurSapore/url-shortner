import {
   createRandomShortnedUrlResponseData,
   shortnedURLdataTP
} from '@/helpers/FakerShortnedURLResponse'
import { BaseURL } from '@/services'
import { LinksRequests } from '@/services/links/LinksRequests'
import { useUserStore } from '@/store/UserStore'
import { TableProvider } from '@/zenith-ui/components/Custom/Table/context/TableContext'
import { TableBodyCustom } from '@/zenith-ui/components/Custom/Table/table-body/TableBodyCustom'
import { TableHeaderCustom } from '@/zenith-ui/components/Custom/Table/table-header/TableHeaderCustom'
import { Table } from '@/zenith-ui/components/ui/table'
import { useRequest } from '@/zenith-ui/services/hooks/useRequest'
import { useQuery } from '@tanstack/react-query'
import {
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   useReactTable
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { TableLinkColumnHelper } from './helper/TableLinkColumnHelper'

export const TableLinks = (): JSX.Element => {
   const [links, setLinks] = useState<shortnedURLdataTP[]>([])
   const { runRequest } = useRequest<void, shortnedURLdataTP>()
   const { user } = useUserStore()
   console.log(user?.accessToken)

   const token =
      ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoxLCJ1c2VybmFtZSI6ImFydGh1cnNhcG9yZSIsImVtYWlsIjoiYXJ0aHVyc2Fwb3JlMTdAZ21haWwuY29tIiwiaWF0IjoxNzI5MDM2OTM5fQ.7Y0r0Nebua78406zyR0-f2uneXa9XJgxTTHToFHKcsY'

   useEffect(() => {
      setLinks(createRandomShortnedUrlResponseData())
   }, [])

   const columns = TableLinkColumnHelper()

   const table = useReactTable({
      columns,
      data: links,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel()
   })

   function getSearchLinksRequest() {
      const requestConfig = LinksRequests.search()

      runRequest({
         ...requestConfig,
         headers: {
            ...requestConfig.headers,
            schema: 'pontofrio',
            Authorization: `Bearer ${token}`
         }
      })
   }

   const { data } = useQuery({
      queryKey: [
         `${BaseURL.API}/${LinksRequests.CONTROLLER_ROOT}/${LinksRequests.LOGIN_EP}`
      ],
      queryFn: getSearchLinksRequest
   })

   if (data) {
      setLinks(data)
   }

   return (
      <TableProvider table={table}>
         <Table className="w-full">
            <TableHeaderCustom />
            <TableBodyCustom />
         </Table>
      </TableProvider>
   )
}
