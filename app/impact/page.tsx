"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import { useDonationModal } from "@/components/donation/donation-modal-provider";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ChildIcon,
  CompassIcon,
  EyeIcon,
  HeartIcon,
  HouseIcon,
  ScaleIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Since 2015, God's Home for Women Foundation has supported hundreds of women and children to move from violence towards safety, recovery, independence and reintegration.",
};

const IMPACT_STATS = [
  { value: 174, label: "women admitted to the shelter" },
  { value: 265, label: "children supported" },
  { value: 23, label: "teenage girls supported" },
  { value: 22, label: "rape cases supported" },
  { value: 15, label: "child sexual abuse cases" },
  { value: 7, label: "babies born during shelter stay" },
];

const STORIES = [
  {
    Icon: HouseIcon,
    title: "Safe Shelter and Protection",
    body: "Goshen Shelters has provided temporary accommodation and protection for women and children escaping domestic violence and sexual abuse.",
  },
  {
    Icon: HeartIcon,
    title: "Family Restoration",
    body: "Ten women were reconciled with their husbands, while two women were safely reunited with their parents.",
  },
  {
    Icon: ChildIcon,
    title: "Education",
    body: "Some women completed tertiary education that had been interrupted by domestic violence. Children were enrolled in new schools as quickly as possible to reduce disruption to their education and psychological wellbeing.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Employment and Economic Independence",
    body: "Some survivors secured paid employment at private schools, private companies and government agencies. Women also attended skills-development programmes in tailoring and culinary professions.",
  },
  {
    Icon: CompassIcon,
    title: "Reintegration",
    body: "Women have been successfully reintegrated into society and are now living peaceful lives away from violence.",
  },
  {
    Icon: UsersIcon,
    title: "Government and Institutional Support",
    body: "With support from DVRS (Domestic Violence Rapid Response System) and the Lagos State Government, some survivors received funding to start businesses and secure their first accommodation.",
  },
  {
    Icon: ScaleIcon,
    title: "Justice and Accountability",
    body: "Some perpetrators were arrested and charged to court. Ten were arraigned and imprisoned with the support of DVRS.",
  },
  {
    Icon: EyeIcon,
    title: "Awareness and Outreach",
    body: "The foundation has increased awareness of domestic violence through social media and word of mouth. Survivors also refer others facing similar experiences.",
  },
];

export default function ImpactPage() {
  const { openDonation } = useDonationModal();

  return (
    <>
      <PageHeader
        eyebrow="Our impact"
        title="Real lives changed since 2015"
        description="Behind every figure is a woman or child whose life changed. These are the numbers and the stories of our work so far."
      />

      <section className="relative overflow-hidden bg-night-950 text-cream-50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.12),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Our impact so far"
            title="Changing lives. Building hope."
            description="Since its establishment, God's Home for Women Foundation has supported women and children to move from violence towards safety, recovery, independence and reintegration."
            light
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {IMPACT_STATS.map(({ value, label }, i) => (
              <Reveal key={label} delay={(i % 3) * 70}>
                <div className="h-full rounded-2xl border border-night-700 bg-night-900 p-6 text-center transition-colors hover:border-gold-500/50">
                  <p className="font-display text-4xl font-semibold text-gold-400">
                    <StatCounter value={value} />
                  </p>
                  <p className="mt-2 text-sm leading-5 text-white/70">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-white/60">
              These journeys include supporting rape survivors, cases of child sexual abuse, child-trafficking and child
              marriage — each woman and child met with care and confidentiality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Stories of change"
            title="From violence to safety, recovery and reintegration"
            description="Behind every figure is a woman or child whose life changed."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STORIES.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 4) * 70}>
                <div className="group h-full rounded-2xl border border-night-100 bg-cream-50 p-7 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
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

      <section className="bg-cream-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Why we do this</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              To remove women from places of violence — and restore them
            </h2>
            <p className="mt-5 text-base leading-7 text-night-600">
              Our aim is to provide temporary shelter while restoring survivors emotionally and physically — healing
              them in mind, body and soul before they are reintegrated into society.
            </p>
            <p className="mt-4 text-base leading-7 text-night-600">
              The shelter currently operates from rented premises in Lagos. Around 90% of its funding is provided by
              members of God&rsquo;s Chosen Women Fellowship. A permanent home and sustainable funding remain our
              greatest needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openDonation}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
              >
                Help us do more
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-night-300 px-7 py-3.5 text-sm font-semibold text-night-600 transition-all hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
              >
                See our services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl border border-night-100 shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/impact.jpg"
                  alt="Survivors of domestic violence at a Goshen Shelters gathering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
                <p className="absolute bottom-0 left-0 p-6 font-display text-xl font-semibold leading-8 text-cream-50">
                  Every woman who arrives is met with hope, not judgement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
