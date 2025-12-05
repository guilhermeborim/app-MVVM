import { z } from "zod";

export const loginScheme = z.object({
  email: z.email({ error: "E-mail inválido" }),
  password: z
    .string({ error: "Senha é obrigatória" })
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginScheme>;
