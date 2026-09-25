"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const TESTIMONIALS = [
  {
    quote:
      "When I arrived at Goshen with my three children, I was at one of the lowest points of my life. Goshen became a place of safety, care and restoration for us. Beyond providing shelter, the support and guidance we received helped me rebuild my confidence, regain stability and create a better future for my children. Today, I look back with gratitude for the hope, love and opportunity to begin again.",
    name: "O.J. — Former Resident of Goshen Shelters",
  },
  {
    quote:
      "Goshen was a place where I found safety, peace and the opportunity to begin again. When I arrived with my children, I was uncertain about the future, but the care, support and encouragement we received helped me regain my confidence and rebuild my life. The shelter gave us more than a place to stay — it gave us hope, stability and the strength to move forward.",
    name: "A.R. — Former Resident of Goshen Shelters",
  },
  {
    quote:
      "When I came to Goshen Shelters, I was at a difficult point in my life and needed a safe place to rebuild. Goshen provided my children and me with care, support, encouragement and an environment where healing was possible. Through the skills training and empowerment opportunities I received, I gained confidence and the ability to pursue my dreams. Today, I am rebuilding my life with hope, peace and purpose.",
    name: "C.L.O - Status: Former Resident of Goshen Shelters",
  },
  {
    quote:
      "Goshen welcomed me when I had nowhere to go,they gave me and my children a home. They gave me a safe place to stay, food, counseling, and showed me I was not alone. My life changed - I found my voice and peace again.  Today I have a small business and my children are safe in school.  My hope for the future is to go back home to South Africa, be independent and help other women find safety.",
    name: "P.M.O - Status: Former Resident of Goshen Shelters",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeFigureRef = useRef<HTMLElement | null>(null);

  const goTo = (next: number) =>
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    const figure = activeFigureRef.current;
    if (!figure) return;

    const updateHeight = () => setContentHeight(figure.scrollHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(figure);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        className="relative overflow-hidden pb-4 transition-[height] duration-500"
        style={contentHeight ? { height: `${contentHeight}px` } : undefined}
      >
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            ref={i === index ? activeFigureRef : undefined}
            aria-hidden={i !== index}
            className={`absolute inset-0 flex flex-col items-center px-2 text-center transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <blockquote className="max-w-2xl text-sm font-display font-medium leading-7 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-gold-400">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-night-600 text-white/80 transition-colors hover:border-gold-500 bg-gold-500 hover:text-white"
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-night-600 text-white/80 transition-colors hover:border-gold-500 bg-gold-500 hover:text-white"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
