import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
