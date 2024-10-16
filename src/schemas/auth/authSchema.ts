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

// const passwordValidation = (val: string) => {
//     const hasUpperCase = /[A-Z]/.test(val); // Verifica se há pelo menos uma letra maiúscula
//     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(val); // Verifica se há pelo menos um caractere especial
//     const hasMinLength = val.length >= 8; // Verifica se a senha tem pelo menos 8 caracteres
//     return hasUpperCase && hasSpecialChar && hasMinLength;
// }