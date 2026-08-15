"use client";

import { useRef } from "react";
import { DonationFlow } from "@/components/donation/donation-flow";
import Image from "next/image";
import Link from "next/link";

type DonationFlowHandle = {
  open: () => void;
};

const supportCards = [
  {
    title: "Give Money",
    description:
      "Your generosity helps provide safety, care and support for women and children.",
    button: "Give Now",
    href: "/donate",
  },
  {
    title: "Give Items",
    description:
      "Provide practical necessities for women and children staying at Goshen.",
    button: "Learn More",
    href: "/contact",
  },
  {
    title: "Give Your Time",
    description: "Share your time, skills and experience to support Goshen.",
    button: "Learn More",
    href: "/contact",
  },
];

export default function SupportPage() {
  const donationFlowRef = useRef<DonationFlowHandle>(null);

  const handleOpenDonation = () => {
    donationFlowRef.current?.open();
  };

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      <section className="relative isolate overflow-hidden text-cream-50">
        <div className="grid items-stretch lg:grid-cols-[40%_60%]">
          {/* Left content */}
          <div className="flex items-center px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-[#2F1B69] sm:text-5xl lg:text-6xl">
                Support Goshen
              </h1>

              <p className="mt-6 text-base leading-7 text-[#4E4742] sm:text-lg sm:leading-8">
                There are different ways to support women and children seeking
                safety, healing and a new beginning.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-70 sm:min-h-90 lg:min-h-130">
            <Image
              src="/images/mother-child.jpg"
              alt="A woman and child"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Desktop fade from left */}
            <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#F7F3EC_0%,#F7F3EC_2%,rgba(247,243,236,0.85)_14%,rgba(247,243,236,0.35)_26%,transparent_38%)]" />

            {/* Mobile fade from top */}
            <div className="absolute inset-0 lg:hidden bg-[linear-gradient(to_bottom,#F7F3EC_0%,rgba(247,243,236,0.6)_18%,transparent_40%)]" />

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-linear-to-t from-[#F7F3EC] via-[#F7F3EC]/10 to-transparent" />
          </div>
        </div>
        <DonationFlow ref={donationFlowRef} />

        {/* Support cards INSIDE the hero */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 relative mx-auto max-w-7xl px-4 sm:px-6 py-4">
          {supportCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/30 bg-white/80 p-6 backdrop-blur-md shadow-lg"
            >
              <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
                {card.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-[#5E5752]">
                {card.description}
              </p>

              {card.title === "Give Money" ? (
                <button
                  onClick={handleOpenDonation}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#B64A16] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] cursor-pointer"
                >
                  Give Now
                </button>
              ) : (
                <Link
                  href={card.href}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#B64A16] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12]"
                >
                  {card.button}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Partner With Us */}
        <section className="mt-10 overflow-hidden rounded-[28px] bg-[#EFE7E3]">
          <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
            {/* Text content */}
            <div className="relative  p-8 md:p-10 lg:pr-12">
              <h2 className="font-serif text-4xl font-semibold text-[#2F1B69]">
                Partner With Us
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#5E5752]">
                Organisations and groups can help Goshen strengthen the support
                available to women and children through meaningful partnerships.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-[#43206F] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#341857]"
              >
                Partner With Goshen
              </Link>
            </div>

            {/* Image with fade overlay */}
            <div className="relative aspect-4/3 lg:aspect-auto lg:h-full">
              <Image
                src="/images/partners.jpg"
                alt="Partnership"
                fill
                className="object-cover"
              />

              {/* Desktop fade from left into image */}
              {/* <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#EFE7E3] via-[#EFE7E3]/55 to-transparent" /> */}
              <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#EFE7E3_0%,#EFE7E3_0%,transparent_100%)]" />

              {/* Mobile fade from top into image */}
              <div className="absolute inset-0 lg:hidden bg-linear-to-b from-[#EFE7E3] via-[#EFE7E3]/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Fundraise */}
        <section className="mt-8 overflow-hidden rounded-[28px] bg-[#F5EFE8]">
          <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative  p-8 md:p-10 lg:pr-12">
              <h2 className="font-serif text-4xl font-semibold text-[#2F1B69]">
                Fundraise for Goshen
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5E5752]">
                Bring your community, church, school or organisation together to
                support women and children affected by violence.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-[#B64A16] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12]"
              >
                Learn More
              </Link>
            </div>

            {/* Image with fade overlay */}
            <div className="relative aspect-4/3 lg:aspect-auto lg:h-full">
              <Image
                src="/images/fundraiser.jpg"
                alt="Partnership"
                fill
                className="object-cover"
              />

              {/* Desktop fade from left into image */}
              <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#F5EFE8_0%,#F5EFE8_0%,transparent_100%)]" />

              {/* Mobile fade from top into image */}
              <div className="absolute inset-0 lg:hidden bg-linear-to-b from-[#F5EFE8] via-[#F5EFE8]/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Survivor Kit */}
        <section className="mt-8 overflow-hidden rounded-[28px] bg-[#F1EAE4]">
          <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B6A3D]">
                Survivor's Kit
              </p>

              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#2F1B69]">
                Help a survivor start again.
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#5E5752]">
                When a woman leaves Goshen to begin an independent life, she
                receives a basic Survivor's Kit to help her establish her new
                home.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-[#43206F] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#341857]"
              >
                See the Survivor's Kit
              </Link>
            </div>

            {/* Image with fade overlay */}
            <div className="relative aspect-4/3 lg:aspect-auto lg:h-full">
              <Image
                src="/images/empower.jpg"
                alt="Partnership"
                fill
                className="object-cover"
              />

              {/* Desktop fade from left into image */}
              {/* <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#EFE7E3] via-[#EFE7E3]/55 to-transparent" /> */}
              <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#F1EAE4_0%,#F1EAE4_0%,transparent_100%)]" />

              {/* Mobile fade from top into image */}
              <div className="absolute inset-0 lg:hidden bg-linear-to-b from-[#F1EAE4] via-[#F1EAE4]/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-10 rounded-[28px] bg-[#3B1B67] px-8 py-8 md:px-10 md:py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-white md:text-4xl">
              Together, we can help women and children move from violence to
              safety, healing and hope.
            </h2>

            <Link
              href="/donate"
              className="inline-flex shrink-0 rounded-xl bg-[#B64A16] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12]"
            >
              Support Goshen Today
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

// <div
//   aria-hidden="false"
//   className="absolute h-full inset-0 md:left-[48%] lg:left-[50%]"
// >
//   <Image
//     src="/images/mother-child.jpg"
//     alt="A woman and child"
//     fill
//     sizes="100vw"
//     preload
//     className="object-cover "
//   />
// </div>
// {/* Mobile overlay */}
// <div className="absolute inset-0 md:hidden bg-[linear-gradient(to_bottom,rgba(247,243,236,0.96)_0%,rgba(247,243,236,0.88)_40%,rgba(247,243,236,0.72)_70%,rgba(247,243,236,0.92)_100%)]" />

// {/* Tablet overlay */}
// <div className="absolute inset-0 hidden md:block lg:hidden bg-[linear-gradient(to_right,#EFE7E3_0%,#EFE7E3_58%,rgba(239,231,227,0.42)_70%,transparent_78%)]" />

// {/* Desktop overlay */}
// <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#EFE7E3_0%,#EFE7E3_53%,rgba(239,231,227,0.35)_66%,transparent_68%)]" />

// {/* Bottom fade */}
// <div className="absolute inset-0 bg-linear-to-t from-[#F7F3EC] via-[#F7F3EC]/10 to-transparent" />

// <div className="relative mx-auto flex max-w-7xl flex-col  px-4 pb-20 pt-24 sm:px-6 lg:min-h-[42svh] lg:pb-24 lg:pt-28">
//   <div className="max-w-2xl">
//     <div>
//       <h1 className="font-serif text-5xl font-semibold leading-tight text-[#2F1B69] md:text-6xl">
//         Support Goshen
//       </h1>
//       <p className="mt-6 max-w-xl text-lg leading-8 text-[#4E4742]">
//         There are different ways to support women and children seeking
//         safety, healing and a new beginning.
//       </p>
//     </div>
//   </div>
// </div>
