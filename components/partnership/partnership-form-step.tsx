"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export type PartnershipFormData = {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  organizationType: string;
  partnershipInterest: string;
  message: string;
};

type PartnershipFormStepProps = {
  initialData: PartnershipFormData;
  onSubmit: (data: PartnershipFormData) => Promise<void>;
};

const organizationTypes = [
  "Company / Corporate organization",
  "NGO / Non-profit organization",
  "Foundation",
  "Church / Faith-based organization",
  "School / Educational institution",
  "Government agency",
  "International organization",
  "Other",
];

const partnershipInterests = [
  "Corporate Social Responsibility (CSR)",
  "Skills & empowerment programs",
  "Employment & mentorship support",
  "Healthcare support",
  "Educational support",
  "Fundraising partnership",
  "Infrastructure / facility support",
  "Long-term strategic partnership",
  "Other",
];

export function PartnershipFormStep({
  initialData,
  onSubmit,
}: PartnershipFormStepProps) {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof PartnershipFormData, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof PartnershipFormData>(
    key: K,
    value: PartnershipFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof PartnershipFormData, string>> = {};

    if (!form.organizationName.trim()) {
      nextErrors.organizationName = "Please enter your organization name.";
    }

    if (!form.contactPerson.trim()) {
      nextErrors.contactPerson = "Please enter the contact person's name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!form.organizationType) {
      nextErrors.organizationType = "Please select your organization type.";
    }

    if (!form.partnershipInterest) {
      nextErrors.partnershipInterest = "Please select a partnership interest.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please tell us about your partnership interest.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      await onSubmit(form);
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
          We would love to hear from your organization. Please fill in the
          details below and tell us how you would like to partner with
          Goshen.{" "}
        </p>{" "}
      </div>
      {/* Contact details */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="organizationName"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Organization name *
          </label>

          <input
            id="organizationName"
            type="text"
            value={form.organizationName}
            onChange={(e) => update("organizationName", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
            placeholder="Enter organization name"
          />

          {errors.organizationName && (
            <p className="text-sm text-red-600">{errors.organizationName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contactPerson"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Contact person *
          </label>

          <input
            id="contactPerson"
            type="text"
            value={form.contactPerson}
            onChange={(e) => update("contactPerson", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
            placeholder="Enter contact person name"
          />

          {errors.contactPerson && (
            <p className="text-sm text-red-600">{errors.contactPerson}</p>
          )}
        </div>

        <div className="space-y-2">
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
            placeholder="Enter email address"
          />

          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
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
            placeholder="Enter phone number"
          />

          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="organizationType"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Organization type *
          </label>

          <select
            id="organizationType"
            value={form.organizationType}
            onChange={(e) => update("organizationType", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          >
            <option value="">Select organization type</option>
            {organizationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {errors.organizationType && (
            <p className="text-sm text-red-600">{errors.organizationType}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="partnershipInterest"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            How would you like to support Goshen? *
          </label>

          <select
            id="partnershipInterest"
            value={form.partnershipInterest}
            onChange={(e) => update("partnershipInterest", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          >
            <option value="">Select partnership interest</option>
            {partnershipInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>

          {errors.partnershipInterest && (
            <p className="text-sm text-red-600">{errors.partnershipInterest}</p>
          )}
        </div>
      </div>
      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[#2F1B69]"
        >
          Tell us about your organization and how you would like to partner with
          Goshen *
        </label>

        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          placeholder="Tell us about your organization, your partnership goals, the type of support you'd like to provide, and any ideas for collaboration."
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
              Your partnership enquiry is handled confidentially
            </h4>

            <p className="text-sm leading-6 text-[#5E5752]">
              We will only use this information to review your enquiry and
              discuss partnership opportunities with your organization.
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
        {submitting
          ? "Sending partnership enquiry..."
          : "Send partnership enquiry"}
      </button>
    </form>
  );
}
