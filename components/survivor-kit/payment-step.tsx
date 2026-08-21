"use client";

import { useState } from "react";
import {
  CreditCard,
  Landmark,
  Globe,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { DonorDetails } from "./donor-details-step";
import { usePaystack } from "@/hooks/use-paystack";
import { ENABLE_USD } from "@/components/donation/types";

export type PaymentMethod =
  | "paystack-card"
  | "paystack-bank"
  | "stripe-international";

type PaymentStepProps = {
  quantity: number;
  costPerKit: number;
  total: number;
  donor: DonorDetails;
  paymentMethod: PaymentMethod | null;
  onPayment: (method: PaymentMethod) => Promise<void>;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

const methods: {
  id: PaymentMethod;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "paystack-card",
    title: "Debit / Credit Card",
    description: "Secure card payment through Paystack (Nigeria)",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    id: "paystack-bank",
    title: "Bank Transfer",
    description: "Pay via bank transfer or bank app through Paystack",
    icon: <Landmark className="h-5 w-5" />,
  },
  ...(ENABLE_USD
    ? [
        {
          id: "stripe-international" as PaymentMethod,
          title: "International Card (USD)",
          description: "For donors outside Nigeria using Stripe",
          icon: <Globe className="h-5 w-5" />,
        },
      ]
    : []),
];

export function PaymentStep({
  quantity,
  costPerKit,
  total,
  donor,
  paymentMethod,
  onPayment,
}: PaymentStepProps) {
  const [selected, setSelected] = useState<PaymentMethod | null>(paymentMethod);
  const [processing, setProcessing] = useState(false);

  const isPaystack =
    selected === "paystack-card" || selected === "paystack-bank";
  const currency =
    ENABLE_USD && selected === "stripe-international" ? "USD" : "NGN";
  const paystackAmount = (Number(total) || 0) * 100;

  const {
    ready,
    processing: paystackProcessing,
    pay,
  } = usePaystack({
    email: donor.email,
    amount: paystackAmount,
    currency,
    onSuccess: async (response) => {
      await onPayment(selected!);
      setProcessing(false);
    },
    onClose: () => setProcessing(false),
  });

  const handlePayment = async () => {
    if (!selected) return;

    if (isPaystack && ready) {
      setProcessing(true);
      pay();
      return;
    }

    if (selected === "stripe-international") {
      setProcessing(true);
      await onPayment(selected);
      setProcessing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handlePayment();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-3">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          You're about to provide{" "}
          <strong>
            {quantity} Survivor's {quantity === 1 ? "Kit" : "Kits"}
          </strong>{" "}
          that will help women and children begin a safe new chapter.{" "}
        </p>{" "}
      </div>
      {/* Donation summary */}
      {/* <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Donation summary
        </h3>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[#5E5752]">
              Survivor's {quantity === 1 ? "Kit" : "Kits"}
            </span>
            <span className="font-semibold text-[#2F1B69]">{quantity}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#5E5752]">Estimated cost per kit</span>
            <span className="font-semibold text-[#2F1B69]">
              {formatCurrency(costPerKit)}
            </span>
          </div>

          <div className="border-t border-[#E8DED5] pt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#2F1B69]">
                Total donation
              </span>
              <span className="font-serif text-2xl font-semibold text-[#43206F]">
                {formatCurrency(total)}
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Donor summary */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-[#FFFDF8] p-6">
        <h4 className="font-semibold text-[#2F1B69]">Donor details</h4>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-[#6B6560]">Name</span>
            <span className="text-right font-medium text-[#2F1B69]">
              {donor.anonymous ? "Anonymous donor" : donor.fullName}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-[#6B6560]">Email</span>
            <span className="text-right font-medium text-[#2F1B69]">
              {donor.email}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-[#6B6560]">Phone</span>
            <span className="text-right font-medium text-[#2F1B69]">
              {donor.phone}
            </span>
          </div>
        </div>
      </div>
      {/* Payment methods */}
      <div className="space-y-5">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Choose a payment method
        </h3>

        <div className="space-y-4">
          {methods.map((method) => {
            const active = selected === method.id;

            return (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelected(method.id)}
                className={`w-full rounded-3xl border p-5 text-left transition-all ${
                  active
                    ? "border-[#43206F] bg-[#F8F4FD] shadow-sm"
                    : "border-[#E5DDD3] bg-white hover:border-[#43206F]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        active
                          ? "bg-[#43206F] text-white"
                          : "bg-[#F3E8FF] text-[#43206F]"
                      }`}
                    >
                      {method.icon}
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-semibold text-[#2F1B69]">
                        {method.title}
                      </h4>
                      <p className="text-sm leading-6 text-[#5E5752]">
                        {method.description}
                      </p>
                    </div>
                  </div>

                  {active && (
                    <CheckCircle2 className="h-6 w-6 text-[#43206F]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* Security panel */}
      {/* <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <Shield className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">Secure payment</h4>

            <p className="text-sm leading-6 text-[#5E5752]">
              Your payment will be processed securely through our trusted
              payment partners. We do not store your card or banking
              information.
            </p>
          </div>
        </div>
      </div> */}
      {/* Pay button */}
      <button
        type="submit"
        disabled={!selected || processing || paystackProcessing}
        className={`w-full rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-wide transition-all ${
          !selected || processing || paystackProcessing
            ? "cursor-not-allowed bg-[#C9B8E3] text-white"
            : "bg-[#43206F] text-white hover:bg-[#341857] active:scale-[0.99]"
        }`}
      >
        {processing || paystackProcessing
          ? "Processing donation..."
          : `Donate ${formatCurrency(total)}`}
      </button>
    </form>
  );
}
