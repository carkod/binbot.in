import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["*.replit.dev", "*.repl.co", "*.worf.replit.dev"],
};

export default nextConfig;
