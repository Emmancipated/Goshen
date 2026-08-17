"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Phone, MessageCircle, Heart } from "lucide-react";

type KitQuantityStepProps = {
  quantity: number;
  costPerKit: number;
  onQuantityChange: (quantity: number) => void;
  onContinue: (quantity: number) => void;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function KitQuantityStep({
  quantity,
  costPerKit,
  onQuantityChange,
  onContinue,
}: KitQuantityStepProps) {
  const total = quantity * costPerKit;

  const decrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-4">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Your support helps a woman set up a safe and stable home as she begins
          again.{" "}
        </p>
        <p className="leading-8 text-[#5E5752]">
          Choose how many Survivor's Kits you would like to provide. Each kit
          gives a woman the essential household items she needs to start an
          independent life with dignity.
        </p>
      </div>
      {/* Quantity selector */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-white p-8">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
            How many Survivor's Kits would you like to donate?
          </h3>

          {/* <p className="mt-2 text-[#6B6560]">
            Every kit helps one woman establish a safe new beginning.
          </p> */}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={decrease}
            disabled={quantity === 1}
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition ${
              quantity === 1
                ? "cursor-not-allowed border-[#E8DED5] bg-[#F8F4FD] text-[#B8B1AA]"
                : "border-[#43206F] bg-white text-[#43206F] hover:bg-[#43206F] hover:text-white"
            }`}
          >
            <Minus className="h-5 w-5" />
          </button>

          <div className="w-24 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={quantity}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="font-serif text-5xl font-semibold text-[#2F1B69]"
              >
                {quantity}
              </motion.div>
            </AnimatePresence>

            <p className="mt-2 text-sm text-[#7A746F]">
              {quantity === 1 ? "Survivor's Kit" : "Survivor's Kits"}
            </p>
          </div>

          <button
            type="button"
            onClick={increase}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#43206F] bg-white text-[#43206F] transition hover:bg-[#43206F] hover:text-white"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Donation summary */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-[#FFFDF8] p-6">
        <h4 className="font-serif text-xl font-semibold text-[#2F1B69]">
          Donation summary
        </h4>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[#5E5752]">Survivor's Kits</span>
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
              <span className="font-semibold text-[#2F1B69]">Total</span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={total}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="font-serif text-2xl font-semibold text-[#43206F]"
                >
                  {formatCurrency(total)}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Impact panel */}
      {/* <div className="rounded-3xl border border-[#F0D6D6] bg-[#FFF7F7] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E8]">
            <Heart className="h-5 w-5 text-[#B31312]" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#B31312]">Your impact</h4>

            <p className="leading-7 text-[#5E5752]">
              Your donation of{" "}
              <strong>
                {quantity}{" "}
                {quantity === 1 ? "Survivor's Kit" : "Survivor's Kits"}
              </strong>{" "}
              can help{" "}
              <strong>
                {quantity} {quantity === 1 ? "woman" : "women"}
              </strong>{" "}
              move into a safe home with the essential items needed to begin
              rebuilding their lives.
            </p>
          </div>
        </div>
      </div> */}
      {/* Cost note */}
      {/* <div className="rounded-2xl border border-[#E8DED5] bg-[#F8F4FD] p-5">
        <p className="text-sm leading-6 text-[#5E5752]">
          <strong>Please note:</strong> The estimated cost of a Survivor's Kit
          may vary over time. Your donation will be used to provide the most
          essential and current items needed by women leaving the shelter.
        </p>
      </div> */}
      {/* Continue */}
      <button
        onClick={() => onContinue(quantity)}
        className="w-full rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] active:scale-[0.99]"
      >
        Continue
      </button>
      {/* Contact divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#E8DED5]" />
        <span className="text-sm text-[#7A746F]">or donate directly</span>
        <div className="h-px flex-1 bg-[#E8DED5]" />
      </div>
      {/* Contact buttons */}
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href="tel:+2348027775001"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#43206F] px-5 py-4 text-sm font-bold text-[#43206F] transition hover:bg-[#43206F] hover:text-white"
        >
          {/* <Phone className="h-5 w-5" /> */}
          Call us
        </a>

        <a
          href="https://wa.me/2348027775001"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#1FA855] px-5 py-4 text-sm font-bold text-[#1FA855] transition hover:bg-[#1FA855] hover:text-white"
        >
          {/* <MessageCircle className="h-5 w-5" /> */}
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
