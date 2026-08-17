"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-night-200 bg-white p-10 text-center shadow-sm">
        {/* <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-700">
          <CheckIcon className="h-7 w-7" />
        </span> */}
        <h2 className="mt-5 font-display text-2xl font-semibold text-gold-700">
          Message received
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-night-600">
          Thank you for reaching out. A member of our team will reply as soon as
          possible — usually within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-night-100 bg-white p-8 shadow-sm"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!res.ok) throw new Error("Send failed");
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-night-900"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-night-200 bg-cream-50 px-4 py-3 text-sm text-night-900 placeholder:text-gold-400 focus:border-night-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-night-900"
          >
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="0802 777 5001"
            className="mt-2 w-full rounded-xl border border-night-200 bg-cream-50 px-4 py-3 text-sm text-night-900 placeholder:text-gold-400 focus:border-night-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-night-900"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-night-200 bg-cream-50 px-4 py-3 text-sm text-night-900 placeholder:text-gold-400 focus:border-night-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="text-sm font-semibold text-night-900"
          >
            What is this about?
          </label>
          <select
            id="subject"
            name="subject"
            className="mt-2 w-full rounded-xl border border-night-200 bg-cream-50 px-4 py-3 text-sm text-night-900 focus:border-night-500 focus:outline-none"
          >
            <option>I need help for myself</option>
            <option>I&rsquo;m worried about someone</option>
            <option>I want to make a referral</option>
            <option>I want to volunteer or support</option>
            <option>Media or partnership enquiry</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-night-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Share as much or as little as you're comfortable with..."
            className="mt-2 w-full resize-none rounded-xl border border-night-200 bg-cream-50 px-4 py-3 text-sm text-night-900 placeholder:text-gold-400 focus:border-night-500 focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p className="mt-4 rounded-xl bg-cream-100 p-3 text-xs leading-5 text-night-900">
          Something went wrong and your message could not be sent. Please try
          again, or call us on{" "}
          <a
            href="tel:+2348027775001"
            className="font-semibold text-gold-700 underline underline-offset-2"
          >
            0802 777 5001
          </a>
          .
        </p>
      )}
      <p className="mt-4 rounded-xl bg-cream-100 p-3 text-xs leading-5 text-night-600">
        If it is not safe for you to use this form, please call{" "}
        <a
          href="tel:+2348027775001"
          className="font-semibold text-gold-700 underline underline-offset-2"
        >
          0802 777 5001
        </a>{" "}
        instead, or press the{" "}
        <span className="font-semibold text-night-900">Exit</span> button and
        contact us later.
      </p>
    </form>
  );
}
