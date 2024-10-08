import { BillingCards } from "@/components/home/pricing/billing-cards";
import { plans } from "@/components/home/pricing/config";

export function BillingPlans() {
  return (
    <div className="w-full m-auto flex flex-col justify-center items-center">
      <h1 className="mb-4 text-center text-5xl font-bold tracking-tight text-foreground w-[90%]">
        Encontre seu plano para seu negócio
      </h1>
      <h2 className="mb-8 text-center text-lg font-medium tracking-tight text-foreground/80 w-[60%]">
        Obtenha acesso mensal a todas as funcionalidades descritas e alem de
        quaisquer novos que adicionaremos no futuro, por um preço mensal e
        simples.
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8 p-4">
        {plans.map((plan) => (
          <BillingCards key={`${plan.title}`} plans={plan} />
        ))}
      </div>
    </div>
  );
}
