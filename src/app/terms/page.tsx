import type { Metadata } from "next";
import { siteName } from "@/lib/nav";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteName}`,
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-3xl">
      <h1 className="text-4xl font-bold text-black mb-8">Terms & Conditions</h1>
      <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="text-gray-700">
        By using this website and our services, you agree to these terms. {siteName} provides IT outsourcing and software development services subject to mutually agreed project terms. All content on this site is for general information only.
      </p>
    </div>
  );
}
