"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/changeTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const NavDashboard = () => {
  return (
    <div className="w-full flex justify-between items-center p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative flex items-center h-8 rounded-full cursor-pointer">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/37451939"
                alt="@lucasaraujonrt"
              />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <h4 className="text-md pl-2 font-semibold tracking-tight">
              Lucas Araujo
            </h4>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ml-2 mt-2" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">lucasnrt</p>
              <p className="text-xs leading-none text-muted-foreground">
                lucas@nrtsoftware.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        className="text-xl flex font-semibold tracking-tight hover:underline-offset-0"
        asChild
        variant="link"
      >
        <Link
          href="/dashboard"
          className="text-black dark:text-white hover:underline-offset-0"
        >
          Dashboard
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
};
