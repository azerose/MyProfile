/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "myprofile-jwl",
  images: {
    loader: "akamai",
    path: "/",
  },
  exportPathMap: () => ({
    "/": { page: "/" },
    "/market": { page: "/market" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
