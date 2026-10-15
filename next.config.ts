import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // .md/.mdx entram como módulo (posts do blog em src/content/blog).
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
      {
        // Foto dos autores do blog (ver src/lib/authors.ts).
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
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
        // Feed RSS do blog: muda só quando sai post novo.
        source: '/blog/feed.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
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

/* Posts do blog em MDX (src/content/blog). Sem plugins de remark: no
   @next/mdx 15.2 o plugin passado por nome é carregado com import() de um
   caminho absoluto, o que quebra no Windows (dev e build), e plugin passado
   como função não roda no dev com Turbopack. Por isso tabela é o componente
   <Table> (ver src/components/blog/Table.tsx). */
const withMDX = createMDX();

export default withMDX(nextConfig);
