import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray lockfile elsewhere on the
  // machine doesn't confuse Turbopack.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
