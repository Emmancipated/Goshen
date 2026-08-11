import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FounderVideo } from "@/components/founder-video";
import { VideoCard } from "@/components/video-card";
import { CameraIcon, VideoIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch our founder's messages and browse photographs from our programmes, events, empowerment activities and outreach.",
};

const VIDEOS = [
  {
    src: "",
    poster: "/images/founder.jpg",
    title: "A Message From Our Matron",
    duration: "01:42",
  },
  {
    src: "",
    poster: "/images/community.jpg",
    title: "Life Inside the Shelter",
    duration: "03:05",
  },
  {
    src: "",
    poster: "/images/empower.jpg",
    title: "Skills for a New Beginning",
    duration: "02:18",
  },
  {
    src: "",
    poster: "/images/education.jpg",
    title: "Keeping Children in School",
    duration: "01:56",
  },
];

const GALLERY = [
  { src: "/images/about.jpg", alt: "Women and volunteers joining hands in support and unity" },
  { src: "/images/community.jpg", alt: "Women supporting each other during a group session" },
  { src: "/images/health.jpg", alt: "A health check for a resident at the shelter" },
  { src: "/images/education.jpg", alt: "Children in class at their new school" },
  { src: "/images/empower.jpg", alt: "A survivor learning tailoring skills" },
  { src: "/images/partners.jpg", alt: "Volunteers and partners at a foundation event" },
  { src: "/images/donate.jpg", alt: "A helper handing a donation to a woman in need" },
  { src: "/images/help.jpg", alt: "A hand reaching out in reassurance and support" },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Stories told through video and photographs"
        description="A central home for approved Foundation media — founder's messages, interviews, events and the everyday moments of healing and hope at Goshen Shelters."
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Watch"
            title="Videos"
            description="Films and recordings from the Foundation — more are added over time."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                  A Message From Our Founder
                </p>
                <FounderVideo />
              </div>
            </Reveal>
            <div className="grid content-start gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {VIDEOS.map((video, i) => (
                <Reveal key={video.title} delay={(i % 2) * 80}>
                  <VideoCard {...video} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Browse"
              title="Photographs"
              description="Moments from our programmes, events, empowerment activities and outreach."
              align="left"
            />
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600">
              <CameraIcon className="h-4 w-4" />
              {GALLERY.length} photos
            </span>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY.map(({ src, alt }, i) => (
              <Reveal key={src} delay={(i % 4) * 60}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-night-100">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-xs font-medium leading-5 text-cream-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {alt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-night-600/80">
            <VideoIcon className="h-4 w-4 text-gold-600" />
            More photographs and videos are added as they are approved.
          </p>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Media &amp; press</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Working with the media to end SGBV
            </h2>
            <p className="mt-3 text-base leading-7 text-night-600">
              For interviews, partnerships or press enquiries, our team would be glad to hear from you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
