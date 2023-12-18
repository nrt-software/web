"use client";

import Link from "next/link";
import { AnimatedTabs } from "@/components/animated-tab";

interface NavbarProps {
  onPressTab: (id: string) => void;
}

export function Navbar({ onPressTab }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 h-20 w-full bg-black">
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
          <button className="inline-flex h-10 animate-background-shine items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Registar
          </button>
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
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
