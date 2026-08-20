"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { useHelpModal } from "@/components/help-modal-provider";
import { useDonationModal } from "@/components/donation/donation-modal-provider";
import {
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@/components/icons";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Our Impact" },
  { href: "/support", label: "Support Goshen" },
  // { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteFooter() {
  const { openHelpModal } = useHelpModal();
  const { openDonation } = useDonationModal();

  return (
    <footer className="bg-night-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Logo dark />
          {/* <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            God&rsquo;s Home for Women Foundation is a registered Nigerian NGO, established in 2015, operating Goshen
            Shelters — a refuge providing safety, healing and restoration for women and children affected by domestic
            violence.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            Goshen was the place of refuge where a family was kept safe and given room to thrive — that is what we offer
            every woman and child who walks through our doors.
          </p> */}
          <div className="mt-8 rounded-2xl border border-night-800 bg-night-900 p-5">
            <p className="text-sm font-semibold text-cream-50">Donate</p>
            <p className="mt-1 text-xs leading-5 text-white/60">
              Every gift funds shelter, meals, healthcare, education and skills
              for women and children.
            </p>
            <button
              type="button"
              onClick={openDonation}
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
            >
              Donate
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-gold-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href="tel:+2348027775001" className="hover:text-cream-50">
                0802 777 5001{" "}
                <span className="text-white/50">(24/7 helpline)</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a
                href="https://wa.me/2348027775001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a
                href="mailto:goshenshelters2026@gmail.com"
                className="hover:text-cream-50"
              >
                goshenshelters2026@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                Head office: 45C Sobo Arobiodu Close, GRA Ikeja, Lagos
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
            Get Help
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Need urgent help? We are here for you.
          </p>
          <button
            type="button"
            onClick={() => openHelpModal()}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-95"
          >
            Get Help Now
          </button>
        </div>
      </div>

      <div className="border-t border-night-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-gold-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} Goshen Shelters. All rights
            reserved.
          </p>
          <p>
            Registered NGO with the Corporate Affairs Commission, Nigeria
            &middot; CAC No. CAC/IT/No/77215
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cream-50">
              Privacy
            </a>
            <a href="#" className="hover:text-cream-50">
              Policies
            </a>
            <a href="#" className="hover:text-cream-50">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
