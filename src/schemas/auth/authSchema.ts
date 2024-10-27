import { z } from "zod";

export const authSchema = z.object({ 
    email: z.string().email(),
    password: z.string(),
    slug: z.string()
})
 
export type AuthSchemaTP = z.infer<typeof authSchema>

export type AuthResponseDTO = {
    name: string
    email: string
    accessToken: string
}
