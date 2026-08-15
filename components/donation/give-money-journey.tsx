"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";

import { JourneyModal } from "@/components/journey/journey-modal";
import { GiveMoneyStep } from "./give-money-step";
import { MonthlyEmailStep } from "./monthly-email-step";
import { MonthlySuccessStep } from "./monthly-success-step";
import { PaymentOptionsStep } from "./payment-options-step";
import { AmountStep } from "./amount-step";

import {
  DonationStep,
  DonationType,
  PaymentMethod,
  INITIAL_DONATION_STATE,
  getProgress,
} from "./types";

type Direction = 1 | -1;

type GiveMoneyJourneyProps = {
  children: ReactNode;
};

const variants = {
  enter: (direction: Direction) => ({
    x: direction === 1 ? 48 : -48,
    opacity: 0,
    scale: 0.985,
    filter: "blur(4px)",
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },

  exit: (direction: Direction) => ({
    x: direction === 1 ? -48 : 48,
    opacity: 0,
    scale: 0.985,
    filter: "blur(4px)",
  }),
};

export function GiveMoneyJourney({ children }: GiveMoneyJourneyProps) {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState<DonationStep>(INITIAL_DONATION_STATE.step);

  const [direction, setDirection] = useState<Direction>(1);

  const [history, setHistory] = useState<DonationStep[]>([]);

  const [donationType, setDonationType] = useState<DonationType>(
    INITIAL_DONATION_STATE.donationType,
  );

  const [email, setEmail] = useState(INITIAL_DONATION_STATE.email);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    INITIAL_DONATION_STATE.paymentMethod,
  );

  const [amount, setAmount] = useState(INITIAL_DONATION_STATE.amount);

  const progress = useMemo(
    () => getProgress(step, donationType),
    [step, donationType],
  );

  const openJourney = () => {
    setDonationType("once");
    setEmail("");
    setPaymentMethod(null);
    setAmount("");
    setHistory([]);
    setDirection(1);
    setStep("give-money");
    setOpen(true);
  };

  const closeJourney = () => {
    setOpen(false);
  };

  const goTo = (next: DonationStep) => {
    setDirection(1);
    setHistory((prev) => [...prev, step]);
    setStep(next);
  };

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) {
        closeJourney();
        return prev;
      }

      const previous = prev[prev.length - 1];
      setDirection(-1);
      setStep(previous);

      return prev.slice(0, -1);
    });
  };

  const handleGiveOnce = () => {
    setDonationType("once");
    goTo("payment-options");
  };

  const handleGiveMonthly = () => {
    setDonationType("monthly");
    goTo("monthly-email");
  };

  const handleEmailContinue = (value: string) => {
    setEmail(value);
    goTo("monthly-success");
  };

  const handlePaymentMethod = (method: PaymentMethod) => {
    setPaymentMethod(method);
    goTo("amount");
  };

  const title = (() => {
    switch (step) {
      case "give-money":
        return "Give Money";
      case "monthly-email":
        return "Give Monthly";
      case "monthly-success":
        return "Thank You";
      case "payment-options":
        return "Choose a Payment Option";
      case "amount":
        return "Complete Your Donation";
    }
  })();

  const subtitle = (() => {
    switch (step) {
      case "give-money":
        return "Support women and children through one-time or monthly giving";
      case "monthly-email":
        return "We'll send your monthly giving confirmation and receipts";
      case "monthly-success":
        return "Your monthly commitment helps provide consistent support";
      case "payment-options":
        return "Choose your preferred payment method";
      case "amount":
        return "Select the amount you would like to give";
    }
  })();

  return (
    <>
      {" "}
      <div onClick={openJourney} className="cursor-pointer">
        {children}{" "}
      </div>
      <JourneyModal
        open={open}
        onClose={closeJourney}
        onBack={goBack}
        canGoBack={history.length > 0}
        title={title}
        subtitle={subtitle}
        progress={progress}
        size="md"
        icon={<Heart className="h-6 w-6" />}
      >
        <motion.div
          layout
          className="relative"
          transition={{
            layout: {
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {step === "give-money" && (
                <GiveMoneyStep
                  onGiveOnce={handleGiveOnce}
                  onGiveMonthly={handleGiveMonthly}
                />
              )}

              {step === "monthly-email" && (
                <MonthlyEmailStep
                  defaultEmail={email}
                  onContinue={handleEmailContinue}
                />
              )}

              {step === "monthly-success" && (
                <MonthlySuccessStep
                  email={email}
                  onContinue={() => goTo("payment-options")}
                />
              )}

              {step === "payment-options" && (
                <PaymentOptionsStep
                  donationType={donationType}
                  onSelect={handlePaymentMethod}
                />
              )}

              {step === "amount" && (
                <AmountStep
                  donationType={donationType}
                  paymentMethod={paymentMethod}
                  amount={amount}
                  onAmountChange={setAmount}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </JourneyModal>
    </>
  );
}
