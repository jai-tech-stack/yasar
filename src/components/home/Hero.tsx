"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteName } from "@/lib/nav";

/* Tag list from HTML (exact order) */
const tags = [
  "Consulting",
  "Data Solutions",
  "Software Development",
  "Data Solutions",
  "Network Design",
  "IT Solution",
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const tagsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof gsap.context> | null = null;
    const id = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const titleLines = titleRef.current?.querySelectorAll(".split--text");
        if (titleLines?.length) {
          gsap.fromTo(
            titleLines,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
          );
        }
        if (subtitleRef.current) {
          gsap.fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.8 });
        }
        if (ctaRef.current) {
          gsap.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 1.1 });
        }
        const tagItems = tagsRef.current?.querySelectorAll("li");
        if (tagItems?.length) {
          gsap.fromTo(tagItems, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, delay: 1.3 });
        }
      });
    });
    return () => {
      cancelAnimationFrame(id);
      ctx?.revert();
    };
  }, []);

  const brandWord = siteName.split(" ")[0];

  return (
    <section
      className="hero-section four position-relative z--1 bg--tertiary fit-bg--img bg--img"
      style={{ backgroundImage: "url('/assets/images/common/hero-bg4.webp')" }}
      id="heroFour"
    >
      <div className="container-fluid">
        <div className="row justify-content-center pb-130">
          <div className="col-xxl-7 col-lg-10">
            <div className="content--wrap">
              <h1
                ref={titleRef}
                className="text--black d-flex flex-column justify-content-start align-items-center"
              >
                <span className="d-flex flex-column text-uppercase justify-content-start align-items-start banner--title w--100">
                  <span className="text--white heading-font--two split--text">{brandWord}</span>
                  <span className="text--white heading-font--two split--text">It Solution agency</span>
                </span>
              </h1>
              <div className="d-flex flex-column justify-content-start align-items-start w--100">
                <div className="d-flex align-items-start gap--32">
                  <div className="hero-element3">
                    <svg
                      className="hero4-element--one"
                      width="479"
                      height="107"
                      viewBox="0 0 479 107"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4ZM476 4L476.484 4.57301L478.051 3.25H476V4ZM476 107L473.305 98.7698L467.525 105.219L476 107ZM4 4V4.75H476V4V3.25H4V4ZM476 4L475.516 3.42699C466.191 11.302 452.965 24.8823 448.055 42.1819C445.595 50.8491 445.224 60.4452 448.471 70.7C451.717 80.9491 458.561 91.8111 470.46 103.042L470.975 102.497L471.49 101.951C459.732 90.8535 453.053 80.2008 449.901 70.2472C446.752 60.2992 447.11 51.0046 449.498 42.5914C454.283 25.7302 467.227 12.3907 476.484 4.57301L476 4Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      ref={subtitleRef}
                      className="body-font--two fs--20 text--white hero-sm--text d-flex flex-shrink-0 subtitle mb-40"
                    >
                      Smart Solutions for Smart Business to Innovate,
                      Grow, and Lead delivering advanced technology
                      unmatched reliability,
                    </p>
                    <Link
                      ref={ctaRef}
                      href="/contact"
                      className="btn-style--three light pills d-inline-flex align-items-center gap--32"
                    >
                      <span className="btn--text d-block flex-shrink-0 fw--600">Let&apos;s Begin</span>
                      <span className="d-flex justify-content-center align-items-center btn--circle flex-shrink-0 radius--50">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.234 0.21934C11.3746 0.0788894 11.5652 0 11.764 0C11.9628 0 12.1534 0.0788894 12.294 0.21934L19.282 7.21934C19.4225 7.35997 19.5013 7.55059 19.5013 7.74934C19.5013 7.94809 19.4225 8.13871 19.282 8.27934L12.294 15.2793C12.1526 15.416 11.9632 15.4917 11.7665 15.4901C11.5699 15.4885 11.3818 15.4097 11.2426 15.2707C11.1035 15.1317 11.0245 14.9436 11.0227 14.747C11.0209 14.5503 11.0964 14.3609 11.233 14.2193L16.942 8.50034L0.751001 8.51134C0.552088 8.51161 0.361217 8.43284 0.220378 8.29238C0.0795378 8.15191 0.000265884 7.96125 6.67625e-07 7.76234C-0.000264549 7.56343 0.0784986 7.37256 0.218963 7.23172C0.359428 7.09088 0.550088 7.01161 0.749 7.01134L16.943 7.00134L11.232 1.27934C11.0915 1.13871 11.0127 0.948091 11.0127 0.74934C11.0127 0.550589 11.0915 0.359965 11.232 0.21934"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center justify-content-xl-end">
          <div className="col-xl-8 col-lg-10">
            <ul className="tag--wrap d-flex justify-content-center justify-content-xl-end align-items-center flex-wrap" ref={tagsRef}>
              {tags.map((tag, i) => (
                <li key={`${tag}-${i}`} className="tag d-flex align-items-center gap--8">
                  <span className="dot" />
                  <p className="text--white">{tag}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="thumb--wrap one position-absolute">
          <img className="fit--img" src="/assets/images/common/hero-thumb4.webp" alt="" />
        </div>

        <div className="video--wrap position-absolute">
          <video className="fit--img" autoPlay muted loop playsInline>
            <source src="/assets/images/video/hero-thumb5.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="thumb--wrap two position-absolute spin_image">
          <img src="/assets/images/common/hero-bg--element2.webp" alt="..." />
        </div>
      </div>
    </section>
  );
}
