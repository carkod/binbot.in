import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["*.binbot.in"],
  output: "standalone",
};

export default nextConfig;
