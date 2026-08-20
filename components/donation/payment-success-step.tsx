"use client";

type PaymentSuccessStepProps = {
  donationType: "once" | "monthly";
  amount: string;
  onContinue: () => void;
};

export function PaymentSuccessStep({
  donationType,
  amount,
  onContinue,
}: PaymentSuccessStepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-gold-700">
          {donationType === "monthly" ? "Monthly support activated" : "Thank you for your gift"}
        </h2>
        <p className="text-base leading-7 text-[#5E5752]">
          {donationType === "monthly"
            ? "Your monthly commitment has been set up successfully. You will receive a confirmation email shortly."
            : "Your donation is being processed. You will receive a receipt by email."}
        </p>
        <p className="text-sm text-[#6B6560]">
          Donation amount: {amount}
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
