import { Routes } from '@/routes'
import { AuthResponseDTO, AuthSchemaTP, authSchema } from '@/schemas/auth/authSchema'
import { BaseURL } from '@/services'
import { AuthRequests } from '@/services/auth/AuthRequests'
import { BaseAPIResponseDTO } from '@/services/BaseAPIResponseDTO'
import { useUserStore } from '@/store/UserStore'
import { FormFieldCustom } from '@/zenith-ui/components/Custom/form/form-field/FormFieldCustom'
import { Button } from '@/zenith-ui/components/ui/button'
import { Form } from '@/zenith-ui/components/ui/form'
import { Input } from '@/zenith-ui/components/ui/input'
import { useRequest } from '@/zenith-ui/services/hooks/useRequest'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import md5 from 'md5'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const AuthPage = (): JSX.Element => {
   const { setUser } = useUserStore()
   const { runRequest } = useRequest<AuthSchemaTP, BaseAPIResponseDTO<AuthResponseDTO>>()
   const navigate = useNavigate()

   const form = useForm<AuthSchemaTP>({
      resolver: zodResolver(authSchema)
   })

   async function authRequest(data: AuthSchemaTP) {
      const requestConfig = AuthRequests.login(data)
      return await runRequest({
         ...requestConfig,
         headers: { ...requestConfig.headers, schema: data.slug }
      })
   }

   function handleFormSubmit(data: AuthSchemaTP): void {
      authRequestMutation.mutateAsync({ ...data, password: md5(data.password) })
   }

   const authRequestMutation = useMutation({
      mutationFn: (data: AuthSchemaTP) => authRequest(data),
      mutationKey: [
         `${BaseURL.API}/${AuthRequests.CONTROLLER_ROOT}/${AuthRequests.LOGIN_EP}`
      ],
      onSuccess(data) {
         if (data) {
            setUser(data.data)
            navigate(Routes.ROOT)
         }
      }
   })

   return (
      <div className="flex h-screen w-screen items-center justify-center bg-primary-foreground">
         <div className="w-[23rem] space-y-2 rounded-md border border-border p-10">
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
                     <Input.Password />
                  </FormFieldCustom>

                  <Button
                     type="submit"
                     className="w-full"
                  >
                     Submit
                  </Button>
               </form>
               <div className="flex items-center justify-center">
                  <p className="text-xs">Don't have an account?</p>
                  <Button variant={'link'}>Register now</Button>
               </div>
            </Form>
         </div>
      </div>
   )
}
