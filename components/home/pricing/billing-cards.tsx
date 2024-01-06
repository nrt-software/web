import { IPlans } from "@/components/home/pricing/config";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface BillingCardsProps {
  plans: IPlans;
}

export function BillingCards({ plans }: BillingCardsProps) {
  const { price, title, content, description } = plans;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const isLastPlan = title === "Pro";

  return (
    <Card className="bg-white/60 sm:mx-8 lg:mx-0 rounded-3xl px-6 py-8 ring-1 ring-gray-900/10  border border-transparent h-full flex flex-col justify-between">
      <div>
        <h3 className="text-primary text-xl font-semibold leading-7">
          {title}
        </h3>
        <p className="mt-4 gap-x-2">
          <span className=" text-gray-400 text-sm block h-6">
            cancele a qualquer momento
          </span>
          <span className="text-gray-900 text-4xl font-bold tracking-tight">
            {formattedPrice}
            <span className="text-sm">/ mês</span>
          </span>
        </p>
        <p className="text-gray-600 mt-6 text-sm leading-7">{description}</p>
        <ul className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10">
          {content.map((item) => (
            <li key={item.description} className="flex gap-x-3">
              <CheckCircle2 className="text-emerald-600 h-6 w-5 flex-none" />
              <div className="flex flex-col">
                <span className="font-semibold">{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={
            (cn("flex items-center justify-center mt-8"),
            isLastPlan ? "lg:mt-16 sm:mt-7" : "mt-7")
          }
        >
          <Button
            className="w-full text-primary border-primary"
            variant="outline"
          >
            Assine agora
          </Button>
        </div>
      </div>
    </Card>
  );
}
