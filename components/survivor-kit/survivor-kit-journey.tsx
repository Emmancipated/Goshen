"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Package } from "lucide-react";

import { JourneyModal } from "@/components/journey/journey-modal";
import { SurvivorKitStep } from "./survivor-kit-step";
import { KitQuantityStep } from "./kit-quantity-step";
import { DonorDetailsStep, DonorDetails } from "./donor-details-step";
import { PaymentStep, PaymentMethod } from "./payment-step";
import { SurvivorKitSuccessStep } from "./survivor-kit-success-step";

type SurvivorKitStepKey =
  | "kit-intro"
  | "kit-quantity"
  | "donor-details"
  | "payment"
  | "kit-success";

type Direction = 1 | -1;

type SurvivorKitJourneyProps = {
  children: ReactNode;
};

// Estimated cost per kit (NGN)
const COST_PER_KIT = 150000;

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

export function SurvivorKitJourney({ children }: SurvivorKitJourneyProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<SurvivorKitStepKey>("kit-intro");
  const [direction, setDirection] = useState<Direction>(1);
  const [history, setHistory] = useState<SurvivorKitStepKey[]>([]);

  const [quantity, setQuantity] = useState(1);

  const [donor, setDonor] = useState<DonorDetails>({
    fullName: "",
    email: "",
    phone: "",
    anonymous: false,
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );

  const total = quantity * COST_PER_KIT;

  const progress = useMemo(() => {
    switch (step) {
      case "kit-intro":
        return { current: 1, total: 5 };
      case "kit-quantity":
        return { current: 2, total: 5 };
      case "donor-details":
        return { current: 3, total: 5 };
      case "payment":
        return { current: 4, total: 5 };
      case "kit-success":
        return { current: 5, total: 5 };
    }
  }, [step]);

  const openJourney = () => {
    setStep("kit-intro");
    setDirection(1);
    setHistory([]);
    setQuantity(1);
    setPaymentMethod(null);
    setDonor({
      fullName: "",
      email: "",
      phone: "",
      anonymous: false,
    });
    setOpen(true);
  };

  const closeJourney = () => setOpen(false);

  const goTo = (next: SurvivorKitStepKey) => {
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

  const handleQuantityContinue = (value: number) => {
    setQuantity(value);
    goTo("donor-details");
  };

  const handleDetailsContinue = async (details: DonorDetails) => {
    setDonor(details);
    goTo("payment");
  };

  const handlePayment = async (method: PaymentMethod) => {
    setPaymentMethod(method);

    // We'll connect this to Paystack / Stripe later.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    goTo("kit-success");
  };

  const title = (() => {
    switch (step) {
      case "kit-intro":
        return "Survivor's Kit";
      case "kit-quantity":
        return "Donate a Survivor's Kit";
      case "donor-details":
        return "Your details";
      case "payment":
        return "Payment";
      case "kit-success":
        return "Thank you";
    }
  })();

  const subtitle = (() => {
    switch (step) {
      case "kit-intro":
        return "Help a survivor start again";
      case "kit-quantity":
        return "Choose how many Survivor's Kits you would like to provide";
      case "donor-details":
        return "Your support helps provide a safe new beginning";
      case "payment":
        return "Complete your donation securely";
      case "kit-success":
        return "Your donation helps women rebuild with dignity";
    }
  })();

  return (
    <>
      {" "}
      <div
        onClick={openJourney}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openJourney();
          }
        }}
      >
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
        icon={<Package className="h-6 w-6" />}
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
              {step === "kit-intro" && (
                <SurvivorKitStep onContinue={() => goTo("kit-quantity")} />
              )}

              {step === "kit-quantity" && (
                <KitQuantityStep
                  quantity={quantity}
                  costPerKit={COST_PER_KIT}
                  onQuantityChange={setQuantity}
                  onContinue={handleQuantityContinue}
                />
              )}

              {step === "donor-details" && (
                <DonorDetailsStep
                  initialData={donor}
                  onContinue={handleDetailsContinue}
                />
              )}

              {step === "payment" && (
                <PaymentStep
                  quantity={quantity}
                  costPerKit={COST_PER_KIT}
                  total={total}
                  donor={donor}
                  paymentMethod={paymentMethod}
                  onPayment={handlePayment}
                />
              )}

              {step === "kit-success" && (
                <SurvivorKitSuccessStep
                  quantity={quantity}
                  donor={donor}
                  onClose={closeJourney}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </JourneyModal>
    </>
  );
}
