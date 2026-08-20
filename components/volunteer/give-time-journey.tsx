"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

import { JourneyModal } from "@/components/journey/journey-modal";
import { GiveTimeStep } from "./give-time-step";
import { VolunteerFormStep, VolunteerFormData } from "./volunteer-form-step";
import { VolunteerSuccessStep } from "./volunteer-success-step";

type VolunteerStep = "give-time" | "volunteer-form" | "volunteer-success";

type Direction = 1 | -1;

type GiveTimeJourneyProps = {
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

export function GiveTimeJourney({ children }: GiveTimeJourneyProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<VolunteerStep>("give-time");
  const [direction, setDirection] = useState<Direction>(1);
  const [history, setHistory] = useState<VolunteerStep[]>([]);

  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: "",
    email: "",
    phone: "",
    supportArea: "",
    message: "",
    preferredContact: "email",
  });

  const progress = useMemo(() => {
    switch (step) {
      case "give-time":
        return { current: 1, total: 3 };
      case "volunteer-form":
        return { current: 2, total: 3 };
      case "volunteer-success":
        return { current: 3, total: 3 };
    }
  }, [step]);

  const openJourney = () => {
    setStep("give-time");
    setDirection(1);
    setHistory([]);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      supportArea: "",
      message: "",
      preferredContact: "email",
    });
    setOpen(true);
  };

  const closeJourney = () => {
    setOpen(false);
  };

  const goTo = (next: VolunteerStep) => {
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

  const handleSubmit = async (data: VolunteerFormData) => {
    setFormData(data);

    // We will connect this to Resend later.
    await new Promise((resolve) => setTimeout(resolve, 900));

    goTo("volunteer-success");
  };

  const title = (() => {
    switch (step) {
      case "give-time":
        return "Give Your Time";
      case "volunteer-form":
        return "Volunteer enquiry";
      case "volunteer-success":
        return "Thank you";
    }
  })();

  const subtitle = (() => {
    switch (step) {
      case "give-time":
        return "Use your time and skills to support women and children";
      case "volunteer-form":
        return "Tell us how you would like to help";
      case "volunteer-success":
        return "We've received your enquiry";
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
        icon={<HeartHandshake className="h-6 w-6" />}
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
              {step === "give-time" && (
                <GiveTimeStep onContinue={() => goTo("volunteer-form")} />
              )}

              {step === "volunteer-form" && (
                <VolunteerFormStep
                  initialData={formData}
                  onSubmit={handleSubmit}
                />
              )}

              {step === "volunteer-success" && (
                <VolunteerSuccessStep
                  name={formData.fullName}
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
