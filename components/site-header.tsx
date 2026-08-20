"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { useHelpModal } from "@/components/help-modal-provider";
import { useDonationModal } from "@/components/donation/donation-modal-provider";
import { MenuIcon, CloseIcon } from "@/components/icons";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Our Impact" },
  { href: "/support", label: "Support Goshen" },
  // { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { openHelpModal } = useHelpModal();
  const { openDonation } = useDonationModal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-night-100 bg-cream-50/95 shadow-[0_8px_28px_-16px_rgba(17,17,17,0.28)]"
          : "border-night-100/60 bg-cream-50/90"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link rounded-full px-3.5 py-2 text-sm font-medium transition-colors xl:px-4 ${
                isActive(item.href)
                  ? "nav-link-active text-gold-700"
                  : "text-night-600 hover:text-gold-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <button
            type="button"
            onClick={() => openHelpModal()}
            className="hidden items-center gap-2 rounded-full border border-gold-500 px-4 py-2 text-sm font-bold text-gold-700 transition-all hover:bg-gold-500 hover:text-white md:flex"
          >
            Get Help
          </button> */}
          <button
            type="button"
            onClick={openDonation}
            className="hidden rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-gold-600 active:scale-95 sm:inline-block"
          >
            Donate
          </button>
          {/* <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-night-900 bg-night-900 px-3 py-2 text-xs font-bold uppercase tracking-wider text-gold-400 transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-white active:scale-95"
          >
            Exit
          </a> */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-night-100 p-2 text-night-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-night-100 bg-cream-50 lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-gold-100 text-night-900"
                    : "text-night-600 hover:bg-cream-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-night-100 pt-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openHelpModal();
                }}
                className="flex-1 rounded-full border border-gold-500 px-5 py-2.5 text-center text-sm font-bold text-gold-700"
              >
                Get Help
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openDonation();
                }}
                className="flex-1 rounded-full bg-gold-500 px-5 py-2.5 text-center text-sm font-bold text-white"
              >
                Donate
              </button>
            </div>
            <a
              href="tel:+2348027775001"
              className="mt-2 rounded-full border border-night-200 px-5 py-2.5 text-center text-sm font-semibold text-night-600"
            >
              0802 777 5001 (24/7)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
