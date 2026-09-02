"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { DonateButton } from "@/components/donate-button";

import {
  HERO_CONTENT,
  HELP_CONTENT,
  RESTORATION_CONTENT,
  RESTORATION_STEPS,
  SERVICES,
  type ServiceDetail,
} from "@/app/our-work/our-work-data";

import { ServiceModal } from "./service-modal";
import { useHelpModal } from "../help-modal-provider";

export function OurWorkClient() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );
  const { openHelpModal } = useHelpModal();

  const openService = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const closeService = () => {
    setSelectedService(null);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-[#2F1B69]">
        <div className="grid items-stretch lg:grid-cols-[52%_48%]">
          {/* Left content */}
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B94C]">
                  {HERO_CONTENT.eyebrow}
                </p>

                <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                  {HERO_CONTENT.title}
                </h1>

                <p className="mt-7 max-w-lg text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                  {HERO_CONTENT.description}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right image */}
          <div className="relative min-h-90 sm:min-h-110 lg:min-h-140">
            <Image
              src="/images/round-sisters.jpg"
              alt="A woman embracing a child in a moment of safety and comfort"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Desktop fade */}
            <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#2F1B69_0%,rgba(47,27,105,0.92)_10%,rgba(47,27,105,0.55)_24%,transparent_42%)]" />

            {/* Mobile fade */}
            <div className="absolute inset-0 lg:hidden bg-[linear-gradient(to_bottom,#2F1B69_0%,rgba(47,27,105,0.55)_20%,transparent_48%)]" />

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(47,27,105,0.55),transparent_38%)]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="bg-[#F7F3EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B6914]">
                What We Do
              </p>

              <h2 className="mt-4 font-serif text-4xl font-semibold text-[#2F1B69] sm:text-5xl">
                The work we do to support survivors
              </h2>

              <p className="mt-5 text-base leading-7 text-[#5E5752]">
                Every woman who comes to Goshen is met where she is — with
                kindness, confidentiality and practical support.
              </p>
            </div>
          </Reveal>

          {/* Services */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={(index % 4) * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-[#E6DDD4] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-[#2F1B69]">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-[#5E5752]">
                    {service.shortDescription}
                  </p>

                  <button
                    type="button"
                    onClick={() => openService(service)}
                    className="mt-6 inline-flex items-center text-sm font-bold uppercase tracking-wide text-[#B64A16] transition hover:text-[#8F3510] cursor-pointer"
                  >
                    Learn More
                    <span aria-hidden="true" className="ml-2 text-base">
                      →
                    </span>
                  </button>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#6A635D]">
              Every service is delivered with dignity, confidentiality and
              respect for every woman and child.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          JOURNEY OF RESTORATION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#2F1B69]">
        <div className="absolute inset-0">
          <Image
            src="/images/collage.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-right opacity-30"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2F1B69_5%,rgba(47,27,105,0.96)_40%,rgba(47,27,105,0.8)_70%,rgba(47,27,105,0.7))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B94C]">
                {RESTORATION_CONTENT.eyebrow}
              </p>

              <h2 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
                {RESTORATION_CONTENT.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-white/80">
                {RESTORATION_CONTENT.description}
              </p>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {RESTORATION_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 70}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="font-serif text-3xl font-semibold text-[#D9B94C]">
                    {step.number}
                  </p>

                  <h3 className="mt-4 font-serif text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {step.description}
                  </p>

                  {index !== RESTORATION_STEPS.length - 1 && (
                    <div className="absolute -right-4.5 top-1/2 hidden -translate-y-1/2 lg:block">
                      <span className="text-2xl text-[#D9B94C]">→</span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-10">
              <button
                type="button"
                onClick={() => openHelpModal()}
                className="inline-flex items-center justify-center rounded-xl bg-[#B64A16] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] focus:outline-none focus:ring-2 focus:ring-[#D9B94C] focus:ring-offset-2 focus:ring-offset-[#2F1B69]"
              >
                Get Help Now
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CONFIDENTIAL HELP
      ===================================================== */}
      <section className="bg-[#F7F3EC]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B6914]">
              {HELP_CONTENT.eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#2F1B69] sm:text-5xl">
              {HELP_CONTENT.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5E5752]">
              {HELP_CONTENT.description}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              {/* <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#43206F] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#351657] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2"
              >
                Talk To Someone
              </Link> */}
              <button
                type="button"
                onClick={() => openHelpModal()}
                className="inline-flex items-center justify-center rounded-xl bg-[#43206F] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#351657] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2"
              >
                Talk To Someone
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#B9AEA4] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#5E5752] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2"
              >
                Send A Message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          DONATION CTA
      ===================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-[#43206F] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
              <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
                <Image
                  src="/images/donate.jpg"
                  alt="Women embracing in hope and encouragement"
                  fill
                  sizes="50vw"
                  className="object-cover object-center opacity-80"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#43206F,rgba(67,32,111,0.3),transparent)]" />
              </div>

              <div className="relative z-10 max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E0C45A]">
                  Help another woman find safety
                </p>

                <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Your support funds shelter, care, counselling, education and
                  skills — every gift changes a story.
                </h2>

                <div className="mt-7">
                  <DonateButton className="inline-flex items-center justify-center rounded-xl bg-[#B64A16] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#43206F]">
                    Donate Now
                  </DonateButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          REUSABLE SERVICE MODAL
      ===================================================== */}
      <ServiceModal
        open={selectedService !== null}
        service={selectedService}
        onClose={closeService}
      />
    </>
  );
}
