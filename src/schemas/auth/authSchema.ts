import { z } from "zod"

export const authSchema = z.object({ 
    email: z.string().email(),
    password: z.string().min(8, {
        message: 'Password must be at least 28 characters'
    }),
    slug: z.string()
})
 
export type AuthSchemaTP = z.infer<typeof authSchema>

export type AuthDTO = AuthSchemaTP & {
    age: number
}