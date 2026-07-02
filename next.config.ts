import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "personalbuct.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "personalbuct.s3.*.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
