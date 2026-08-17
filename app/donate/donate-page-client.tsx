"use client";

import { useEffect } from "react";
import { useDonationModal } from "@/components/donation/donation-modal-provider";

export function DonatePageClient() {
  const { openDonation } = useDonationModal();

  useEffect(() => {
    openDonation();
  }, [openDonation]);

  return null;
}
