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
  keywords: ["Ryker Boone", "Country Music", "Nashville", "SingIt Pop", "Music Artist"],
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
