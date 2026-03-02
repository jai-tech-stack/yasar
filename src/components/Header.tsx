"use client";

import Link from "next/link";
import { useState } from "react";
import { siteName, logoName } from "@/lib/nav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setSideNavOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9998] bg-tertiary/95 backdrop-blur" style={{ isolation: "isolate" }}>
        <div className="container-fluid mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            <button
              type="button"
              className="md:hidden p-2 text-white cursor-pointer touch-manipulation"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMobileOpen(true); }}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            </button>

            <ul className="hidden md:flex items-center gap-4">
              {["Facebook", "Instagram", "LinkedIn", "X"].map((name) => (
                <li key={name}>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                    aria-label={name}
                  >
                    <span className="text-xs">{name[0]}</span>
                  </a>
                </li>
              ))}
            </ul>

            <Link href="/" className="flex items-center gap-2 shrink-0 text-white font-bold text-xl md:text-2xl">
              <img src="/assets/images/logo/logo-l.webp" alt="" className="h-8 md:h-10 w-auto" aria-hidden />
              <span>{logoName}</span>
            </Link>

            <button
              type="button"
              className="flex items-center gap-2 text-white cursor-pointer touch-manipulation"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSideNavOpen(true); }}
              aria-label="Browse menu"
            >
              <span className="text-sm md:text-base">(Browse — Menu)</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile offcanvas */}
      <div
        className={`fixed inset-0 z-[10001] bg-white transform transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-black" onClick={closeAll}>
              {logoName}
            </Link>
            <button type="button" className="p-2" onClick={closeAll} aria-label="Close">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            <Link href="/" className="text-lg py-3 px-2 text-gray-800 hover:bg-gray-100 rounded" onClick={closeAll}>Home</Link>
            <Link href="/company" className="text-lg py-3 px-2 text-gray-800 hover:bg-gray-100 rounded" onClick={closeAll}>Company</Link>
            <Link href="/services" className="text-lg py-3 px-2 text-gray-800 hover:bg-gray-100 rounded" onClick={closeAll}>Services</Link>
            <Link href="/industries" className="text-lg py-3 px-2 text-gray-800 hover:bg-gray-100 rounded" onClick={closeAll}>Industries</Link>
            <Link href="/how-we-work" className="text-lg py-3 px-2 text-gray-800 hover:bg-gray-100 rounded" onClick={closeAll}>How We Work</Link>
            <Link href="/insights" className="text-lg py-3 px-2 text-gray-800 hover:bg-gray-100 rounded" onClick={closeAll}>Insights</Link>
            <Link href="/contact" className="text-lg py-3 px-2 text-gray-800 hover:bg-gray-100 rounded" onClick={closeAll}>Contact</Link>
          </nav>
        </div>
      </div>

      {/* Overlay when side nav open - behind side nav */}
      {sideNavOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[9999] bg-black/40 cursor-pointer touch-manipulation border-0"
          aria-label="Close menu"
          onClick={closeAll}
        />
      )}

      {/* Side navigation (desktop full menu) */}
      <div
        className={`fixed inset-y-0 right-0 z-[10000] w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          sideNavOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!sideNavOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Link href="/" className="block font-bold text-xl text-gray-900" onClick={closeAll}>
            {logoName}
          </Link>
          <button type="button" className="p-2 text-gray-700 hover:bg-gray-100 rounded" onClick={closeAll} aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-0">
            <li>
              <Link href="/" className="block py-3 text-lg font-medium text-gray-900 hover:text-tertiary" onClick={closeAll}>Home</Link>
            </li>
            <li>
              <Link href="/company" className="block py-3 text-lg font-medium text-gray-900 hover:text-tertiary" onClick={closeAll}>Company</Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-900 hover:text-tertiary text-left"
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
              >
                Services
                <svg className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className={`overflow-hidden transition-all duration-200 ${servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <li><Link href="/services" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>All Services</Link></li>
                <li><Link href="/services#engagement-models" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Engagement Models</Link></li>
                <li><Link href="/services#dedicated-teams" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Dedicated Teams</Link></li>
                <li><Link href="/services#software-development" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Software Development</Link></li>
                <li><Link href="/services#web-development" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Web & Mobile</Link></li>
                <li><Link href="/services#cloud-devops" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Cloud & DevOps</Link></li>
                <li><Link href="/services#ai" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>AI & Data</Link></li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-900 hover:text-tertiary text-left"
                onClick={() => setIndustriesOpen((o) => !o)}
                aria-expanded={industriesOpen}
              >
                Industries
                <svg className={`w-5 h-5 transition-transform ${industriesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className={`overflow-hidden transition-all duration-200 ${industriesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <li><Link href="/industries" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>All Industries</Link></li>
                <li><Link href="/industries#healthcare" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Healthcare</Link></li>
                <li><Link href="/industries#retail" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Retail</Link></li>
                <li><Link href="/industries#finance" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Finance</Link></li>
                <li><Link href="/industries#logistics" className="block py-2 pl-4 text-base text-gray-600 hover:text-tertiary" onClick={closeAll}>Logistics</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/how-we-work" className="block py-3 text-lg font-medium text-gray-900 hover:text-tertiary" onClick={closeAll}>How We Work</Link>
            </li>
            <li>
              <Link href="/insights" className="block py-3 text-lg font-medium text-gray-900 hover:text-tertiary" onClick={closeAll}>Insights</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-3 text-lg font-medium text-gray-900 hover:text-tertiary" onClick={closeAll}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-gray-200">
          <Link href="/contact" className="block w-full py-4 text-center bg-tertiary text-white font-semibold rounded-full hover:opacity-90" onClick={closeAll}>
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}
