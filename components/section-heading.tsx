import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-gold-600"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-cream-50" : "text-night-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${light ? "text-white/70" : "text-night-600"}`}>{description}</p>
      )}
    </Reveal>
  );
}
