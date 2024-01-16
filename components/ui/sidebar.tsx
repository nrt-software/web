"use client";

import {
  PhoneForwardedIcon,
  User,
  Briefcase,
  CircleDollarSign,
  Clock3,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faker } from "@faker-js/faker";

const DEFAULT_ITEMS = [
  {
    id: faker.string.uuid(),
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
    id: faker.string.uuid(),
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
    id: faker.string.uuid(),
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
    id: faker.string.uuid(),
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
  const pathname = usePathname();

  return (
    <aside className="pb-12 min-h-screen lg:w-96 mt-4 border-r">
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
                  asChild
                >
                  <Link
                    href={sub.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      pathname === sub.href
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                      "justify-start"
                    )}
                  >
                    {sub.icon}
                    {sub.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
