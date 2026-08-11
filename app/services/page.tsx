import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { HelpButton } from "@/components/help-button";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ChildIcon,
  CompassIcon,
  HealthIcon,
  HeartIcon,
  HouseIcon,
  RestoreIcon,
  SparklesIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From temporary shelter and counselling to skills training, education and reintegration — the services Goshen Shelters provides for women and children.",
};

const SERVICES = [
  {
    Icon: HouseIcon,
    title: "Temporary Shelter",
    body: "A safe, confidential home for women and children escaping violence — accommodation, three meals daily, clothing and essentials.",
  },
  {
    Icon: HeartIcon,
    title: "Emotional Restoration",
    body: "Counselling and compassionate support to help survivors heal in mind, body and soul.",
  },
  {
    Icon: RestoreIcon,
    title: "Physical Restoration",
    body: "Time, care and a calm environment to recover physically and rebuild strength and confidence.",
  },
  {
    Icon: SparklesIcon,
    title: "Skills Acquisition",
    body: "Tailoring, culinary and other vocational training so survivors can become self-sufficient.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Employment Support",
    body: "Help securing suitable jobs — including placements at schools, companies and government agencies.",
  },
  {
    Icon: CompassIcon,
    title: "Reintegration",
    body: "Steady support to re-enter society and live peaceful, independent lives away from violence.",
  },
  {
    Icon: ChildIcon,
    title: "Education for Children",
    body: "Enrolling children in new schools quickly to protect their education and emotional wellbeing.",
  },
  {
    Icon: HealthIcon,
    title: "Healthcare Support",
    body: "Access to healthcare so women and children can recover and stay well throughout their stay.",
  },
];

const JOURNEY = [
  {
    step: "01",
    title: "Arrival & safety",
    body: "You are welcomed into a secure, confidential home where you and your children can rest and feel safe for the first time.",
  },
  {
    step: "02",
    title: "Healing",
    body: "Counselling, medical care and a supportive community begin the journey of emotional and physical restoration.",
  },
  {
    step: "03",
    title: "Rebuilding",
    body: "Skills training, education and employment support help you regain confidence and independence.",
  },
  {
    step: "04",
    title: "A new beginning",
    body: "With our support, you move towards reintegration — living a peaceful, independent life away from violence.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Whatever you are facing, we meet you where you are"
        description="We provide hope, shelter, healing and practical support for women escaping domestic violence — with kindness, confidentiality and no judgement."
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Domestic violence services we provide"
            description="Every woman who comes to Goshen is met where she is — with kindness, confidentiality and practical help."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 4) * 70}>
                <div className="group h-full rounded-2xl border border-night-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-all group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-night-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night-950 text-cream-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">The journey of restoration</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              From fear to freedom, step by step
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              Most women stay with us for three to six months, and up to a year where needed. Every journey is
              different — and every one is walked with you, at your pace.
            </p>
            <HelpButton
              title="Get Help Now"
              intro="If you or someone you know needs our support, a trained member of our team is available 24/7. Choose how you would like to reach us — everything is confidential."
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
            >
              Get Help Now
            </HelpButton>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl border border-night-700 shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/community.jpg"
                  alt="Women supporting each other during a group session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map(({ step, title, body }, i) => (
            <Reveal key={step} delay={i * 90}>
              <div className="h-full rounded-2xl border border-night-700 bg-night-900 p-6 transition-colors hover:border-gold-500/50">
                <span className="font-display text-3xl font-semibold text-gold-500/50">{step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-cream-50">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Not sure what you need?</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">We will listen without judgement</h2>
            <p className="mt-3 text-base leading-7 text-night-600">
              A confidential call with us can help you make sense of what is happening and plan your next step — whether
              that is shelter, counselling, legal help or simply someone to listen.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <HelpButton
              title="Talk To Us"
              intro="We will listen without judgement. A trained member of our team is available 24/7 — choose how you would like to reach us. Everything is confidential."
              className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
            >
              Talk to someone
            </HelpButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-night-300 px-7 py-3 text-sm font-semibold text-night-600 transition-all hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Reveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-gold-500/40 bg-night-950 p-8 text-cream-50 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Help another woman find safety</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                Your support funds shelter, meals, counselling, education and skills — every gift changes a story.
              </p>
            </div>
            <Link
              href="/donate"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
            >
              Donate Now
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
