import Image from "next/image";

/* ---------------------------------------------------------------------------
 * Depoimentos — só de dono/gestor de imobiliária.
 * A lista de clientes com link para os sites vive em WebsiteShowcase: lá os
 * sites provam o argumento do "nada de template" e servem de referência
 * checável ao mesmo tempo.
 * --------------------------------------------------------------------------- */

export interface Testimonial {
  name: string;
  role: string;
  /** Opcional: sem foto, cai no avatar de iniciais. */
  image?: string;
  highlight: string;
  /** Cada string é um parágrafo. */
  paragraphs: string[];
}

function initials(name: string) {
  return name
    .split(" ")
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function Quote({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <figure className="border-l-2 border-primary/20 pl-6 md:pl-7">
      <p className="text-primary font-bold text-base md:text-lg leading-snug text-balance">
        {t.highlight}
      </p>

      <blockquote className="mt-4 space-y-3 text-gray-600 text-sm md:text-[0.95rem] leading-relaxed">
        {t.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        {t.image ? (
          <Image
            width={44}
            height={44}
            src={t.image}
            alt={t.name}
            className="w-11 h-11 rounded-full object-cover"
          />
        ) : (
          <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
            {initials(t.name)}
          </span>
        )}
        <div>
          <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
          <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function SocialProof({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight leading-[1.15] text-balance">
            O que dizem os gestores
            <span className="block text-primary">que usam ImobDeal.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {testimonials.map((t) => (
            <Quote key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
