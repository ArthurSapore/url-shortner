import { z } from "zod";

export const registerSchema = z.object({
    firstName: z.string().min(4, { message: 'Name must be at least 4 characters' }),
    lastName: z.string().min(4, { message: 'Name must be at least 4 characters' }),
    email: z.string().email(),
    password: z.string().refine((value) => passwordValidation(value), { message: 'Invalid password' }),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // O erro aparecerá no campo confirmPassword
  });
  

export type registerTP = z.infer<typeof registerSchema>

const passwordValidation = (val: string) => {
    const hasUpperCase = /[A-Z]/.test(val); // Verifica se há pelo menos uma letra maiúscula
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(val); // Verifica se há pelo menos um caractere especial
    const hasMinLength = val.length >= 8; // Verifica se a senha tem pelo menos 8 caracteres
    return hasUpperCase && hasSpecialChar && hasMinLength;
}
