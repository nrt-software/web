"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/changeTheme";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];

  return (
    <main className="flex min-h-screen justify-center align-center">
      <div className="p-8">
        <ModeToggle />
      </div>
      <div className="p-8 flex row-auto">
        {routes.map((route) => (
          <Button
            className="mr-10"
            key={route.name}
            onClick={() => router.push(route.path)}
          >
            {route.name}
          </Button>
        ))}
      </div>
    </main>
  );
}
