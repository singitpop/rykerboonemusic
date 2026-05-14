import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ryker Boone | Official Music Artist Site",
  description: "The official website of Ryker Boone. Experience the latest music, exclusive digital artbooks, and the journey of Nashville's newest voice.",
  keywords: ["Ryker Boone", "Country Music", "Nashville", "SingIt Pop", "Music Artist", "Boots in the Autumn Dust", "Club Ryker"],
  verification: {
    google: "T3triH4voDMpatdHyU7Va6HZjjckhG0B0zyrTwQYU7g",
  },
  openGraph: {
    title: "Ryker Boone | Official Music Artist Site",
    description: "Experience the journey of Ryker Boone. New music and exclusive fan portal now live.",
    url: "https://www.rykerboonemusic.website",
    siteName: "Ryker Boone Official",
    images: [
      {
        url: "/images/ryker-hero-v2.png",
        width: 1200,
        height: 630,
        alt: "Ryker Boone Official Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryker Boone | Official Music Artist Site",
    description: "Nashville's newest voice. New music and exclusive fan portal now live.",
    images: ["/images/ryker-hero-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
