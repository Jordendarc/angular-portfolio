import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Firebase Hosting serves static files, so build to plain HTML in ./out
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
