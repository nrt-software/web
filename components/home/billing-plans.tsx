import { BillingCards } from "@/components/home/billing-cards";
import { plans } from "@/components/home/config";

export function BillingPlans() {
  return (
    <div className="w-full m-auto flex flex-col justify-center items-center">
      <h1 className="text-6xl text-center text-white w-[70%]">
        Find a plan to power your business
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
        {plans.map((plan) => (
          <BillingCards
            key={`${plan.title}`}
            plans={{
              title: plan.title,
              content: plan.content,
              price: plan.price,
            }}
          />
        ))}
      </div>
    </div>
  );
}
