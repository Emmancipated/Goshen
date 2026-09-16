"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDownIcon } from "@/components/icons";

type ScrollCueProps = {
  href: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
  iconClassName?: string;
  positionClassName?: string;
  floating?: boolean;
};

export function ScrollCue({
  href,
  label = "Explore more",
  icon,
  className = "text-white/75 hover:text-white focus-visible:outline-gold-400",
  iconClassName = "text-gold-300",
  positionClassName = "bottom-[3vh] sm:bottom-[4vh] lg:bottom-[5vh]",
  floating = false,
}: ScrollCueProps) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!floating) return;

    const onScroll = () => setVisible(window.scrollY < 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [floating]);

  const cue = (
    <a
      href={href}
      aria-hidden={floating && !visible}
      tabIndex={floating && !visible ? -1 : undefined}
      className={`${floating ? "fixed z-50 bottom-[max(1rem,env(safe-area-inset-bottom))] bg-night-950/85 shadow-lg backdrop-blur-sm" : "absolute"} left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${floating && !visible ? "pointer-events-none translate-y-2 opacity-0" : "opacity-100"} ${!floating ? positionClassName : ""} ${className}`}
    >
      <span>{label}</span>
      {icon ?? (
        <ChevronDownIcon
          className={`animate-scroll-cue h-5 w-5 ${iconClassName}`}
        />
      )}
    </a>
  );

  if (floating) {
    return mounted ? createPortal(cue, document.body) : null;
  }

  return cue;
}
