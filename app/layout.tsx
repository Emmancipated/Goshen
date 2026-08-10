import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { EmergencyBanner } from "@/components/emergency-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HelpModalProvider } from "@/components/help-modal-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Goshen Shelters — A safe place. A new beginning.",
    template: "%s | Goshen Shelters",
  },
  description:
    "God's Home for Women Foundation operates Goshen Shelters — a refuge providing hope, shelter, healing and practical support for women and children escaping domestic violence in Nigeria. Confidential help 24/7 on 0802 777 5001.",
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
  openGraph: {
    title: "Goshen Shelters — A safe place. A new beginning.",
    description:
      "Hope, shelter, healing and practical support for women escaping domestic violence. Confidential help 24/7 on 0802 777 5001.",
    url: "https://goshenshelters.org",
    siteName: "God's Home for Women Foundation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <HelpModalProvider>
          <EmergencyBanner />
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </HelpModalProvider>
      </body>
    </html>
  );
}
