/* "Como distribuir leads?" vira "como-distribuir-leads". Usado no id dos H2
   e H3 dos posts (mdx-components), para que um sumário ou um link externo
   possa apontar direto para a seção. Fica fora de blog.ts porque aquele
   arquivo usa fs e só roda no servidor. */

/* Faixa Unicode dos acentos soltos que o NFD separa da letra ("ã" vira "a" + "~"). */
const isAccentMark = (char: string) => {
  const code = char.charCodeAt(0);
  return code >= 0x300 && code <= 0x36f;
};

export function slugify(text: string): string {
  return Array.from(text.normalize("NFD"))
    .filter((char) => !isAccentMark(char))
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
