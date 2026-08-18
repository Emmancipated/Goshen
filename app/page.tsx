// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Reveal } from "@/components/reveal";
// import { SectionHeading } from "@/components/section-heading";
// import { StatCounter } from "@/components/stat-counter";
// import { TestimonialCarousel } from "@/components/testimonial-carousel";
// import { FounderVideo } from "@/components/founder-video";
// import { HelpButton } from "@/components/help-button";
// import { useDonationModal } from "@/components/donation/donation-modal-provider";
// import {
//   ArrowRightIcon,
//   HeartIcon,
//   PhoneIcon,
//   ShieldIcon,
//   SparklesIcon,
//   UserPlusIcon,
// } from "@/components/icons";

// const IMPACT_STATS = [
//   { value: 174, label: "Women Admitted" },
//   { value: 265, label: "Children Supported" },
//   { value: 23, label: "Teenage Girls Supported" },
//   { value: 22, label: "Rape Cases Supported" },
//   { value: 15, label: "Child Sexual Abuse Cases" },
//   { value: 7, label: "Babies Born During Shelter Stay" },
// ];

// function Hero() {
//   const { openDonation } = useDonationModal();

//   return (
//     <section className="relative isolate overflow-hidden bg-night-950 text-cream-50">
//       <div aria-hidden="false" className="absolute inset-0">
//         <Image
//           src="/images/hero/hero-mobile.webp"
//           alt="A woman walking away from violence towards safety, support and restoration"
//           fill
//           sizes="100vw"
//           preload
//           className="object-cover md:hidden"
//         />
//         <Image
//           src="/images/hero/hero-desktop.webp"
//           alt="A woman walking away from violence towards safety, support and restoration"
//           fill
//           sizes="100vw"
//           className="hidden object-cover md:block"
//         />
//       </div>

//       <div className="absolute inset-0 bg-linear-to-r from-night-950/95 via-night-950/55 to-night-950/10" />
//       <div className="absolute inset-0 bg-linear-to-t from-night-950 via-night-950/10 to-transparent" />

//       <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//         <div className="animate-float-slow absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
//         <div
//           className="animate-float-slow absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
//           style={{ animationDelay: "2.5s" }}
//         />
//       </div>

//       <div className="relative mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-24 sm:px-6 lg:min-h-[82svh] lg:pb-24 lg:pt-28">
//         <div className="max-w-2xl">
//           <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
//             <ShieldIcon className="h-4 w-4 text-gold-400" />
//             God&rsquo;s Home for Women Foundation &middot; Goshen Shelters
//           </p>
//           <h1
//             className="animate-fade-up mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
//             style={{ animationDelay: "100ms" }}
//           >
//             A safe place.
//             <br />
//             <span className="text-gold-400">A new beginning.</span>
//           </h1>
//           <p
//             className="animate-fade-up mt-6 max-w-xl text-lg leading-8 text-white/80"
//             style={{ animationDelay: "200ms" }}
//           >
//             We provide hope, shelter, healing and practical support for women
//             escaping domestic violence.
//           </p>

//           <div
//             className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
//             style={{ animationDelay: "300ms" }}
//           >
//             <HelpButton
//               // className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
//               className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream-50 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[0.98]"
//               title="I Need Help"
//               intro="You are not alone. We are here for you — a trained member of our team is available 24 hours a day, 7 days a week. Choose how you would like to reach us. Everything is confidential."
//             >
//               I Need Help
//             </HelpButton>
//             <button
//               type="button"
//               onClick={openDonation}
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
//             >
//               Donate
//             </button>
//           </div>

//           <div
//             className="animate-fade-up mt-10 flex max-w-xl flex-col gap-3 rounded-2xl border border-gold-500/40 bg-night-950/45 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
//             style={{ animationDelay: "400ms" }}
//           >
//             <div className="flex items-center gap-4">
//               <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
//                 <PhoneIcon className="h-5 w-5" />
//               </span>
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
//                   Confidential helpline · 24/7
//                 </p>
//                 <a
//                   href="tel:+2348027775001"
//                   className="font-display text-2xl font-semibold text-white hover:text-gold-300"
//                 >
//                   0802 777 5001
//                 </a>
//               </div>
//             </div>
//             <a
//               href="https://www.google.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400 px-5 py-2.5 text-sm font-bold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
//             >
//               Exit site
//             </a>
//           </div>

//           <div
//             className="animate-fade-up mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
//             style={{ animationDelay: "500ms" }}
//           >
//             <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
//               <ShieldIcon className="h-5 w-5 shrink-0 text-gold-400" />
//               <p className="text-sm leading-5 text-white/85">
//                 <span className="font-semibold text-white">
//                   100% confidential
//                 </span>{" "}
//                 — you are in control, always
//               </p>
//             </div>
//             <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
//               <SparklesIcon className="h-5 w-5 shrink-0 text-gold-400" />
//               <p className="text-sm leading-5 text-white/85">
//                 <span className="font-semibold text-white">Since 2015</span> —
//                 restoring women &amp; children in Nigeria
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function QuickActions() {
//   const { openDonation } = useDonationModal();

//   return (
//     <section className="bg-cream-50">
//       <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-3">
//         <Reveal>
//           <HelpButton
//             title="I Need Help"
//             intro="You are not alone. We are here for you — a trained member of our team is available 24 hours a day, 7 days a week. Choose how you would like to reach us. Everything is confidential."
//             className="group flex h-full w-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
//           >
//             <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
//               <ShieldIcon className="h-6 w-6" />
//             </span>
//             <span className="mt-5 font-display text-xl font-semibold text-gold-700">
//               I need help
//             </span>
//             <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
//               You are not alone. We are here for you.
//             </span>
//             <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
//               Get Help Now
//               <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </span>
//           </HelpButton>
//         </Reveal>

//         <Reveal delay={80}>
//           <button
//             type="button"
//             onClick={openDonation}
//             className="group flex h-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
//           >
//             <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
//               <HeartIcon className="h-6 w-6" />
//             </span>
//             <span className="mt-5 font-display text-xl font-semibold text-gold-700">
//               I want to support
//             </span>
//             <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
//               Your support can change a life.
//             </span>
//             <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
//               Support Us
//               <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </span>
//           </button>
//         </Reveal>

//         <Reveal delay={160}>
//           <HelpButton
//             title="Work With Us"
//             intro="Together, we can build a safer tomorrow. Whether you represent a company, church, school or community group, our team would love to talk about partnership. Choose how you would like to reach us."
//             className="group flex h-full w-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
//           >
//             <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
//               <UserPlusIcon className="h-6 w-6" />
//             </span>
//             <span className="mt-5 font-display text-xl font-semibold text-gold-700">
//               I want to partner
//             </span>
//             <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
//               Together, we can build a safer tomorrow.
//             </span>
//             <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
//               Work With Us
//               <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </span>
//           </HelpButton>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function ImpactAndFounder() {
//   return (
//     <section className="bg-cream-100">
//       <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
//         <Reveal>
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
//             Our Impact So Far
//           </p>
//           <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
//             Changing lives. Building hope.
//           </h2>
//           <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
//             {IMPACT_STATS.map(({ value, label }, i) => (
//               <Reveal
//                 key={label}
//                 delay={(i % 3) * 70}
//                 className="rounded-2xl border border-night-100 bg-white p-5 text-center shadow-sm transition-colors hover:border-gold-300"
//               >
//                 <p className="font-display text-2xl font-semibold text-gold-700 sm:text-3xl">
//                   <StatCounter value={value} delay={50} speed={0.4} />
//                 </p>
//                 <p className="mt-2 text-xs leading-5 text-night-600">{label}</p>
//               </Reveal>
//             ))}
//           </div>
//           <Link
//             href="/impact"
//             className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
//           >
//             View Our Impact
//             <ArrowRightIcon className="h-4 w-4" />
//           </Link>
//         </Reveal>

//         <Reveal delay={100}>
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
//             A Message From Our Founder
//           </p>
//           <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
//             Why Goshen exists
//           </h2>
//           <div className="mt-8">
//             <FounderVideo />
//           </div>
//           <p className="mt-5 max-w-lg text-sm leading-7 text-night-600">
//             Hear the story and vision behind God&rsquo;s Home for Women
//             Foundation and Goshen Shelters.
//           </p>
//           <Link
//             href="/media"
//             className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-gold-700 underline underline-offset-4 hover:text-gold-600"
//           >
//             More from our Media
//             <ArrowRightIcon className="h-4 w-4" />
//           </Link>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function SurvivorTestimonial() {
//   return (
//     <section className="relative overflow-hidden bg-night-950 text-cream-50">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.1),transparent_65%)]"
//       />
//       <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
//         <SectionHeading
//           eyebrow="Survivor stories"
//           title="From fear to freedom"
//           description="Anonymised voices of women who found safety, healing and a new beginning at Goshen."
//           light
//         />
//         <Reveal className="mt-12">
//           <TestimonialCarousel />
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <QuickActions />
//       <ImpactAndFounder />
//       <SurvivorTestimonial />
//     </>
//   );
// }

"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { StatCounter } from "@/components/stat-counter";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { FounderVideo } from "@/components/founder-video";
import { HelpButton } from "@/components/help-button";
import { useDonationModal } from "@/components/donation/donation-modal-provider";
import {
  ArrowRightIcon,
  HeartIcon,
  PhoneIcon,
  ShieldIcon,
  SparklesIcon,
  UserPlusIcon,
} from "@/components/icons";

const SITE = {
  helplineDisplay: "0802 777 5001",
  helplineTel: "+2348027775001",
  whatsapp: "https://wa.me/2348027775001",
  email: "hello@goshenshelters.org",
  address: "Lagos, Nigeria",
  maps: "https://maps.google.com/?q=Goshen+Shelters+Lagos",
  exitUrl: "https://www.google.com/",
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/impact", label: "Our Impact" },
  { href: "/support", label: "Support Goshen" },
  { href: "/media", label: "Media" },
  { href: "/donate", label: "Donate" },
];

const SUPPORT_LINKS = [
  { href: "/support#give-money", label: "Give Money" },
  { href: "/support#give-items", label: "Give Items" },
  { href: "/support#give-time", label: "Give Your Time" },
  { href: "/support#partner", label: "Partner With Us" },
  { href: "/support#fundraise", label: "Fundraising" },
  { href: "/support#survivor-kits", label: "Survivor Kits" },
];

const IMPACT_HEADLINE = [
  { value: 174, label: "Women Supported" },
  { value: 265, label: "Children Supported" },
];

const IMPACT_SUPPORTING = [
  { value: 23, label: "Teenage Girls Supported" },
  { value: 22, label: "Rape Cases Supported" },
  { value: 15, label: "Child Sexual Abuse Cases" },
  { value: 7, label: "Babies Born During Shelter Stay" },
  // Add the seventh approved statistic here when Impact confirms it. Do not invent a figure.
];

const PARTNERS = [
  // { name: "Access Bank", src: "/images/partners/access.svg" },
  // { name: "Fidelity Bank", src: "/images/partners/fidelity.svg" },
  // { name: "MacArthur Foundation", src: "/images/partners/macarthur.svg" },
  // { name: "United Way", src: "/images/partners/united-way.svg" },
  // { name: "Ford Foundation", src: "/images/partners/ford.svg" },
  // { name: "LSETF", src: "/images/partners/lsetf.svg" },
  { name: "LeadWay Assurance", src: "/images/leadway.jpeg" },
  { name: "Little Saint Orphanage", src: "/images/littlesaint.png" },
  { name: "Dsvrt", src: "/images/dsvrt.jpeg" },
  { name: "LeadWay Assurance1", src: "/images/leadway.jpeg" },
  { name: "Little Saint Orphanage1", src: "/images/littlesaint.png" },
  { name: "Dsvrt1", src: "/images/dsvrt.jpeg" },
];

const HELP_INTRO =
  "You are not alone. We are here for you — a trained member of our team is available 24 hours a day, 7 days a week. Choose how you would like to reach us. Everything is confidential.";

const PARTNER_INTRO =
  "Together, we can build a safer tomorrow. Whether you represent a company, church, school or community group, our team would love to talk about partnership. Choose how you would like to reach us.";

function EmergencyHelpBar() {
  return (
    <div className="bg-night-950 text-cream-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <p className="text-sm">
          Need urgent help? We are here for you —{" "}
          <a
            href={`tel:${SITE.helplineTel}`}
            className="font-semibold underline-offset-2 hover:underline"
            data-analytics="helpline-top-bar"
          >
            {SITE.helplineDisplay}
          </a>
        </p>
        <HelpButton
          title="I Need Help"
          intro={HELP_INTRO}
          className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-night-950 transition hover:bg-cream-50"
          data-analytics="get-help-now-top-bar"
        >
          Get Help Now
        </HelpButton>
      </div>
    </div>
  );
}

function SiteHeader() {
  const { openDonation } = useDonationModal();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-40 border-b border-night-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Goshen Shelters home"
        >
          <Image
            src="/images/logo.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-night-950">
            Goshen Shelters
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.label === "Donate" ? (
              <button
                key={item.href}
                type="button"
                onClick={openDonation}
                className="text-sm font-medium text-night-700 transition hover:text-night-950"
                data-analytics="nav-donate"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-night-700 transition hover:text-night-950"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <HelpButton
            title="I Need Help"
            intro={HELP_INTRO}
            className="hidden rounded-full border border-night-950 px-4 py-2 text-xs font-bold uppercase tracking-wider text-night-950 transition hover:bg-night-950 hover:text-white sm:inline-flex"
            data-analytics="header-get-help"
          >
            Get Help
          </HelpButton>
          <button
            type="button"
            onClick={openDonation}
            className="hidden rounded-full bg-night-950 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-night-800 sm:inline-flex"
            data-analytics="header-donate"
          >
            Donate
          </button>
          <a
            href={SITE.exitUrl}
            className="rounded-full border border-night-200 px-3 py-2 text-xs font-bold uppercase tracking-wider text-night-700 hover:bg-cream-50"
            data-analytics="exit-site"
          >
            Exit
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-night-200 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id={menuId}
          className="border-t border-night-100 bg-white px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                {item.label === "Donate" ? (
                  <button
                    type="button"
                    onClick={() => {
                      openDonation();
                      setOpen(false);
                    }}
                    className="text-sm font-medium text-night-800"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-night-800"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { openDonation } = useDonationModal();

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
          {/* <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <ShieldIcon className="h-4 w-4 text-gold-400" />
            God&rsquo;s Home for Women Foundation &middot; Goshen Shelters
          </p> */}
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
              // className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream-50 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[0.98]"
              title="I Need Help"
              intro="You are not alone. We are here for you — a trained member of our team is available 24 hours a day, 7 days a week. Choose how you would like to reach us. Everything is confidential."
            >
              I Need Help
            </HelpButton>
            <button
              type="button"
              onClick={openDonation}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:translate-y-0 active:scale-[0.98]"
            >
              Donate
            </button>
          </div>

          <div
            className="animate-fade-up mt-10 flex max-w-xl flex-col gap-3 rounded-2xl border border-gold-500/40 bg-night-950/45 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-4">
              {/* <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
                <PhoneIcon className="h-5 w-5" />
              </span> */}
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
              {/* <ShieldIcon className="h-5 w-5 shrink-0 text-gold-400" /> */}
              <p className="text-sm leading-5 text-white/85">
                <span className="font-semibold text-white">
                  100% confidential
                </span>{" "}
                — you are in control, always
              </p>
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              {/* <SparklesIcon className="h-5 w-5 shrink-0 text-gold-400" /> */}
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
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <Reveal>
          <HelpButton
            title="I Need Help"
            intro={HELP_INTRO}
            className="group flex h-full w-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-night-300 hover:shadow-lg"
            data-analytics="pathway-need-help"
          >
            {/* <span className="flex h-12 w-12 items-center justify-center rounded-full bg-night-950 text-white">
              <ShieldIcon className="h-6 w-6" />
            </span> */}
            <span className="mt-5 font-display text-xl font-semibold text-night-950">
              I need help
            </span>
            <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
              Support is available now. You are not alone, and you do not have
              to explain everything to be heard.
            </span>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-night-950">
              Get Help Now
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </HelpButton>
        </Reveal>

        <Reveal delay={80}>
          <Link
            href="/support"
            className="group flex h-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-night-300 hover:shadow-lg"
            data-analytics="pathway-support"
          >
            {/* <span className="flex h-12 w-12 items-center justify-center rounded-full bg-night-950 text-white">
              <HeartIcon className="h-6 w-6" />
            </span> */}
            <span className="mt-5 font-display text-xl font-semibold text-night-950">
              Support Goshen
            </span>
            <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
              Your support helps women and children rebuild their lives with
              safety, dignity and practical care.
            </span>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-night-950">
              Support Goshen
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <Link
            href="/support#partner"
            className="group flex h-full flex-col rounded-2xl border border-night-100 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-night-300 hover:shadow-lg"
            data-analytics="pathway-support"
          >
            {/* <span className="flex h-12 w-12 items-center justify-center rounded-full bg-night-950 text-white">
              <HeartIcon className="h-6 w-6" />
            </span> */}
            <span className="mt-5 font-display text-xl font-semibold text-night-950">
              Partner with us
            </span>
            <span className="mt-2 flex-1 text-sm leading-6 text-night-600">
              Work with us to create safer futures for women and children across
              Nigeria.
            </span>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-night-950">
              Support Goshen
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-night-950 text-cream-50">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
          Our Impact So Far
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Changing lives. Building hope.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {IMPACT_HEADLINE.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-5xl font-semibold text-white sm:text-6xl">
                <StatCounter value={value} delay={50} speed={0.4} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-cream-50/80">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_SUPPORTING.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-3xl font-semibold text-white">
                <StatCounter value={value} delay={50} speed={0.4} />
              </p>
              <p className="mt-2 text-xs leading-5 text-cream-50/75">{label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/impact"
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-gold-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-gold-400 transition hover:bg-gold-500 hover:text-night-950"
          data-analytics="view-impact"
        >
          View Our Impact
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FounderAndSurvivor() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
            Our founder&rsquo;s message
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-night-950 sm:text-4xl">
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
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-night-950 hover:text-gold-700"
          >
            Watch video
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
            Survivor story
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-night-950 sm:text-4xl">
            From fear to freedom
          </h2>
          <div className="relative mt-8 rounded-2xl bg-white p-8 shadow-sm">
            <span
              aria-hidden="true"
              className="font-display text-6xl leading-none text-night-950/50"
            >
              &ldquo;
            </span>
            <div className="mt-2">
              <TestimonialCarousel />
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-night-600">
              <ShieldIcon className="h-4 w-4 text-night-950" />
              Shared with consent — details anonymised
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Partners() {
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const logos = [...PARTNERS, ...PARTNERS];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="bg-white">
      <style>{`
        @keyframes goshen-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
          Our partners
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-semibold tracking-tight text-night-950 sm:text-4xl">
          Together, we are creating safer futures.
        </h2>

        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="flex w-max items-center gap-16 pr-16"
            style={{
              animation:
                reduceMotion || paused
                  ? "none"
                  : "goshen-marquee 40s linear infinite",
            }}
          >
            {logos.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex h-16 w-36 shrink-0 items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={300}
                  height={200}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            className="rounded-full border border-night-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-night-800"
            aria-pressed={paused || reduceMotion}
          >
            {paused || reduceMotion ? "Play logos" : "Pause logos"}
          </button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ onOpenContact }: { onOpenContact: () => void }) {
  const { openDonation } = useDonationModal();

  return (
    <footer className="bg-night-950 text-cream-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                {item.label === "Donate" ? (
                  <button
                    type="button"
                    onClick={openDonation}
                    className="hover:text-gold-400"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.href} className="hover:text-gold-400">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
            Get involved
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {SUPPORT_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 p-5">
          <p className="font-display text-lg font-semibold">Contact Us</p>
          <p className="mt-2 text-sm text-cream-50/75">
            We would love to hear from you.
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-400"
            data-analytics="footer-contact"
          >
            Contact Us
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        <div>
          <p className="font-display text-lg font-semibold">Need help?</p>
          <p className="mt-2 text-sm text-cream-50/75">
            Confidential support is available 24 hours a day.
          </p>
          <HelpButton
            title="I Need Help"
            intro={HELP_INTRO}
            className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-night-950"
            data-analytics="footer-get-help"
          >
            Get Help Now
          </HelpButton>
        </div>

        <div>
          <p className="font-display text-lg font-semibold">Donate</p>
          <p className="mt-2 text-sm text-cream-50/75">
            Help us provide shelter, healing and a new beginning.
          </p>
          <button
            type="button"
            onClick={openDonation}
            className="mt-4 inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-night-950 hover:bg-gold-400"
            data-analytics="footer-donate"
          >
            Donate Now
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-cream-50/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Goshen Shelters. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactDock({
  open,
  onClose,
  onOpen,
}: {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}) {
  if (!open) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-night-950 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
        data-analytics="contact-fab"
      >
        Contact Us
      </button>
    );
  }

  return (
    <aside
      className="fixed bottom-5 right-5 z-50 w-[min(100%-2rem,20rem)] rounded-2xl bg-white p-5 text-night-950 shadow-2xl"
      aria-label="Contact options"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.18em]">
          Contact Us
        </p>
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-bold"
          aria-label="Close contact panel"
        >
          ×
        </button>
      </div>
      <ul className="mt-4 space-y-3 text-sm">
        <li>
          <a
            href={`tel:${SITE.helplineTel}`}
            className="flex items-center gap-3 hover:text-gold-700"
          >
            <PhoneIcon className="h-4 w-4 text-night-950" />
            Call us · {SITE.helplineDisplay}
          </a>
        </li>
        <li>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gold-700"
          >
            <HeartIcon className="h-4 w-4 text-night-950" />
            Chat on WhatsApp
          </a>
        </li>
        <li>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 hover:text-gold-700"
          >
            <SparklesIcon className="h-4 w-4 text-night-950" />
            Email us
          </a>
        </li>
        <li>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gold-700"
          >
            <ShieldIcon className="h-4 w-4 text-night-950" />
            Visit our office
          </a>
        </li>
        <li>
          <Link
            href="/contact"
            className="flex items-center gap-3 hover:text-gold-700"
          >
            <ArrowRightIcon className="h-4 w-4 text-night-950" />
            Send us a message
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* <EmergencyHelpBar />
      <SiteHeader /> */}
      <Hero />
      <QuickActions />
      <Impact />
      <FounderAndSurvivor />
      <Partners />
      {/* <SiteFooter onOpenContact={() => setContactOpen(true)} /> */}
      <ContactDock
        open={contactOpen}
        onOpen={() => setContactOpen(true)}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
