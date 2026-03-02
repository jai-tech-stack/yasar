"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const workItems = [
  { num: "01", title: "Brand Identity", image: "/assets/images/work/wf1.webp" },
  { num: "02", title: "Web Application", image: "/assets/images/work/wf2.webp" },
  { num: "03", title: "Digital Marketing", image: "/assets/images/work/wf3.webp" },
  { num: "04", title: "UI UX Design", image: "/assets/images/work/wf4.webp" },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".work--card");
      if (cards?.length && sectionRef.current) {
        gsap.fromTo(cards, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="work--section four py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-content--wrap flex justify-between items-center w-full mb-12">
          <h2 className="title font-bold text-black text-3xl md:text-5xl">Industries</h2>
          <h2 className="title font-bold text-gray-300 text-3xl md:text-5xl">&apos;26-8</h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workItems.map((w) => (
            <Link key={w.num} href="/services" className="group">
              <article className="work--card four position-relative w-full h-full">
                <div className="thumb--wrap overflow-hidden w-full rounded-xl aspect-[4/3] bg-gray-200">
                  <img src={w.image} alt={w.title} className="fit--img w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="content--wrap flex justify-between items-center flex-wrap gap-4 pt-4">
                  <h6 className="title font-semibold text-lg mb-0">({w.num})</h6>
                  <p className="title font-semibold text-lg text-black">{w.title}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
