"use client";

import { useEffect, useState } from "react";
import { BankIcon, CheckIcon, NairaIcon } from "@/components/icons";
import { usePaystack } from "@/hooks/use-paystack";

const PRESET_AMOUNTS = [5000, 10000, 25000, 50000];

const BANK_NAME = process.env.NEXT_PUBLIC_BANK_NAME ?? "";
const BANK_ACCOUNT = process.env.NEXT_PUBLIC_BANK_ACCOUNT ?? "";
const BANK_ACCOUNT_NAME = process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME ?? "";
const PAYSTACK_KEY = process.env.NEXT_PUBLIC_PAYSTACK_KEY ?? "";

type Method = "card" | "bank";

export function DonateForm() {
  const [amount, setAmount] = useState<number | "">(25000);
  const [method, setMethod] = useState<Method>(PAYSTACK_KEY ? "card" : "bank");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const bankDetailsSet = Boolean(
    BANK_NAME && BANK_ACCOUNT && BANK_ACCOUNT_NAME,
  );
  const formatNaira = (value: number) => `₦${value.toLocaleString("en-NG")}`;

  const { ready, processing: paystackProcessing, pay } = usePaystack({
    email: email || "donor@goshenshelters.org",
    amount: Number(amount || 0) * 100,
    currency: "NGN",
    onSuccess: () => {
      setProcessing(false);
      setDone(true);
    },
    onClose: () => setProcessing(false),
  });

  const handleCardDonate = () => {
    if (!ready || !PAYSTACK_KEY) return;
    setProcessing(true);
    pay();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (method === "card") {
      handleCardDonate();
    } else {
      setDone(true);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-night-200 bg-white p-10 text-center shadow-sm">
        <h2 className="mt-5 font-display text-2xl font-semibold text-gold-700">
          {method === "card"
            ? "Thank you for your gift!"
            : "Thank you for choosing to give!"}
        </h2>
        {method === "card" ? (
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-night-600">
            Your {amount ? formatNaira(amount) : "donation"} is being processed.
            You will receive a receipt by email.
          </p>
        ) : bankDetailsSet ? (
          <div className="mx-auto mt-5 max-w-sm space-y-1 rounded-xl bg-cream-100 p-4 text-left text-sm leading-6 text-night-900">
            <p className="font-semibold">Kindly transfer to:</p>
            <p>
              Bank: <span className="font-semibold">{BANK_NAME}</span>
            </p>
            <p>
              Account: <span className="font-semibold">{BANK_ACCOUNT}</span>
            </p>
            <p>
              Account name:{" "}
              <span className="font-semibold">{BANK_ACCOUNT_NAME}</span>
            </p>
            <p className="mt-2 text-xs text-night-600/80">
              Then send your name to{" "}
              <a
                href="https://wa.me/2348027775001"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold-700 underline underline-offset-2"
              >
                0802 777 5001
              </a>{" "}
              on WhatsApp so we can acknowledge your gift.
            </p>
          </div>
        ) : (
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-night-600">
            Please call or WhatsApp us on{" "}
            <a
              href="tel:+2348027775001"
              className="font-semibold text-gold-700 underline underline-offset-2"
            >
              0802 777 5001
            </a>{" "}
            for our bank details, and we will acknowledge your gift personally.
          </p>
        )}
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 rounded-full border border-night-300 px-6 py-2.5 text-sm font-semibold text-night-600 transition-colors hover:bg-cream-100"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-night-100 bg-white p-8 shadow-sm">
      <h2 className="font-display text-xl font-semibold text-gold-700">
        Make a donation
      </h2>
      <p className="mt-1 text-sm text-night-600/80">Choose an amount to give</p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {PRESET_AMOUNTS.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setAmount(value)}
            className={`rounded-xl border px-4 py-3 text-sm font-bold transition-all duration-150 active:scale-[0.97] ${
              amount === value
                ? "border-night-700 bg-gold-500 text-white shadow-md"
                : "border-night-200 bg-cream-50 text-night-900 hover:border-gold-400 hover:bg-cream-100"
            }`}
          >
            {formatNaira(value)}
          </button>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
          Or enter a custom amount
        </span>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-night-200 bg-cream-50 px-4 py-3 focus-within:border-night-500">
          <NairaIcon className="h-5 w-5 text-gold-600" />
          <input
            type="number"
            min={1000}
            inputMode="numeric"
            placeholder="e.g. 75000"
            value={amount === "" ? "" : amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-full bg-transparent text-sm font-semibold text-night-900 outline-none placeholder:font-normal placeholder:text-gold-400"
          />
        </div>
      </label>

      {PAYSTACK_KEY && (
        <>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-600">
            Payment method
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setMethod("card")}
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.97] ${
                method === "card"
                  ? "border-night-700 bg-gold-500 text-white"
                  : "border-night-200 bg-cream-50 text-night-900 hover:border-gold-400"
              }`}
            >
              Card (Paystack)
            </button>
            <button
              type="button"
              onClick={() => setMethod("bank")}
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.97] ${
                method === "bank"
                  ? "border-night-700 bg-gold-500 text-white"
                  : "border-night-200 bg-cream-50 text-night-900 hover:border-gold-400"
              }`}
            >
              <BankIcon className="h-4 w-4" />
              Bank transfer
            </button>
          </div>
        </>
      )}

      {method === "bank" && (
        <div className="mt-4 rounded-xl bg-cream-100 p-4 text-sm leading-6 text-night-900">
          {bankDetailsSet ? (
            <>
              <p className="font-semibold">Transfer directly to:</p>
              <p className="mt-1">
                Bank: <span className="font-semibold">{BANK_NAME}</span>
              </p>
              <p>
                Account: <span className="font-semibold">{BANK_ACCOUNT}</span>
              </p>
              <p>
                Account name:{" "}
                <span className="font-semibold">{BANK_ACCOUNT_NAME}</span>
              </p>
              <p className="mt-2 text-xs text-night-600/80">
                Then send your name to{" "}
                <a
                  href="https://wa.me/2348027775001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold-700 underline underline-offset-2"
                >
                  0802 777 5001
                </a>{" "}
                on WhatsApp so we can acknowledge your gift.
              </p>
            </>
          ) : (
            <p>
              For our bank details, please call or WhatsApp us on{" "}
              <a
                href="tel:+2348027775001"
                className="font-semibold text-gold-700 underline underline-offset-2"
              >
                0802 777 5001
              </a>
              . We will confirm and acknowledge your gift personally.
            </p>
          )}
        </div>
      )}

      {method === "card" && (
        <label className="mt-4 block">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
            Email for your receipt
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-night-200 bg-cream-50 px-4 py-3 text-sm text-night-900 placeholder:text-gold-400 focus:border-night-500 focus:outline-none"
          />
        </label>
      )}

      <button
        type="submit"
        disabled={processing || paystackProcessing || !ready}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {processing || paystackProcessing
          ? "Processing..."
          : `Donate ${amount ? formatNaira(amount) : "now"}`}
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-night-600/70">
        {PAYSTACK_KEY
          ? "Secure online payments via Paystack · direct bank transfer also available."
          : "Bank transfer directly to the foundation · your gift funds shelter, meals, healthcare and skills support."}
      </p>
      </form>
    );
  }
