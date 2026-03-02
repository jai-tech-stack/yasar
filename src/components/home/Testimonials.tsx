"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  { quote: "The team delivered cutting-edge IT solutions, ensuring seamless integration, improved efficiency, and strong security, helping our business scale rapidly while maintaining top-notch performance and reliability throughout every project.", name: "Parvej Ahmed", role: "Creative Director", avatar: "/assets/images/user/user1.webp" },
  { quote: "Working with this agency was exceptional; their expertise in AI, blockchain, and IT security streamlined our operations, enhanced productivity, and consistently exceeded all our expectations in every digital initiative successfully.", name: "Olivia Bennett", role: "IT Manager", avatar: "/assets/images/user/user6.webp" },
  { quote: "Their innovative approach, proactive support, and technical excellence enabled us to achieve measurable results, optimize workflows, and confidently adopt advanced technologies for sustainable business growth across all departments.", name: "Michael Thompson", role: "CIO", avatar: "/assets/images/user/user7.webp" },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".testimonial--card");
      if (cards?.length && sectionRef.current) {
        gsap.fromTo(cards, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="testimonial--section four py-24 md:py-32 overflow-hidden position-relative bg--black">
      <div className="bg-img--wrap position-absolute top-0 right-0 w-1/2 h-full opacity-30 hidden lg:block">
        <img src="/assets/images/common/testimonial-4.webp" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="section-content--wrap text-center mb-12 md:mb-16">
          <span className="text--secondary uppercase font-semibold tracking-wider flex items-center justify-center gap-2">
            <span className="line--wrap flex flex-col gap-1">
              <span className="line one inline-block w-10 h-px bg-[var(--secondary)]" />
              <span className="line two inline-block w-10 h-px bg-[var(--secondary)]" />
            </span>
            Testimonials
            <span className="line--wrap flex flex-col gap-1">
              <span className="line one inline-block w-10 h-px bg-[var(--secondary)]" />
              <span className="line two inline-block w-10 h-px bg-[var(--secondary)]" />
            </span>
          </span>
          <h2 className="title text--white text-center text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto mt-4">
            What our customers say about their experience
          </h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial--card four">
              <div className="content--wrap flex flex-col h-full">
                <div className="star--thumb flex justify-between items-center mb-6">
                  <div className="icon--thumb">
                    <img src="/assets/images/common/t-shape2.webp" alt="" className="w-10 h-10" />
                  </div>
                </div>
                <p className="description flex-grow">{t.quote}</p>
                <div className="user--info inline-flex items-center gap-5 mt-6">
                  <div className="thumb--wrap overflow-hidden radius--50 flex-shrink-0">
                    <img className="fit--img w-14 h-14 object-cover" src={t.avatar} alt={t.name} />
                  </div>
                  <div>
                    <h6 className="text--white font-bold text-lg md:text-xl mb-1">{t.name}</h6>
                    <p className="user--name text-white/60 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
