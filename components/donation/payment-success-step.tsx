"use client";

import { PaymentMethod } from "./types";

type PaymentSuccessStepProps = {
  donationType: "once" | "monthly";
  amount?: string;
  paymentMethod?: PaymentMethod | null;
  onContinue: () => void;
};

export function PaymentSuccessStep({
  donationType,
  amount,
  paymentMethod,
  onContinue,
}: PaymentSuccessStepProps) {
  const isTransfer =
    paymentMethod === "naira-transfer" ||
    paymentMethod === "usd-transfer" ||
    paymentMethod === "gbp-transfer";

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-gold-700">
          {isTransfer
            ? "Thank you for your gift"
            : donationType === "monthly"
              ? "Monthly support activated"
              : "Thank you for your gift"}
        </h2>
        <p className="text-base leading-7 text-[#5E5752]">
          {isTransfer
            ? "We have opened WhatsApp for you to confirm your transfer. Our team will acknowledge your donation shortly."
            : donationType === "monthly"
              ? "Your monthly commitment has been set up successfully. You will receive a confirmation email shortly."
              : "Your donation is being processed. You will receive a receipt by email."}
        </p>
        <p className="text-sm text-[#6B6560]">
          {amount
            ? `Donation amount: ${amount}`
            : "Thank you for your generosity."}
        </p>
      </div>
      <button
        type="button"
        onClick={onContinue}
        className="w-full rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] active:scale-[0.99]"
      >
        Continue
      </button>
    </div>
  );
}
