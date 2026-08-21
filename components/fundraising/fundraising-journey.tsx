"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";

import { JourneyModal } from "@/components/journey/journey-modal";
import { FundraisingStep } from "./fundraising-step";
import {
  FundraisingFormStep,
  FundraisingFormData,
} from "./fundraising-form-step";
import { FundraisingSuccessStep } from "./fundraising-success-step";

type FundraisingStepKey =
  | "fundraising-intro"
  | "fundraising-form"
  | "fundraising-success";

type Direction = 1 | -1;

type FundraisingJourneyProps = {
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

export function FundraisingJourney({ children }: FundraisingJourneyProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<FundraisingStepKey>("fundraising-intro");
  const [direction, setDirection] = useState<Direction>(1);
  const [history, setHistory] = useState<FundraisingStepKey[]>([]);

  const [formData, setFormData] = useState<FundraisingFormData>({
    name: "",
    email: "",
    phone: "",
    fundraisingType: "",
    message: "",
  });

  const progress = useMemo(() => {
    switch (step) {
      case "fundraising-intro":
        return { current: 1, total: 3 };
      case "fundraising-form":
        return { current: 2, total: 3 };
      case "fundraising-success":
        return { current: 3, total: 3 };
    }
  }, [step]);

  const openJourney = () => {
    setStep("fundraising-intro");
    setDirection(1);
    setHistory([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      fundraisingType: "",
      message: "",
    });
    setOpen(true);
  };

  const closeJourney = () => setOpen(false);

  const goTo = (next: FundraisingStepKey) => {
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

  const handleStartEnquiry = (fundraisingType?: string) => {
    if (fundraisingType) {
      setFormData((prev) => ({
        ...prev,
        fundraisingType,
      }));
    }

    goTo("fundraising-form");
  };

  const handleSubmit = async (data: FundraisingFormData) => {
    setFormData(data);

    // We'll connect this to Resend later.
    await new Promise((resolve) => setTimeout(resolve, 900));

    goTo("fundraising-success");
  };

  const title = (() => {
    switch (step) {
      case "fundraising-intro":
        return "Fundraise for Goshen";
      case "fundraising-form":
        return "Fundraising enquiry";
      case "fundraising-success":
        return "Thank you";
    }
  })();

  const subtitle = (() => {
    switch (step) {
      case "fundraising-intro":
        return "Turn your energy into support for women and children";
      case "fundraising-form":
        return "Tell us about your fundraising idea and how we can support you";
      case "fundraising-success":
        return "We've received your fundraising enquiry";
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
              {step === "fundraising-intro" && (
                <FundraisingStep onContinue={handleStartEnquiry} />
              )}

              {step === "fundraising-form" && (
                <FundraisingFormStep
                  initialData={formData}
                  onSubmit={handleSubmit}
                />
              )}

              {step === "fundraising-success" && (
                <FundraisingSuccessStep
                  name={formData.name}
                  fundraisingType={formData.fundraisingType}
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
