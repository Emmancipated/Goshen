import Link from "next/link";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="11" className="fill-night-900 transition-colors group-hover:fill-gold-600" />
        <path
          d="M8.5 17.5 20 9l11.5 8.5"
          fill="none"
          stroke="#fdfbf7"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 17.5V29h17V17.5"
          fill="none"
          stroke="#fdfbf7"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M20 28c-1.7-1.4-4.3-3.9-4.3-6.1 0-1.6 1.2-2.7 2.6-2.7.9 0 1.5.4 1.7 1.1.2-.7.8-1.1 1.7-1.1 1.4 0 2.6 1.1 2.6 2.7 0 2.2-2.6 4.7-4.3 6.1z"
          fill="#c9a227"
        />
      </svg>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold tracking-tight ${dark ? "text-cream-50" : "text-gold-700"}`}>
          Goshen Shelters
        </span>
        <span className={`block text-[11px] font-medium uppercase tracking-[0.18em] ${dark ? "text-white/70" : "text-gold-600"}`}>
          A refuge for women &amp; children
        </span>
      </span>
    </Link>
  );
}
