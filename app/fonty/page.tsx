import styles from "./page.module.css";
type Specimen = {
  tag: string;
  name: string;
  meta: string;
  headline: string;
  body: string;
  className: string;
  headlineSize?: "xl" | "mono";
};

const SPECIMENS: Specimen[] = [
  {
    tag: "UI / product",
    name: "Inter",
    meta: "Neutral neo-grotesk · great default body + UI",
    headline: "Clarity for dashboards",
    body: "The quick brown fox jumps over the lazy dog. 0123456789",
    className: styles.inter,
  },
  {
    tag: "Friendly sans",
    name: "Manrope",
    meta: "Modern geometric · soft headlines",
    headline: "Warm and contemporary",
    body: "The quick brown fox jumps over the lazy dog. 0123456789",
    className: styles.manrope,
  },
  {
    tag: "Clean sans",
    name: "DM Sans",
    meta: "Low-contrast geometric · marketing + app",
    headline: "Simple, confident type",
    body: "The quick brown fox jumps over the lazy dog. 0123456789",
    className: styles.dmSans,
  },
  {
    tag: "Display sans",
    name: "Outfit",
    meta: "Slightly rounded · strong titles",
    headline: "Bold landing headlines",
    body: "The quick brown fox jumps over the lazy dog. 0123456789",
    className: styles.outfit,
  },
  {
    tag: "Tech display",
    name: "Space Grotesk",
    meta: "Characterful grotesk · startup / product",
    headline: "Distinct brand voice",
    body: "The quick brown fox jumps over the lazy dog. 0123456789",
    className: styles.spaceGrotesk,
  },
  {
    tag: "Editorial serif",
    name: "Source Serif 4",
    meta: "Readable serif · long-form + headings",
    headline: "Stories with weight",
    body: "The quick brown fox jumps over the lazy dog. 0123456789",
    className: styles.sourceSerif,
  },
  {
    tag: "Classic serif",
    name: "Libre Baskerville",
    meta: "Traditional · trustworthy / academic",
    headline: "Established tone",
    body: "The quick brown fox jumps over the lazy dog. 0123456789",
    className: styles.libreBaskerville,
  },
  {
    tag: "Expressive serif",
    name: "Instrument Serif",
    meta: "High-contrast display · hero only",
    headline: "Make one line sing",
    body: "Best for large headlines, not dense UI copy.",
    className: styles.instrumentSerif,
  },
  {
    tag: "Code / data",
    name: "IBM Plex Mono",
    meta: "Monospace · IDs, code, tables",
    headline: 'const font = "plex"',
    body: "ABCDEFabcdef 0123456789 — email@academy.test",
    className: styles.ibmPlexMono,
    headlineSize: "mono",
  },
];

export default function HomePage() {
  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>Free font styles for Next.js</h1>
      </header>

      <section className={styles.grid}>
        {SPECIMENS.map((font) => (
          <article key={font.name} className={styles.card}>
            <div className={styles.tag}>{font.tag}</div>
            <p className={styles.name}>{font.name}</p>
            <p className={styles.meta}>{font.meta}</p>
            <p
              className={`${font.className} ${
                font.headlineSize === "mono"
                  ? styles.sampleMono
                  : styles.sampleXl
              } text-4xl`}
            >
              {font.headline}
            </p>
            <p className={`${font.className} ${styles.sampleBody}`}>
              {font.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
