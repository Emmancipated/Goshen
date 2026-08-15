"use client";

import { Heart, ShieldCheck } from "lucide-react";

type GiveMoneyStepProps = {
  onGiveOnce: () => void;
  onGiveMonthly: () => void;
};

export function GiveMoneyStep({
  onGiveOnce,
  onGiveMonthly,
}: GiveMoneyStepProps) {
  return (
    <div className="space-y-8 pb-5">
      {/* Intro */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E6E6]">
            <Heart className="h-6 w-6 text-[#B31312]" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8B6A3D]">
              Support women and children
            </p>
            <p className="text-sm text-[#6B6560]">
              Every gift helps provide safety, shelter and hope.
            </p>
          </div>
        </div>

        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Your donation helps provide emergency shelter, nutritious meals,
          counselling, healthcare, education support and practical assistance
          for women and children rebuilding their lives.
        </p>
      </div>

      {/* Choose donation type */}
      <div className="space-y-4">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Choose how you would like to give
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Give once */}
          <button
            onClick={onGiveOnce}
            className="group rounded-3xl border border-[#E5DDD3] bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#43206F] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#43206F]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-serif text-2xl font-semibold text-[#2F1B69]">
                  Give Once
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#5E5752]">
                  Make a one-time donation today and provide immediate support
                  for women and children in need.
                </p>
              </div>

              <div className="rounded-full bg-[#F3E8FF] p-2 transition-colors group-hover:bg-[#43206F]">
                <Heart className="h-5 w-5 text-[#43206F] group-hover:text-white" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#43206F]">
                One-time donation
              </span>
              <span className="text-[#43206F] transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </button>

          {/* Give monthly */}
          <button
            onClick={onGiveMonthly}
            className="group rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#B31312] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B31312]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-serif text-2xl font-semibold text-[#B31312]">
                  Give Monthly
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#5E5752]">
                  Become a regular supporter and help provide consistent,
                  sustainable care throughout the year.
                </p>
              </div>

              <div className="rounded-full bg-[#FCE8E8] p-2 transition-colors group-hover:bg-[#B31312]">
                <Heart className="h-5 w-5 text-[#B31312] group-hover:text-white" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#B31312]">
                Monthly commitment
              </span>
              <span className="text-[#B31312] transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Impact message */}
      <div className="rounded-2xl border border-[#E5DDD3] bg-white p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8E9E9]">
            <Heart className="h-5 w-5 text-[#B31312]" />
          </div>

          <div>
            <h4 className="font-semibold text-[#2F1B69]">
              Your gift creates real impact
            </h4>
            <p className="mt-1 text-sm leading-6 text-[#5E5752]">
              Donations help provide safe accommodation, food, counselling,
              healthcare, education support and practical resources for women
              and children escaping violence.
            </p>
          </div>
        </div>
      </div>

      {/* Security footer */}
      <div className="rounded-2xl border border-[#E5DDD3] bg-white p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F3EC]">
            <ShieldCheck className="h-5 w-5 text-[#2E7D32]" />
          </div>

          <div>
            <p className="font-semibold text-[#2F1B69]">
              Secure and confidential
            </p>
            <p className="text-sm text-[#5E5752]">
              Your donation is processed securely and your information remains
              confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
