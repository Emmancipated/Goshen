"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { JourneyModal } from "@/components/journey/journey-modal";
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

  const openHelpModal = useCallback(
    (nextTitle?: string, nextIntro?: string) => {
      if (nextTitle) setTitle(nextTitle);
      if (nextIntro) setIntro(nextIntro);
      setOpen(true);
    },
    [],
  );

  const value = useMemo(() => ({ openHelpModal }), [openHelpModal]);

  return (
    <HelpModalContext.Provider value={value}>
      {children}
      <JourneyModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        subtitle={intro}
        icon={<ShieldIcon className="h-6 w-6" />}
        size="md"
      >
        <div className="space-y-6">
          <ContactOptions />
          <div className="rounded-xl bg-[#F7F3EC] p-4 text-sm text-[#5E5752]">
            In an emergency, call{" "}
            <span className="font-bold text-[#2F1B69]">112</span> — it is free
            from any network.
            {/* If it is not safe to browse, use the{" "}
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#43206F] underline underline-offset-2">
              Exit
            </a>{" "}
            button and reach out from a safer device. */}
          </div>
        </div>
      </JourneyModal>
    </HelpModalContext.Provider>
  );
}

export function useHelpModal() {
  const ctx = useContext(HelpModalContext);
  if (!ctx)
    throw new Error("useHelpModal must be used within HelpModalProvider");
  return ctx;
}
