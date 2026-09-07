import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    workerThreads: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

