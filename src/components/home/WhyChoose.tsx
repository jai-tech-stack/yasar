"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (titleRef.current && sectionRef.current) {
        gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" } });
      }
      const cards = cardsRef.current?.querySelectorAll(".wc--data");
      if (cards?.length && cardsRef.current) {
        gsap.fromTo(cards, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, scrollTrigger: { trigger: cardsRef.current, start: "top 85%", toggleActions: "play none none none" } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-choose--section four position-relative pb-130">
      <div className="why-choose--inner">
        <div className="bg-thumb--wrap position-absolute">
          <img className="fit--img" src="/assets/images/common/wc.webp" alt="..." />
        </div>

        <div className="wc-content--wrap bg--black position-relative z--1 overflow-hidden">
          <span className="circle d-inline-block" />
          <span className="circle--two d-inline-block" />

          <div className="section--content">
            <h6 className="mb-0 text--secondary body--font heading d-flex align-items-center gap--8">
              <span className="line--wrap d-flex flex-column gap--4">
                <span className="line one d-inline-block" />
                <span className="line two d-inline-block" />
              </span>
              WHY CHOOSE US
            </h6>
          </div>
          <div className="wc--content pb-130">
            <h2 ref={titleRef} className="title text--white text-capitalize body--font">
              Delivering IT Solutions
              <br />
              <span className="text--secondary">24+ Years</span>
            </h2>
            <p className="description fs--18">
              We complete projects quickly and efficiently, delivering high-quality
              results
              on time so you can start seeing measurable
            </p>
          </div>

          <div ref={cardsRef} className="wc-data--wrap d-flex justify-content-start">
            <div className="wc--data">
              <div className="thumb--wrap radius--50">
                <img className="fit--img" src="/assets/images/icon/why-choose1.gif" alt="..." />
              </div>
              <div className="content--wrap">
                <h6 className="text--white body--font">Reliable Support</h6>
                <p className="description">Our team stays available when you
                  need us, ensuring smooth </p>
              </div>
            </div>

            <div className="wc--data">
              <div className="thumb--wrap radius--50">
                <img className="fit--img" src="/assets/images/icon/why-choose2.gif" alt="..." />
              </div>
              <div className="content--wrap">
                <h6 className="text--white body--font">Fast Support</h6>
                <p className="description">Expert solutions, reliable support, innovative technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
