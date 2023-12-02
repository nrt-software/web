"use client";

import { Button } from "@/components/ui/button";
import { ButtonShootingStarBorder } from "@/components/button-star-border";
import CardSpotlight from "@/components/card-spotlight";
import { useRouter } from "next/navigation";
import { BentoGrid } from "@/components/bento-grid";

export default function Home() {
  const router = useRouter();

  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      disabled: false,
    },
    {
      name: "Register",
      path: "/register",
      disabled: true,
    },
  ];

  return (
    <div className="bg-black">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <main className="flex-1">
          <section>
            <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center">
              <div className="absolute -top-4 -z-10 flex w-full justify-center">
                <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-primary opacity-20 blur-[100px]" />
              </div>
              <div>
                <h1 className="bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-3xl text-transparent md:text-5xl">
                  Automate your business with us!
                </h1>
                <h2 className="my-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-3xl text-transparent md:text-3xl">
                  in Whatsapp and Instagram
                </h2>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center py-24">
            <ButtonShootingStarBorder />
          </section>
          <section>
            <BentoGrid />
          </section>
        </main>
        <footer>
          <div className="flex items-center justify-center py-8">
            <span className="text-sm text-gray-400">
              Made by
              <a
                href="https://twitter.com/nrtsoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-white"
              >
                @nrtsoftware
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
