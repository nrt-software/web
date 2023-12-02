"use client";

import { Sidebar } from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/changeTheme";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { useRouter } from "next/navigation";
import { CommandMenu } from "@/components/command-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/37451939"
        alt="@lucasaraujonrt"
      />
      <AvatarFallback>Lucas</AvatarFallback>
    </Avatar>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full flex justify-between items-end p-4">
        <h4 className="scroll-m-20 text-xl pl-2 font-semibold tracking-tight">
          Lucas Araujo
        </h4>
        <Button
          className="text-xl font-semibold tracking-tight"
          asChild
          variant="link"
        >
          <Link href="/dashboard" className="text-black dark:text-white">
            Dashboard
          </Link>
        </Button>
        <ModeToggle />
      </div>
      <div className="border-t">
        <div className="bg-background">
          <div className="flex bg-background">
            <Sidebar />
            <div className="flex w-full mt-10 ml-10 pr-4">{children}</div>
          </div>
        </div>
      </div>
      <CommandMenu />
    </Suspense>
  );
}
