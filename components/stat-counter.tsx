"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type StatCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  delay?: number;
  speed?: number;
  animateWhileInView?: boolean;
  pulseStyle?: "glow" | "sequential";
};

export function StatCounter({
  value,
  suffix = "",
  className = "",
  delay = 0,
  speed = 1,
  animateWhileInView = false,
  pulseStyle = "glow",
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [isActive, setIsActive] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);
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
      const id = window.setTimeout(() => setIsActive(true), delay);
      return () => window.clearTimeout(id);
    }

    let timeoutId: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        timeoutId = window.setTimeout(() => setIsActive(true), delay);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, [delay]);

  const chars = useMemo(() => value.toLocaleString("en-NG").split(""), [value]);

  useEffect(() => {
    if (!isActive || !animateWhileInView) return;

    const odometerDuration = (1.1 + chars.length * 0.06) / speed;
    const totalDelay = delay + odometerDuration * 1000;

    const timer = window.setTimeout(() => {
      setShouldPulse(true);
    }, totalDelay);

    return () => window.clearTimeout(timer);
  }, [isActive, animateWhileInView, speed, delay, chars.length]);

  const isSequential = pulseStyle === "sequential";
  const sequentialDuration = isSequential ? 2.4 : 0;

  const sequentialDelay = (index: number) => {
    if (!isSequential || chars.length <= 1) return 0;
    return (index * sequentialDuration) / chars.length;
  };

  return (
    <span
      ref={ref}
      className={`inline-flex tabular-nums ${className}`}
    >
      {chars.map((char, i) =>
        char === "," ? (
          <span
            key={i}
            className={`opacity-60 ${shouldPulse && animateWhileInView && isSequential ? "stat-sequential" : ""} ${shouldPulse && animateWhileInView && !isSequential ? "stat-pulse" : ""}`}
            style={
              isSequential
                ? { animationDelay: `${sequentialDelay(i)}s` }
                : undefined
            }
          >
            ,
          </span>
        ) : (
          <span
            key={i}
            className={`relative inline-block overflow-hidden ${shouldPulse && animateWhileInView && isSequential ? "stat-sequential" : ""} ${shouldPulse && animateWhileInView && !isSequential ? "stat-pulse" : ""}`}
            style={{
              height: "1em",
              ...(isSequential ? { animationDelay: `${sequentialDelay(i)}s` } : {}),
            }}
          >
            <span
              className="flex flex-col leading-none"
              style={{
                transform: isActive
                  ? `translateY(-${Number(char)}em)`
                  : "translateY(0)",
                transitionProperty: reducedMotion ? "none" : "transform",
                transitionDuration: reducedMotion ? "0s" : `${1.1 / speed}s`,
                transitionDelay: reducedMotion ? "0s" : `${(i * 60) / speed}ms`,
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
      {suffix && (
        <span className={shouldPulse && animateWhileInView && !isSequential ? "stat-pulse" : ""}>
          {suffix}
        </span>
      )}
    </span>
  );
}
