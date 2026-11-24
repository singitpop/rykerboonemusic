import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Releases | Ryker Boone — Nothing But the Frequency",
  description:
    "Discover Ryker Boone's featured releases, led by the upcoming single 'Nothing But the Frequency' (releasing 4 December 2026) alongside PROJECT: RYKER, New Year's Evening, and Christmas All Year Long.",
  keywords: [
    "Ryker Boone",
    "Nothing But the Frequency",
    "PROJECT: RYKER",
    "New Year's Evening",
    "Christmas All Year Long",
    "Featured Releases",
    "Country Deep House",
    "Modern Country Music",
    "SINGITPOP RECORDS",
  ],
  openGraph: {
    title: "Featured Releases | Ryker Boone — Nothing But the Frequency",
    description:
      "Explore Ryker Boone's spotlight single 'Nothing But the Frequency' (4 December 2026) and upcoming promotional album releases.",
    url: "https://www.rykerboone.com/featured",
    siteName: "Ryker Boone Official",
    images: [
      {
        url: "/images/nothing-but-the-frequency-single.jpg",
        width: 1024,
        height: 1024,
        alt: "Nothing But the Frequency — Ryker Boone Official Single Artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Releases | Ryker Boone — Nothing But the Frequency",
    description:
      "Nothing But the Frequency releases 4 December 2026 alongside PROJECT: RYKER and New Year's Evening.",
    images: ["/images/nothing-but-the-frequency-single.jpg"],
  },
  alternates: {
    canonical: "/featured",
  },
};

export default function FeaturedReleasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
