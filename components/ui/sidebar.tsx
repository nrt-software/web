import {
  PhoneForwardedIcon,
  User,
  Briefcase,
  CircleDollarSign,
  Clock3,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DEFAULT_ITEMS = [
  {
    id: 1,
    title: "Payments",
    items: [
      {
        label: "Payments",
        href: "/dashboard/payments",
        icon: <CircleDollarSign className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    id: 2,
    title: "Clients",
    items: [
      {
        label: "Clients report",
        href: "/dashboard/clients",
        icon: <User className="mr-2 h-4 w-4" />,
      },
      {
        label: "Customer",
        href: "/dashboard/customer",
        icon: <PhoneForwardedIcon className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    items: [
      {
        label: "Services",
        href: "/dashboard/services",
        icon: <Briefcase className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    id: 3,
    title: "Schedule",
    items: [
      {
        label: "Schedule",
        href: "/dashboard/schedule",
        icon: <Clock3 className="mr-2 h-4 w-4" />,
      },
    ],
  },
];

export function Sidebar() {
  const route = useRouter();

  return (
    <div className={cn("pb-12 ", ["min-h-screen lg:w-96 mt-4 border-r"])}>
      <div className="space-y-4 py-4">
        {DEFAULT_ITEMS.map((item) => (
          <div className="px-4 py-2" key={item.id}>
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              {item.title}
            </h2>
            <div className="space-y-1">
              {item.items.map((sub) => (
                <Button
                  key={sub.href}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => route.push(sub.href)}
                >
                  {sub.icon}
                  {sub.label}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
