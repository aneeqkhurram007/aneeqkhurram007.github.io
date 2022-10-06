/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["th.bing.com", "cdn.sanity.io"]
  }
}

module.exports = nextConfig
