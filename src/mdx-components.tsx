import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";
import { isValidElement, type ReactNode } from "react";
import { slugify } from "@/lib/slugify";
import Table, { TableWrap, Td, Th, Tr } from "@/components/blog/Table";

/* ---------------------------------------------------------------------------
 * Visual do texto dos posts (src/content/blog/*.mdx).
 * Cada tag do Markdown vira um componente com as classes do tema, então não
 * há plugin de tipografia. O espaçamento entre blocos é dado pelo margin-top
 * de cada elemento; o container do post (blog/[slug]/page.tsx) zera o do
 * primeiro filho e aproxima o bloco que vem logo depois de um título.
 * --------------------------------------------------------------------------- */

/* Texto puro dos filhos, para gerar o id do título mesmo com **negrito** ou
   link dentro dele. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

const linkClass =
  "font-medium text-primary-light underline decoration-accent-amber decoration-2 underline-offset-[3px] hover:text-primary transition-colors";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2
        id={slugify(textOf(children))}
        className="mt-14 text-2xl md:text-[1.75rem] font-bold text-primary tracking-tight leading-tight scroll-mt-28 text-balance"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(textOf(children))}
        className="mt-10 text-xl md:text-[1.35rem] font-bold text-primary leading-snug scroll-mt-28"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="mt-6">{children}</p>,
    /* Link interno navega pelo Next; externo abre em outra aba. */
    a: ({ href = "", children }) =>
      href.startsWith("/") ? (
        <Link href={href} className={linkClass}>
          {children}
        </Link>
      ) : href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") ? (
        <a href={href} className={linkClass}>
          {children}
        </a>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {children}
        </a>
      ),
    ul: ({ children }) => (
      <ul className="mt-6 list-disc pl-6 space-y-2.5 marker:text-accent-orange">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-6 list-decimal pl-6 space-y-2.5 marker:font-bold marker:text-primary">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1.5 [&>p]:mt-2 [&>p:first-child]:mt-0">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-4 border-accent-amber pl-5 md:pl-6 py-1 text-primary [&_p]:text-xl [&_p]:leading-relaxed [&_p]:font-medium [&>p:first-child]:mt-0">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    hr: () => <hr className="my-12 border-gray-200" />,
    table: TableWrap,
    th: Th,
    td: Td,
    tr: Tr,
    /* Imagem de /public passa pelo next/image (webp/avif e lazy load). A
       proporção real vem do arquivo: width/height só reservam o espaço. */
    img: ({ src = "", alt = "" }) =>
      typeof src === "string" && src.startsWith("/") ? (
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
          className="mt-8 w-full h-auto rounded-xl border border-gray-200"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" className="mt-8 w-full h-auto rounded-xl border border-gray-200" />
      ),
    code: ({ children }) => (
      <code className="rounded bg-surface px-1.5 py-0.5 text-[0.9em] text-primary">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="mt-8 overflow-x-auto rounded-xl bg-primary p-5 text-sm leading-relaxed text-white [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-white">
        {children}
      </pre>
    ),
    /* Componentes disponíveis em todo .mdx sem import. */
    Table,
    ...components,
  };
}
