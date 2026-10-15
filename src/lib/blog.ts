import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import { authors, type AuthorId } from "./authors";

/* ---------------------------------------------------------------------------
 * Blog em MDX, sem CMS.
 * Cada post é um arquivo src/content/blog/<slug>.mdx que exporta `metadata`.
 * O nome do arquivo vira a URL (/blog/<slug>). Daqui saem a listagem, as
 * páginas dos posts, o sitemap, o RSS, as meta tags e o JSON-LD.
 *
 * draft: true deixa o post visível só no `npm run dev`. Em produção ele não
 * gera página, não aparece na listagem e nunca entra no sitemap nem no RSS.
 * --------------------------------------------------------------------------- */

export const SITE_URL = "https://imobdeal.com.br";

export interface PostFaqItem {
  pergunta: string;
  resposta: string;
}

export interface PostMeta {
  title: string;
  /** Resumo de 140 a 160 caracteres. Vira a meta description e o texto do card. */
  description: string;
  /** AAAA-MM-DD */
  date: string;
  /** AAAA-MM-DD. Preencher só quando o conteúdo mudar de verdade. */
  updated?: string;
  author: AuthorId;
  tags: string[];
  /** Imagem de capa em /public (ex.: /blog/capa.webp). Sem capa, o OG usa /og-image.jpg. */
  cover?: string;
  draft?: boolean;
  /** Perguntas frequentes: viram a seção no fim do post e o JSON-LD FAQPage. */
  faq?: PostFaqItem[];
}

export interface Post extends PostMeta {
  slug: string;
  readingTime: number;
}

interface PostModule {
  default: ComponentType;
  metadata: PostMeta;
}

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

/* Rascunho aparece no dev para revisar o visual. Em produção, some. */
const showDrafts = process.env.NODE_ENV !== "production";

function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function loadModule(slug: string): Promise<PostModule> {
  return import(`@/content/blog/${slug}.mdx`);
}

/* Erro claro no build quando faltar campo, em vez de página quebrada. */
function assertMeta(slug: string, meta: PostMeta | undefined): asserts meta is PostMeta {
  const where = `src/content/blog/${slug}.mdx`;
  if (!meta) throw new Error(`${where}: falta o "export const metadata".`);
  for (const field of ["title", "description", "date", "author"] as const) {
    if (!meta[field]) throw new Error(`${where}: metadata.${field} é obrigatório.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) {
    throw new Error(`${where}: metadata.date precisa ser AAAA-MM-DD.`);
  }
  if (meta.updated && !/^\d{4}-\d{2}-\d{2}$/.test(meta.updated)) {
    throw new Error(`${where}: metadata.updated precisa ser AAAA-MM-DD.`);
  }
  if (!(meta.author in authors)) {
    throw new Error(`${where}: autor "${meta.author}" não existe em src/lib/authors.ts.`);
  }
}

/* Conta as palavras do arquivo bruto, sem o bloco de metadata, imports, tags
   JSX e blocos de código. ~200 palavras por minuto. */
export function getReadingTime(slug: string): number {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
  const text = raw
    .replace(/^export const metadata[\s\S]*?^\};?\s*$/m, "")
    .replace(/^(import|export) .*$/gm, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`|[\]()-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

async function loadPost(slug: string): Promise<Post> {
  const { metadata } = await loadModule(slug);
  assertMeta(slug, metadata);
  return { ...metadata, tags: metadata.tags ?? [], slug, readingTime: getReadingTime(slug) };
}

function byDateDesc(a: Post, b: Post) {
  return b.date.localeCompare(a.date);
}

/** Posts visíveis no ambiente atual: com rascunhos no dev, sem rascunhos em produção. */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getSlugs().map(loadPost));
  return posts.filter((p) => showDrafts || !p.draft).sort(byDateDesc);
}

/** Só posts publicados, em qualquer ambiente. É o que vai para sitemap e RSS. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => !p.draft);
}

/** Post com o componente do conteúdo. null quando não existe ou é rascunho em produção. */
export async function getPost(slug: string): Promise<(Post & { Content: ComponentType }) | null> {
  if (!getSlugs().includes(slug)) return null;
  const mod = await loadModule(slug);
  assertMeta(slug, mod.metadata);
  if (mod.metadata.draft && !showDrafts) return null;
  return {
    ...mod.metadata,
    tags: mod.metadata.tags ?? [],
    slug,
    readingTime: getReadingTime(slug),
    Content: mod.default,
  };
}

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

/** Caminho relativo em /public vira URL absoluta (OG e JSON-LD pedem absoluta). */
export function absoluteUrl(src: string): string {
  return src.startsWith("http") ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

/* As datas ficam como AAAA-MM-DD. Formatando em UTC, o dia não anda para trás
   no fuso de Brasília. */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T12:00:00Z`));
}
