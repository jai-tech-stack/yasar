"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const points = [
  { title: "Innovation That Matters", text: "We deliver meaningful technology innovations solving real business challenges and creating measurable long-term value." },
  { title: "Simplifying Complex Workflows", text: "We streamline operations using smart systems, automation, and intuitive solutions to improve efficiency." },
  { title: "Performance You Can Trust", text: "Our reliable IT solutions ensure security, stability, scalability, and consistent performance for growing businesses." },
];

const partners = ["p-1", "p-2", "p-3", "p-4", "p-5", "p-6", "p-7"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (titleRef.current && sectionRef.current) {
        gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" } });
      }
      const items = itemsRef.current?.querySelectorAll(".about--content");
      if (items?.length && itemsRef.current) {
        gsap.fromTo(items, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: itemsRef.current, start: "top 85%", toggleActions: "play none none none" } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about--section four py-24 md:py-32 section-bg--three" id="about" style={{ backgroundColor: "var(--body-bg-three)" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-16 lg:pb-24">
          <div className="about-thumb--wrap overflow-hidden rounded-2xl">
            <img src="/assets/images/common/about4.webp" alt="About Frexora Tech" className="w-full h-full object-cover min-h-[400px]" />
          </div>
          <div className="lg:pl-8">
            <div className="section-content--wrap mb-12">
              <p className="text-uppercase text--tertiary mb-6 font-semibold tracking-wider flex items-center gap-2">
                <span className="line--wrap flex flex-col gap-1">
                  <span className="line one inline-block w-10 h-px bg-[var(--tertiary)]" />
                  <span className="line two inline-block w-10 h-px bg-[var(--tertiary)]" />
                </span>
                About Company
              </p>
              <h2 ref={titleRef} className="title text-start text--black7">
                Your trusted partner for <span className="text--tertiary">IT Excellence</span>
              </h2>
              <p className="text--black7 text-lg mt-4">
                We work as an extension of your team, building trusted relationships and helping navigate digital transformation with confidence. Our experts stay closely aligned with your vision, offering strategic guidance.
              </p>
            </div>
            <div ref={itemsRef} className="about-content--wrap flex flex-col">
              {points.map((item, i) => (
                <div key={item.title} className={`about--content d-flex align-items-baseline ${i > 0 ? "bt--none" : ""}`}>
                  <div>
                    <h6 className="title body--font mb-4 text-xl md:text-2xl font-semibold text-black">{item.title}</h6>
                    <p className="text--black7 text-base md:text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slider--wrap overflow-hidden">
          <div className="flex flex-wrap justify-center gap-6 py-8">
            {partners.map((p) => (
              <div key={p} className="partner--card three flex-shrink-0">
                <div className="thumb--wrap flex justify-center items-center bg--white p-6 rounded-xl min-w-[140px] min-h-[100px]">
                  <img src={`/assets/images/partner-logo/${p}.webp`} alt="" className="max-h-12 w-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
