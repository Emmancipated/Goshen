import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SupportOptions } from "@/app/donate/support-options";
import { LockIcon, ShieldIcon, HeartIcon, PhoneIcon } from "@/components/icons";
import { DonatePageClient } from "@/app/donate/donate-page-client";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give hope. Restore dignity. Change lives. Support God's Home for Women Foundation and Goshen Shelters by donating, volunteering, giving items, partnering or fundraising.",
};

export default function DonatePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night-950 text-cream-50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="animate-float-slow absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.14),transparent_60%)]" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 pb-24 pt-16 sm:px-6 lg:pt-24">
          <h1 className="animate-fade-up max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Give Hope.
            <br />
            Restore Dignity.
            <br />
            <span className="text-gold-400">Change Lives.</span>
          </h1>
          <a
            href="#ways"
            className="animate-fade-up inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
            style={{ animationDelay: "150ms" }}
          >
            Donate Now
          </a>
          <a
            href="tel:+2348027775001"
            className="animate-fade-up inline-flex items-center gap-2 text-sm text-cream-100/90 transition-colors hover:text-gold-300"
            style={{ animationDelay: "250ms" }}
          >
            <PhoneIcon className="h-4 w-4 text-gold-400" />
            Confidential help 24/7 on 0802 777 5001
          </a>
        </div>
      </section>

      <section id="ways" className="scroll-mt-20 bg-cream-50">
        <Reveal>
          <SupportOptions />
        </Reveal>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl border border-night-100 bg-cream-50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <LockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-night-900">Secure &amp; confidential</p>
                <p className="mt-1 text-xs leading-5 text-night-600">
                  Payments are processed securely via Paystack. We never collect or store your card details.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-night-100 bg-cream-50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-night-900">Every naira counts</p>
                <p className="mt-1 text-xs leading-5 text-night-600">
                  Your gift funds shelter, three meals daily, clothing, healthcare, education and skills support.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-night-100 bg-cream-50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <HeartIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-night-900">Acknowledgement</p>
                <p className="mt-1 text-xs leading-5 text-night-600">
                  You will receive a receipt by email, and the Foundation is notified of every successful gift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DonatePageClient />
    </>
  );
}
