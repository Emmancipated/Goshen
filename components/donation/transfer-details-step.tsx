"use client";

import { BankIcon, CheckCircle2 } from "@/components/icons";
import { DonationType, PaymentMethod } from "./types";

const WHATSAPP_NUMBER = "2348027775001";

const FALLBACK_NIRA = {
  name: "Gods Home For Women Foundation",
  bank: "Zenith Bank",
  account: "1312875360",
};

const FALLBACK_USD = {
  name: "Gods Home For Women Foundation",
  bank: "Zenith Bank",
  account: "5076215187",
};

const FALLBACK_GBP = {
  name: "Gods Home For Women Foundation",
  bank: "Zenith Bank",
  account: "5061849216",
};

type TransferDetailsStepProps = {
  donationType: DonationType;
  paymentMethod: PaymentMethod;
  onBack: () => void;
  onConfirm: () => void;
};

export function TransferDetailsStep({
  donationType,
  paymentMethod,
  onBack,
  onConfirm,
}: TransferDetailsStepProps) {
  const isUSD =
    paymentMethod === "usd-transfer" || paymentMethod === "usd-card";
  const isGBP =
    paymentMethod === "gbp-transfer" || paymentMethod === "gbp-card";

  const currency = isUSD ? "USD" : isGBP ? "GBP" : "NGN";

  const bankName = isUSD
    ? process.env.NEXT_PUBLIC_USD_BANK_NAME || FALLBACK_USD.bank
    : isGBP
      ? process.env.NEXT_PUBLIC_GBP_BANK_NAME || FALLBACK_GBP.bank
      : process.env.NEXT_PUBLIC_BANK_NAME || FALLBACK_NIRA.bank;
  const bankAccount = isUSD
    ? process.env.NEXT_PUBLIC_USD_BANK_ACCOUNT || FALLBACK_USD.account
    : isGBP
      ? process.env.NEXT_PUBLIC_GBP_BANK_ACCOUNT || FALLBACK_GBP.account
      : process.env.NEXT_PUBLIC_BANK_ACCOUNT || FALLBACK_NIRA.account;
  const bankAccountName = isUSD
    ? process.env.NEXT_PUBLIC_USD_BANK_ACCOUNT_NAME || FALLBACK_USD.name
    : isGBP
      ? process.env.NEXT_PUBLIC_GBP_BANK_ACCOUNT_NAME || FALLBACK_GBP.name
      : process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME || FALLBACK_NIRA.name;

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Goshen Shelters, I have completed my bank transfer to your ${currency} account. Please acknowledge my ${donationType === "monthly" ? "monthly" : "one-time"} donation. Thank you!`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleConfirm = () => {
    openWhatsApp();
    onConfirm();
  };

  return (
    <div className="space-y-8 pb-5">
      {/* Intro */}
      <div className="space-y-3">
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Transfer to our bank account below, then let us know so we can
          acknowledge your {donationType === "monthly" ? "monthly" : "one-time"}{" "}
          donation.
        </p>
      </div>

      {/* Bank details */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-[#2F1B69]">
              Bank transfer details ({currency})
            </h4>
            <div className="space-y-1 text-sm text-[#5E5752]">
              <p>
                <span className="font-semibold text-[#2F1B69]">Bank:</span>{" "}
                {bankName}
              </p>
              <p>
                <span className="font-semibold text-[#2F1B69]">
                  Account number:
                </span>{" "}
                {bankAccount}
              </p>
              <p>
                <span className="font-semibold text-[#2F1B69]">
                  Account name:
                </span>{" "}
                {bankAccountName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              How to complete your transfer
            </h4>
            <ol className="list-inside list-decimal space-y-1 text-sm text-[#5E5752]">
              <li>Open your banking app or visit your bank.</li>
              <li>
                Transfer any amount you wish to give to the account above.
              </li>
              <li>
                Confirm below to notify us on WhatsApp that you have completed
                the transfer.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Confirm button */}
      <button
        type="button"
        onClick={handleConfirm}
        className="w-full rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white transition-all hover:bg-[#1DA84F] active:scale-[0.99]"
      >
        I have completed payment
      </button>
    </div>
  );
}
