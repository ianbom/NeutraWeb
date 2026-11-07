import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  devIndicators: false,
  async redirects() {
    return [
      { source: "/", destination: "/id", permanent: true },
      ...["about", "cases", "contact", "article"].map((path) => ({ source: `/${path}/:rest*`, destination: `/id/${path}/:rest*`, permanent: true })),
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
