"use client";

import { useEffect, useRef, useState } from "react";
import {
  QuoteIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons";

const TESTIMONIALS = [
  {
    quote:
      "I arrived with nothing but fear and my children. Goshen gave us a safe room, warm meals and people who believed me. Today I have a job, and my children are back in school.",
    note: "Shared with consent · details anonymised",
  },
  {
    quote:
      "For the first time in years, I slept without my heart racing. The counselling helped me see that none of it was my fault, and the skills training gave me a way to provide for my children.",
    note: "Shared with consent · details anonymised",
  },
  {
    quote:
      "They helped me through the court, found a school for my son, and stood with me until I could stand alone. Goshen is truly a place of refuge — a new beginning.",
    note: "Shared with consent · details anonymised",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (next: number) =>
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="relative mx-auto max-w-3xl">
      <QuoteIcon className="mx-auto h-10 w-10 text-gold-500/40" />

      <div className="relative mt-6 min-h-[16rem] overflow-hidden pb-4 sm:min-h-[14rem]">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            aria-hidden={i !== index}
            className={`absolute inset-0 flex flex-col items-center px-2 text-center transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <blockquote className="max-w-2xl font-display text-xl font-medium leading-9  sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-gold-400">
              {t.note}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-night-600 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-white"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div
          className="flex items-center gap-2.5"
          role="tablist"
          aria-label="Testimonials"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-gold-500"
                  : "w-2.5 bg-night-600 hover:bg-night-500"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-night-600  transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-white"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
