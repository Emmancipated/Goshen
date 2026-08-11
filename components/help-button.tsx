"use client";

import type { ReactNode } from "react";
import { useHelpModal } from "@/components/help-modal-provider";

type HelpButtonProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  intro?: string;
};

export function HelpButton({ children, className = "", title, intro }: HelpButtonProps) {
  const { openHelpModal } = useHelpModal();
  return (
    <button type="button" onClick={() => openHelpModal(title, intro)} className={className}>
      {children}
    </button>
  );
}
