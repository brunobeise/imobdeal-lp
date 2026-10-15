/* ---------------------------------------------------------------------------
 * Autores do blog.
 * A chave (ex.: "bruno") é o que vai no campo `author` do metadata de cada
 * post. Nome, cargo e bio entram no box do autor e no JSON-LD (Person), que é
 * o sinal de experiência real que o Google e as IAs usam para confiar no texto.
 * --------------------------------------------------------------------------- */

export interface Author {
  name: string;
  role: string;
  bio: string;
  /** Caminho em /public ou URL de host liberado em next.config.ts. Sem foto, o avatar mostra as iniciais. */
  avatar?: string;
  /** URL completa do perfil. Vazio esconde o link. */
  linkedin?: string;
}

export const authors = {
  bruno: {
    name: "Bruno Beise",
    role: "Desenvolvedor e fundador do ImobDeal",
    bio: "Desenvolvedor de software. Programou o ImobDeal e acompanha de perto as imobiliárias que usam o sistema, vendo no dia a dia o que funciona e o que não funciona na rotina comercial. Escreve sobre o que aprendeu nesse caminho.",
    avatar: "https://avatars.githubusercontent.com/u/109112551?s=400&v=4",
    linkedin: "",
  },
} satisfies Record<string, Author>;

export type AuthorId = keyof typeof authors;

export function getAuthor(id: AuthorId): Author {
  return authors[id];
}

/* "Bruno Beise" vira "BB" no avatar sem foto. */
export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
