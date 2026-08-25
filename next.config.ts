import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/gigs",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/full-ecommerce-development",
        destination: "/services/ecommerce-development",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "huzaifasajjaddev.online" }],
        destination: "https://www.huzaifasajjaddev.online/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
