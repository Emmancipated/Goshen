"use client";

import Image from "next/image";
import Link from "next/link";
import { GiveItemsJourney } from "@/components/items/give-items-journey";
import { GiveTimeJourney } from "@/components/volunteer/give-time-journey";
import { PartnerJourney } from "@/components/partnership/partner-journey";
import { FundraisingJourney } from "@/components/fundraising/fundraising-journey";
import { SurvivorKitJourney } from "@/components/survivor-kit/survivor-kit-journey";
import { useDonationModal } from "@/components/donation/donation-modal-provider";
import { Reveal } from "@/components/reveal";

const supportCards = [
  {
    title: "Give Money",
    description: "Financial support for Goshen.",
    button: "Give Now",
    href: "/donate",
  },
  {
    title: "Give Items",
    description:
      "Practical necessities for women and children staying at Goshen.",
    button: "Learn More",
    href: "/contact",
  },
  {
    title: "Give Your Time",
    description: "Your time and skills can help someone rebuild her life.",
    button: "Learn More",
    href: "/contact",
  },
];

export default function SupportPageClient() {
  const { openDonation } = useDonationModal();

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      <section className="relative isolate overflow-hidden text-cream-50">
        <Reveal>
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
                src="/images/support-scene.jpeg"
                alt="A helping hand"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center "
              />

              {/* Desktop fade from left */}
              <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#F7F3EC_0%,#F7F3EC_2%,rgba(247,243,236,0.85)_14%,rgba(247,243,236,0.35)_26%,transparent_38%)]" />

              {/* Mobile fade from top */}
              {/* <div className="absolute inset-0 lg:hidden bg-[linear-gradient(to_bottom,#F7F3EC_0%,rgba(247,243,236,0.6)_18%,transparent_40%)]" /> */}

              {/* Bottom fade */}
              <div className="absolute inset-0 bg-linear-to-t from-[#F7F3EC] via-[#F7F3EC]/10 to-transparent" />
            </div>
          </div>
        </Reveal>
        {/* Support cards INSIDE the hero */}
        <Reveal delay={80}>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 relative mx-auto max-w-7xl px-4 sm:px-6 py-4">
            {supportCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/30 bg-white/80 p-6 backdrop-blur-md shadow-lg flex flex-col justify-between"
              >
                <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
                  {card.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#5E5752]">
                  {card.description}
                </p>

                {card.title === "Give Money" ? (
                  <button
                    type="button"
                    onClick={openDonation}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#B64A16] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] cursor-pointer"
                  >
                    Give Now
                  </button>
                ) : card.title === "Give Items" ? (
                  <GiveItemsJourney>
                    <button className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#B64A16] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] cursor-pointer">
                      {card.button}
                    </button>
                  </GiveItemsJourney>
                ) : (
                  <GiveTimeJourney>
                    <button className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#B64A16] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] cursor-pointer">
                      {card.button}
                    </button>
                  </GiveTimeJourney>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Partner With Us */}
        <Reveal delay={80}>
          <section
            className="mt-10 overflow-hidden rounded-[28px] bg-[#EFE7E3]"
            id="partner"
          >
            <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr] lg:h-75">
              {/* Text content */}
              <div className="relative  p-8 md:p-10 lg:pr-12">
                <h2 className="font-serif text-4xl font-semibold text-[#2F1B69]">
                  Partner With Us
                </h2>

                <p className="mt-4 text-lg leading-8 text-[#5E5752]">
                  Together, we can create lasting change for women and children.
                </p>

                <PartnerJourney>
                  <button className="mt-8 inline-flex rounded-xl bg-[#43206F] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] cursor-pointer">
                    Partner With Goshen
                  </button>
                </PartnerJourney>
              </div>

              {/* Image with fade overlay */}
              <div className="relative aspect-4/2 lg:aspect-auto lg:h-full">
                <Image
                  // src="/images/partners.jpg"
                  src="/images/partner-with-us-desktop.jpg"
                  alt="Partnership"
                  fill
                  className="object-cover "
                />

                {/* Desktop fade from left into image */}
                {/* <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#EFE7E3] via-[#EFE7E3]/55 to-transparent" /> */}
                <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#EFE7E3_0%,#EFE7E3_0%,transparent_100%)]" />

                {/* Mobile fade from top into image */}
                <div className="absolute inset-0 lg:hidden bg-linear-to-b from-[#EFE7E3] via-[#EFE7E3]/40 to-transparent" />
              </div>
            </div>
          </section>
        </Reveal>

        {/* Fundraise */}
        <Reveal delay={80}>
          <section className="mt-8 overflow-hidden rounded-[28px] bg-[#F5EFE8]">
            <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr] lg:h-75">
              <div className="relative  p-8 md:p-10 lg:pr-12">
                <h2 className="font-serif text-4xl font-semibold text-[#2F1B69]">
                  Fundraise for Goshen
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#5E5752]">
                  Turn your energy into support for women and children.
                </p>

                <FundraisingJourney>
                  <button className="mt-8 inline-flex rounded-xl bg-[#B64A16] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] cursor-pointer">
                    Learn More
                  </button>
                </FundraisingJourney>
              </div>

              {/* Image with fade overlay */}
              <div className="relative aspect-4/2 lg:aspect-auto lg:h-full">
                <Image
                  // src="/images/fundraiser.jpg"
                  src="/images/fundraise-for-goshen-mobile-landscape.jpg"
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
        </Reveal>
        {/* Survivor Kit */}
        <Reveal delay={80}>
          <section
            className="mt-8 overflow-hidden rounded-[28px] bg-[#F1EAE4]"
            id="survivors-kit"
          >
            <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr] lg:h-75">
              <div className="p-8 md:p-10">
                {/* <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B6A3D]">
                Survivor's Kit
              </p> */}

                <h2 className="mt-3 font-serif text-4xl font-semibold text-[#2F1B69]">
                  {/* Help a survivor start again. */}Survivor's Kit
                </h2>

                <p className="mt-4 text-lg leading-8 text-[#5E5752]">
                  Help a survivor start again.
                </p>

                <SurvivorKitJourney>
                  <button className="mt-8 inline-flex rounded-xl bg-[#43206F] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] cursor-pointer">
                    See the Survivor's Kit
                  </button>
                </SurvivorKitJourney>
              </div>

              {/* Image with fade overlay */}
              <div className="relative aspect-4/2 lg:aspect-auto lg:h-full">
                <Image
                  // src="/images/empower.jpg"
                  src="/images/survivor-kit-tablet.jpg"
                  // src="/images/survivor-kit-desktop.jpg"
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
        </Reveal>

        {/* Bottom CTA */}
        <Reveal delay={80}>
          <section className="mt-10 rounded-[28px] bg-[#3B1B67] px-8 py-8 md:px-10 md:py-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-white md:text-4xl">
                Together, we can help women and children move from violence to
                safety, healing and hope.
              </h2>

              <button
                type="button"
                onClick={openDonation}
                className="inline-flex shrink-0 rounded-xl bg-[#B64A16] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12]"
              >
                Support Goshen Today
              </button>
            </div>
          </section>
        </Reveal>

        <section>
          <button
            type="button"
            onClick={openDonation}
            className="fixed bottom-20 right-5 z-50 md:hidden rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-gold-600 active:scale-95 sm:inline-block uppercase"
          >
            Donate
          </button>
        </section>
      </div>
    </main>
  );
}
