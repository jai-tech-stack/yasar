"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "AI and Machine Learning",
    description: "We build AI and machine learning solutions enabling automation, predictive insights, personalization, scalability, improved efficiency, smarter decisions, and measurable business growth across modern digital enterprise ecosystems.",
    bullets: ["Predictive Analytics", "Process Automation", "Personalized Solutions", "Scalable Models"],
    video: "/assets/images/video/service1.mp4",
  },
  {
    title: "Blockchain Development",
    description: "Secure blockchain development delivering decentralized applications, smart contracts, transparency, scalability, data integrity, reduced costs, enhanced trust, and future-ready digital infrastructure for global enterprises, startups, and platforms.",
    bullets: ["Decentralized Apps", "Smart Contracts", "Transparent Records", "Data Security"],
    video: "/assets/images/video/service2.mp4",
  },
  {
    title: "IT & Security Solutions",
    description: "Comprehensive IT and security solutions protecting systems, networks, and data through monitoring, risk management, compliance, threat prevention, rapid response, and reliable business continuity for modern organizations.",
    bullets: ["Threat Detection", "Risk Management", "Data Protection", "Business Continuity"],
    video: "/assets/images/video/service3.mp4",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".service--card");
      if (cards?.length && sectionRef.current) {
        gsap.fromTo(cards, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.2, scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg--white overflow-hidden" id="service">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="section-content--wrap two mb-12">
          <h2 className="title text-start font-bold text-black">services</h2>
          <h2 className="title text-start font-bold text-gray-300">&apos;3</h2>
        </div>
        <div ref={cardsRef} className="space-y-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="service--card four grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="content--wrap order-2 lg:order-1">
                <div className="title--wrap">
                  <h2 className="title text--white uppercase">{s.title}</h2>
                  <p className="description text-white/90 text-base md:text-lg">{s.description}</p>
                </div>
                <ul className="service-list--wrap">
                  {s.bullets.map((b) => (
                    <li key={b} className="service--list flex items-center gap-3">
                      <img src="/assets/images/common/s-c-shape2.webp" alt="" className="w-5 h-5 flex-shrink-0" />
                      <p className="text--white text-lg md:text-xl">{b}</p>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="btn-style--three light pills">
                  <span className="btn--text flex-shrink-0 fw--600">Explore More</span>
                  <span className="btn--circle flex justify-center items-center radius--50 flex-shrink-0">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.234 0.21934L19.282 7.21934L12.294 15.2793L11.232 1.27934" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="thumb--wrap order-1 lg:order-2 rounded-2xl overflow-hidden">
                <video className="fit--img w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src={s.video} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
