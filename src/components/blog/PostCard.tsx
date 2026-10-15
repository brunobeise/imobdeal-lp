import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";

/* Card de post da listagem e do "Leia também". O card inteiro é o link.
   `heading` acompanha a hierarquia da página: h2 na listagem, h3 dentro do
   "Leia também", que já tem o próprio h2. */
export default function PostCard({ post, heading: Heading = "h2" }: { post: Post; heading?: "h2" | "h3" }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-gray-200 bg-white p-6 md:p-7 hover:border-gray-300 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      {post.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2" aria-label="Assuntos">
          {post.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <Heading className="mt-4 text-xl font-bold text-primary leading-snug tracking-tight text-balance group-hover:text-primary-light transition-colors">
        {post.title}
      </Heading>
      <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">{post.description}</p>

      <p className="mt-auto pt-6 flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime} min de leitura</span>
        {post.draft && (
          <span className="ml-auto rounded bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">
            Rascunho
          </span>
        )}
      </p>
    </Link>
  );
}
