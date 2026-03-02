import type { Metadata } from "next";
import { siteName, tagline } from "@/lib/nav";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact | ${siteName}`,
  description: `Get in touch with ${siteName}. ${tagline}.`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="uppercase text-tertiary font-semibold tracking-wider mb-4">Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Let&apos;s discuss your project
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Share your contact info and how we can help. We&apos;ll get back to you within 1–2 business days and send an automatic confirmation to your email.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <ContactForm />
        </div>
        <div className="mt-12 text-gray-600">
          <p className="font-semibold text-black mb-2">Sales and general inquiries</p>
          <a href="mailto:contact@frexoratech.com" className="text-tertiary hover:underline">
            contact@frexoratech.com
          </a>
        </div>
      </div>
    </div>
  );
}
