"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";

import {
  RESTORATION_CONTENT,
  RESTORATION_STEPS,
} from "@/app/our-work/our-work-data";

export function RestorationJourney() {
  return (
    <section className="relative overflow-hidden bg-[#2F1B69]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/journey-woman.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
        />

        {/* Overall purple overlay */}
        <div className="absolute inset-0 bg-[#2F1B69]/80" />

        {/* Stronger fade toward the content side */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2F1B69_8%,rgba(47,27,105,0.96)_38%,rgba(47,27,105,0.78)_72%,rgba(47,27,105,0.5)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B94C]">
              {RESTORATION_CONTENT.eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {RESTORATION_CONTENT.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
              {RESTORATION_CONTENT.description}
            </p>
          </div>
        </Reveal>

        {/* Journey steps */}
        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:gap-5">
          {RESTORATION_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.09] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.13]">
                {/* Step number */}
                <p className="font-serif text-3xl font-semibold text-[#D9B94C]">
                  {step.number}
                </p>

                {/* Title */}
                <h3 className="mt-4 font-serif text-xl font-semibold leading-tight text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {step.description}
                </p>

                {/* Arrow between steps */}
                {index < RESTORATION_STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                  >
                    <span className="text-2xl text-[#D9B94C] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={RESTORATION_STEPS.length * 70}>
          <div className="mt-10">
            <Link
              href="/get-help"
              className="inline-flex items-center justify-center rounded-xl bg-[#B64A16] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#9E3F12] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D9B94C] focus:ring-offset-2 focus:ring-offset-[#2F1B69]"
            >
              Get Help Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
