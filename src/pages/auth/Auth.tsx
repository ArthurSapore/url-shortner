import { AuthSchemaTP, authSchema } from '@/schemas/auth/authSchema'
import { useAuthRequest } from '@/services/auth/useAuthRequest'
import { FormFieldCustom } from '@/zenith-ui/components/Custom/FormField/FormFieldCustom'
import { Button } from '@/zenith-ui/components/ui/button'
import { Form } from '@/zenith-ui/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export const Auth = (): JSX.Element => {
   const { getUser } = useAuthRequest()

   const form = useForm<AuthSchemaTP>({
      resolver: zodResolver(authSchema),
      defaultValues: {
         email: ''
      }
   })

   // 2. Define a submit handler.
   function onSubmit(data: AuthSchemaTP) {
      const authDto = {
         email: data.email,
         password: data.password
      }
   }

   const { data, isLoading, isError } = useQuery({
      queryKey: ['authRequest'],
      queryFn: () => getUser('1')
   })

   if (isError) {
      console.log(isError)
   }

   return (
      <div className="flex items-center justify-center w-screen h-screen bg-primary-foreground">
         <div className=" border border-border p-10 rounded-md w-[23rem] space-y-2">
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
               >
                  <FormFieldCustom
                     formController={form.control}
                     label="Email"
                     name="email"
                     placeholder="Email"
                  />

                  <FormFieldCustom
                     formController={form.control}
                     label="Slug"
                     name="slug"
                     placeholder="Slug"
                     description="Your company slug"
                  />

                  <FormFieldCustom
                     formController={form.control}
                     label="Password"
                     name="password"
                     placeholder="Password"
                  />
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
