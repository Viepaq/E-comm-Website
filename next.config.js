/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure allowed image domains for next/image component
  images: {
    domains: ['localhost'], // Allows loading images from localhost
  },
  // Skip ESLint checks during build process
  eslint: {
    ignoreDuringBuilds: true, // Bypasses ESLint errors/warnings when building
  },
  // Skip TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true, // Bypasses TypeScript errors when building
  },
};

module.exports = nextConfig;