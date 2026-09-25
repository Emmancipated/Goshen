import type { Metadata } from "next";
import { Libre_Baskerville, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import { EmergencyBanner } from "@/components/emergency-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HelpModalProvider } from "@/components/help-modal-provider";
import { DonationModalProvider } from "@/components/donation/donation-modal-provider";
import { fontVariables } from "./fonty/font";
import { JsonLd } from "@/components/json-ld";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Goshen Shelters — A safe place. A new beginning.",
    template: "%s | Goshen Shelters",
  },
  description: "Hope, shelter, healing and practical support for women escaping domestic violence in Nigeria. Confidential help 24/7: 0701 854 9218.",
  keywords: [
    "domestic violence",
    "shelter",
    "refuge",
    "women",
    "children",
    "support",
    "Nigeria",
    "Lagos",
    "help",
    "God's Home for Women Foundation",
    "Goshen Shelters",
  ],
  metadataBase: new URL("https://goshenshelters.org"),
  alternates: {
    canonical: "https://www.goshenshelters.org",
  },
  openGraph: {
    title: "Goshen Shelters — A safe place. A new beginning.",
    description:
      "Hope, shelter, healing and practical support for women escaping domestic violence. Confidential help 24/7 on 0701 854 9218.",
    url: "https://goshenshelters.org",
    siteName: "God's Home for Women Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Goshen Shelters — A safe place. A new beginning.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goshen Shelters — A safe place. A new beginning.",
    description:
      "Hope, shelter, healing and practical support for women escaping domestic violence. Confidential help 24/7 on 0701 854 9218.",
    site: "@goshenshelters",
    images: ["/opengraph-image.png"],
  },
  themeColor: "#362454",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${outfit.variable} ${libreBaskerville.variable} ${fontVariables}  h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <HelpModalProvider>
          <DonationModalProvider>
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "God's Home for Women Foundation",
                alternateName: "Goshen Shelters",
                description:
                  "Hope, shelter, healing and practical support for women and children escaping domestic violence in Nigeria.",
                url: "https://goshenshelters.org",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+2347018549218",
                  contactType: "emergency support",
                  areaServed: "NG",
                  availableLanguage: "English",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lagos",
                  addressCountry: "NG",
                },
              }}
            />
            <EmergencyBanner />
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </DonationModalProvider>
        </HelpModalProvider>
      </body>
    </html>
  );
}
