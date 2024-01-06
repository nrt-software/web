export interface IPlans {
  title: string;
  price: number;
  description: string;
  content: {
    title: string;
    description: string;
  }[];
}

export const plans: IPlans[] = [
  {
    title: "Básico",
    price: 25,
    description:
      "Focados para pequenos empreendedores autonomos, com custo baixo e grandes beneficios",
    content: [
      {
        title: "Atendimento Direto",
        description:
          "Respostas rápidas e eficientes via WhatsApp para melhorar a comunicação com os clientes.",
      },
      {
        title: "Gerenciamento Simples",
        description:
          "Foco exclusivo no WhatsApp para facilitar a organização das conversas e consultas.",
      },
      {
        title: "Economia de Tempo",
        description:
          "Redução do tempo gasto em atendimentos presenciais, agilizando o processo de comunicação.",
      },
      {
        title: "Acesso ao Aplicativo",
        description:
          "Visualização e agendamento de compromissos via aplicativo, possibilitando agendamentos manuais e personalização de horários disponíveis.",
      },
    ],
  },
  {
    title: "Intermediário",
    price: 50,
    description:
      "Focado para empresas de médio porte, que precisam investir em diversos canais de comunicação",
    content: [
      {
        title: "Ampla Cobertura",
        description:
          "Oferece suporte tanto no WhatsApp quanto no Instagram, atingindo um público mais diversificado.",
      },
      {
        title: "Maior Alcance",
        description:
          "Acesso a diferentes audiências e oportunidades de engajamento por meio de ambas as plataformas.",
      },
      {
        title: "Gestão Multicanal",
        description:
          "Facilidade na administração de mensagens em múltiplas plataformas para um atendimento mais abrangente.",
      },
      {
        title: "Acesso ao Aplicativo",
        description:
          "Possibilidade de visualizar agendamentos, realizar agendamentos manuais e personalizar horários e serviços disponíveis, ampliando a flexibilidade de gerenciamento.",
      },
    ],
  },
  {
    title: "Pro",
    price: 99,
    description:
      "Contendo tudo do plano intermediario e adicionando o beneficio de campanha de marketing digital",
    content: [
      {
        title: "Tudo do plano Intermediário",
        description: "Toda facilidade do segundo plano",
      },
      {
        title: "Envio de Cupons e Promoções",
        description:
          "Capacidade de enviar ofertas especiais, cupons e promoções de forma cíclica para os clientes, visando aumentar o engajamento e fidelização.",
      },
      {
        title: "Customização Avançada",
        description:
          "Recursos avançados de personalização para atender demandas específicas do seu negócio e dos clientes.",
      },
    ],
  },
];
