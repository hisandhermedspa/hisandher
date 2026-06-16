import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray lockfile elsewhere on the
  // machine doesn't confuse Turbopack.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Serve AVIF (smallest) with WebP fallback for every photo.
    formats: ["image/avif", "image/webp"],
    // Keep optimized variants cached on the CDN for 30 days.
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
