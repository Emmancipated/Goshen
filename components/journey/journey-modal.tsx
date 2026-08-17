"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { createPortal } from "react-dom";

type JourneyModalProps = {
  open: boolean;
  title: string;
  subtitle?: string;
  progress?: {
    current: number;
    total: number;
  };
  icon?: ReactNode;
  onClose: () => void;
  onBack?: () => void;
  canGoBack?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

const modalTransition: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
};

export function JourneyModal({
  open,
  title,
  subtitle,
  progress,
  icon,
  onClose,
  onBack,
  canGoBack = false,
  children,
  size = "md",
}: JourneyModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const widthClass = {
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-3xl",
  }[size];
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={onClose}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-[#1B1430]/55 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            />

            {/* Modal container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 18 }}
                transition={modalTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (
                    canGoBack &&
                    onBack &&
                    info.offset.x > 120 &&
                    info.velocity.x > 350
                  ) {
                    onBack();
                  }
                }}
                className={`flex max-h-[92vh] w-full flex-col overflow-hidden rounded-[34px] bg-[#F7F3EC] shadow-[0_30px_90px_rgba(0,0,0,0.32)] ${widthClass}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile handle */}
                <div className="flex justify-center pt-3 sm:hidden">
                  <div className="h-1.5 w-14 rounded-full bg-[#D8D0C6]" />
                </div>

                {/* Sticky header */}
                <div className="sticky top-0 z-20 border-b border-[#E8DED5] bg-[#F7F3EC]/95 backdrop-blur-md">
                  <div className="px-6 pb-3 pt-3 sm:px-8 sm:pb-4 sm:pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 flex-1 items-start gap-4">
                        {/* Back button */}
                        {canGoBack ? (
                          <button
                            onClick={onBack}
                            className="mt-1 rounded-full p-2 text-[#6F6A65] transition hover:bg-black/5"
                            aria-label="Go back"
                          >
                            <ArrowLeft className="h-5 w-5" />
                          </button>
                        ) : (
                          <div className="w-9" />
                        )}

                        {/* Shared animated icon */}
                        {/* <motion.div
                          layoutId="journey-icon"
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#43206F]"
                        >
                          {icon}
                        </motion.div> */}

                        {/* Shared animated title */}
                        <div className="min-w-0">
                          <motion.h2
                            layoutId="journey-title"
                            className="font-serif text-[2rem] font-semibold leading-tight text-[#2F1B69]"
                          >
                            {title}
                          </motion.h2>

                          {subtitle && (
                            <motion.p
                              layoutId="journey-subtitle"
                              className="mt-1 text-sm leading-6 text-[#6B6560]"
                            >
                              {subtitle}
                            </motion.p>
                          )}

                          <motion.div
                            layoutId="journey-divider"
                            className="mt-3 h-0.75 w-16 rounded-full bg-[#C9A227]"
                          />
                        </div>
                      </div>

                      {/* Close button */}
                      <button
                        onClick={onClose}
                        className="rounded-full p-2 text-[#6F6A65] transition hover:bg-black/5"
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Progress */}
                    {progress && (
                      <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between">
                          <motion.span
                            layoutId="journey-progress-label"
                            className="text-sm font-medium text-[#5E5752]"
                          >
                            Step {progress.current} of {progress.total}
                          </motion.span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#E8DED5]">
                          <motion.div
                            layoutId="journey-progress-bar"
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
                    )}
                  </div>
                </div>

                {/* Scrollable body */}
                <motion.div
                  layout
                  transition={{
                    layout: {
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="flex-1 overflow-y-auto px-6 py-4 sm:px-8 sm:py-4"
                >
                  {children}
                </motion.div>

                {/* Mobile swipe hint */}
                {canGoBack && (
                  <div className="border-t border-[#E8DED5] px-6 py-3 sm:hidden">
                    <p className="text-center text-xs text-[#7A746F]">
                      Swipe right to go back
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
