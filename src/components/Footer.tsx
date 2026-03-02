"use client";

import Link from "next/link";
import { siteName, tagline } from "@/lib/nav";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="footer--section four relative bg--black text--white overflow-hidden">
      <div className="footer--top fit-bg--img z-10" style={{ backgroundImage: "url('/assets/images/common/footer-bg4.webp')" }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="title text--white font-bold text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 max-w-xl">
                Let&apos;s discuss your project today in detail and unlock your ideas.
              </h2>
              <div>
                <a href="mailto:contact@frexoratech.com" className="email text--white text-xl md:text-3xl flex flex-col mb-10 hover:opacity-90 transition">
                  <span>or contact us</span>
                  <span>to <span className="text--secondary">contact@frexoratech.com</span></span>
                </a>
                <div className="social-item--wrap flex items-center gap-6 flex-wrap">
                  <a href="#" className="item flex items-center gap-3">
                    <span className="dot inline-block rounded-full bg--secondary w-4 h-4" />
                    <p className="text--white text-lg md:text-xl uppercase mb-0">Facebook</p>
                  </a>
                  <a href="#" className="item flex items-center gap-3">
                    <span className="dot inline-block rounded-full bg--secondary w-4 h-4" />
                    <p className="text--white text-lg md:text-xl uppercase mb-0">LinkedIn</p>
                  </a>
                  <a href="#" className="item flex items-center gap-3">
                    <span className="dot inline-block rounded-full bg--secondary w-4 h-4" />
                    <p className="text--white text-lg md:text-xl uppercase mb-0">Instagram</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact--card four rounded-2xl p-8 md:p-10 shadow-xl">
              <h6 className="text-2xl md:text-3xl font-medium mb-8 text-black">
                Share your contact info, and we&apos;ll get in touch.
              </h6>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="footer--bottom flex flex-wrap justify-between items-center gap-4 py-6 px-4 md:px-6 bg-black relative">
        <p className="text-white/70 text-sm md:text-base mb-0">
          © {new Date().getFullYear()} {siteName}. All Rights Reserved
        </p>
        <div className="flex items-center gap-2">
          <Link href="/terms" className="text-white/70 hover:text--secondary text-sm md:text-base transition">
            Terms & Conditions
          </Link>
          <p className="text--white mb-0">//</p>
          <Link href="/privacy" className="text-white/70 hover:text--secondary text-sm md:text-base transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
