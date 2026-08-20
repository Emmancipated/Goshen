import type { Metadata } from "next";
import SupportPageClient from "./support-client";

export const metadata: Metadata = {
  title: "Support Goshen",
  description:
    "Support Goshen Shelters by donating, giving items, volunteering, partnering or fundraising. Every gift provides safety, healing and hope.",
  openGraph: {
    title: "Support Goshen",
    description:
      "Support Goshen Shelters by donating, giving items, volunteering, partnering or fundraising. Every gift provides safety, healing and hope.",
    images: [
      {
        url: "/images/community.jpg",
        width: 1200,
        height: 630,
        alt: "Support Goshen Shelters — donate, volunteer, partner or fundraise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Goshen",
    description:
      "Support Goshen Shelters by donating, giving items, volunteering, partnering or fundraising. Every gift provides safety, healing and hope.",
    images: ["/images/community.jpg"],
  },
};

export default function SupportPage() {
  return <SupportPageClient />;
}
