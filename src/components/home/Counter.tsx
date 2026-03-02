"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 98, suffix: "%", label: "Customer Satisfaction Rate" },
  { value: 25, suffix: "+", label: "Years of proven experience" },
  { value: 800, suffix: "+", label: "Successful Projects Completed" },
];

export default function Counter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([0, 0, 0]);
  const playedRef = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (playedRef.current) return;
        playedRef.current = true;
        stats.forEach((s, i) => {
          gsap.to(
            { v: 0 },
            {
              v: s.value,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setCounts((prev) => {
                  const next = [...prev];
                  next[i] = Math.round((this.targets()[0] as { v: number }).v);
                  return next;
                });
              },
            }
          );
        });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section ref={sectionRef} className="counter--section four py-24 md:py-32 bg--tertiary relative">
      <a href="#heroFour" className="top--arrow position-absolute top-6 right-6 md:right-12 z-10" aria-label="Back to top">
        <img src="/assets/images/icon/top-arrow.webp" alt="" className="w-12 h-12 object-contain" />
      </a>
      <div className="container mx-auto px-4 md:px-6">
        <div className="counter-card--wrap grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <article key={s.label} className="counter--card four flex flex-col justify-center items-center text-center">
              <div className="flex items-center justify-center">
                <h6 className="number text--white font-bold">{counts[i]}</h6>
                <h6 className="text--white font-bold text-5xl md:text-7xl ml-0.5">{s.suffix}</h6>
              </div>
              <p className="title text--white mt-2 text-lg md:text-xl">{s.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
