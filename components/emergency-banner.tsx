"use client";

import { AlertIcon } from "@/components/icons";
import { useHelpModal } from "@/components/help-modal-provider";

export function EmergencyBanner() {
  const { openHelpModal } = useHelpModal();

  return (
    <div className="bg-night-950 text-cream-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 text-sm sm:px-6">
        <p className="flex min-w-0 items-center gap-2.5">
          <AlertIcon className="h-4 w-4 shrink-0 text-gold-400" />
          <span className="truncate">
            <span className="font-bold text-gold-400">Need urgent help?</span>{" "}
            <span className="hidden sm:inline">We are here for you — </span>
            <a
              href="tel:+2348027775001"
              className="hidden font-semibold underline underline-offset-2 hover:text-gold-300 md:inline"
            >
              0802 777 5001
            </a>
            <span className="hidden lg:inline"> · confidential, 24/7.</span>
          </span>
        </p>
        <button
          type="button"
          onClick={() => openHelpModal()}
          className="shrink-0 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-gold-600 active:scale-95"
        >
          Get Help Now
        </button>
      </div>
    </div>
  );
}
