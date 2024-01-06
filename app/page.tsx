"use client";

import { Navbar } from "@/components/navbar";
import { useRef } from "react";
import { BillingPlans } from "@/components/home/pricing/billing-plans";
import { About } from "@/components/home/about/about";
import { Hero } from "@/components/home/hero/hero";
import { Grid } from "@/components/home/features/grid";
import { BackgroundBeams } from "@/components/beams";
import Faq from "@/components/home/faq/faq";
import Footer from "@/components/home/footer";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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
    } else if (id === "faq" && faqRef && faqRef.current) {
      faqRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "end",
      });
    }
  };

  return (
    <div className="bg-white">
      <Navbar onPressTab={scrollTo} />
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <main className="flex-1">
          <section className="py-12 z-10">
            <Hero />
          </section>
          <section className="py-12 z-10" ref={aboutRef}>
            <About />
          </section>
          <section className="py-12 z-10" ref={featuresRef}>
            <Grid />
          </section>
          <section className="py-12 z-10" ref={pricingRef}>
            <BillingPlans />
          </section>
          <section className="py-12 z-10" ref={faqRef}>
            <Faq />
          </section>
        </main>
      </div>
      <Footer />
      <BackgroundBeams />
    </div>
  );
}
