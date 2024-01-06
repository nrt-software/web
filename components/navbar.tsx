"use client";

import Link from "next/link";
import { AnimatedTabs } from "@/components/animated-tab";
import { Button } from "@/components/home/moving-border";

interface NavbarProps {
  onPressTab: (id: string) => void;
}

export function Navbar({ onPressTab }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-30 h-20 w-full bg-white">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 lg:w-[70%] w-full m-auto">
        <div className="flex justify-center lg:justify-start w-1/2">
          <Link className="mr-2 lg:flex" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <div className="flex w-full justify-center px-12 lg:px-24">
          <AnimatedTabs onPressTab={onPressTab} />
        </div>
        <div className="flex justify-center lg:justify-end w-1/2">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
