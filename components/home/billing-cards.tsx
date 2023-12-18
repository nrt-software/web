import { IPlans } from "@/components/home/config";
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
    <div className="flex flex-col p-8 dark:bg-zinc-850 relative items-center justify-between  overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-black to-slate-950 px-8  shadow-2xl">
      <div>
        <h3 className="text-2xl font-bold text-center text-slate-200">
          {title}
        </h3>
        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-2xl font-bold text-slate-200">
            {formattedPrice}
          </span>
          / mês
        </div>
        <ul className="mt-4 space-y-2">
          {content.map((item) => (
            <li className="flex text-sm text-slate-200" key={item.title}>
              <CheckIcon className="text-xs rounded-full mr-2 p-1" />
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className="inline-flex h-12 animate-background-shine items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Assinar
        </button>
      </div>
    </div>
  );
}
