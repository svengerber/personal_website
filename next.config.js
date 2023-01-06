/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
