"use client";

import { AnimatedTabs } from "@/components/animated-tab";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const RegisterNavbar = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-30 h-20 w-full bg-white">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 lg:w-[70%] w-full m-auto">
        <div className="flex justify-center lg:justify-start w-1/2">
          <Link className="mr-2 lg:flex" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <div className="flex w-full justify-center px-12 lg:px-24">
          <AnimatedTabs onPressTab={router.back} />
        </div>
        <div className="flex justify-center lg:justify-end w-1/2"></div>
      </div>
    </nav>
  );
};
