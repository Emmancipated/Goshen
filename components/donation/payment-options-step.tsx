"use client";

import { ArrowRight, Building2, CreditCard, Lock, Wallet } from "lucide-react";
import { PaymentMethod, DonationType, ENABLE_USD } from "./types";

type PaymentOptionsStepProps = {
  donationType: DonationType;
  onSelect: (method: PaymentMethod) => void;
};

type PaymentOption = {
  method: PaymentMethod;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  badge?: string;
};

export function PaymentOptionsStep({
  donationType,
  onSelect,
}: PaymentOptionsStepProps) {
  const options: PaymentOption[] = [
    {
      method: "naira-card",
      title: "Pay in Naira",
      subtitle: "Card payment (₦)",
      description: "Pay securely with your Nigerian debit or credit card.",
      icon: <CreditCard className="h-6 w-6" />,
      accent: "#43206F",
      badge: "Recommended",
    },
    {
      method: "naira-transfer",
      title: "Transfer in Naira",
      subtitle: "Bank transfer (₦)",
      description: "Transfer directly from your Nigerian bank account.",
      icon: <Building2 className="h-6 w-6" />,
      accent: "#8B6A3D",
    },
  ];

  if (ENABLE_USD) {
    options.push(
      {
        method: "usd-card",
        title: "Pay in Dollars",
        subtitle: "Card payment (USD)",
        description: "Donate internationally using a USD debit or credit card.",
        icon: <Wallet className="h-6 w-6" />,
        accent: "#0B6E4F",
        badge: "International",
      },
      {
        method: "usd-transfer",
        title: "Transfer in Dollars",
        subtitle: "Bank transfer (USD)",
        description:
          "Send a USD bank transfer from your local or international bank.",
        icon: <Building2 className="h-6 w-6" />,
        accent: "#2563EB",
      },
    );
  }

  return (
    <div className="space-y-8 pb-5">
      {/* Intro */}{" "}
      <div className="space-y-3">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Choose your preferred payment method for your{" "}
          {donationType === "monthly"
            ? "monthly donation"
            : "one-time donation"}
          .{" "}
        </p>
        <p className="text-sm text-[#6B6560]">
          All payments are processed securely and encrypted to protect your
          information.
        </p>
      </div>
      {/* Payment options */}
      <div className="grid gap-4">
        {options.map((option) => (
          <button
            key={option.method}
            onClick={() => onSelect(option.method)}
            className="group rounded-3xl border border-[#E5DDD3] bg-white p-2 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#43206F] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#43206F]/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: option.accent }}
                >
                  {option.icon}
                </div> */}

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-serif text-xl font-semibold text-[#2F1B69]">
                      {option.title}
                    </h4>

                    {/* {option.badge && (
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-semibold text-white"
                        style={{ backgroundColor: option.accent }}
                      >
                        {option.badge}
                      </span>
                    )} */}
                  </div>

                  {/* <p className="text-sm font-medium text-[#6B6560]">
                    {option.subtitle}
                  </p>

                  <p className="text-sm leading-6 text-[#5E5752]">
                    {option.description}
                  </p> */}
                </div>
              </div>

              <ArrowRight className="mt-1 h-5 w-5 text-[#43206F] transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>
      {/* Security panel */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-white p-5">
        <div className="flex items-start gap-4">
          {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F3EC]">
            <Lock className="h-5 w-5 text-[#2E7D32]" />
          </div> */}

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Secure payment processing
            </h4>

            <p className="text-sm leading-6 text-[#5E5752]">
              Your payment is encrypted and processed securely. We do not store
              your card or banking information on our servers.
            </p>
          </div>
        </div>
      </div>
      {/* Monthly donor note */}
      {donationType === "monthly" && (
        <div className="rounded-2xl border border-[#F0D6D6] bg-[#FFF7F7] p-5">
          <p className="text-sm leading-6 text-[#5E5752]">
            Your selected payment method will be used to set up your recurring
            monthly donation. You can update or cancel your monthly support at
            any time.
          </p>
        </div>
      )}
    </div>
  );
}
