/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  serverExternalPackages: ["@fortawesome/fontawesome-svg-core"],

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
