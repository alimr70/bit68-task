/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'gazef.s3.amazonaws.com',
      pathname: '/FebApiTask/**',
    }],
  },
}

module.exports = nextConfig