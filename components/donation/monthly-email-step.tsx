"use client";

import { useMemo, useState } from "react";
import { Heart, Mail, ShieldCheck } from "lucide-react";

type MonthlyEmailStepProps = {
  defaultEmail?: string;
  onContinue: (email: string) => void;
};

export function MonthlyEmailStep({
  defaultEmail = "",
  onContinue,
}: MonthlyEmailStepProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [touched, setTouched] = useState(false);

  const isValidEmail = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  const canContinue = isValidEmail;

  return (
    <form
      className="space-y-8 pb-5"
      onSubmit={(event) => {
        event.preventDefault();
        setTouched(true);
        if (canContinue) onContinue(email);
      }}
    >
      {/* Intro */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCE8E8]">
            <Heart className="h-6 w-6 text-[#B31312]" />
          </div> */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#B31312]">
              Monthly commitment
            </p>
            <p className="text-sm text-[#6B6560]">
              Join our community of monthly supporters.
            </p>
          </div>
        </div>

        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Monthly giving provides predictable support that helps us keep beds
          available, provide meals, counselling, healthcare and education
          support for women and children throughout the year.
        </p>
      </div>

      {/* Email field */}
      <div className="space-y-3">
        <label
          htmlFor="monthly-email"
          className="text-sm font-semibold text-[#2F1B69]"
        >
          Email address
        </label>

        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9A948E]" />

          <input
            id="monthly-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="you@example.com"
            className={`w-full rounded-2xl border bg-white py-4 pl-12 pr-4 text-[#2F1B69] outline-none transition-all placeholder:text-[#B0AAA4] ${
              touched
                ? isValidEmail
                  ? "border-[#2E7D32] ring-2 ring-[#2E7D32]/10"
                  : "border-[#B31312] ring-2 ring-[#B31312]/10"
                : "border-[#E5DDD3] focus:border-[#B31312] focus:ring-2 focus:ring-[#B31312]/10"
            }`}
          />
        </div>

        {touched && !isValidEmail && (
          <p className="text-sm text-[#B31312]">
            Please enter a valid email address.
          </p>
        )}

        <p className="text-sm leading-6 text-[#6B6560]">
          We&apos;ll use this email to send your donation receipt and monthly
          giving confirmation.
        </p>
      </div>

      {/* Monthly impact panel */}
      {/* <div className="rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E8]">
            <Heart className="h-5 w-5 text-[#B31312]" />
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#B31312]">
              Your monthly impact
            </h3>

            <div className="space-y-2 text-sm leading-6 text-[#5E5752]">
              <p>• Keep emergency shelter available for women and children</p>
              <p>• Provide meals and essential supplies</p>
              <p>• Support counselling and emotional recovery</p>
              <p>• Help children continue their education safely</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Continue button */}
      <button
        type="submit"
        disabled={!canContinue}
        className={`w-full rounded-2xl px-6 py-4 text-base font-bold transition-all ${
          canContinue
            ? "bg-[#B31312] text-white hover:bg-[#971010] active:scale-[0.99]"
            : "cursor-not-allowed bg-[#E9E3DE] text-[#9A948E]"
        }`}
      >
        Continue
      </button>

      {/* Security footer */}
      <div className="rounded-2xl border border-[#E5DDD3] bg-white p-4">
        <div className="flex items-center gap-3">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F3EC]">
            <ShieldCheck className="h-5 w-5 text-[#2E7D32]" />
          </div> */}

          <div>
            <p className="font-semibold text-[#2F1B69]">
              Your information is protected
            </p>
            <p className="text-sm text-[#5E5752]">
              We respect your privacy and will never share your personal
              information.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
