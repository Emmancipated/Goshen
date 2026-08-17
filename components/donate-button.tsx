"use client";

import { useDonationModal } from "@/components/donation/donation-modal-provider";
import {
  ArrowRightIcon,
  HeartIcon,
  UserPlusIcon,
} from "@/components/icons";

type DonateButtonProps = {
  label?: string;
  icon?: "heart" | "user" | "arrow";
  className?: string;
  children?: React.ReactNode;
};

const iconMap = {
  heart: <HeartIcon className="h-4 w-4" />,
  user: <UserPlusIcon className="h-4 w-4" />,
  arrow: <ArrowRightIcon className="h-4 w-4" />,
};

export function DonateButton({
  label = "Donate",
  icon = "heart",
  className = "",
  children,
}: DonateButtonProps) {
  const { openDonation } = useDonationModal();

  return (
    <button
      type="button"
      onClick={openDonation}
      className={className}
    >
      {children || label}
      {iconMap[icon]}
    </button>
  );
}
