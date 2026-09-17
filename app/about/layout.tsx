import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Boone Chronicles | Ryker Boone Story-World & Official Archive",
  description: "Step inside The Boone Chronicles — the cinematic story-world behind country recording artist Ryker Boone. Explore modern country music, storytelling, and official releases.",
  keywords: [
    "Ryker Boone",
    "country music",
    "modern country",
    "country pop",
    "official music",
    "official lyric videos",
    "Boone Chronicles",
    "country storytelling",
    "Americana",
    "SINGITPOP RECORDS"
  ],
  openGraph: {
    title: "The Boone Chronicles | Ryker Boone Story-World & Music Archive",
    description: "A cinematic country narrative of family, love, loss, fatherhood, second chances and the roads that shape the songs.",
    url: "https://www.rykerboone.com/about",
    siteName: "Ryker Boone Official",
    images: [
      {
        url: "/images/ryker_facing_right.png",
        width: 1200,
        height: 630,
        alt: "The Boone Chronicles - Ryker Boone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Boone Chronicles | Ryker Boone Story-World",
    description: "The fictional story-world behind the music of modern country recording artist Ryker Boone.",
    images: ["/images/ryker_facing_right.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
