type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-night-900 text-cream-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.14),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.2em] text-white/60">{eyebrow}</p>
        <h1 className="animate-fade-up mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          style={{ animationDelay: "90ms" }}
        >
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up mt-4 max-w-2xl text-base leading-7 text-white/70" style={{ animationDelay: "180ms" }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
