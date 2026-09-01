"use client";

import { useCallback, useId, useState } from "react";

const VALUES = [
  {
    title: "Compassion",
    body: "We respond to every woman and child with empathy, kindness, patience and understanding.",
  },
  {
    title: "Safety",
    body: "We are committed to providing a secure, confidential and supportive environment for women and children seeking refuge from violence.",
  },
  {
    title: "Dignity",
    body: "We recognise the worth of every woman and child and treat each person with respect, sensitivity and honour.",
  },
  {
    title: "Faith",
    body: "Our work is inspired by God’s love, compassion and desire for healing, restoration and hope.",
  },
  {
    title: "Integrity",
    body: "We act honestly, responsibly and transparently, remaining accountable to the women we serve, our supporters, partners and the wider community.",
  },
  {
    title: "Empowerment",
    body: "We support women to regain confidence, develop skills, achieve greater independence and rebuild their lives.",
  },
  {
    title: "Restoration",
    body: "We are committed to emotional, physical and spiritual healing, helping women and children move towards a safer and more stable future.",
  },
] as const;

export function AboutValues() {
  const groupId = useId();
  const [active, setActive] = useState(0);
  const activeValue = VALUES[active];

  const reveal = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <section aria-labelledby={`${groupId}-heading`} className="bg-night-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
          What guides our work
        </p>
        <h2
          id={`${groupId}-heading`}
          className="mt-3 text-center font-display text-3xl font-semibold tracking-tight text-[#2F1B69] sm:text-4xl"
        >
          The values behind everything we do
        </h2>

        <div className="mt-10 rounded-3xl border border-night-100 bg-cream-50 p-4 sm:p-6">
          <div
            role="tablist"
            aria-label="Goshen Shelters values"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 text-center"
          >
            {VALUES.map(({ title }, index) => {
              const selected = index === active;
              return (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  id={`${groupId}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${groupId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => reveal(index)}
                  onMouseEnter={() => reveal(index)}
                  onFocus={() => reveal(index)}
                  className={[
                    "rounded-full px-3 py-2 font-display text-base font-semibold transition-colors sm:text-lg",
                    " focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500",
                    selected
                      ? "bg-night-900 text-cream-50"
                      : "text-night-800 hover:bg-night-100",
                  ].join(" ")}
                >
                  {title}
                  {index < VALUES.length - 1 ? (
                    <span
                      className="ml-3 hidden text-night-300 sm:inline"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            id={`${groupId}-panel`}
            role="tabpanel"
            aria-labelledby={`${groupId}-tab-${active}`}
            className="mx-auto mt-8 max-w-3xl rounded-2xl border border-night-100 bg-white px-6 py-5 text-center"
          >
            <p className="font-display text-lg font-semibold text-gold-700">
              {activeValue.title}
            </p>
            <p className="mt-3 text-base leading-7 text-night-600">
              {activeValue.body}
            </p>
          </div>

          <p className="mt-4 text-center text-xs text-night-500">
            Hover or tap a value to learn more.
          </p>
        </div>
      </div>
    </section>
  );
}
