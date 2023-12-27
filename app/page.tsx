"use client";

import { Navbar } from "@/components/navbar";
import { useRef } from "react";
import { BillingPlans } from "@/components/home/billing-plans";
import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { Grid } from "@/components/home/grid";
import { BackgroundBeams } from "@/components/beams";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    if (id === "about" && aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", inline: "end" });
    } else if (id === "pricing" && pricingRef && pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth", inline: "end" });
    } else if (id === "features" && featuresRef && featuresRef.current) {
      featuresRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "end",
      });
    }
  };

  return (
    <div className="bg-black">
      <Navbar onPressTab={scrollTo} />
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <main className="flex-1">
          <section className="py-24 z-10">
            <Hero />
          </section>
          <section className="py-24 z-10" ref={aboutRef}>
            <About />
          </section>
          <section className="py-24 z-10" ref={featuresRef}>
            <Grid />
          </section>
          <section className="py-24 z-10" ref={pricingRef}>
            <BillingPlans />
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
      <BackgroundBeams />
    </div>
  );
}
