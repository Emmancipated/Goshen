"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Modal } from "@/components/modal";
import { CloseIcon, PauseIcon, PlayIcon } from "@/components/icons";

type VideoCardProps = {
  src: string;
  poster: string;
  title: string;
  duration?: string;
  className?: string;
  fill?: boolean;
  showTitle?: boolean;
  inline?: boolean;
};

export function VideoCard({
  src,
  poster,
  title,
  duration,
  className = "",
  fill = false,
  showTitle = true,
  inline = false,
}: VideoCardProps) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (inline && playing) {
    return (
      <div className={`group relative w-full overflow-hidden bg-night-950 ${className}`}>
        <video
          ref={videoRef}
          src={src}
          autoPlay
          playsInline
          poster={poster}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              if (videoRef.current?.paused) {
                void videoRef.current.play();
                setPaused(false);
              } else {
                videoRef.current?.pause();
                setPaused(true);
              }
            }}
            aria-label={paused ? "Play video" : "Pause video"}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            {paused ? (
              <PlayIcon className="ml-0.5 h-5 w-5" />
            ) : (
              <PauseIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            videoRef.current?.pause();
            setPaused(false);
            setPlaying(false);
          }}
          aria-label="Close video"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-night-950/75 text-cream-50 shadow-lg backdrop-blur transition-colors hover:bg-night-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <CloseIcon className="h-4.5 w-4.5" />
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (inline) {
            setPaused(false);
            setPlaying(true);
          } else {
            setOpen(true);
          }
        }}
        aria-label={`Play video: ${title}`}
        className={`group relative block w-full overflow-hidden rounded-2xl border border-night-100 bg-night-950 text-left transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${className}`}
      >
        <div className={`relative ${fill ? "h-full" : "aspect-video"}`}>
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-night-950/70 via-night-950/10 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <PlayIcon className="ml-0.5 h-5 w-5" />
            </span>
          </span>
          {showTitle && (
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <span className="font-display text-sm font-semibold leading-5 text-cream-50">
                {title}
              </span>
              {duration && (
                <span className="shrink-0 rounded-full bg-night-950/70 px-2.5 py-1 text-xs font-semibold text-gold-400 backdrop-blur">
                  {duration}
                </span>
              )}
            </span>
          )}
        </div>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="video-modal-title"
        maxWidth="max-w-3xl"
      >
        <div className="p-6 sm:p-8">
          <h2
            id="video-modal-title"
            className="font-display text-xl font-semibold text-gold-700"
          >
            {title}
          </h2>
          <div className="relative mt-5 overflow-hidden rounded-2xl bg-night-950">
            {src ? (
              <video
                src={src}
                controls
                playsInline
                className="aspect-video w-full"
                controlsList="play volume fullscreen"
              />
            ) : (
              <div className="relative aspect-video">
                <Image
                  src={poster}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <p className="max-w-md text-sm leading-6 text-cream-50">
                    This video will be available here soon.
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
