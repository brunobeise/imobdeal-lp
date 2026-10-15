import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiChevronRight, HiPlus } from "react-icons/hi";
import CtaButton from "@/components/CtaButton";
import AuthorBox, { AuthorAvatar } from "@/components/blog/AuthorBox";
import PostCard from "@/components/blog/PostCard";
import { getAuthor } from "@/lib/authors";
import { absoluteUrl, formatDate, getAllPosts, getPost, postUrl, SITE_URL, type Post } from "@/lib/blog";

/* Só existem as rotas dos posts em src/content/blog. Slug fora da lista é
   404, sem renderizar sob demanda. Rascunho não gera rota em produção. */
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/* Uma coluna só para o topo, o texto, o FAQ, o CTA e o box de autor: tudo
   começa e termina na mesma linha. 768px dá ~75 caracteres por linha em 18px. */
const COLUMN = "max-w-3xl mx-auto";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const author = getAuthor(post.author);
  const image = post.cover ? absoluteUrl(post.cover) : DEFAULT_IMAGE;

  return {
    title: { absolute: `${post.title} | ImobDeal` },
    description: post.description,
    keywords: post.tags,
    authors: [{ name: author.name, url: author.linkedin || undefined }],
    alternates: { canonical: postUrl(slug) },
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: postUrl(slug),
      siteName: "ImobDeal",
      locale: "pt_BR",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [author.name],
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

/* "Leia também": primeiro os posts com mais tags em comum, depois os mais
   recentes. */
function pickRelated(post: Post, all: Post[]): Post[] {
  return all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, shared: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.shared - a.shared || b.p.date.localeCompare(a.p.date))
    .slice(0, 3)
    .map(({ p }) => p);
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { Content } = post;
  const author = getAuthor(post.author);
  const related = pickRelated(post, await getAllPosts());
  const url = postUrl(slug);
  const modified = post.updated ?? post.date;

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.date,
      dateModified: modified,
      inLanguage: "pt-BR",
      keywords: post.tags.join(", "),
      image: post.cover ? absoluteUrl(post.cover) : DEFAULT_IMAGE,
      author: {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
        worksFor: { "@type": "Organization", name: "ImobDeal", url: SITE_URL },
        ...(author.avatar
          ? { image: author.avatar.startsWith("http") ? author.avatar : `${SITE_URL}${author.avatar}` }
          : {}),
        ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
      },
      publisher: {
        "@type": "Organization",
        name: "ImobDeal",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/imobdeal-azul.svg` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  /* O FAQPage espelha exatamente o texto da seção renderizada abaixo. É o
     formato que os assistentes de IA mais citam. */
  if (post.faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map(({ pergunta, resposta }) => ({
        "@type": "Question",
        name: pergunta,
        acceptedAnswer: { "@type": "Answer", text: resposta },
      })),
    });
  }

  return (
    <article className="bg-white">
      {/* Faixa escura no topo: o header é fixo e transparente, com texto branco */}
      <header className="relative bg-primary px-5 md:px-8 pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden">
        <div aria-hidden className="absolute -left-24 top-10 w-80 h-80 rounded-full bg-primary-light/60 blur-3xl" />
        <div aria-hidden className="absolute right-0 -bottom-24 w-72 h-72 rounded-full bg-accent-amber/10 blur-3xl" />

        <div className={`relative ${COLUMN}`}>
          <nav aria-label="Navegação estrutural">
            <ol className="flex items-center gap-1.5 text-sm text-white/50 min-w-0">
              <li className="shrink-0">
                <Link href="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li aria-hidden className="shrink-0"><HiChevronRight size={14} /></li>
              <li className="shrink-0">
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li aria-hidden className="shrink-0"><HiChevronRight size={14} /></li>
              <li aria-current="page" className="truncate text-accent-amber">{post.title}</li>
            </ol>
          </nav>

          {post.draft && (
            <p className="mt-5 inline-block rounded bg-orange-400/20 px-2.5 py-1 text-xs font-semibold text-orange-200">
              Rascunho: só aparece no ambiente de desenvolvimento
            </p>
          )}

          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
            {post.title}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/65 leading-relaxed">{post.description}</p>

          <div className="mt-8 flex items-center gap-3">
            <AuthorAvatar author={author} size={44} />
            <div className="text-sm">
              <p className="text-white">
                <span className="font-semibold">{author.name}</span>
                <span className="text-white/50">, {author.role}</span>
              </p>
              <p className="mt-0.5 text-white/50">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.updated && (
                  <>
                    <span className="mx-1.5" aria-hidden>·</span>
                    Atualizado em <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </>
                )}
                <span className="mx-1.5" aria-hidden>·</span>
                {post.readingTime} min de leitura
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* O primeiro bloco não tem margem e o que vem logo depois de um título
          fica mais perto. */}
      <div className="px-5 md:px-8 py-12 md:py-16">
        <div className={`${COLUMN} text-lg leading-[1.8] text-gray-700 [&>:first-child]:mt-0 [&>h2+*]:mt-4 [&>h3+*]:mt-3`}>
          <Content />
        </div>

        {post.faq && post.faq.length > 0 && (
          <section aria-labelledby="perguntas-frequentes" className={`${COLUMN} mt-16`}>
            <h2
              id="perguntas-frequentes"
              className="text-2xl md:text-[1.75rem] font-bold text-primary tracking-tight scroll-mt-28"
            >
              Perguntas frequentes
            </h2>
            <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
              {post.faq.map(({ pergunta, resposta }) => (
                <details key={pergunta} className="group py-5">
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4 text-lg font-semibold text-gray-900 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                    <h3 className="text-lg font-semibold">{pergunta}</h3>
                    <HiPlus
                      aria-hidden
                      className="mt-1.5 shrink-0 text-gray-400 transition-transform group-open:rotate-45"
                    />
                  </summary>
                  <p className="mt-3 text-[17px] text-gray-700 leading-relaxed">{resposta}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Convite para conhecer o ImobDeal. Abre o mesmo modal de lead da LP. */}
        <aside className={`relative ${COLUMN} mt-16 rounded-2xl bg-primary px-6 py-9 md:px-10 md:py-11 overflow-hidden`}>
          <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-accent-amber/15 blur-3xl" />
          <p className="relative text-2xl md:text-[1.75rem] font-bold text-white leading-snug tracking-tight text-balance">
            Quer ver isso funcionando na sua imobiliária?
          </p>
          <p className="relative mt-3 max-w-xl text-white/70 leading-relaxed">
            Roleta de leads, funil de vendas e dashboards da equipe em um só lugar. Um especialista
            mostra o ImobDeal com a rotina da sua operação, sem compromisso.
          </p>
          <div className="relative mt-7">
            <CtaButton size="large">Falar com especialista</CtaButton>
          </div>
        </aside>

        <div className={`${COLUMN} mt-10`}>
          <AuthorBox author={author} />
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="leia-tambem" className="bg-surface-light border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
            <h2 id="leia-tambem" className="text-2xl font-bold text-primary tracking-tight">
              Leia também
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} heading="h3" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
