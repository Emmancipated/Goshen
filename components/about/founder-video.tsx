"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type FounderVideoProps = {
  founderName: string;
  videoSrc: string;
  posterSrc?: string;
};

export function FounderVideo({
  founderName,
  videoSrc,
  posterSrc = "/images/about.jpg",
}: FounderVideoProps) {
  const dialogId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
        aria-haspopup="dialog"
        aria-controls={dialogId}
      >
        <div className="overflow-hidden rounded-2xl border border-night-100 bg-night-900 shadow-sm">
          <div className="relative aspect-video">
            <Image
              src={posterSrc}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover opacity-90 transition-transform group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-night-950/40" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full border border-cream-50/40 bg-cream-50/95 px-5 py-2 text-sm font-semibold text-night-900">
                Play message
              </span>
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
          A message from our founder
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-[#2F1B69]">
          {founderName}
        </p>
      </button>

      {open ? (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          aria-label={`Founder message from ${founderName}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-night-950/85 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-night-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-night-700 px-5 py-4">
              <p className="font-display text-lg font-semibold text-cream-50">
                {founderName}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-night-600 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-night-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Close
              </button>
            </div>

            <video
              ref={videoRef}
              controls
              playsInline
              preload="none"
              poster={posterSrc}
              className="aspect-video w-full bg-night-950"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      ) : null}
    </>
  );
}
