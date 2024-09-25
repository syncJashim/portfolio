module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
