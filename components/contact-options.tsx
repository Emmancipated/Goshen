const HELP_PHONE = "+2348027775001";
const HELP_PHONE_DISPLAY = "0802 777 5001";
const HELP_EMAIL = "goshenshelters2026@gmail.com";
const HELP_WHATSAPP = "https://wa.me/2348027775001";

type ContactOptionsProps = {
  className?: string;
  compact?: boolean;
};

export function ContactOptions({
  className = "",
  compact = false,
}: ContactOptionsProps) {
  const cardBase =
    "rounded-2xl border border-[#E8DED5] bg-white transition-all duration-300";

  const hoverClass = compact
    ? "hover:border-[#43206F] hover:bg-[#F9F7FD]"
    : "hover:-translate-y-1 hover:border-[#43206F] hover:shadow-lg";

  if (compact) {
    return (
      <div className={`grid grid-cols-3 gap-3 ${className}`}>
        <a
          href={`tel:${HELP_PHONE}`}
          className={`${cardBase} ${hoverClass} flex flex-1 flex-col items-center justify-center gap-2 px-4 py-3 text-center`}
        >
          <span className="text-sm font-semibold text-[#2F1B69]">Call</span>
          <span className="text-xs text-[#5E5752]">{HELP_PHONE_DISPLAY}</span>
        </a>
        <a
          href={HELP_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardBase} ${hoverClass} flex flex-1 flex-col items-center justify-center gap-2 px-4 py-3 text-center`}
        >
          <span className="text-sm font-semibold text-[#2F1B69]">WhatsApp</span>
          <span className="text-xs text-[#5E5752]">Message us</span>
        </a>
        <a
          href={`mailto:${HELP_EMAIL}`}
          className={`${cardBase} ${hoverClass} flex flex-1 flex-col items-center justify-center gap-2 px-4 py-3 text-center`}
        >
          <span className="text-sm font-semibold text-[#2F1B69]">Email</span>
          <span className="text-xs text-[#5E5752]">Send message</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      <a
        href={`tel:${HELP_PHONE}`}
        className={`${cardBase} ${hoverClass} p-6 text-left`}
      >
        <p className="text-xs font-bold uppercase tracking-wider text-[#8B6A3D]">
          Call
        </p>
        <p className="mt-1 text-sm font-semibold leading-5 text-[#2F1B69]">
          {HELP_PHONE_DISPLAY}
        </p>
      </a>
      <a
        href={HELP_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardBase} ${hoverClass} p-6 text-left`}
      >
        <p className="text-xs font-bold uppercase tracking-wider text-[#8B6A3D]">
          Chat on WhatsApp
        </p>
        <p className="mt-1 text-sm font-semibold leading-5 text-[#2F1B69]">
          Message us privately
        </p>
      </a>
      <a
        href={`mailto:${HELP_EMAIL}`}
        className={`${cardBase} ${hoverClass} p-6`}
      >
        <p className="text-xs font-bold uppercase tracking-wider text-[#8B6A3D]">
          Email
        </p>
        <p className="mt-1 wrap-break-word text-sm font-semibold leading-5 text-[#2F1B69]">
          {HELP_EMAIL}
        </p>
      </a>
    </div>
  );
}
