"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { DonationType } from "./types";

const WHATSAPP_NUMBER = "2348027775001";

const FALLBACK_NG = {
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
  onBack: () => void;
  onConfirm: () => void;
};

export function TransferDetailsStep({
  donationType,
  onBack,
  onConfirm,
}: TransferDetailsStepProps) {
  const [copiedCurrency, setCopiedCurrency] = useState<string | null>(null);

  const accounts = [
    {
      currency: "Naira (NGN)",
      bank: process.env.NEXT_PUBLIC_BANK_NAME || FALLBACK_NG.bank,
      account: process.env.NEXT_PUBLIC_BANK_ACCOUNT || FALLBACK_NG.account,
      name: process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME || FALLBACK_NG.name,
    },
    {
      currency: "Dollars (USD)",
      bank: process.env.NEXT_PUBLIC_USD_BANK_NAME || FALLBACK_USD.bank,
      account: process.env.NEXT_PUBLIC_USD_BANK_ACCOUNT || FALLBACK_USD.account,
      name: process.env.NEXT_PUBLIC_USD_BANK_ACCOUNT_NAME || FALLBACK_USD.name,
    },
    {
      currency: "Pounds (GBP)",
      bank: process.env.NEXT_PUBLIC_GBP_BANK_NAME || FALLBACK_GBP.bank,
      account: process.env.NEXT_PUBLIC_GBP_BANK_ACCOUNT || FALLBACK_GBP.account,
      name: process.env.NEXT_PUBLIC_GBP_BANK_ACCOUNT_NAME || FALLBACK_GBP.name,
    },
  ];

  const copyAccount = async (currency: string, account: string) => {
    try {
      await navigator.clipboard.writeText(account);
      setCopiedCurrency(currency);
      window.setTimeout(() => setCopiedCurrency(null), 1800);
    } catch {
      setCopiedCurrency(null);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Goshen Shelters, I have completed my bank transfer. Please acknowledge my ${donationType === "monthly" ? "monthly" : "one-time"} donation. Thank you!`,
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
          Transfer to any of our accounts below, then let us know so we can
          acknowledge your {donationType === "monthly" ? "monthly" : "one-time"}{" "}
          donation.
        </p>
      </div>

      {/* Bank details */}
      <div className="space-y-2 md:flex">
        {accounts.map((account) => {
          const copied = copiedCurrency === account.currency;

          return (
            <div
              key={account.currency}
              className="rounded-3xl border border-[#E5DDD3] bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-[#2F1B69]">
                  {account.currency}
                </h4>
                <button
                  type="button"
                  onClick={() => copyAccount(account.currency, account.account)}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#D8CEC4] px-3 py-1.5 text-xs font-semibold text-[#5E5752] transition-colors hover:border-[#43206F] hover:text-[#43206F] focus:outline-none focus:ring-2 focus:ring-[#43206F]/20"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="mt-4 space-y-1 text-sm text-[#5E5752]">
                <p>
                  <span className="font-semibold text-[#2F1B69]">Bank:</span>{" "}
                  {account.bank}
                </p>
                <p>
                  <span className="font-semibold text-[#2F1B69]">
                    Account number:
                  </span>{" "}
                  {account.account}
                </p>
                <p>
                  <span className="font-semibold text-[#2F1B69]">
                    Account name:
                  </span>{" "}
                  {account.name}
                </p>
              </div>
            </div>
          );
        })}
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
