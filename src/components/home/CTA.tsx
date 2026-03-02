"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return () => {};
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" } }
        );
      }
      if (btnRef.current) {
        gsap.fromTo(
          btnRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 section-bg--three" style={{ backgroundColor: "var(--body-bg-three)" }}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 ref={titleRef} className="title flex flex-col justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-10 max-w-4xl mx-auto leading-tight">
          <span>Let&apos;s Get <span className="text--tertiary">Started</span> Now to</span>
          <span><span className="text--tertiary">boost</span> your growth</span>
        </h2>
        <Link
          ref={btnRef}
          href="/contact"
          className="btn-style--three tertiary pills"
        >
          <span className="btn--text flex-shrink-0 fw--600">Explore More</span>
          <span className="btn--circle bg--white flex justify-center items-center radius--50 flex-shrink-0">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.234 0.21934L19.282 7.21934L12.294 15.2793L11.232 1.27934" fill="currentColor" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
