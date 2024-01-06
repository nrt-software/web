import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Calendar,
  Clipboard,
  Cog,
  File,
  FileSignature,
  MailCheck,
  Phone,
  Table,
} from "lucide-react";

const items = [
  {
    title: "Agendamento Automatizado",
    description: "Aproveite a conveniência de agendamentos automáticos.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-2",
    icon: <Calendar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Agendamento via Whatsapp",
    description: "Agende facilmente via Whatsapp com IA.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-1",
    icon: <Phone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Serviços em Destaque",
    description: "Veja facilmente todos os serviços disponíveis.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-1",
    icon: <Cog className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Comunicação Efetiva",
    description: "Entenda o impacto da comunicação eficaz em nossas vidas.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-2",
    icon: <MailCheck className="h-4 w-4 text-neutral-500" />,
  },
];

export function Grid() {
  return (
    <Card className="p-4">
      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </Card>
  );
}
