"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export type VolunteerFormData = {
  fullName: string;
  email: string;
  phone: string;
  supportArea: string;
  message: string;
  preferredContact: "email" | "phone" | "whatsapp";
};

type VolunteerFormStepProps = {
  initialData: VolunteerFormData;
  onSubmit: (data: VolunteerFormData) => Promise<void>;
};

const supportAreas = [
  "Counselling and emotional support",
  "Mentoring and encouragement",
  "Children's educational support",
  "Skills development and training",
  "Professional support (legal, medical, business, counselling)",
  "Practical support and volunteering",
];

export function VolunteerFormStep({
  initialData,
  onSubmit,
}: VolunteerFormStepProps) {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof VolunteerFormData, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof VolunteerFormData>(
    key: K,
    value: VolunteerFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof VolunteerFormData, string>> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone or WhatsApp number.";
    }

    if (!form.supportArea) {
      nextErrors.supportArea = "Please select how you would like to help.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please tell us a little about your experience.";
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
          Please fill in the form below and our team will be in touch with
          you.{" "}
        </p>{" "}
      </div>
      {/* Contact details */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            Full name *
          </label>

          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
            placeholder="Enter your full name"
          />

          {errors.fullName && (
            <p className="text-sm text-red-600">{errors.fullName}</p>
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
            placeholder="Enter your email address"
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
            Phone / WhatsApp number *
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

        <div className="space-y-2">
          <label
            htmlFor="supportArea"
            className="text-sm font-semibold text-[#2F1B69]"
          >
            How would you like to support Goshen? *
          </label>

          <select
            id="supportArea"
            value={form.supportArea}
            onChange={(e) => update("supportArea", e.target.value)}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          >
            <option value="">Select an option</option>
            {supportAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          {errors.supportArea && (
            <p className="text-sm text-red-600">{errors.supportArea}</p>
          )}
        </div>
      </div>
      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[#2F1B69]"
        >
          Tell us about your skills, experience, or how you would like to help *
        </label>

        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          placeholder="Tell us about your experience, availability, professional skills, or any other way you'd like to support women and children at Goshen."
        />

        {errors.message && (
          <p className="text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      {/* Preferred contact method */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-[#2F1B69]">
          Preferred way for us to contact you
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "whatsapp", label: "WhatsApp" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex flex-1 cursor-pointer items-center gap-3 rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 transition-all hover:border-[#43206F]"
            >
              <input
                type="radio"
                name="preferredContact"
                value={option.value}
                checked={form.preferredContact === option.value}
                onChange={() =>
                  update(
                    "preferredContact",
                    option.value as VolunteerFormData["preferredContact"],
                  )
                }
                className="h-4 w-4 text-[#43206F]"
              />

              <span className="text-[#4E4742]">{option.label}</span>
            </label>
          ))}
        </div>
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
              We will only use your information to respond to your enquiry and
              discuss volunteer opportunities with Goshen Shelters.
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
