import { registerSchema, registerTP } from '@/schemas/register/registerSchema'
import { FormFieldCustom } from '@/zenith-ui/components/Custom/form/form-field/FormFieldCustom'
import { Button } from '@/zenith-ui/components/ui/button'
import { Form } from '@/zenith-ui/components/ui/form'
import { Input } from '@/zenith-ui/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { jwtDecode } from 'jwt-decode'

import { useForm } from 'react-hook-form'

export const RegisterPage = (): JSX.Element => {
   const form = useForm<registerTP>({
      resolver: zodResolver(registerSchema)
   })
   console.log(1)
   function handleSubmit(formValues: registerTP): void {
      console.log(formValues)
   }
   const expiration = jwtDecode(
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyQ29kZSI6MjI0NTU0LCJ0eXBlIjoiVVNFUiIsImlhdCI6MTczMDA0NjkyNiwiZXhwIjoxNzMwMTMzMzI2LCJhdWQiOiJ1cm46YmVlcmFkcyJ9.F_EQgYnYkA0H69Lw02EiHAd32V8ziJUuXEEwzjzYeecMKirmrF-NrMXGMkmKCMwQZYK8Z0lqYlie0cBiKnNhKg'
   ).exp

   console.log(expiration)

   return (
      <div className="flex h-screen w-screen items-center justify-center bg-primary-foreground">
         <div className="flex flex-col justify-center rounded border bg-background p-4">
            <h1 className="mb-6 text-center text-lg font-semibold">Create account</h1>

            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="flex flex-col space-y-7"
               >
                  <div className="flex gap-2">
                     <FormFieldCustom
                        name="firstName"
                        placeholder=" First name"
                        label="First name"
                        formController={form.control}
                     >
                        <Input />
                     </FormFieldCustom>
                     <FormFieldCustom
                        name="lastName"
                        placeholder=" Last name"
                        label="Last name"
                        formController={form.control}
                     >
                        <Input />
                     </FormFieldCustom>
                  </div>
                  <FormFieldCustom
                     name="email"
                     placeholder="Email"
                     label="Email"
                     formController={form.control}
                  >
                     <Input />
                  </FormFieldCustom>
                  <FormFieldCustom
                     name="password"
                     placeholder="Password"
                     label="Password"
                     description="The password must be at least 8 characters long and include an uppercase letter and a special character."
                     formController={form.control}
                  >
                     <Input.Password />
                  </FormFieldCustom>
                  <FormFieldCustom
                     name="confirmPassword"
                     placeholder="Confirm password"
                     label="Confirm password"
                     formController={form.control}
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
            </Form>
            <div className="ml-1 flex items-center justify-center">
               <p className="text-sm font-thin">Are you already have and account?</p>
               <Button variant={'link'}>Log in</Button>
            </div>
         </div>
      </div>
   )
}
