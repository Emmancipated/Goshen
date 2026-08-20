"use client";

import { Heart, Lock, CreditCard, Building2 } from "lucide-react";
import { DonationType, PaymentMethod } from "./types";

type AmountStepProps = {
  donationType: DonationType;
  paymentMethod: PaymentMethod | null;
  amount: string;
  onAmountChange: (value: string) => void;
  onContinue: () => void;
};

const NAIRA_PRESETS = ["5000", "10000", "25000", "50000", "100000"];
const USD_PRESETS = ["25", "50", "100", "250", "500"];

function formatAmount(value: string, currency: "NGN" | "USD") {
  if (!value) return currency === "NGN" ? "₦0" : "$0";

  const number = Number(value.replace(/,/g, ""));

  if (Number.isNaN(number)) {
    return currency === "NGN" ? `₦${value}` : `$${value}`;
  }

  return currency === "NGN"
    ? new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
      }).format(number)
    : new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(number);
}

export function AmountStep({
  donationType,
  paymentMethod,
  amount,
  onAmountChange,
  onContinue,
}: AmountStepProps) {
  const isUSD =
    paymentMethod === "usd-card" || paymentMethod === "usd-transfer";

  const currency = isUSD ? "USD" : "NGN";
  const symbol = isUSD ? "$" : "₦";
  const presets = isUSD ? USD_PRESETS : NAIRA_PRESETS;

  const paymentLabel = (() => {
    switch (paymentMethod) {
      case "naira-card":
        return "Naira card payment";
      case "usd-card":
        return "USD card payment";
      case "naira-transfer":
        return "Naira bank transfer";
      case "usd-transfer":
        return "USD bank transfer";
      default:
        return "Selected payment method";
    }
  })();

  const paymentIcon =
    paymentMethod === "naira-transfer" || paymentMethod === "usd-transfer" ? (
      <Building2 className="h-5 w-5 text-[#43206F]" />
    ) : (
      <CreditCard className="h-5 w-5 text-[#43206F]" />
    );

  const formattedAmount = formatAmount(amount, currency);

  return (
    <form
      className="space-y-8 pb-5"
      onSubmit={(event) => {
        event.preventDefault();
        onContinue();
      }}
    >
      {/* Intro */}{" "}
      <div className="space-y-3">
        {" "}
        <div className="flex items-center gap-3">
          {" "}
          {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E8FF]">
            {" "}
            <Heart className="h-6 w-6 text-[#43206F]" />{" "}
          </div> */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#43206F]">
              Choose your amount
            </p>
            <p className="text-sm text-[#6B6560]">
              Every contribution makes a meaningful difference.
            </p>
          </div>
        </div>
        {/* <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Select a donation amount or enter a custom amount below.
        </p> */}
      </div>
      {/* Payment summary */}
      {/* <div className="rounded-3xl border border-[#E5DDD3] bg-white p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E8FF]">
            {paymentIcon}
          </div>

          <div className="space-y-1">
            <h4 className="font-semibold text-[#2F1B69]">Payment method</h4>
            <p className="text-sm text-[#5E5752]">{paymentLabel}</p>
          </div>
        </div>
      </div> */}
      {/* Preset amounts */}
      {/* <div className="space-y-4">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Select an amount
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {presets.map((preset) => {
            const selected = amount === preset;

            return (
              <button
                key={preset}
                onClick={() => onAmountChange(preset)}
                className={`rounded-2xl border px-5 py-4 text-center transition-all ${
                  selected
                    ? "border-[#43206F] bg-[#43206F] text-white shadow-md"
                    : "border-[#E5DDD3] bg-white text-[#2F1B69] hover:border-[#43206F] hover:bg-[#F9F7FD]"
                }`}
              >
                <div className="font-semibold">
                  {formatAmount(preset, currency)}
                </div>
              </button>
            );
          })}
        </div>
      </div> */}
      {/* Custom amount */}
      <div className="space-y-3">
        <label
          htmlFor="donation-amount"
          className="text-sm font-semibold text-[#2F1B69]"
        >
          Enter amount
        </label>

        <div className="relative">
          <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl font-semibold text-[#43206F]">
            {symbol}
          </span>

          <input
            id="donation-amount"
            inputMode="numeric"
            value={amount}
            onChange={(e) =>
              onAmountChange(e.target.value.replace(/[^0-9]/g, ""))
            }
            placeholder={isUSD ? "100" : "50000"}
            className="w-full rounded-2xl border border-[#E5DDD3] bg-white py-4 pl-12 pr-4 text-xl font-semibold text-[#2F1B69] outline-none transition-all focus:border-[#43206F] focus:ring-2 focus:ring-[#43206F]/10"
          />
        </div>

        <p className="text-sm text-[#6B6560]">
          Enter the amount you would like to donate.
        </p>
      </div>
      {/* Donation summary */}
      <div className="rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#B31312]">
              Donation summary
            </p>

            <div className="mt-3 font-serif text-3xl font-semibold text-[#2F1B69]">
              {formattedAmount}
            </div>

            <p className="mt-2 text-sm text-[#5E5752]">
              {donationType === "monthly"
                ? "This amount will be charged monthly until you cancel your monthly support."
                : "This is a one-time donation that will be processed securely."}
            </p>
          </div>

          {/* <div className="rounded-full bg-[#FCE8E8] p-3">
            <Heart className="h-6 w-6 text-[#B31312]" />
          </div> */}
        </div>
      </div>
      {/* Continue button */}
      <button
        type="submit"
        disabled={!amount}
        className={`w-full rounded-2xl px-6 py-4 text-base font-bold transition-all ${
          amount
            ? "bg-[#B64A16] text-white hover:bg-[#9E3F12] active:scale-[0.99]"
            : "cursor-not-allowed bg-[#E9E3DE] text-[#9A948E]"
        }`}
      >
        Continue to secure payment
      </button>
      {/* Security footer */}
      {/* <div className="rounded-2xl border border-[#E5DDD3] bg-white p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F3EC]">
            <Lock className="h-5 w-5 text-[#2E7D32]" />
          </div>

          <div>
            <p className="font-semibold text-[#2F1B69]">Secure payment</p>
            <p className="text-sm text-[#5E5752]">
              Your payment will be processed securely through our trusted
              payment partner.
            </p>
          </div>
        </div>
      </div> */}
    </form>
  );
}
