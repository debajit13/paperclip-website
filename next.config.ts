import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '64.media.tumblr.com',
      },
    ], // Replace with your image domain
  },
  /* config options here */
};

export default nextConfig;
