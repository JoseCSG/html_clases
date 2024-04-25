/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol
        hostname: "rickandmortyapi.com", // Specify the hostname
      },
    ],
  },
};

export default nextConfig;
