import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    // Le français est la langue par défaut.
    return [{ source: "/", destination: "/fr", permanent: false }];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
