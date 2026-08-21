import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { StatCounter } from "@/components/stat-counter";
import { DonateButton } from "@/components/donate-button";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Discover how Goshen Shelters has supported women and children affected by domestic and sexual violence through safety, healing, education, skills development, employment and reintegration.",
  openGraph: {
    title: "Our Impact",
    description:
      "Discover how Goshen Shelters has supported women and children affected by domestic and sexual violence through safety, healing, education, skills development, employment and reintegration.",
    images: [
      {
        url: "/images/impact.jpg",
        width: 1200,
        height: 630,
        alt: "Our Impact at Goshen Shelters — supporting women and children",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Impact",
    description:
      "Discover how Goshen Shelters has supported women and children affected by domestic and sexual violence through safety, healing, education, skills development, employment and reintegration.",
    images: ["/images/impact.jpg"],
  },
};

/**
 * Keep this configurable so the dedicated Survivor's Kit page can be
 * moved later without changing the structure of this page.
 */
const SURVIVORS_KIT_HREF = "/support#survivors-kit";

const IMPACT_FIGURES = [
  {
    value: 174,
    label: "Women supported",
    description:
      "Women have come through Goshen seeking safety, care and a pathway toward a new beginning.",
  },
  {
    value: 265,
    label: "Children supported",
    description:
      "Children have been supported alongside women affected by domestic and sexual violence.",
  },
  {
    value: 23,
    label: "Teenagers supported",
    description:
      "Teenagers have also received support through the shelter's work.",
    note: "This figure may overlap with the children figure and is not presented as an additional total.",
  },
  {
    value: 22,
    label: "Rape cases",
    description:
      "Goshen has supported survivors of rape with care, confidentiality and practical support.",
  },
  {
    value: 15,
    label: "Child sexual abuse cases",
    description:
      "Children affected by sexual abuse have received support and protection.",
  },
  {
    value: 7,
    label: "Babies born at Goshen",
    description:
      "Seven babies have been born during shelter stays, including one set of twins.",
  },
];

const SUPPORT_AREAS = [
  "Emotional counselling",
  "Spiritual guidance",
  "Healthcare and medical support",
  "Food and daily provisions",
  "Financial assistance",
  "Skills acquisition",
  "Employment support",
  "Educational support for children",
];

// const OUTCOMES = [
//   {
//     title: "Education restored",
//     body: "Some women returned to or completed tertiary education after experiences of domestic violence had interrupted their studies.",
//   },
//   {
//     title: "Meaningful employment",
//     body: "Some survivors secured employment in schools, private companies and government agencies as they rebuilt their independence.",
//   },
//   {
//     title: "Skills and self-sufficiency",
//     body: "Women have participated in skills-development programmes, including tailoring and culinary training, to strengthen their ability to support themselves.",
//   },
//   {
//     title: "Financial independence",
//     body: "Support has helped some survivors move toward greater financial independence and establish more stable livelihoods.",
//   },
//   {
//     title: "Businesses and accommodation",
//     body: "Some survivors received support that helped them start businesses and secure independent accommodation as they transitioned from the shelter.",
//   },
//   {
//     title: "Peaceful reintegration",
//     body: "Women have been successfully reintegrated into society and are living peaceful lives away from violence.",
//   },
// ];

const OUTCOMES = [
  {
    image: "/images/about.jpg",
    title: "Lives rebuilt. Futures restored.",
    body: "Women have returned to education, secured meaningful employment, developed income-generating skills, become financially independent, established businesses, relocated abroad and rebuilt peaceful lives away from violence. ",
    close:
      "One survivor resumed her education and obtained a Master's degree at the London School of Economics while her children continued their secondary education in the United Kingdom. ",
  },
  {
    image: "/images/donate.jpg",
    title: "Protecting children's futures.",
    body: "Violence disrupts every part of a child's life, including education. About 80% of children arriving at the shelter have had to leave their neighbourhood schools.",
    close:
      "Goshen works to enrol children in new schools as quickly as possible and provides support for their emotional wellbeing, routines and stability.",
  },
  {
    image: "/images/help.jpg",
    title: "Safety and justice.",
    body: "Through collaboration with the DSVRT, the Police, legal professionals and other partners, survivors receive assistance with protection and legal processes.",
    close:
      "Perpetrators have been arrested and charged to court. Child abusers have also been arraigned and imprisoned with the help of our partners. ",
  },
];
const JOURNEY_OUTCOMES = [
  {
    value: "90%",
    label: "chose not to reconcile",
    body: "Most survivors chose not to return to their partners after considering their circumstances and receiving support.",
  },
  {
    value: "5%",
    label: "remained separated",
    body: "Some remained separated while continuing counselling and working through their circumstances.",
  },
  {
    value: "5%",
    label: "reconciled",
    body: "Some reconciled with their partners following counselling and intervention.",
  },
];

export default function ImpactPage() {
  return (
    <main className="overflow-hidden bg-[#F7F3EC]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#F7F3EC]">
        <div className="grid items-stretch lg:grid-cols-[55%_45%]">
          {/* Image */}
          <div className="relative min-h-95 sm:min-h-120 lg:min-h-155">
            <Image
              src="/images/impacts.jpg"
              alt="A woman and child representing the women and children supported by Goshen Shelters"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            {/* Desktop fade from image into text */}
            <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,transparent_50%,rgba(247,243,236,0.18)_62%,rgba(247,243,236,0.48)_72%,rgba(247,243,236,0.82)_86%,#F7F3EC_100%)]" />

            {/* Mobile fade from image into content */}
            <div className="absolute inset-0 lg:hidden bg-[linear-gradient(to_bottom,transparent_55%,rgba(247,243,236,0.18)_68%,rgba(247,243,236,0.72)_88%,#F7F3EC_100%)]" />

            {/* Subtle bottom fade */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#F7F3EC_0%,rgba(247,243,236,0.08)_24%,transparent_52%)]" />
          </div>

          {/* Text */}
          <div className="relative flex items-center px-6 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-10 lg:px-12 lg:py-20">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B6914]">
                  Our Impact
                </p>

                <h1 className="mt-5 font-display text-4xl font-semibold leading-[0.94] tracking-tight text-[#2F1B69] sm:text-5xl lg:text-[3.4rem]">
                  Creating safety.
                  <br />
                  Restoring lives.
                  <br />
                  Building futures.
                </h1>

                <p className="mt-7 max-w-lg text-base leading-7 text-[#4E4742] sm:text-lg sm:leading-8">
                  For more than a decade, Goshen Shelter has provided women and
                  children affected by domestic and sexual violence with safety,
                  support and a pathway to a better future.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          PEOPLE BEHIND THE IMPACT
      ========================================================== */}
      <section className="border-y border-[#E6DDD4] bg-[#FBF8F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
                The people behind our impact
              </p>

              {/* <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
                Behind every figure is a woman or child whose life changed.
              </h2> */}

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5E5752]">
                Since Goshen began its work,{" "}
                <span className="font-bold text-[#B64A16]"> 174 women </span>{" "}
                and{" "}
                <span className="font-bold text-[#B64A16]"> 265 children </span>{" "}
                have come through the shelter seeking safety and support.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#5E5752]">
                Among those supported are{" "}
                <span className="font-bold text-[#B64A16]"> 23 teenagers </span>
                , survivors of{" "}
                <span className="font-bold text-[#B64A16]"> 22 rape </span>
                cases,{" "}
                <span className="font-bold text-[#B64A16]"> 15 cases </span> of
                child sexual abuse, and{" "}
                <span className="font-bold text-[#B64A16]"> 2 cases </span>{" "}
                involving child trafficking.
              </p>

              <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-[#6F6862]">
                For some women, Goshen has also been a place of safety through
                pregnancy and childbirth, with{" "}
                <span className="font-bold text-[#B64A16]"> 7 deliveries </span>{" "}
                taking place at the shelter, including one set of twins.
              </p>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-4xl">
                <div className="relative aspect-4/3">
                  <Image
                    src="/images/steps.jpg"
                    alt="A woman representing the journey from shelter and support toward independence"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#2F1B69]/55 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>

            {/* Editorial figures — deliberately NOT cards */}
            {/* <Reveal delay={100}>
              <div className="grid grid-cols-2 border-t border-[#D9CFC5] sm:grid-cols-3">
                {IMPACT_FIGURES.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`min-h-36.25 border-b border-[#D9CFC5] py-7 pr-5 sm:min-h-41.25 sm:py-8 ${
                      index % 2 !== 0 ? "pl-5 sm:border-l sm:pl-6" : "pl-0"
                    } ${index >= 2 ? "sm:border-l sm:pl-6" : ""}`}
                  >
                    <p className="font-display text-4xl font-semibold leading-none text-[#2F1B69] sm:text-5xl">
                      <StatCounter
                        value={stat.value}
                        animateWhileInView
                        pulseStyle="sequential"
                      />
                    </p>

                    <p className="mt-3 max-w-37.5 text-sm font-medium leading-5 text-[#5E5752]">
                      {stat.label}
                    </p>

                    {stat.note && (
                      <p className="mt-1 text-xs italic leading-4 text-[#827A73]">
                        {stat.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal> */}
          </div>
        </div>
      </section>
      {/* =========================================================
          MORE THAN A SHELTER
      ========================================================= */}
      <section className="bg-[#F7F3EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative overflow-hidden rounded-4xl">
                <div className="relative aspect-4/3">
                  <Image
                    src="/images/love.jpg"
                    alt="A woman representing the journey from shelter and support toward independence"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#2F1B69]/55 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
                  More Than a Shelter
                </p>

                {/* <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
                  Safety is only the beginning.
                </h2> */}

                <div className="mt-6 space-y-4 text-base leading-7 text-[#5E5752]">
                  <p>
                    We provide holistic support that addresses the needs of the
                    whole person — mind, body and spirit. Our care includes
                    counselling, spiritual guidance, healthcare, food and
                    essentials, financial support, skills acquisition,
                    employment support and education for children.
                  </p>

                  <p>
                    Our goal is not just to provide a place of safety, but to
                    help survivors heal, gain stability and rebuild independent
                    lives.
                  </p>
                </div>
                {/* 
                <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {SUPPORT_AREAS.map((item) => (
                    <p
                      key={item}
                      className="border-b border-[#DED5CA] pb-3 text-sm font-medium text-[#43206F]"
                    >
                      {item}
                    </p>
                  ))}
                </div> */}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIFFERENT JOURNEYS
      ========================================================== */}
      <section className="bg-[#EEE6F5]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
            <Reveal delay={120}>
              <div className="grid gap-0 border-y border-[#D4C7DF] sm:grid-cols-3 sm:border-y-0">
                <div className="border-b border-[#D4C7DF] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
                  <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
                    90%
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5E5752]">
                    chose not to reconcile with their partners
                  </p>
                </div>

                <div className="border-b border-[#D4C7DF] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
                  <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
                    5%
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5E5752]">
                    remained separated while undergoing counselling
                  </p>
                </div>

                <div className="py-7 sm:px-6 sm:py-4">
                  <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
                    5%
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5E5752]">
                    were reconciled with their partners following counselling
                    and intervention.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
                Different journeys. Different outcomes.
              </p>
              {/* 
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
                Every survivor&apos;s path is different.
              </h2> */}

              <p className="mt-5 text-base leading-7 text-[#5E5752]">
                Every woman's story is unique. Through counselling and
                intervention, women are supported to make informed decisions
                about their futures.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="mt-14 border-t border-[#D4C7DF] pt-8 sm:mt-16">
              <p className="max-w-3xl font-display text-2xl leading-9 text-[#2F1B69] sm:text-3xl">
                To date, <span className="text-[#B64A16]">26 women</span> have
                been reconciled with their husbands following counselling and
                intervention.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6B625D]">
                For some families, reconciliation has been possible. For others,
                the safest choice has been to remain apart.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          MORE THAN A SHELTER
      ========================================================== */}
      {/* <section className="bg-[#F7F3EC]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-105 lg:min-h-140">
            <Image
              src="/images/impact-sewing.jpg"
              alt="A woman developing practical skills"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
            <Reveal delay={100}>
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
                  More than a shelter
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
                  Safety is only the beginning.
                </h2>

                <p className="mt-6 text-base leading-7 text-[#5E5752]">
                  Goshen provides holistic support that addresses the needs of
                  the whole person — mind, body and spirit. Our care includes
                  emotional counselling, spiritual guidance, healthcare and
                  medical support, food and daily provisions.
                </p>

                <p className="mt-5 text-base leading-7 text-[#5E5752]">
                  Women may also receive financial assistance, skills
                  acquisition and employment support, while children receive
                  educational support to help minimise disruption to their
                  lives.
                </p>

                <p className="mt-5 text-base leading-7 text-[#5E5752]">
                  The goal is not simply to provide a place of safety, but to
                  help survivors heal, regain stability and rebuild independent
                  lives.
                </p>

                <div className="mt-8 h-px w-20 bg-[#C9A227]" />

                <p className="mt-5 font-display text-xl leading-7 text-[#2F1B69]">
                  A safe place today can become the foundation for a stronger
                  tomorrow.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* =========================================================
          DOCUMENTED OUTCOMES
      ========================================================= */}
      {/* <section className="bg-[#EEE8F5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
                Documented outcomes
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
                The difference continues after the shelter.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#5E5752]">
                The purpose of support is to help survivors move toward safer,
                more stable and more independent lives. Documented outcomes
                include education, employment, skills development, financial
                independence, business development, accommodation and
                reintegration.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {OUTCOMES.map((outcome, index) => (
              <Reveal key={outcome.title} delay={(index % 2) * 70}>
                <article className="border-t border-[#CFC3DA] py-7">
                  <h3 className="font-display text-2xl font-semibold text-[#2F1B69]">
                    {outcome.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#655F5A]">
                    {outcome.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 border-t border-[#CFC3DA] pt-8">
              <p className="max-w-3xl text-sm leading-6 text-[#655F5A]">
                The Executive Brief also documents an example of a survivor who
                obtained a Master's degree at the London School of Economics
                while her children were integrated into secondary schools in the
                United Kingdom.
              </p>
            </div>
          </Reveal>
        </div>
      </section> */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          {/* <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
                Documented outcomes
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
                Support that continues beyond the shelter.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#5E5752]">
                The impact of Goshen&apos;s work can be seen in the steps
                survivors take after receiving support — education, employment,
                skills, financial independence, business development,
                accommodation and relocation.
              </p>
            </div>
          </Reveal> */}

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-5 lg:mt-14">
            {OUTCOMES.map((outcome, index) => (
              <Reveal key={outcome.title} delay={index * 90}>
                <article className="group flex h-full flex-col overflow-hidden border border-[#E5DDD5] bg-[#F7F3EC]">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={outcome.image}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-[#2F1B69]">
                      {outcome.title}
                    </h3>

                    <div className="mt-4 h-px w-12 bg-[#C9A227]" />

                    <p className="mt-4 text-sm leading-6 text-[#5E5752]">
                      {outcome.body}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#5E5752]">
                      {outcome.close}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SURVIVOR'S KIT
      ========================================================= */}
      {/* <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <Reveal>
            <div className="grid gap-8 rounded-4xl bg-[#2F1B69] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E0C45A]">
                  The journey continues
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                  Preparing for independent living.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  As a woman prepares to leave Goshen and begin a more
                  independent life, practical support can help make that
                  transition more stable. Learn more about the Survivor's Kit
                  and how it supports the next chapter.
                </p>
              </div>

              <Link
                href={SURVIVORS_KIT_HREF}
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white hover:text-[#2F1B69] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2F1B69]"
              >
                See Survivor's Kit
              </Link>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="bg-[#F7F3EC]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
              The impact continues
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
              One woman. One child. One family at a time.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5E5752]">
              Awareness of domestic and sexual violence is growing. More women
              are speaking out and seeking help. Survivors who have been
              supported by Goshen are now reaching out to other women
              experiencing violence, encouraging them to seek safety and
              support.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-full bg-[#43206F] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#351858] focus:outline-none focus:ring-2 focus:ring-[#43206F] focus:ring-offset-2 active:translate-y-0"
              >
                Support Goshen
              </Link>

              <DonateButton className="inline-flex items-center justify-center rounded-full bg-[#B64A16] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#9E3F12] focus:outline-none focus:ring-2 focus:ring-[#B64A16] focus:ring-offset-2 active:translate-y-0">
                Donate
              </DonateButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
