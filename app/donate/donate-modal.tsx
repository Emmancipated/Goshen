"use client";

import { useState } from "react";
import { Modal } from "@/components/modal";
import { ContactOptions } from "@/components/contact-options";
import { DonateForm } from "@/app/donate/donate-form";
import { ArrowRightIcon, BankIcon, CalendarIcon, CheckIcon, GiftIcon } from "@/components/icons";

const BANK_NAME = process.env.NEXT_PUBLIC_BANK_NAME ?? "";
const BANK_ACCOUNT = process.env.NEXT_PUBLIC_BANK_ACCOUNT ?? "";
const BANK_ACCOUNT_NAME = process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME ?? "";

type Frequency = "one-time" | "monthly" | null;

type DonateModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DonateModal({ open, onClose }: DonateModalProps) {
  const [selected, setSelected] = useState<Frequency>(null);
  const [frequency, setFrequency] = useState<Frequency>(null);
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const reset = () => {
    setSelected(null);
    setFrequency(null);
    setEmail("");
    setConfirmed(false);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy="donate-modal-title" maxWidth="max-w-2xl">
      <div className="p-6 sm:p-8">
        {!frequency && (
          <>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-white">
              <GiftIcon className="h-6 w-6" />
            </span>
            <h2 id="donate-modal-title" className="mt-4 font-display text-2xl font-semibold text-gold-700">
              Choose Your Donation
            </h2>
            <p className="mt-2 text-sm leading-6 text-night-600">
              Whether you give once or every month, your gift funds shelter, meals, healthcare, education and skills for
              women and children.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setSelected("one-time")}
                aria-pressed={selected === "one-time"}
                className={`group rounded-2xl border p-6 text-left transition-all hover:-translate-y-0.5 ${
                  selected === "one-time"
                    ? "border-night-700 bg-gold-500 text-white shadow-md"
                    : "border-night-200 bg-cream-50 hover:border-gold-400"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    selected === "one-time" ? "bg-night-900 text-gold-400" : "bg-gold-100 text-gold-700"
                  }`}
                >
                  <GiftIcon className="h-5 w-5" />
                </span>
                <span className="mt-4 block font-display text-lg font-semibold">One-Time Donation</span>
                <span className={`mt-1 block text-sm leading-5 ${selected === "one-time" ? "text-night-800" : "text-night-600"}`}>
                  A single gift that goes straight to work.
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelected("monthly")}
                aria-pressed={selected === "monthly"}
                className={`group rounded-2xl border p-6 text-left transition-all hover:-translate-y-0.5 ${
                  selected === "monthly"
                    ? "border-night-700 bg-gold-500 text-white shadow-md"
                    : "border-night-200 bg-cream-50 hover:border-gold-400"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    selected === "monthly" ? "bg-night-900 text-gold-400" : "bg-gold-100 text-gold-700"
                  }`}
                >
                  <CalendarIcon className="h-5 w-5" />
                </span>
                <span className="mt-4 block font-display text-lg font-semibold">Monthly Donation</span>
                <span className={`mt-1 block text-sm leading-5 ${selected === "monthly" ? "text-night-800" : "text-night-600"}`}>
                  Reliable, lasting support every month.
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => selected && setFrequency(selected)}
              disabled={!selected}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </>
        )}

        {frequency === "one-time" && (
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 id="donate-modal-title" className="font-display text-xl font-semibold text-gold-700">
                Make a Donation
              </h2>
              <button
                type="button"
                onClick={() => setFrequency(null)}
                className="text-xs font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600"
              >
                Back
              </button>
            </div>
            <DonateForm />
          </div>
        )}

        {frequency === "monthly" && !confirmed && (
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 id="donate-modal-title" className="font-display text-xl font-semibold text-gold-700">
                Monthly Giving
              </h2>
              <button
                type="button"
                onClick={() => setFrequency(null)}
                className="text-xs font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600"
              >
                Back
              </button>
            </div>
            <p className="text-sm leading-6 text-night-600">
              Thank you for choosing to stand with survivors every month. Your monthly gift keeps a bed ready, a
              helpline answered and meals served — all year round.
            </p>

            {BANK_NAME && BANK_ACCOUNT && BANK_ACCOUNT_NAME && (
              <div className="mt-5 rounded-xl border border-night-100 bg-cream-50 p-4 text-sm leading-6 text-night-900">
                <p className="flex items-center gap-2 font-semibold text-gold-700">
                  <BankIcon className="h-4 w-4" />
                  Set up a monthly standing order:
                </p>
                <p className="mt-2">
                  Bank: <span className="font-semibold">{BANK_NAME}</span>
                </p>
                <p>
                  Account: <span className="font-semibold">{BANK_ACCOUNT}</span>
                </p>
                <p>
                  Account name: <span className="font-semibold">{BANK_ACCOUNT_NAME}</span>
                </p>
              </div>
            )}

            <form
              className="mt-5"
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
              }}
            >
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                  Email for monthly reminders
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-night-200 bg-cream-50 px-4 py-3 text-sm text-night-900 placeholder:text-gold-400 focus:border-night-500 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-600 active:scale-[0.98]"
              >
                Set up my monthly gift
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-4 text-xs leading-5 text-night-600/80">
              We will email you a secure link each month to complete your gift — and remind you before each payment, so
              you are never caught off guard.
            </p>
          </div>
        )}

        {frequency === "monthly" && confirmed && (
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-700">
              <CheckIcon className="h-7 w-7" />
            </span>
            <h2 id="donate-modal-title" className="mt-5 font-display text-2xl font-semibold text-gold-700">
              Thank you for your monthly commitment
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-night-600">
              We will send your first reminder to <span className="font-semibold">{email || "your email"}</span>. If
              you would like help setting up a standing order, we are one call away.
            </p>
            <ContactOptions compact className="mt-6" />
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 rounded-full border border-night-300 px-6 py-2.5 text-sm font-semibold text-night-600 transition-colors hover:bg-cream-100"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
