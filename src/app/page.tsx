"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";
import PlanComparison from "@/components/sections/PlanComparison";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <PlanComparison />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
