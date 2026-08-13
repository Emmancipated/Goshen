import {
  DM_Sans,
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter,
  Libre_Baskerville,
  Manrope,
  Outfit,
  Source_Serif_4,
  Space_Grotesk,
} from "next/font/google";

/** Self-hosted via next/font — no runtime Google CSS request in production. */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const fontVariables = [
  inter.variable,
  manrope.variable,
  dmSans.variable,
  outfit.variable,
  spaceGrotesk.variable,
  sourceSerif.variable,
  libreBaskerville.variable,
  instrumentSerif.variable,
  ibmPlexMono.variable,
].join(" ");
