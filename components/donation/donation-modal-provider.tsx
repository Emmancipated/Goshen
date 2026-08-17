"use client";

import { createContext, useCallback, useContext, useMemo, useRef, type ReactNode } from "react";
import { GiveMoneyJourney } from "@/components/donation/give-money-journey";

type DonationModalContextValue = {
  openDonation: () => void;
};

const DonationModalContext = createContext<DonationModalContextValue | null>(null);

export function DonationModalProvider({ children }: { children: ReactNode }) {
  const journeyRef = useRef<{ open: () => void }>(null);

  const openDonation = useCallback(() => {
    journeyRef.current?.open();
  }, []);

  const value = useMemo(() => ({ openDonation }), [openDonation]);

  return (
    <DonationModalContext.Provider value={value}>
      {children}
      <GiveMoneyJourney ref={journeyRef}>
        <span />
      </GiveMoneyJourney>
    </DonationModalContext.Provider>
  );
}

export function useDonationModal() {
  const ctx = useContext(DonationModalContext);
  if (!ctx) throw new Error("useDonationModal must be used within DonationModalProvider");
  return ctx;
}
