import { AuthSchemaTP, authSchema } from '@/schemas/auth/authSchema'
import { AuthRequests } from '@/services/auth/AuthRequests'
import { FormFieldCustom } from '@/zenith-ui/components/Custom/FormField/FormFieldCustom'
import { Button } from '@/zenith-ui/components/ui/button'
import { Form } from '@/zenith-ui/components/ui/form'
import InputPassword, { Input } from '@/zenith-ui/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import md5 from 'md5'
import { useForm } from 'react-hook-form'

export const AuthPage = (): JSX.Element => {
   const form = useForm<AuthSchemaTP>({
      resolver: zodResolver(authSchema)
   })

   // Função que realiza a requisição de autenticação
   async function authRequest(data: AuthSchemaTP) {
      try {
         const response = axios(AuthRequests.login(data, data.slug))
         return (await response).data
      } catch (e) {
         console.log(e)
      }
   }

   function handleFormSubmit(data: AuthSchemaTP) {
      authRequest({ ...data, password: md5(data.password) })
   }

   const { error } = useQuery({
      queryKey: ['teste'],
      queryFn: () => authRequest
   })

   if (error) console.log('Erro')

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

                  {/* 
                  <FormFieldCustom
                     formController={form.control}
                     label="Slug"
                     name="slug"
                     placeholder="Slug"
                     description="Your company slug"
                     Component={<Input />}
                  /> */}

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
