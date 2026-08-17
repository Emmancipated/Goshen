"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HeartHandshake, Mail, ArrowRight } from "lucide-react";

type VolunteerSuccessStepProps = {
  name: string;
  onClose: () => void;
};

export function VolunteerSuccessStep({
  name,
  onClose,
}: VolunteerSuccessStepProps) {
  const firstName = name.trim().split(" ")[0] || "there";

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
          {/* <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#E8F3EC]">
            <CheckCircle2 className="h-12 w-12 text-[#2E7D32]" />
          </div> */}
        </motion.div>
      </div>
      {/* Thank you message */}
      <div className="space-y-4">
        {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#F3E8FF] px-4 py-2">
          <HeartHandshake className="h-4 w-4 text-[#43206F]" />
          <span className="text-sm font-semibold text-[#43206F]">
            Volunteer enquiry received
          </span>
        </div> */}

        <h3 className="font-serif text-3xl font-semibold text-[#2F1B69]">
          Thank you, {firstName}!
        </h3>

        <p className="text-lg leading-8 text-[#5E5752]">
          We've received your volunteer enquiry and we're grateful for your
          willingness to support women and children at Goshen.
        </p>
      </div>
      {/* What happens next */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6 text-left">
        <div className="flex items-start gap-4">
          {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF]">
            <Mail className="h-5 w-5 text-[#43206F]" />
          </div> */}

          <div className="space-y-3">
            <h4 className="font-semibold text-[#2F1B69]">What happens next</h4>

            <ul className="space-y-2 text-sm leading-6 text-[#5E5752]">
              <li>• A member of the Goshen team will review your enquiry.</li>
              <li>• We'll contact you using your preferred contact method.</li>
              <li>
                • We'll discuss volunteer opportunities that match your skills,
                availability, and interests.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Encouragement */}
      {/* <div className="rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E8]">
            <HeartHandshake className="h-5 w-5 text-[#B31312]" />
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-xl font-semibold text-[#B31312]">
              Your time can change a life
            </h4>

            <p className="text-sm leading-7 text-[#5E5752]">
              Whether you can volunteer regularly, occasionally, or offer a
              specific professional skill, your willingness to help creates
              opportunities for healing, growth, and hope.
            </p>
          </div>
        </div>
      </div> */}
      {/* CTA */}
      <button
        onClick={onClose}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold text-white transition-all hover:bg-[#341857] active:scale-[0.99]"
      >
        Continue exploring ways to help
        <ArrowRight className="h-5 w-5" />
      </button>
      {/* Footer note */}
      <p className="text-sm leading-6 text-[#6B6560]">
        If your enquiry is urgent or you have additional information to share,
        you can also contact us directly by phone or WhatsApp.
      </p>
    </div>
  );
}
