"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2, Mail, ArrowRight } from "lucide-react";

type PartnershipSuccessStepProps = {
  organizationName: string;
  onClose: () => void;
};

export function PartnershipSuccessStep({
  organizationName,
  onClose,
}: PartnershipSuccessStepProps) {
  const organization = organizationName.trim() || "your organization";

  return (
    <div className="space-y-8 text-center">
      {/* Success animation */}{" "}
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {" "}
          <div className="absolute inset-0 rounded-full bg-[#2E7D32]/15 blur-xl" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#E8F3EC]">
            <CheckCircle2 className="h-12 w-12 text-[#2E7D32]" />
          </div>
        </motion.div>
      </div>
      {/* Thank you message */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F3E8FF] px-4 py-2">
          <Building2 className="h-4 w-4 text-[#43206F]" />
          <span className="text-sm font-semibold text-[#43206F]">
            Partnership enquiry received
          </span>
        </div>

        <h3 className="font-serif text-3xl font-semibold text-[#2F1B69]">
          Thank you for reaching out
        </h3>

        <p className="text-lg leading-8 text-[#5E5752]">
          We've received the partnership enquiry from{" "}
          <strong>{organization}</strong> and we're grateful for your interest
          in supporting women and children at Goshen.
        </p>
      </div>
      {/* What happens next */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF]">
            <Mail className="h-5 w-5 text-[#43206F]" />
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-[#2F1B69]">What happens next</h4>

            <ul className="space-y-2 text-sm leading-6 text-[#5E5752]">
              <li>
                • Our partnership team will review your enquiry carefully.
              </li>
              <li>
                • We'll contact your organization within a few business days.
              </li>
              <li>
                • We'll explore partnership opportunities that align with your
                goals and our mission.
              </li>
              <li>
                • We can schedule a meeting or call to discuss collaboration in
                more detail.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Partnership message */}
      <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <Building2 className="h-5 w-5" />
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-xl font-semibold text-[#2F1B69]">
              Partnerships create lasting impact
            </h4>

            <p className="text-sm leading-7 text-[#5E5752]">
              Whether through corporate social responsibility, skills training,
              healthcare, education, funding, or strategic collaboration, your
              organization has the opportunity to help women and children move
              from crisis to stability, healing, and independence.
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <button
        onClick={onClose}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold text-white transition-all hover:bg-[#341857] active:scale-[0.99]"
      >
        Continue exploring ways to support
        <ArrowRight className="h-5 w-5" />
      </button>
      {/* Footer note */}
      <p className="text-sm leading-6 text-[#6B6560]">
        If you would like to discuss a time-sensitive partnership opportunity,
        you're welcome to contact our team directly by phone or email.
      </p>
    </div>
  );
}
