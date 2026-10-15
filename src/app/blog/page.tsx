import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, postUrl, SITE_URL } from "@/lib/blog";

/* O <title> passa pelo template do layout raiz ("%s | ImobDeal CRM
   Imobiliário"); no compartilhamento vai o título completo. */
const pageTitle = "Blog: gestão comercial para imobiliárias";
const title = "Blog do ImobDeal: gestão comercial para imobiliárias";
const description =
  "Gestão comercial de imobiliárias, distribuição de leads, funil de vendas e tecnologia na rotina de quem vende imóvel. Conteúdo prático, escrito por quem constrói o ImobDeal.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  keywords: [
    "blog imobiliário",
    "gestão de imobiliária",
    "gestão comercial imobiliária",
    "distribuição de leads",
    "roleta de leads",
    "funil de vendas imobiliário",
    "CRM imobiliário",
    "tecnologia para imobiliárias",
  ],
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        secureUrl: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Blog do ImobDeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: { "application/rss+xml": `${SITE_URL}/blog/feed.xml` },
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  /* Blog + lista de posts: ajuda buscador e IA a entender a página como o
     índice dos artigos do ImobDeal. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog do ImobDeal",
    description,
    url: `${SITE_URL}/blog`,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "ImobDeal",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/imobdeal-azul.svg` },
    },
    blogPost: posts
      .filter((p) => !p.draft)
      .map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        url: postUrl(p.slug),
        datePublished: p.date,
        dateModified: p.updated ?? p.date,
      })),
  };

  return (
    <div className="bg-surface-light min-h-screen">
      {/* Faixa escura no topo: o header é fixo e transparente, com texto branco */}
      <section className="relative bg-primary pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div aria-hidden className="absolute -left-24 top-10 w-80 h-80 rounded-full bg-primary-light/60 blur-3xl" />
        <div aria-hidden className="absolute right-0 -bottom-24 w-72 h-72 rounded-full bg-accent-amber/10 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-accent-amber text-sm font-semibold uppercase tracking-wider">Blog</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Blog do ImobDeal
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/65 leading-relaxed">
            Gestão comercial de imobiliárias, distribuição de leads e tecnologia aplicada à rotina de
            quem vende imóvel. O que funciona na prática, sem teoria de palco.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-14 md:py-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">Em breve</p>
            <h2 className="mt-3 text-2xl font-bold text-primary tracking-tight">
              Os primeiros artigos estão a caminho
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Enquanto isso, veja como o ImobDeal organiza a operação comercial da imobiliária, do
              lead que chega ao contrato assinado.
            </p>
            <Link
              href="/como-funciona"
              className="mt-7 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
            >
              Ver como funciona
            </Link>
          </div>
        ) : (
          <ul className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
