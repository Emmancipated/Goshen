"use client";

import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { PlayIcon } from "@/components/icons";

type VideoCardProps = {
  src: string;
  poster: string;
  title: string;
  duration?: string;
};

export function VideoCard({ src, poster, title, duration }: VideoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${title}`}
        className="group relative block w-full overflow-hidden rounded-2xl border border-night-100 bg-night-950 text-left transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        <div className="relative aspect-video">
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-night-950/10 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <PlayIcon className="ml-0.5 h-5 w-5" />
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <span className="font-display text-sm font-semibold leading-5 text-cream-50">{title}</span>
            {duration && (
              <span className="shrink-0 rounded-full bg-night-950/70 px-2.5 py-1 text-xs font-semibold text-gold-400 backdrop-blur">
                {duration}
              </span>
            )}
          </span>
        </div>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="video-modal-title" maxWidth="max-w-3xl">
        <div className="p-6 sm:p-8">
          <h2 id="video-modal-title" className="font-display text-xl font-semibold text-gold-700">
            {title}
          </h2>
          <div className="relative mt-5 overflow-hidden rounded-2xl bg-night-950">
            {src ? (
              <video src={src} controls playsInline className="aspect-video w-full" controlsList="play volume fullscreen" />
            ) : (
              <div className="relative aspect-video">
                <Image src={poster} alt="" fill sizes="(max-width: 768px) 100vw, 720px" className="object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <p className="max-w-md text-sm leading-6 text-cream-50">This video will be available here soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
