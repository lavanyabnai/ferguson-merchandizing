import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Performance optimizations
  experimental: {
    // Enable optimized package imports for better tree-shaking
    optimizePackageImports: [
      '@tanstack/react-query',
      'lucide-react',
      'recharts',
      '@radix-ui/react-icons',
      'date-fns',
    ],
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Bundle analyzer (uncomment to analyze)
  // ...(process.env.ANALYZE === 'true' ? {
  //   webpack: (config) => {
  //     const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  //     config.plugins.push(
  //       new BundleAnalyzerPlugin({
  //         analyzerMode: 'static',
  //         openAnalyzer: false,
  //       })
  //     )
  //     return config
  //   },
  // } : {}),

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/merchandizing-optimizer',
        destination: '/merchandizing',
        permanent: true,
      },
      {
        source: '/merchandizing-optimizer/:path*',
        destination: '/merchandizing/:path*',
        permanent: true,
      },
      {
        source: '/wholesale-optimizer',
        destination: '/merchandizing-optimizer',
        permanent: true,
      },
      {
        source: '/wholesale-optimizer/:path*',
        destination: '/merchandizing-optimizer/:path*',
        permanent: true,
      },
    ]
  },

  // Redirects/rewrites optimization
  poweredByHeader: false,
  reactStrictMode: true,

}

export default nextConfig
