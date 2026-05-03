import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/og-image.png",
        destination: "/opengraph-image",
      },
    ];
  },
};

export default nextConfig;
