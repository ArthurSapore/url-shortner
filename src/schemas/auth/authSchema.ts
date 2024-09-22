import { z } from "zod";

export const authSchema = z.object({ 
    email: z.string().email(),
    password: z.string().refine((val)=> passwordValidation(val),{
        message: 'Password must be at least 8 characters long, contain 1 uppercase letter, and 1 special character'
    }),
    slug: z.string()
})
 
export type AuthSchemaTP = z.infer<typeof authSchema>

const passwordValidation = (val: string) => {
    const hasUpperCase = /[A-Z]/.test(val); // Verifica se há pelo menos uma letra maiúscula
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(val); // Verifica se há pelo menos um caractere especial
    const hasMinLength = val.length >= 8; // Verifica se a senha tem pelo menos 8 caracteres
    return hasUpperCase && hasSpecialChar && hasMinLength;
}