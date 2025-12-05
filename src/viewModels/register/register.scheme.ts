import { z } from "zod";

export const registerScheme = z
  .object({
    name: z
      .string({ error: "Nome é obrigatório" })
      .min(4, "Nome deve ter pelo menos 4 caracteres"),
    email: z.email({ error: "E-mail inválido" }),
    phone: z
      .string({ error: "Telefone é obrigatório" })
      .regex(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)"),
    password: z
      .string({ error: "Senha é obrigatória" })
      .min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string({ error: "Senha é obrigatória" }).min(6),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Senhas não coincidem",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerScheme>;
