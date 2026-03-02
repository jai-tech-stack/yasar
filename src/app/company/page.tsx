import type { Metadata } from "next";
import { siteName, tagline } from "@/lib/nav";

export const metadata: Metadata = {
  title: `Company | ${siteName}`,
  description: `About ${siteName} – ${tagline}. Your trusted IT outsourcing and software development partner.`,
};

export default function CompanyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <p className="uppercase text-tertiary font-semibold tracking-wider mb-4">Company</p>
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
        About <span className="text-tertiary">{siteName}</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-8">
        With years of experience and a global team, we combine deep technical expertise and business understanding to deliver tailored solutions for enterprises, SMBs, and startups.
      </p>
      <p className="text-lg text-gray-700 max-w-3xl mb-12">
        We serve as an end-to-end technology partner, delivering high-quality software solutions that align with your vision and business goals. Trusted by hundreds of customers from startups to large enterprises.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-gray-100">
          <h3 className="text-xl font-bold text-black mb-2">Our Mission</h3>
          <p className="text-gray-600">To empower businesses with innovative, scalable, and secure technology solutions that drive growth and efficiency.</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-100">
          <h3 className="text-xl font-bold text-black mb-2">Our Vision</h3>
          <p className="text-gray-600">To be the leading global partner for connected solutions and digital transformation.</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-100">
          <h3 className="text-xl font-bold text-black mb-2">Our Values</h3>
          <p className="text-gray-600">Innovation, reliability, partnership, and a commitment to delivering measurable value.</p>
        </div>
      </div>
    </div>
  );
}
