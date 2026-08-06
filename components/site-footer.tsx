import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  FacebookIcon,
  InstagramIcon,
  XSocialIcon,
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";

const GET_HELP_LINKS = [
  { href: "/get-help", label: "I need help for myself" },
  { href: "/get-help#worried", label: "I'm worried about someone" },
  { href: "/get-help#cover-your-tracks", label: "Cover your tracks" },
  { href: "/get-help#helplines", label: "Helplines & numbers" },
  { href: "/contact", label: "Make a referral" },
];

const ABOUT_LINKS = [
  { href: "/about", label: "Our story" },
  { href: "/about#impact", label: "Our impact" },
  { href: "/about#mission", label: "Mission & values" },
  { href: "/about#contact", label: "Contact & address" },
];

const SUPPORT_LINKS = [
  { href: "/donate", label: "Donate" },
  { href: "/donate#other-ways", label: "Volunteer" },
  { href: "/donate#other-ways", label: "Fundraise" },
  { href: "/donate#other-ways", label: "Corporate support" },
];

const SOCIALS = [
  { href: "#", label: "Facebook", Icon: FacebookIcon },
  { href: "#", label: "Instagram", Icon: InstagramIcon },
  { href: "#", label: "X (Twitter)", Icon: XSocialIcon },
  {
    href: "https://wa.me/2348027775001",
    label: "WhatsApp",
    Icon: WhatsAppIcon,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-night-900 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            God&rsquo;s Home for Women Foundation is a registered Nigerian NGO, established in 2015, operating Goshen
            Shelters — a refuge providing safety, healing and restoration for women and children affected by domestic
            violence.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-night-800 text-white/70 transition-all hover:-translate-y-1 hover:rotate-6 hover:bg-gold-500 hover:text-night-900"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Get help">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
            Get Help
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {GET_HELP_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-cream-50"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="About and support">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
            About Us
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {ABOUT_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-cream-50"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-cream-50">
            Support Us
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SUPPORT_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-cream-50"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href="tel:+2348027775001" className="hover:text-cream-50">
                0802 777 5001 (24/7 helpline)
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a
                href="https://wa.me/2348027775001"
                className="hover:text-cream-50"
              >
                WhatsApp us
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
                45C Sobo Arobiodu Close, GRA Ikeja, Lagos, Nigeria
              </span>
            </li>
          </ul>
          <p className="mt-5 rounded-xl bg-night-800 p-3 text-xs leading-5 text-white/60">
            <span className="font-semibold text-cream-50">Remember:</span> if it
            is not safe to browse this site, press the{" "}
            <span className="font-semibold text-gold-400">Exit</span> button and
            visit us later from a safer device.
          </p>
        </div>
      </div>

      <div className="border-t border-night-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-gold-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
