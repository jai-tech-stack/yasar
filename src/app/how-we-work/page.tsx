import type { Metadata } from "next";
import Link from "next/link";
import { siteName, tagline } from "@/lib/nav";

export const metadata: Metadata = {
  title: `How We Work | ${siteName}`,
  description: `Our process: discovery, design, development, and delivery. ${tagline}.`,
};

const steps = [
  { title: "Discovery", description: "We align on goals, scope, and success metrics with your team." },
  { title: "Design & Plan", description: "Architecture, UX/UI, and a clear roadmap for delivery." },
  { title: "Develop & Test", description: "Agile development with continuous QA and your feedback loops." },
  { title: "Deploy & Support", description: "Launch and ongoing maintenance, support, and iteration." },
];

export default function HowWeWorkPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <p className="uppercase text-tertiary font-semibold tracking-wider mb-4">How We Work</p>
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        A clear, collaborative process
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-16">
        We work as an extension of your team with transparent communication, agile delivery, and a focus on outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, i) => (
          <div key={step.title} className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <span className="text-tertiary font-bold text-lg">0{i + 1}</span>
            <h2 className="text-xl font-bold text-black mt-2 mb-2">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link href="/contact" className="btn-pill btn-pill-tertiary">
          Start a project
        </Link>
      </div>
    </div>
  );
}
