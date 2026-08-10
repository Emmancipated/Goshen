"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Modal } from "@/components/modal";
import { ContactOptions } from "@/components/contact-options";
import { ShieldIcon } from "@/components/icons";

type HelpModalContextValue = {
  openHelpModal: (title?: string, intro?: string) => void;
};

const HelpModalContext = createContext<HelpModalContextValue | null>(null);

export function HelpModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Get Help Now");
  const [intro, setIntro] = useState(
    "A trained member of our team is here for you — 24 hours a day, 7 days a week. Choose how you would like to reach us. Everything is confidential.",
  );

  const openHelpModal = useCallback((nextTitle?: string, nextIntro?: string) => {
    if (nextTitle) setTitle(nextTitle);
    if (nextIntro) setIntro(nextIntro);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openHelpModal }), [openHelpModal]);

  return (
    <HelpModalContext.Provider value={value}>
      {children}
      <Modal open={open} onClose={() => setOpen(false)} labelledBy="help-modal-title">
        <div className="p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-white">
            <ShieldIcon className="h-6 w-6" />
          </span>
          <h2 id="help-modal-title" className="mt-4 font-display text-2xl font-semibold text-gold-700">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-night-600">{intro}</p>
          <ContactOptions className="mt-6" />
          <p className="mt-5 rounded-xl bg-cream-100 p-3 text-xs leading-5 text-night-600">
            In an emergency, call <span className="font-bold text-night-900">112</span> — it is free from any network.
            If it is not safe to browse, use the{" "}
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gold-700 underline underline-offset-2">
              Exit
            </a>{" "}
            button and reach out from a safer device.
          </p>
        </div>
      </Modal>
    </HelpModalContext.Provider>
  );
}

export function useHelpModal() {
  const ctx = useContext(HelpModalContext);
  if (!ctx) throw new Error("useHelpModal must be used within HelpModalProvider");
  return ctx;
}
