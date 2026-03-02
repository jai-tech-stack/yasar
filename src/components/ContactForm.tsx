"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [autoReplyMessage, setAutoReplyMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setAutoReplyMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
      if (data.autoReply?.body) setAutoReplyMessage(data.autoReply.body.trim());
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Full name"
          required
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
          className="form--control w-full border-0 border-b border-gray-300 py-3 px-0 bg-transparent focus:outline-none focus:border-[var(--tertiary)]"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          className="form--control w-full border-0 border-b border-gray-300 py-3 px-0 bg-transparent focus:outline-none focus:border-[var(--tertiary)]"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          className="form--control w-full border-0 border-b border-gray-300 py-3 px-0 bg-transparent focus:outline-none focus:border-[var(--tertiary)]"
        />
      </div>
      <div>
        <textarea
          placeholder="How can we help you?"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className="form--control w-full border-0 border-b border-gray-300 py-3 px-0 bg-transparent focus:outline-none focus:border-[var(--tertiary)] resize-none"
        />
      </div>
      {status === "success" && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 space-y-2">
          <p className="text-green-800 font-medium">
            Thank you! We&apos;ve received your message and will reply to your email within 1–2 business days.
          </p>
          {autoReplyMessage && (
            <p className="text-green-700 text-sm whitespace-pre-line">{autoReplyMessage}</p>
          )}
        </div>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn--lg py-120 w-full rounded-full bg-black text-white font-semibold hover:bg-gray-800 disabled:opacity-50 transition"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
