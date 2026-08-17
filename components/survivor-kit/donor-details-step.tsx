"use client";

import { useState } from "react";
import { Lock, User, Mail, Phone } from "lucide-react";

export type DonorDetails = {
  fullName: string;
  email: string;
  phone: string;
  anonymous: boolean;
};

type DonorDetailsStepProps = {
  initialData: DonorDetails;
  onContinue: (data: DonorDetails) => Promise<void>;
};

export function DonorDetailsStep({
  initialData,
  onContinue,
}: DonorDetailsStepProps) {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof DonorDetails, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof DonorDetails>(
    key: K,
    value: DonorDetails[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof DonorDetails, string>> = {};

    if (!form.anonymous && !form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
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

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      await onContinue({
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
          Please provide your details so we can process your donation and send
          you a receipt.{" "}
        </p>{" "}
      </div>
      {/* Form */}
      <div className="space-y-5">
        {/* Full name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Full name {!form.anonymous && "*"}
          </label>

          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9A938D]" />

            <input
              id="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              disabled={form.anonymous}
              className={`w-full rounded-2xl border bg-white py-3 pl-12 pr-4 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10 ${
                form.anonymous
                  ? "border-[#E8DED5] bg-[#F8F4FD] text-[#9A938D]"
                  : "border-[#E5DDD3]"
              }`}
              placeholder="Enter your full name"
            />
          </div>

          {errors.fullName && (
            <p className="text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Email address *
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9A938D]" />

            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-2xl border border-[#E5DDD3] bg-white py-3 pl-12 pr-4 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
              placeholder="Enter your email address"
            />
          </div>

          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Phone number *
          </label>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9A938D]" />

            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-2xl border border-[#E5DDD3] bg-white py-3 pl-12 pr-4 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
              placeholder="Enter your phone number"
            />
          </div>

          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>
      {/* Anonymous option */}
      {/* <div className="rounded-3xl border border-[#E5DDD3] bg-white p-5">
        <label className="flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            checked={form.anonymous}
            onChange={(e) => update("anonymous", e.target.checked)}
            className="mt-1 h-5 w-5 rounded border-[#D7CEC4] text-[#43206F] focus:ring-[#43206F]"
          />

          <div className="space-y-1">
            <span className="font-semibold text-[#2F1B69]">
              I would like to remain anonymous
            </span>

            <p className="text-sm leading-6 text-[#5E5752]">
              Your donation will still be processed, and we'll only use your
              contact details to send your receipt and donation confirmation.
            </p>
          </div>
        </label>
      </div> */}
      {/* Privacy panel */}
      {/* <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <Lock className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Your information is secure
            </h4>

            <p className="text-sm leading-6 text-[#5E5752]">
              We use your information only to process your donation, send your
              receipt, and communicate with you about your Survivor's Kit
              contribution. We do not share your personal information with third
              parties.
            </p>
          </div>
        </div>
      </div> */}
      {/* Continue */}
      <button
        type="submit"
        disabled={submitting}
        className={`w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-wide transition-all ${
          submitting
            ? "cursor-not-allowed bg-[#C9B8E3] text-white"
            : "bg-[#43206F] text-white hover:bg-[#341857] active:scale-[0.99]"
        }`}
      >
        {submitting ? "Preparing payment..." : "Continue to payment"}
      </button>
    </form>
  );
}
