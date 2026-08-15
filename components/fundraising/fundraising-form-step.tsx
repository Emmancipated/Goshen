"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export type FundraisingFormData = {
  name: string;
  email: string;
  phone: string;
  fundraisingType: string;
  message: string;
};

type FundraisingFormStepProps = {
  initialData: FundraisingFormData;
  onSubmit: (data: FundraisingFormData) => Promise<void>;
};

const fundraisingTypes = [
  "Church",
  "School",
  "Community Group",
  "Organization",
  "Workplace / Company",
  "Birthday or Celebration",
  "Memorial / Tribute",
  "Online Campaign",
  "Sports or Fitness Event",
  "Other",
];

export function FundraisingFormStep({
  initialData,
  onSubmit,
}: FundraisingFormStepProps) {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FundraisingFormData, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FundraisingFormData>(
    key: K,
    value: FundraisingFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FundraisingFormData, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    const email = form.email.trim();

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!form.fundraisingType) {
      nextErrors.fundraisingType = "Please select a fundraising type.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please tell us about your fundraising idea.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      await onSubmit({
        ...form,
        email: form.email.trim(),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-3">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          We'd love to hear from you. Fill in the details below and tell us
          about your fundraising idea.{" "}
        </p>{" "}
      </div>
      {/* Contact details */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Your name *
          </label>

          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
            placeholder="Enter your full name"
          />

          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Phone number *
          </label>

          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
            placeholder="Enter your phone number"
          />

          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Email address *
          </label>

          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
            placeholder="Enter your email address"
          />

          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="fundraisingType"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            You are fundraising as *
          </label>

          <select
            id="fundraisingType"
            value={form.fundraisingType}
            onChange={(e) => update("fundraisingType", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          >
            <option value="">Select a fundraising type</option>

            {fundraisingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {errors.fundraisingType && (
            <p className="text-sm text-red-600">{errors.fundraisingType}</p>
          )}
        </div>
      </div>
      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[#2F1B69]"
        >
          Tell us about your fundraising idea or activity *
        </label>

        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          placeholder="Tell us what you're planning, when you hope to hold the fundraiser, and any support or resources you'd like from Goshen."
        />

        {errors.message && (
          <p className="text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      {/* Privacy panel */}
      <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <Lock className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Your information is kept confidential
            </h4>

            <p className="text-sm leading-6 text-[#5E5752]">
              We'll only use this information to support your fundraising
              enquiry and help you organize a successful fundraiser for Goshen.
            </p>
          </div>
        </div>
      </div>
      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className={`w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-wide transition-all ${
          submitting
            ? "cursor-not-allowed bg-[#C9B8E3] text-white"
            : "bg-[#43206F] text-white hover:bg-[#341857] active:scale-[0.99]"
        }`}
      >
        {submitting ? "Sending enquiry..." : "Send enquiry"}
      </button>
    </form>
  );
}
