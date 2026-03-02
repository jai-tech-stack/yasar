import type { Metadata } from "next";
import Link from "next/link";
import { siteName, tagline } from "@/lib/nav";

export const metadata: Metadata = {
  title: `Industries | ${siteName}`,
  description: `We deliver solutions across Healthcare, Retail, Logistics, Finance, Manufacturing, and more. ${tagline}.`,
};

const industries = [
  { id: "healthcare", name: "Healthcare", description: "Secure, compliant software for patient care, EHR, and health operations." },
  { id: "retail", name: "Retail", description: "E-commerce, POS, inventory, and customer experience solutions." },
  { id: "logistics", name: "Logistics", description: "Supply chain, fleet management, and delivery optimization." },
  { id: "insurance", name: "Insurance", description: "Policy management, claims, and digital underwriting." },
  { id: "manufacturing", name: "Manufacturing", description: "ERP, MES, IoT, and production automation." },
  { id: "finance", name: "Finance", description: "Fintech, payments, and regulatory compliance." },
  { id: "energy", name: "Energy & Utilities", description: "Smart grids, asset management, and sustainability." },
  { id: "professional-services", name: "Professional Services", description: "Practice management and client portals." },
];

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <p className="uppercase text-tertiary font-semibold tracking-wider mb-4">Industries</p>
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Solutions across 20+ industries
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-16">
        We deliver enterprise software that transforms key business processes and maximizes operational efficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((ind) => (
          <article
            key={ind.id}
            id={ind.id}
            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-tertiary/30 transition"
          >
            <h2 className="text-xl font-bold text-black mb-2">{ind.name}</h2>
            <p className="text-gray-600">{ind.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link href="/contact" className="btn-pill btn-pill-tertiary">
          Discuss your industry needs
        </Link>
      </div>
    </div>
  );
}
