import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

const HELP_PHONE = "+2348027775001";
const HELP_PHONE_DISPLAY = "0802 777 5001";
const HELP_EMAIL = "goshenshelters2026@gmail.com";
const HELP_WHATSAPP = "https://wa.me/2348027775001";

type ContactOptionsProps = {
  className?: string;
  compact?: boolean;
};

export function ContactOptions({ className = "", compact = false }: ContactOptionsProps) {
  const iconClass = compact ? "h-4 w-4" : "h-5 w-5";
  const base = compact
    ? "inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all active:scale-[0.98]"
    : "group flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all hover:-translate-y-1";
  return (
    <div className={`grid gap-3 ${compact ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-3"} ${className}`}>
      <a
        href={`tel:${HELP_PHONE}`}
        className={`${base} border-night-200 bg-cream-50 text-white hover:border-gold-500 hover:bg-gold-500 hover:text-white`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-colors group-hover:bg-night-900 group-hover:text-gold-400">
          <PhoneIcon className={iconClass} />
        </span>
        {!compact && <span className="text-xs font-bold uppercase tracking-wider text-gold-600 group-hover:text-night-700">Call</span>}
        {!compact && <span className="text-sm font-semibold leading-5">{HELP_PHONE_DISPLAY}</span>}
        {compact && <span>Call</span>}
      </a>
      <a
        href={HELP_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-night-200 bg-cream-50 text-white hover:border-gold-500 hover:bg-gold-500 hover:text-white`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-colors group-hover:bg-night-900 group-hover:text-gold-400">
          <WhatsAppIcon className={iconClass} />
        </span>
        {!compact && <span className="text-xs font-bold uppercase tracking-wider text-gold-600 group-hover:text-night-700">Chat on WhatsApp</span>}
        {!compact && <span className="text-sm font-semibold leading-5">Message us privately</span>}
        {compact && <span>WhatsApp</span>}
      </a>
      <a
        href={`mailto:${HELP_EMAIL}`}
        className={`${base} border-night-200 bg-cream-50 text-white hover:border-gold-500 hover:bg-gold-500 hover:text-white`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-colors group-hover:bg-night-900 group-hover:text-gold-400">
          <MailIcon className={iconClass} />
        </span>
        {!compact && <span className="text-xs font-bold uppercase tracking-wider text-gold-600 group-hover:text-night-700">Email</span>}
        {!compact && <span className="text-sm font-semibold leading-5">{HELP_EMAIL}</span>}
        {compact && <span>Email</span>}
      </a>
    </div>
  );
}
