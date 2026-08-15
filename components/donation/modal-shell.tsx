// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { ReactNode, useEffect } from "react";
// import { X } from "lucide-react";

// type ModalShellProps = {
//   open: boolean;
//   title: string;
//   onClose: () => void;
//   children: ReactNode;
// };

// export function ModalShell({
//   open,
//   title,
//   onClose,
//   children,
// }: ModalShellProps) {
//   useEffect(() => {
//     if (!open) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [open, onClose]);

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96, y: 16 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.96, y: 16 }}
//               transition={{
//                 duration: 0.22,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="w-full max-w-xl overflow-hidden rounded-4xl bg-[#F7F3EC] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex items-start justify-between px-8 pt-8">
//                 <div>
//                   <h2 className="font-serif text-[2rem] font-semibold leading-tight text-[#2F1B69]">
//                     {title}
//                   </h2>

//                   {/* Decorative divider */}
//                   <div className="mt-3 h-0.75 w-16 rounded-full bg-[#C9A227]" />
//                 </div>

//                 <button
//                   onClick={onClose}
//                   className="rounded-full p-2 text-[#7A746F] transition hover:bg-black/5"
//                   aria-label="Close"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>

//               {/* Body */}
//               <div className="px-8 pb-8 pt-6">{children}</div>
//             </motion.div>
//           </div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { X, Heart } from "lucide-react";
import { createPortal } from "react-dom";

type ModalShellProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  onBack?: () => void;
  canGoBack?: boolean;
  children: ReactNode;
};

export function ModalShell({
  open,
  title,
  onClose,
  onBack,
  canGoBack = false,
  children,
}: ModalShellProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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

  const modalContent = (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal container */}
          <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (
                  canGoBack &&
                  onBack &&
                  info.offset.x > 120 &&
                  info.velocity.x > 300
                ) {
                  onBack();
                }
              }}
              className="flex pointer-events-auto max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-4xl bg-[#F7F3EC] shadow-[0_30px_80px_rgba(0,0,0,0.32)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile swipe indicator */}
              <div className="flex justify-center pt-3 sm:hidden">
                <div className="h-1.5 w-14 rounded-full bg-[#D9D1C8]" />
              </div>

              {/* Sticky header */}
              <div className="sticky top-0 z-10 bg-[#F7F3EC]/95 px-6 pb-4 pt-5 backdrop-blur-md sm:px-8 sm:pt-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <motion.div
                        layoutId="donation-heart"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FCE8E8]"
                      >
                        <Heart className="h-5 w-5 text-[#B31312]" />
                      </motion.div>

                      <motion.div layoutId="donation-title-group">
                        <motion.h2
                          layoutId="donation-title"
                          className="font-serif text-3xl font-semibold leading-tight text-[#2F1B69]"
                        >
                          {title}
                        </motion.h2>
                      </motion.div>
                    </div>

                    <motion.div
                      layoutId="donation-divider"
                      className="h-0.75 w-16 rounded-full bg-[#C9A227]"
                    />
                  </div>

                  <button
                    onClick={onClose}
                    className="rounded-full p-2 text-[#7A746F] transition hover:bg-black/5"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8">
                {children}
              </div>

              {/* Mobile back hint */}
              {canGoBack && (
                <div className="border-t border-[#E5DDD3] px-6 py-3 sm:hidden">
                  <p className="text-center text-xs text-[#7A746F]">
                    Swipe right to go back
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  if (!isMounted) return null;

  return createPortal(modalContent, document.body);
}
