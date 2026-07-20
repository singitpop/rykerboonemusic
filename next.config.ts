import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rykerboone.com",
      },
      {
        protocol: "https",
        hostname: "rykerboone.com",
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "all, index, follow",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/store",
        destination: "https://shop.rykerboone.com",
        permanent: false,
      },
      {
        source: "/store/:path*",
        destination: "https://shop.rykerboone.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
