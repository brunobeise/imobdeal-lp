import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { getInitials, type Author } from "@/lib/authors";

/* Foto do autor ou, sem foto, as iniciais num círculo âmbar. */
export function AuthorAvatar({ author, size }: { author: Author; size: number }) {
  if (author.avatar) {
    return (
      <Image
        src={author.avatar}
        alt={author.name}
        width={size}
        height={size}
        className="rounded-full object-cover shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden
      className="rounded-full bg-accent-amber text-primary font-bold flex items-center justify-center shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {getInitials(author.name)}
    </span>
  );
}

/* Box no fim do post. Autor com nome, cargo e bio é o que dá peso de
   experiência real ao texto, para o Google e para as IAs que citam a fonte. */
export default function AuthorBox({ author }: { author: Author }) {
  return (
    <aside
      aria-label="Sobre o autor"
      className="rounded-2xl border border-gray-200 bg-surface-light p-6 md:p-8 flex flex-col sm:flex-row gap-5"
    >
      <AuthorAvatar author={author} size={72} />
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Escrito por</p>
        <p className="mt-1 text-lg font-bold text-primary">{author.name}</p>
        <p className="text-sm text-gray-500">{author.role}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{author.bio}</p>
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${author.name}`}
            className="mt-4 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-light transition-colors"
          >
            <FaLinkedinIn size={15} />
          </a>
        )}
      </div>
    </aside>
  );
}
