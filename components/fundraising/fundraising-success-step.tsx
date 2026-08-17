"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, Mail, ArrowRight } from "lucide-react";

type FundraisingSuccessStepProps = {
  name: string;
  fundraisingType: string;
  onClose: () => void;
};

export function FundraisingSuccessStep({
  name,
  fundraisingType,
  onClose,
}: FundraisingSuccessStepProps) {
  const firstName = name.trim().split(" ")[0] || "there";
  const type = fundraisingType || "fundraising campaign";

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
          <Heart className="h-4 w-4 text-[#43206F]" />
          <span className="text-sm font-semibold text-[#43206F]">
            Fundraising enquiry received
          </span>
        </div> */}

        <h3 className="font-serif text-3xl font-semibold text-[#2F1B69]">
          Thank you, {firstName}!
        </h3>

        <p className="text-lg leading-8 text-[#5E5752]">
          We've received your <strong>{type}</strong> fundraising enquiry and
          we're excited that you want to support women and children through
          Goshen.
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
              <li>• Our team will review your fundraising enquiry.</li>
              <li>• We'll contact you within a few business days.</li>
              <li>
                • We'll provide guidance, resources, and fundraising support.
              </li>
              <li>
                • We can help you plan a successful campaign that creates real
                impact.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Encouragement panel */}
      {/* <div className="rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E8]">
            <Heart className="h-5 w-5 text-[#B31312]" />
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-xl font-semibold text-[#B31312]">
              Your fundraiser can change a life
            </h4>

            <p className="text-sm leading-7 text-[#5E5752]">
              Every fundraiser helps provide shelter, food, healthcare,
              counseling, education, and a fresh start for women and children
              escaping violence. Your initiative could become someone's turning
              point.
            </p>
          </div>
        </div>
      </div> */}
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
        If you're planning a time-sensitive fundraiser, you can also contact our
        team directly by phone or WhatsApp.
      </p>
    </div>
  );
}
