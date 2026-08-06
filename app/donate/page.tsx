import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { DonateForm } from "@/app/donate/donate-form";
import { HeartIcon, PhoneIcon, SparklesIcon, UsersIcon, BankIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Your kindness keeps our shelters running. Donate to help women and children affected by domestic violence find safety.",
};

const OTHER_WAYS = [
  {
    Icon: UsersIcon,
    title: "Volunteer",
    body: "Give your time — as a counsellor, mentor, driver, teacher or behind the scenes.",
  },
  {
    Icon: HeartIcon,
    title: "Fundraise",
    body: "Run, bake, host a dinner or celebrate a birthday for Goshen. We'll support your campaign.",
  },
  {
    Icon: SparklesIcon,
    title: "Donate items",
    body: "Clothing, toiletries, baby items, food and school supplies are always needed.",
  },
  {
    Icon: BankIcon,
    title: "Corporate support",
    body: "Sponsor a shelter bed, a training programme or a corporate giving match.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support us"
        title="Your kindness makes it possible"
        description="Beds in a safe home, helpline calls, counselling and court support — none of it is free. Every naira you give goes somewhere it is needed."
      />

      <section className="bg-cream-50">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="/images/donate.jpg"
                alt="A helper handing a donation to a woman in need"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/50 to-transparent" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Where your money goes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Every gift changes a story</h2>
            <ul className="mt-6 space-y-3">
              {[
                { amount: "₦5,000", benefit: "a week of warm meals and essentials for a mother and child" },
                { amount: "₦25,000", benefit: "a safe night's shelter for a family fleeing danger" },
                { amount: "₦100,000", benefit: "two weeks of trauma counselling for a survivor" },
              ].map(({ amount, benefit }) => (
                <li key={amount} className="flex items-start gap-3 rounded-xl border border-night-100 bg-white p-4 transition-colors hover:border-gold-300">
                  <span className="shrink-0 font-display text-base font-semibold text-gold-700">{amount}</span>
                  <span className="text-sm leading-6 text-night-600">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-night-900 p-6 text-cream-50 transition-colors hover:border hover:border-gold-500/40">
              <p className="text-sm leading-6 text-white/70">
                <span className="font-bold text-gold-400">Every naira counts.</span> Your gift directly funds shelter,
                three meals daily, clothing, toiletries, healthcare, skills support and education for the women and
                children we serve.
              </p>
            </div>
          </Reveal>

          <DonateForm />
        </div>
      </section>

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-center text-sm text-night-600/80">
            Prefer to give by phone? Call{" "}
            <a href="tel:+2348027775001" className="inline-flex items-center gap-1.5 font-bold text-gold-700 underline underline-offset-4">
              <PhoneIcon className="h-4 w-4" />
              0802 777 5001
            </a>
          </p>
        </Reveal>
      </section>

      <section id="other-ways" className="scroll-mt-24 bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Beyond money"
            title="Other ways to make a difference"
            description="You can give time, skills, items or influence — all of it matters."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OTHER_WAYS.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 4) * 70}>
                <div className="group h-full rounded-2xl border border-night-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-night-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-gold-700">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-night-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-night-900 p-7 text-cream-50 sm:flex-row">
              <p className="max-w-xl text-sm leading-6 text-white/70">
                Want to get involved? We would love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-night-900 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-400"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
