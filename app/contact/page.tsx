import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/app/contact/contact-form";
import { HelpButton } from "@/components/help-button";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Goshen Shelters for confidential support, referrals, volunteering or partnership enquiries.",
};

const CONTACT_CARDS = [
  {
    Icon: PhoneIcon,
    title: "Helpline (24/7)",
    lines: ["0802 777 5001", "In an emergency: 112"],
    href: "tel:+2348027775001",
  },
  {
    Icon: WhatsAppIcon,
    title: "WhatsApp",
    lines: ["0802 777 5001"],
    href: "https://wa.me/2348027775001",
    external: true,
  },
  {
    Icon: MailIcon,
    title: "Email",
    lines: ["goshenshelters2026@gmail.com"],
    href: "mailto:goshenshelters2026@gmail.com",
  },
  {
    Icon: MapPinIcon,
    title: "Head office",
    lines: ["45C Sobo Arobiodu Close", "GRA Ikeja, Lagos — 102105"],
    href: "/about",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="We're here for you"
        description="Whether you need help, want to refer someone, or would love to support our work — reach out. Everything is confidential."
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map(({ Icon, title, lines, href, external }, i) => (
              <Reveal key={title} delay={(i % 4) * 70}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group block h-full rounded-2xl border border-night-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-gold-700">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="mt-1 text-sm leading-6 text-night-600">
                      {line}
                    </p>
                  ))}
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Send a message"
                  title="We usually reply within 24 hours"
                  description="Please share only what you are comfortable with. For urgent help, always call us instead."
                  align="left"
                />
                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-cream-100 p-5 transition-colors hover:border hover:border-gold-300">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <p className="text-sm leading-6 text-night-900">
                    Our team is available <span className="font-semibold">24 hours, 7 days a week</span> — including
                    nights, weekends and public holidays. You are never alone.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Reveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-gold-500/40 bg-night-950 p-8 text-cream-50 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">24/7 support</p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Need to talk to someone now?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                A trained member of our team is available at any hour — nights, weekends and holidays. Everything you
                share is confidential.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <HelpButton
                title="Get Help Now"
                intro="A trained member of our team is available 24/7. Choose how you would like to reach us — everything is confidential."
                className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
              >
                Get Help Now
              </HelpButton>
              <a
                href="tel:+2348027775001"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400 px-7 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                0802 777 5001
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
