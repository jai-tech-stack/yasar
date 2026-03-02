import type { Metadata } from "next";
import Link from "next/link";
import { siteName, tagline } from "@/lib/nav";

export const metadata: Metadata = {
  title: `Insights | ${siteName}`,
  description: `Thought leadership and insights on technology and digital transformation. ${tagline}.`,
};

export default function InsightsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <p className="uppercase text-tertiary font-semibold tracking-wider mb-4">Insights</p>
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Insights & thought leadership
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-16">
        Perspectives on software development, digital transformation, and industry trends. Blog and case studies will be added here in a future update.
      </p>
      <div className="p-12 rounded-2xl bg-gray-50 text-center">
        <p className="text-gray-600 mb-6">More insights and articles coming soon.</p>
        <Link href="/contact" className="btn-pill btn-pill-tertiary">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
