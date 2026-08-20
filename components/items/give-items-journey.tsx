"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Package } from "lucide-react";

import { JourneyModal } from "@/components/journey/journey-modal";
import { GiveItemsStep } from "./give-items-step";
import { ContactMethodStep } from "./contact-method-step";

type ItemStep = "give-items" | "contact-method";
type Direction = 1 | -1;

type GiveItemsJourneyProps = {
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

export function GiveItemsJourney({ children }: GiveItemsJourneyProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<ItemStep>("give-items");
  const [direction, setDirection] = useState<Direction>(1);
  const [history, setHistory] = useState<ItemStep[]>([]);

  const progress = useMemo(() => {
    return step === "give-items"
      ? { current: 1, total: 2 }
      : { current: 2, total: 2 };
  }, [step]);

  const openJourney = () => {
    setStep("give-items");
    setDirection(1);
    setHistory([]);
    setOpen(true);
  };

  const closeJourney = () => {
    setOpen(false);
  };

  const goTo = (next: ItemStep) => {
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

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Goshen Shelters, I would like to donate items. Could you please tell me what items are currently most needed and how I can arrange delivery or collection?",
    );

    window.open(`https://wa.me/2348027775001?text=${message}`, "_blank");
  };

  const callShelter = () => {
    window.location.href = "tel:+2348027775001";
  };

  const title = step === "give-items" ? "Give Items" : "Get in touch";

  const subtitle =
    step === "give-items"
      ? "Practical donations that make a real difference"
      : "Choose the easiest way to arrange your donation";

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
              {step === "give-items" && (
                <GiveItemsStep onContinue={() => goTo("contact-method")} />
              )}

              {step === "contact-method" && (
                <ContactMethodStep
                  onWhatsApp={openWhatsApp}
                  onCall={callShelter}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </JourneyModal>
    </>
  );
}
