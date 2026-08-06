"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type StatCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function StatCounter({
  value,
  suffix = "",
  className = "",
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [isActive, setIsActive] = useState(false);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      started.current = true;
      const id = window.setTimeout(() => setIsActive(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        setIsActive(true);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const chars = useMemo(() => value.toLocaleString("en-NG").split(""), [value]);

  return (
    <span ref={ref} className={`inline-flex tabular-nums ${className}`}>
      {chars.map((char, i) =>
        char === "," ? (
          <span key={i} className="opacity-60">
            ,
          </span>
        ) : (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
            style={{ height: "1em" }}
          >
            <span
              className="flex flex-col leading-none"
              style={{
                transform: isActive
                  ? `translateY(-${Number(char)}em)`
                  : "translateY(0)",
                transitionProperty: reducedMotion ? "none" : "transform",
                transitionDuration: "1.1s",
                transitionDelay: reducedMotion ? "0s" : `${i * 60}ms`,
                transitionTimingFunction: "cubic-bezier(0.15, 0.85, 0.35, 1)",
              }}
            >
              {DIGITS.map((digit) => (
                <span key={digit} className="h-[1em]">
                  {digit}
                </span>
              ))}
            </span>
          </span>
        ),
      )}
      {suffix}
    </span>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// type StatCounterProps = {
//   value: number;
//   suffix?: string;
//   className?: string;
// };

// export function StatCounter({ value, suffix = "", className = "" }: StatCounterProps) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const started = useRef(false);
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     if (typeof IntersectionObserver === "undefined") {
//       const id = window.setTimeout(() => setDisplay(value), 0);
//       return () => window.clearTimeout(id);
//     }

//     const reduced =
//       typeof window.matchMedia !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting || started.current) return;
//         started.current = true;
//         observer.disconnect();

//         if (reduced) {
//           setDisplay(value);
//           return;
//         }

//         const duration = 1400;
//         const start = performance.now();
//         const tick = (now: number) => {
//           const progress = Math.min((now - start) / duration, 1);
//           const eased = 1 - Math.pow(1 - progress, 3);
//           setDisplay(Math.round(eased * value));
//           if (progress < 1) requestAnimationFrame(tick);
//         };
//         requestAnimationFrame(tick);
//       },
//       { threshold: 0.4 },
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [value]);

//   return (
//     <span ref={ref} className={className}>
//       {display.toLocaleString("en-NG")}
//       {suffix}
//     </span>
//   );
// }
