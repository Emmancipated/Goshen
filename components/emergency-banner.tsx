import Link from "next/link";

export function EmergencyBanner() {
  return (
    <div className="bg-night-900 text-cream-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-sm sm:px-6">
        <p className="flex min-w-0 items-center gap-2">
          <span className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-gold-500" aria-hidden="true" />
          <span className="truncate">
            <span className="font-bold text-gold-400">A delayed exit can lead to an untimely death.</span>{" "}
            <a href="tel:112" className="font-semibold underline underline-offset-2 hover:text-gold-300">
              Call 112 now
            </a>
            <span className="hidden sm:inline"> or </span>
            <a href="tel:+2348027775001" className="hidden font-semibold underline underline-offset-2 hover:text-gold-300 sm:inline">
              0802 777 5001
            </a>
            <span className="hidden lg:inline"> — confidential, 24/7.</span>
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <Link href="/get-help#cover-your-tracks" className="hidden text-cream-50/70 underline underline-offset-2 hover:text-gold-300 md:inline">
            Cover your tracks
          </Link>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-400 transition-colors hover:bg-gold-500 hover:text-night-900"
          >
            Exit site
          </a>
        </div>
      </div>
    </div>
  );
}
