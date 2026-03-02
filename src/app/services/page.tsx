import type { Metadata } from "next";
import Link from "next/link";
import { siteName, tagline } from "@/lib/nav";

export const metadata: Metadata = {
  title: `Services | ${siteName}`,
  description: `Full-cycle software development, dedicated teams, web & mobile development, cloud, AI, and more. ${tagline}.`,
};

const serviceGroups = [
  {
    title: "Engagement Models",
    items: ["Full project outsourcing", "Dedicated teams", "Developers for hire"],
  },
  {
    title: "Software Development",
    items: ["Web application development", "Mobile app development", "UX/UI design", "MVP development", "Quality assurance", "Maintenance & support", "System integration", "SaaS"],
  },
  {
    title: "E-Commerce & Cloud",
    items: ["Marketplaces", "Adobe Commerce (Magento)", "AWS", "Azure", "DevOps"],
  },
  {
    title: "Data & AI",
    items: ["Business intelligence", "Data & analytics", "Chatbot development", "Computer vision"],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <p className="uppercase text-tertiary font-semibold tracking-wider mb-4">Services</p>
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Full-cycle software development services
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-16">
        We serve as an end-to-end technology partner, delivering high-quality software solutions with deep technical expertise and understanding of your business domain.
      </p>
      <div className="space-y-12">
        {serviceGroups.map((group) => (
          <section key={group.title} id={group.title.toLowerCase().replace(/\s+/g, "-")}>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">{group.title}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-tertiary/5 transition">
                  <span className="w-2 h-2 rounded-full bg-tertiary flex-shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="btn-pill btn-pill-tertiary inline-flex items-center gap-4"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
