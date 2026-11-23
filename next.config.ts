import type { NextConfig } from "next";

// Static export for GitHub Pages: `next build` writes plain HTML/CSS/JS to `out/`.
const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves `/projects/acne-ai/index.html` for `/projects/acne-ai/`.
  trailingSlash: true,
  // There is no image server on GitHub Pages, so images are served as-is.
  images: { unoptimized: true },
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
