"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, ShieldCheck } from "lucide-react";

type MonthlySuccessStepProps = {
  email: string;
  onContinue: () => void;
};

export function MonthlySuccessStep({
  email,
  onContinue,
}: MonthlySuccessStepProps) {
  return (
    <div className="space-y-8 text-center pb-5">
      {/* Success animation */}
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
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full bg-[#2E7D32]/15 blur-xl" />

          {/* <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#E8F3EC]">
            <CheckCircle2 className="h-12 w-12 text-[#2E7D32]" />
          </div> */}
        </motion.div>
      </div>

      {/* Thank you message */}
      <div className="space-y-4">
        <h3 className="font-serif text-3xl font-semibold text-[#2F1B69]">
          Thank you for your monthly commitment!
        </h3>

        <p className="text-lg leading-8 text-[#5E5752]">
          Your decision to give monthly helps provide consistent care, shelter,
          counselling and hope for women and children throughout the year.
        </p>
      </div>

      {/* Email confirmation */}
      {/* <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF]">
            <CheckCircle2 className="h-5 w-5 text-[#43206F]" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Your monthly giving details
            </h4>

            <p className="text-sm leading-6 text-[#5E5752]">
              We'll send your donation receipt and monthly giving confirmation
              to:
            </p>

            <p className="font-medium text-[#43206F]">
              {email || "your email address"}
            </p>
          </div>
        </div>
      </div> */}

      {/* Impact statement */}
      {/* <div className="rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E8]">
            <Heart className="h-5 w-5 text-[#B31312]" />
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-xl font-semibold text-[#B31312]">
              Your generosity creates lasting change
            </h4>

            <p className="text-sm leading-7 text-[#5E5752]">
              Monthly donations allow us to plan ahead, keep emergency shelter
              available, provide nutritious meals, fund counselling services and
              support children's education with greater stability.
            </p>
          </div>
        </div>
      </div> */}

      {/* Continue button */}
      <button
        onClick={onContinue}
        className="w-full rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold text-white transition-all hover:bg-[#341857] active:scale-[0.99]"
      >
        Proceed to payment options
      </button>

      {/* Security footer */}
      <div className="rounded-2xl border border-[#E5DDD3] bg-white p-4">
        <div className="flex items-center gap-3">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F3EC]">
            <ShieldCheck className="h-5 w-5 text-[#2E7D32]" />
          </div> */}

          <div className="text-left">
            <p className="font-semibold text-[#2F1B69]">
              Secure payment processing
            </p>
            <p className="text-sm text-[#5E5752]">
              Your donation will be processed securely in the next step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
