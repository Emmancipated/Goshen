"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { ServiceDetail } from "@/app/our-work/our-work-data";

type ServiceModalProps = {
  service: ServiceDetail | null;
  open: boolean;
  onClose: () => void;
};

const modalTransition = {
  type: "spring" as const,
  stiffness: 320,
  damping: 30,
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function ServiceModal({ service, open, onClose }: ServiceModalProps) {
  const [mounted, setMounted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  /*
   * This always runs in the same hook order.
   * We do not conditionally call hooks before the mounted check.
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * Handle:
   * - body scroll locking
   * - Escape
   * - focus entering the modal
   * - focus returning to the originating Learn More button
   * - focus trapping
   */
  useEffect(() => {
    if (!open || !service || !mounted) {
      return;
    }

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    /*
     * Give the modal time to mount before moving focus.
     */
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const modal = modalRef.current;

      if (!modal) {
        return;
      }

      const focusableElements = Array.from(
        modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter(
        (element) =>
          !element.hasAttribute("disabled") && element.offsetParent !== null,
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);

      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleKeyDown);

      /*
       * Return focus to the Learn More button
       * that opened the modal.
       */
      window.setTimeout(() => {
        previouslyFocusedRef.current?.focus();
      }, 0);
    };
  }, [open, service, mounted, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && service && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-100 bg-[#1B1430]/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            aria-hidden="true"
            onMouseDown={onClose}
          />

          {/* Modal positioning layer */}
          <div
            className="fixed inset-0 z-101 flex items-center justify-center p-3 sm:p-6"
            onMouseDown={onClose}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              aria-describedby="service-modal-description"
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 18,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 18,
              }}
              transition={modalTransition}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              className="
                flex
                max-h-[90vh]
                w-full
                max-w-2xl
                flex-col
                overflow-hidden
                rounded-[30px]
                bg-[#F7F3EC]
                shadow-[0_30px_90px_rgba(0,0,0,0.32)]
              "
            >
              {/* Header */}
              <div
                className="
                  shrink-0
                  border-b
                  border-[#E8DED5]
                  bg-[#F7F3EC]
                  px-6
                  py-5
                  sm:px-8
                  sm:py-7
                "
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B64A16]">
                      Our Work
                    </p>

                    <h2
                      id="service-modal-title"
                      className="
                        mt-2
                        font-serif
                        text-2xl
                        font-semibold
                        leading-tight
                        text-[#2F1B69]
                        sm:text-3xl
                      "
                    >
                      {service.title}
                    </h2>

                    <div className="mt-3 h-0.5 w-14 rounded-full bg-[#C9A227]" />
                  </div>

                  {/*
                   * Text is used rather than a decorative icon because
                   * the requirements explicitly prohibit icons inside
                   * service pop-ups.
                   */}
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    className="
                      shrink-0
                      rounded-full
                      px-3
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#6F6A65]
                      transition
                      hover:bg-black/5
                      hover:text-[#2F1B69]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#C9A227]
                      focus:ring-offset-2
                      cursor-pointer
                    "
                    aria-label={`Close ${service.title} details`}
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Scrollable content */}
              <div
                id="service-modal-description"
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  px-6
                  py-6
                  sm:px-8
                  sm:py-8
                "
              >
                <div className="max-w-xl">
                  <p className="text-base leading-7 text-[#4E4742]">
                    {service.description}
                  </p>

                  <div className="mt-7">
                    <h3 className="font-serif text-lg font-semibold text-[#2F1B69]">
                      How we support survivors
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="
                            relative
                            pl-5
                            text-sm
                            leading-6
                            text-[#5E5752]
                            before:absolute
                            before:left-0
                            before:top-[0.65rem]
                            before:h-1.5
                            before:w-1.5
                            before:-translate-y-1/2
                            before:rounded-full
                            before:bg-[#43206F]
                          "
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              {/* <div
                className="
                  shrink-0
                  border-t
                  border-[#E8DED5]
                  bg-[#F7F3EC]
                  px-6
                  py-4
                  sm:px-8
                "
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-[#7A746F]">
                    Need support or have questions?
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#43206F]
                      px-6
                      py-3
                      text-sm
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                      transition
                      hover:bg-[#351657]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#C9A227]
                      focus:ring-offset-2
                    "
                  >
                    Close Details
                  </button>
                </div>
              </div> */}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
