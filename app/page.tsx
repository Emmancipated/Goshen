import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { FounderVideo } from "@/components/founder-video";
import { HelpButton } from "@/components/help-button";
import {
  ArrowRightIcon,
  HeartIcon,
  PhoneIcon,
  ShieldIcon,
  SparklesIcon,
  UserPlusIcon,
} from "@/components/icons";

const IMPACT_STATS = [
  { value: 174, label: "Women Admitted" },
  { value: 265, label: "Children Supported" },
  { value: 23, label: "Teenage Girls Supported" },
  { value: 22, label: "Rape Cases Supported" },
  { value: 15, label: "Child Sexual Abuse Cases" },
  { value: 7, label: "Babies Born During Shelter Stay" },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night-950 text-cream-50">
      <div aria-hidden="false" className="absolute inset-0">
        <Image
          src="/images/hero/hero-mobile.webp"
          alt="A woman walking away from violence towards safety, support and restoration"
          fill
          sizes="100vw"
          preload
          className="object-cover md:hidden"
        />
        <Image
          src="/images/hero/hero-desktop.webp"
          alt="A woman walking away from violence towards safety, support and restoration"
          fill
          sizes="100vw"
          className="hidden object-cover md:block"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-night-950/95 via-night-950/55 to-night-950/10" />
      <div className="absolute inset-0 bg-linear-to-t from-night-950 via-night-950/10 to-transparent" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
        <div
          className="animate-float-slow absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-24 sm:px-6 lg:min-h-[82svh] lg:pb-24 lg:pt-28">
        <div className="max-w-2xl">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <ShieldIcon className="h-4 w-4 text-gold-400" />
            God&rsquo;s Home for Women Foundation &middot; Goshen Shelters
          </p>
          <h1
            className="animate-fade-up mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            A safe place.
            <br />
            <span className="text-gold-400">A new beginning.</span>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-8 text-white/80"
            style={{ animationDelay: "200ms" }}
          >
            We provide hope, shelter, healing and practical support for women
            escaping domestic violence.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <HelpButton
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
              title="I Need Help"
              intro="You are not alone. We are here for you — a trained member of our team is available 24 hours a day, 7 days a week. Choose how you would like to reach us. Everything is confidential."
            >
              I Need Help
            </HelpButton>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream-50 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[0.98]"
            >
              Donate
            </Link>
          </div>

          <div
            className="animate-fade-up mt-10 flex max-w-xl flex-col gap-3 rounded-2xl border border-gold-500/40 bg-night-950/45 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                  Confidential helpline · 24/7
                </p>
                <a
                  href="tel:+2348027775001"
                  className="font-display text-2xl font-semibold text-white hover:text-gold-300"
                >
                  0802 777 5001
                </a>
              </div>
            </div>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400 px-5 py-2.5 text-sm font-bold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
            >
              Exit site
            </a>
          </div>

          <div
            className="animate-fade-up mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "500ms" }}
          >
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <ShieldIcon className="h-5 w-5 shrink-0 text-gold-400" />
              <p className="text-sm leading-5 text-white/85">
                <span className="font-semibold text-white">
                  100% confidential
                </span>{" "}
                — you are in control, always
              </p>
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <SparklesIcon className="h-5 w-5 shrink-0 text-gold-400" />
              <p className="text-sm leading-5 text-white/85">
                <span className="font-semibold text-white">Since 2015</span> —
                restoring women &amp; children in Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickActions() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <Reveal>
          <HelpButton
            title="I Need Help"
            intro="You are not alone. We are here for you — a trained member of our team is available 24 hours a day, 7 days a week. Choose how you would like to reach us. Everything is confidential."
            className="group flex h-full w-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
              <ShieldIcon className="h-6 w-6" />
            </span>
            <span className="mt-5 font-display text-xl font-semibold text-gold-700">
              I need help
            </span>
            <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
              You are not alone. We are here for you.
            </span>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
              Get Help Now
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </HelpButton>
        </Reveal>

        <Reveal delay={80}>
          <Link
            href="/donate"
            className="group flex h-full flex-col rounded-2xl border border-night-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
              <HeartIcon className="h-6 w-6" />
            </span>
            <span className="mt-5 font-display text-xl font-semibold text-gold-700">
              I want to support
            </span>
            <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
              Your support can change a life.
            </span>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
              Support Us
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={160}>
          <HelpButton
            title="Work With Us"
            intro="Together, we can build a safer tomorrow. Whether you represent a company, church, school or community group, our team would love to talk about partnership. Choose how you would like to reach us."
            className="group flex h-full w-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
              <UserPlusIcon className="h-6 w-6" />
            </span>
            <span className="mt-5 font-display text-xl font-semibold text-gold-700">
              I want to partner
            </span>
            <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
              Together, we can build a safer tomorrow.
            </span>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
              Work With Us
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </HelpButton>
        </Reveal>
      </div>
    </section>
  );
}

function ImpactAndFounder() {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
            Our Impact So Far
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Changing lives. Building hope.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {IMPACT_STATS.map(({ value, label }, i) => (
              <Reveal
                key={label}
                delay={(i % 3) * 70}
                className="rounded-2xl border border-night-100 bg-white p-5 text-center shadow-sm transition-colors hover:border-gold-300"
              >
                <p className="font-display text-2xl font-semibold text-gold-700 sm:text-3xl">
                  <StatCounter value={value} />
                </p>
                <p className="mt-2 text-xs leading-5 text-night-600">{label}</p>
              </Reveal>
            ))}
          </div>
          <Link
            href="/impact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
          >
            View Our Impact
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
            A Message From Our Founder
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Goshen exists
          </h2>
          <div className="mt-8">
            <FounderVideo />
          </div>
          <p className="mt-5 max-w-lg text-sm leading-7 text-night-600">
            Hear the story and vision behind God&rsquo;s Home for Women
            Foundation and Goshen Shelters.
          </p>
          <Link
            href="/media"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-gold-700 underline underline-offset-4 hover:text-gold-600"
          >
            More from our Media
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function SurvivorTestimonial() {
  return (
    <section className="relative overflow-hidden bg-night-950 text-cream-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.1),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Survivor stories"
          title="From fear to freedom"
          description="Anonymised voices of women who found safety, healing and a new beginning at Goshen."
          light
        />
        <Reveal className="mt-12">
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ImpactAndFounder />
      <SurvivorTestimonial />
    </>
  );
}
