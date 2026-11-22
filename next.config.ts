import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Old WordPress URLs that were linked from the site
  async redirects() {
    return [
      { source: "/https-carewells-lk-https-carewells-lk", destination: "/", permanent: true },
      { source: "/service", destination: "/medical-service", permanent: true },
      { source: "/health-check-ups", destination: "/online-health-check-ups-form", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
