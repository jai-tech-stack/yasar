import type { Metadata } from "next";
import { siteName } from "@/lib/nav";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteName}`,
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-3xl">
      <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="text-gray-700">
        {siteName} respects your privacy. By submitting the contact form, you consent to us processing your personal data in accordance with this policy. We use your information only to respond to your inquiry and improve our services. We do not sell your data to third parties.
      </p>
    </div>
  );
}
