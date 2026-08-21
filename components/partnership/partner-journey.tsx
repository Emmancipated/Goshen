"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2 } from "lucide-react";

import { JourneyModal } from "@/components/journey/journey-modal";
import { PartnerStep } from "./partner-step";
import {
  PartnershipFormStep,
  PartnershipFormData,
} from "./partnership-form-step";
import { PartnershipSuccessStep } from "./partnership-success-step";

type PartnerStepKey = "partner-intro" | "partner-form" | "partner-success";

type Direction = 1 | -1;

type PartnerJourneyProps = {
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

export function PartnerJourney({ children }: PartnerJourneyProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<PartnerStepKey>("partner-intro");
  const [direction, setDirection] = useState<Direction>(1);
  const [history, setHistory] = useState<PartnerStepKey[]>([]);

  const [formData, setFormData] = useState<PartnershipFormData>({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    organizationType: "",
    partnershipInterest: "",
    message: "",
    preferredContact: "email",
  });

  const progress = useMemo(() => {
    switch (step) {
      case "partner-intro":
        return { current: 1, total: 3 };
      case "partner-form":
        return { current: 2, total: 3 };
      case "partner-success":
        return { current: 3, total: 3 };
    }
  }, [step]);

  const openJourney = () => {
    setStep("partner-intro");
    setDirection(1);
    setHistory([]);
    setFormData({
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      organizationType: "",
      partnershipInterest: "",
      message: "",
      preferredContact: "email",
    });
    setOpen(true);
  };

  const closeJourney = () => setOpen(false);

  const goTo = (next: PartnerStepKey) => {
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

  const handleSubmit = async (data: PartnershipFormData) => {
    setFormData(data);

    // We'll connect this to Resend later.
    await new Promise((resolve) => setTimeout(resolve, 900));

    goTo("partner-success");
  };

  const title = (() => {
    switch (step) {
      case "partner-intro":
        return "Partner With Us";
      case "partner-form":
        return "Partnership enquiry";
      case "partner-success":
        return "Thank you";
    }
  })();

  const subtitle = (() => {
    switch (step) {
      case "partner-intro":
        return "Create lasting impact through partnership and support";
      case "partner-form":
        return "Tell us about your organization and partnership goals";
      case "partner-success":
        return "We've received your partnership enquiry";
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
        // subtitle={subtitle}
        progress={progress}
        size="md"
        icon={<Building2 className="h-6 w-6" />}
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
              {step === "partner-intro" && (
                <PartnerStep onContinue={() => goTo("partner-form")} />
              )}

              {step === "partner-form" && (
                <PartnershipFormStep
                  initialData={formData}
                  onSubmit={handleSubmit}
                />
              )}

              {step === "partner-success" && (
                <PartnershipSuccessStep
                  organizationName={formData.organizationName}
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
