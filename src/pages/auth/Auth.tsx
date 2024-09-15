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
                  description={'Teste'}
               />

               <FormFieldCustom
                  formController={form.control}
                  label="Password"
                  name="password"
                  placeholder="Password"
               />
               <Button type="submit">Submit</Button>
            </form>
         </Form>
      </div>
   )
}
