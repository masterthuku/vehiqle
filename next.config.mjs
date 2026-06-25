/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kyjmlwgynwpwwartdhyh.supabase.co"
      }
    ]
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://github.com/masterthuku/vehiqle",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
