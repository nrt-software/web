import { IPlans } from "@/components/home/config";
import { Button } from "@/components/home/moving-border";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

interface BillingCardsProps {
  plans: IPlans;
}

export function BillingCards({ plans }: BillingCardsProps) {
  const { price, title, content } = plans;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="flex flex-col p-8 relative items-center justify-between">
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <h3 className="text-2xl font-semibold text-center text-black-00">
          {title}
        </h3>
        <div className="mt-4 text-center text-zinc-800">
          <span className="text-2xl font-bold text-black-200">
            {formattedPrice}
          </span>
          / mês
        </div>
        <ul className="mt-4 space-y-2">
          {content.map((item) => (
            <li className="flex text-sm text-black-200" key={item.title}>
              <CheckIcon className="text-xs rounded-full mr-2 p-1" />
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Escolher plano
        </Button>
      </div>
    </Card>
  );
}
