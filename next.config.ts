import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rykerboonemusic.website",
      },
      {
        protocol: "https",
        hostname: "rykerboonemusic.website",
      },
      {
        protocol: "https",
        hostname: "singitpop.com",
      },
      {
        protocol: "https",
        hostname: "rykerboonemusic.s3.eu-west-2.amazonaws.com",
      }
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
