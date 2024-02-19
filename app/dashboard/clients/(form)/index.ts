import * as z from "zod";

export const clientSchema = z.object({
  name: z.string({
    required_error: "O campo nome é obrigatório",
  }),
  profession: z.string({
    required_error: "O campo profissão é obrigatório",
  }),
  phone: z.string({
    required_error: "O campo telefone é obrigatório",
  }),
  email: z
    .string({
      required_error: "O campo e-mail é obrigatório",
    })
    .email(),
  password: z.string({
    required_error: "O campo senha é obrigatório",
  }),
});

export type SchemaType = z.infer<typeof clientSchema>;
