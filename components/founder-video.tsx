"use client";

import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { PlayIcon } from "@/components/icons";

const FOUNDER_VIDEO = process.env.NEXT_PUBLIC_FOUNDER_VIDEO ?? "";

export function FounderVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Watch the Founder's message video"
        className="group relative block w-full overflow-hidden rounded-2xl border border-night-700 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        <div className="relative aspect-video">
          <Image
            src="/images/founder.jpg"
            alt="A still image from the Founder's message video"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-night-950/20 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <PlayIcon className="ml-1 h-6 w-6" />
            </span>
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-night-950/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-400 backdrop-blur">
            Watch Message
          </span>
        </div>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="founder-video-title" maxWidth="max-w-3xl">
        <div className="p-6 sm:p-8">
          <h2 id="founder-video-title" className="font-display text-xl font-semibold text-gold-700">
            A Message From Our Founder
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-night-600">
            Hear the story and vision behind God&rsquo;s Home for Women Foundation and Goshen Shelters.
          </p>
          <div className="relative mt-5 overflow-hidden rounded-2xl bg-night-950">
            {FOUNDER_VIDEO ? (
              <video
                src={FOUNDER_VIDEO}
                controls
                playsInline
                className="aspect-video w-full"
                controlsList="play volume fullscreen"
              />
            ) : (
              <div className="relative aspect-video">
                <Image
                  src="/images/founder.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <p className="max-w-md text-sm leading-6 text-cream-50">
                    The Founder&rsquo;s video will be available here soon.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
