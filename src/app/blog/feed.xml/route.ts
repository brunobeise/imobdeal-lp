import { getAuthor } from "@/lib/authors";
import { getPublishedPosts, postUrl, SITE_URL } from "@/lib/blog";

/* Feed RSS 2.0 do blog, gerado no build. Serve para leitores de feed e para
   ferramentas que republicam post novo (newsletter, LinkedIn, Zapier).
   Rascunho nunca entra, nem no dev. */

export const dynamic = "force-static";

function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/* Meio-dia UTC para o dia não voltar no fuso de Brasília. */
function rssDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toUTCString();
}

export async function GET() {
  const posts = await getPublishedPosts();

  const items = posts
    .map((post) => {
      const url = postUrl(post.slug);
      const categories = post.tags.map((tag) => `\n      <category>${escapeXml(tag)}</category>`).join("");
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <dc:creator>${escapeXml(getAuthor(post.author).name)}</dc:creator>
      <pubDate>${rssDate(post.date)}</pubDate>${categories}
    </item>`;
    })
    .join("");

  /* Data da última mudança real de conteúdo, publicação ou atualização. */
  const lastChange = posts.map((p) => p.updated ?? p.date).sort().at(-1);
  const lastBuild = lastChange ? rssDate(lastChange) : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog do ImobDeal</title>
    <link>${SITE_URL}/blog</link>
    <description>Gestão comercial de imobiliárias, distribuição de leads e tecnologia na rotina de quem vende imóvel.</description>
    <language>pt-BR</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
