import * as z from "zod";

export const registerSchema = z.object({
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

export type SchemaType = z.infer<typeof registerSchema>;

export const professions = [
  {
    name: "Profissionais de Saúde",
    value: "doctor",
    group: ["Médicos", "Dentistas", "Psicólogos"],
  },
  {
    name: "Salões de Beleza",
    value: "self-barber",
    group: ["Cabeleireiros", "Esteticistas"],
  },
  {
    name: "Profissionais de Fitness: ",
    value: "fitness",
    group: ["Personal trainers", "Instrutores de yoga"],
  },
  {
    name: "Contadores, assessores financeiros",
    value: "financial",
    group: ["Contadores", "Assessores financeiros"],
  },
  {
    name: "Serviços de Entrega:",
    value: "delivery",
    group: ["Entregadores autônomos", "Pequenos negócios de entrega"],
  },
  {
    name: "Profissionais de Educação:",
    value: "teacher",
    group: ["Professores particulares", "Tutores"],
  },
  {
    name: "Serviços de Manutenção: ",
    value: "management",
    group: ["Encanadores", "Eletricistas", "Técnicos de informática"],
  },
];
