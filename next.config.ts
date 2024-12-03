import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://www.cpservice.pro/',
        permanent: true, // Change this to true for a 308/301 redirect
      },
    ];
  }
};

export default nextConfig;
