"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, Home, ArrowRight } from "lucide-react";
import { DonorDetails } from "./donor-details-step";

type SurvivorKitSuccessStepProps = {
  quantity: number;
  donor: DonorDetails;
  onClose: () => void;
};

export function SurvivorKitSuccessStep({
  quantity,
  donor,
  onClose,
}: SurvivorKitSuccessStepProps) {
  const firstName = donor.anonymous
    ? "Friend"
    : donor.fullName.trim().split(" ")[0] || "Friend";

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
      {/* Thank you */}
      <div className="space-y-4">
        {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#F3E8FF] px-4 py-2">
          <Heart className="h-4 w-4 text-[#43206F]" />
          <span className="text-sm font-semibold text-[#43206F]">
            Donation completed
          </span>
        </div> */}

        <h3 className="font-serif text-3xl font-semibold text-[#2F1B69]">
          Thank you, {firstName}
        </h3>

        <p className="text-lg leading-8 text-[#5E5752]">
          Your donation of{" "}
          <strong>
            {quantity} Survivor's {quantity === 1 ? "Kit" : "Kits"}
          </strong>{" "}
          will help
          {quantity === 1 ? " a woman" : " women"} leave the shelter with the
          essential household items needed to begin a safe and independent life.
        </p>
      </div>
      {/* Impact card */}
      {/* <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF]">
            <Home className="h-5 w-5 text-[#43206F]" />
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-[#2F1B69]">
              What your gift provides
            </h4>

            <p className="text-sm leading-7 text-[#5E5752]">
              Your donation helps provide a mattress, cooking equipment,
              utensils, and other household essentials that transform an empty
              space into a home. For many women, this is the first night they
              will sleep in safety and dignity.
            </p>
          </div>
        </div>
      </div> */}
      {/* Emotional panel */}
      {/* <div className="rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6 text-left">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E8]">
            <Heart className="h-5 w-5 text-[#B31312]" />
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-xl font-semibold text-[#B31312]">
              You helped create a new beginning
            </h4>

            <p className="text-sm leading-7 text-[#5E5752]">
              Because of your generosity, a survivor can move forward with hope,
              dignity, and practical support. Your gift is not simply a donation
              of household items—it is an investment in someone's future.
            </p>
          </div>
        </div>
      </div> */}
      {/* Receipt note */}
      {/* <div className="rounded-2xl border border-[#E8DED5] bg-[#F8F4FD] p-5">
        <p className="text-sm leading-6 text-[#5E5752]">
          A donation confirmation and receipt will be sent to{" "}
          <strong>{donor.email}</strong> shortly.
        </p>
      </div> */}
      {/* CTA */}
      <button
        onClick={onClose}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold text-white transition-all hover:bg-[#341857] active:scale-[0.99]"
      >
        Continue exploring ways to support
        <ArrowRight className="h-5 w-5" />
      </button>
      {/* Footer */}
      {/* <p className="text-sm leading-6 text-[#6B6560]">
        Your generosity helps women and children rebuild their lives with
        safety, dignity, and hope.
      </p> */}
    </div>
  );
}
