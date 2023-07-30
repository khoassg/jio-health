/** @type {import('next').NextConfig} */
const nextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[]",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jiohealth.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
