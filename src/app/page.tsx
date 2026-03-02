"use client";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import Work from "@/components/home/Work";
import Counter from "@/components/home/Counter";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Work />
      <Counter />
      <CTA />
    </>
  );
}
