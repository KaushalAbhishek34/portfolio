/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "drive.google.com",
          pathname: "/uc", // Ensures only the specific pattern is allowed
        },
      ],
    },
  };
  
  export default nextConfig;
  