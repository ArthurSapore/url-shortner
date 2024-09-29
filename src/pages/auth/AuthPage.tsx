import {
   AuthResponseDTO,
   AuthSchemaTP,
   authSchema
} from '@/schemas/auth/authSchema'
import { AuthRequests } from '@/services/auth/AuthRequests'
import { useUserStore } from '@/store/UserStore'
import { FormFieldCustom } from '@/zenith-ui/components/Custom/form/form-field/FormFieldCustom'
import { Button } from '@/zenith-ui/components/ui/button'
import { Form } from '@/zenith-ui/components/ui/form'
import InputPassword, { Input } from '@/zenith-ui/components/ui/input'
import { useRequest } from '@/zenith-ui/services/hooks/useRequest'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import md5 from 'md5'
import { useForm } from 'react-hook-form'

export const AuthPage = (): JSX.Element => {
   const { setUser } = useUserStore()
   const { runRequest } = useRequest<AuthSchemaTP, AuthResponseDTO>()

   const form = useForm<AuthSchemaTP>({
      resolver: zodResolver(authSchema)
   })

   async function authRequest(data: AuthSchemaTP) {
      const jsonRequest = AuthRequests.login(data)
      return await runRequest({
         ...jsonRequest,
         headers: { ...jsonRequest.headers, schema: data.slug }
      })
   }

   function handleFormSubmit(data: AuthSchemaTP) {
      authRequestMutation.mutateAsync({ ...data, password: md5(data.password) })
   }

   const authRequestMutation = useMutation({
      mutationFn: (data: AuthSchemaTP) => authRequest(data),
      mutationKey: ['authRequest'],
      onSuccess(data) {
         if (data) setUser(data)
      }
   })

   return (
      <div className="flex items-center justify-center w-screen h-screen bg-primary-foreground">
         <div className=" border border-border p-10 rounded-md w-[23rem] space-y-2">
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(handleFormSubmit)}
                  className="space-y-8"
               >
                  <FormFieldCustom
                     formController={form.control}
                     label="Email"
                     name="email"
                     placeholder="Email"
                  >
                     <Input />
                  </FormFieldCustom>

                  <FormFieldCustom
                     formController={form.control}
                     label="Slug"
                     name="slug"
                     placeholder="Slug"
                     description="Your company slug"
                  >
                     <Input />
                  </FormFieldCustom>

                  <FormFieldCustom
                     formController={form.control}
                     label="Password"
                     name="password"
                     placeholder="Password"
                  >
                     <InputPassword />
                  </FormFieldCustom>

                  <Button
                     type="submit"
                     className="w-full"
                  >
                     Submit
                  </Button>
               </form>
               <div className="flex justify-center items-center">
                  <p className="text-xs">Don't have an account?</p>
                  <Button variant={'link'}>Register now</Button>
               </div>
            </Form>
         </div>
      </div>
   )
}
