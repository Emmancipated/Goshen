// "use client";

// import { useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import { ModalShell } from "./modal-shell";
// import { GiveMoneyStep } from "./give-money-step";
// import { MonthlyEmailStep } from "./monthly-email-step";
// import { MonthlySuccessStep } from "./monthly-success-step";
// import { PaymentOptionsStep } from "./payment-options-step";
// import { AmountStep } from "./amount-step";
// import { DonationStep, DonationType, PaymentMethod } from "./types";

// type Direction = 1 | -1;

// const STEP_ORDER: DonationStep[] = [
//   "give-money",
//   "monthly-email",
//   "monthly-success",
//   "payment-options",
//   "amount",
// ];

// const variants = {
//   enter: (direction: Direction) => ({
//     x: direction === 1 ? 36 : -36,
//     opacity: 0,
//     scale: 0.98,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//   },
//   exit: (direction: Direction) => ({
//     x: direction === 1 ? -36 : 36,
//     opacity: 0,
//     scale: 0.98,
//   }),
// };

// export function DonationFlow() {
//   const [open, setOpen] = useState(false);
//   const [step, setStep] = useState<DonationStep>("give-money");
//   const [direction, setDirection] = useState<Direction>(1);

//   const [donationType, setDonationType] = useState<DonationType>("once");

//   const [email, setEmail] = useState("");

//   const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
//     null,
//   );

//   const [amount, setAmount] = useState("");

//   const progress = useMemo(() => {
//     switch (step) {
//       case "give-money":
//         return { current: 1, total: 3 };
//       case "monthly-email":
//         return { current: 2, total: 4 };
//       case "monthly-success":
//         return { current: 3, total: 4 };
//       case "payment-options":
//         return {
//           current: donationType === "monthly" ? 4 : 2,
//           total: donationType === "monthly" ? 5 : 3,
//         };
//       case "amount":
//         return {
//           current: donationType === "monthly" ? 5 : 3,
//           total: donationType === "monthly" ? 5 : 3,
//         };
//       default:
//         return { current: 1, total: 3 };
//     }
//   }, [step, donationType]);

//   const goTo = (next: DonationStep) => {
//     const currentIndex = STEP_ORDER.indexOf(step);
//     const nextIndex = STEP_ORDER.indexOf(next);

//     setDirection(nextIndex >= currentIndex ? 1 : -1);
//     setStep(next);
//   };

//   const openFlow = () => {
//     setDonationType("once");
//     setEmail("");
//     setPaymentMethod(null);
//     setAmount("");
//     setStep("give-money");
//     setDirection(1);
//     setOpen(true);
//   };

//   const closeFlow = () => {
//     setOpen(false);
//   };

//   const handleGiveOnce = () => {
//     setDonationType("once");
//     goTo("payment-options");
//   };

//   const handleGiveMonthly = () => {
//     setDonationType("monthly");
//     goTo("monthly-email");
//   };

//   const handleEmailContinue = (value: string) => {
//     setEmail(value);
//     goTo("monthly-success");
//   };

//   const handlePaymentMethod = (method: PaymentMethod) => {
//     setPaymentMethod(method);
//     goTo("amount");
//   };

//   const handleBack = () => {
//     switch (step) {
//       case "monthly-email":
//         goTo("give-money");
//         break;
//       case "monthly-success":
//         goTo("monthly-email");
//         break;
//       case "payment-options":
//         if (donationType === "monthly") {
//           goTo("monthly-success");
//         } else {
//           goTo("give-money");
//         }
//         break;
//       case "amount":
//         goTo("payment-options");
//         break;
//       default:
//         closeFlow();
//     }
//   };

//   const title = (() => {
//     switch (step) {
//       case "give-money":
//         return "Give Money";
//       case "monthly-email":
//         return "Give Monthly";
//       case "monthly-success":
//         return "Thank You";
//       case "payment-options":
//         return "Choose a Payment Option";
//       case "amount":
//         return "Complete Your Donation";
//       default:
//         return "Give Money";
//     }
//   })();

//   return (
//     <>
//       <button
//         onClick={openFlow}
//         className="inline-flex items-center justify-center rounded-xl bg-[#B64A16] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12]"
//       >
//         Give Now
//       </button>

//       <ModalShell open={open} onClose={closeFlow} title={title}>
//         {/* Progress */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between text-sm">
//             <span className="font-medium text-[#5E5752]">
//               Step {progress.current} of {progress.total}
//             </span>
//             {step !== "give-money" && (
//               <button
//                 onClick={handleBack}
//                 className="font-medium text-[#43206F] hover:underline"
//               >
//                 ← Back
//               </button>
//             )}
//           </div>

//           <div className="mt-3 h-2 rounded-full bg-[#E8DED5]">
//             <motion.div
//               className="h-2 rounded-full bg-[#C9A227]"
//               initial={false}
//               animate={{
//                 width: `${(progress.current / progress.total) * 100}%`,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>
//         </div>

//         {/* Animated content */}
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={step}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               duration: 0.28,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             {step === "give-money" && (
//               <GiveMoneyStep
//                 onGiveOnce={handleGiveOnce}
//                 onGiveMonthly={handleGiveMonthly}
//               />
//             )}

//             {step === "monthly-email" && (
//               <MonthlyEmailStep
//                 defaultEmail={email}
//                 onContinue={handleEmailContinue}
//               />
//             )}

//             {step === "monthly-success" && (
//               <MonthlySuccessStep
//                 email={email}
//                 onContinue={() => goTo("payment-options")}
//               />
//             )}

//             {step === "payment-options" && (
//               <PaymentOptionsStep
//                 onSelect={handlePaymentMethod}
//                 donationType={donationType}
//               />
//             )}

//             {step === "amount" && (
//               <AmountStep
//                 donationType={donationType}
//                 paymentMethod={paymentMethod}
//                 amount={amount}
//                 onAmountChange={setAmount}
//               />
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </ModalShell>
//     </>
//   );
// }

"use client";

import {
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ModalShell } from "./modal-shell";
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

export const DonationFlow = forwardRef(function DonationFlow(_, ref) {
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

  useImperativeHandle(ref, () => ({
    open: openFlow,
  }));

  const progress = useMemo(
    () => getProgress(step, donationType),
    [step, donationType],
  );

  const goTo = (next: DonationStep) => {
    setDirection(1);
    setHistory((prev) => [...prev, step]);
    setStep(next);
  };

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) {
        closeFlow();
        return prev;
      }

      const previous = prev[prev.length - 1];
      setDirection(-1);
      setStep(previous);

      return prev.slice(0, -1);
    });
  };

  const openFlow = () => {
    setDonationType("once");
    setEmail("");
    setPaymentMethod(null);
    setAmount("");
    setHistory([]);
    setDirection(1);
    setStep("give-money");
    setOpen(true);
  };

  const closeFlow = () => {
    setOpen(false);
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

  return (
    <ModalShell
      open={open}
      onClose={closeFlow}
      onBack={goBack}
      canGoBack={history.length > 0}
      title={title}
    >
      {/* Shared progress header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <motion.span
            layoutId="step-label"
            className="text-sm font-medium text-[#5E5752]"
          >
            Step {progress.current} of {progress.total}
          </motion.span>

          {history.length > 0 && (
            <button
              onClick={goBack}
              className="text-sm font-medium text-[#43206F] transition hover:underline"
            >
              ← Back
            </button>
          )}
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#E8DED5]">
          <motion.div
            layoutId="progress-bar"
            className="h-full rounded-full bg-[#C9A227]"
            initial={false}
            animate={{
              width: `${(progress.current / progress.total) * 100}%`,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      </div>

      {/* Animated step content */}
      <div className="relative min-h-130">
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
            className="absolute inset-0"
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
      </div>
    </ModalShell>
  );
});
