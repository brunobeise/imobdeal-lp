import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
       {
        protocol: "https",
        hostname: "app.imobdeal.com.br",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
    formats: ['image/webp', 'image/avif'],
    // Sem isso o cache das imagens otimizadas expira em 60s e o Lighthouse
    // acusa política de cache ineficiente a cada rodada.
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        // Screenshots do produto: conteúdo imutável, trocado por novo arquivo.
        source: '/:dir(screenshots|dashboards|sites|clientes|portais|depoimentos)/:file*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
