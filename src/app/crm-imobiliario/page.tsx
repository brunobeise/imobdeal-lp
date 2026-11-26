import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { MdCheck, MdAdd } from "react-icons/md";
import CtaButton from "@/components/CtaButton";
import HeroBackground from "@/components/HeroBackground";
import { ORGANIZATION_ID } from "@/components/BusinessStructuredData";

/* ---------------------------------------------------------------------------
 * Página-pilar da busca "CRM imobiliário".
 *
 * A home vende o ImobDeal; esta página responde a quem ainda está pesquisando:
 * o que é, o que precisa ter, como escolher. O ImobDeal entra no fim, como
 * resposta ao checklist, sem ranking de concorrente. Tudo é server component:
 * o texto inteiro sai no HTML, que é o que o buscador lê.
 *
 * Copy sem travessão (regra da LP). O FAQ visível e o FAQPage do schema saem
 * do mesmo array, então nunca divergem.
 * --------------------------------------------------------------------------- */

const URL = "https://imobdeal.com.br/crm-imobiliario";
const TITLE = "CRM Imobiliário: o que é e como escolher o seu";
const DESCRIPTION =
  "O que é um CRM imobiliário, o que ele precisa ter para uma imobiliária com equipe de corretores e as perguntas para fazer antes de contratar.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ImobDeal` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    images: [
      {
        url: "https://imobdeal.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CRM imobiliário ImobDeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://imobdeal.com.br/og-image.jpg"],
  },
};

/* ── O que o CRM precisa ter ─────────────────────────────────────────────── */

const requisitos = [
  {
    titulo: "Receber os leads de todos os canais sozinho",
    texto:
      "Portais, campanhas no Facebook e no Instagram, site e WhatsApp. Se alguém precisa copiar o contato de um lugar para o outro, o lead já começa atrasado e a origem se perde.",
  },
  {
    titulo: "Distribuir o lead para o corretor certo, na hora",
    texto:
      "É a roleta de leads: regras por equipe, plantão, tipo de imóvel ou região, com prazo para o corretor aceitar e repasse automático quando ele não responde. Sem grupo de WhatsApp e sem ninguém repassando na mão.",
  },
  {
    titulo: "Funil de vendas com dono em cada negócio",
    texto:
      "Cada negócio numa etapa, com responsável e próxima tarefa. O gestor precisa enxergar o que está parado e há quanto tempo, e não descobrir no fim do mês.",
  },
  {
    titulo: "Cadastro de imóveis ligado aos negócios",
    texto:
      "O que diferencia um CRM imobiliário de um CRM genérico. O perfil do cliente cruza com a carteira, e o corretor manda proposta e portfólio a partir do próprio sistema.",
  },
  {
    titulo: "Aplicativo que o corretor realmente usa",
    texto:
      "Corretor vive na rua. Se o sistema só funciona no computador, ele não registra nada e o CRM vira cadastro vazio. Aviso no celular quando o lead entra faz diferença no tempo de resposta.",
  },
  {
    titulo: "Números que se montam sozinhos",
    texto:
      "Conversão por etapa, origem que mais vende, ritmo da meta, forecast do mês. Se para ver isso alguém precisa exportar planilha, o número chega tarde demais para mudar o resultado.",
  },
  {
    titulo: "Implantação e suporte de verdade",
    texto:
      "Migração da base de imóveis e contatos, configuração do funil e treinamento da equipe. Sistema bom que ninguém usa não resolve nada, e a adoção depende de quem implanta.",
  },
];

/* ── Perguntas para a demonstração ───────────────────────────────────────── */

const perguntasDemo = [
  "Os leads dos portais que eu uso e das minhas campanhas entram sozinhos? Em quanto tempo?",
  "Como a distribuição funciona quando o corretor da vez não atende?",
  "Consigo ver de onde veio cada venda, e não só cada contato?",
  "O corretor tem aplicativo nativo ou só uma versão do site no celular?",
  "Quem faz a migração da minha base e o treinamento da equipe?",
  "Preciso contratar outro sistema à parte para roleta, assinatura ou financeiro?",
  "Com quem eu falo quando der problema? Existe fidelidade ou multa de cancelamento?",
];

/* ── Como o ImobDeal responde ao checklist ───────────────────────────────── */

const respostasImobdeal = [
  "Integração com OLX, ImovelWeb e Chaves na Mão, e integração nativa com o Meta Ads: o lead entra em segundos, com a origem registrada.",
  "Roleta de leads nativa, com escala de plantão, fila, sorteio ponderado e bolsão, configurável por equipe.",
  "Funis de venda configurados do jeito que a sua imobiliária trabalha, com tarefas e alerta de negócio parado.",
  "Cadastro de imóveis (até por áudio, com IA), propostas e portfólios com acompanhamento de quem abriu e o que olhou.",
  "Aplicativo nativo para iOS e Android, com aviso na hora em que o lead entra.",
  "Dashboards, forecast e metas que se montam conforme a equipe usa, e a Central Operacional para o telão do escritório.",
  "Implantação conduzida pela equipe ImobDeal, com migração da base e treinamento, e suporte direto com quem desenvolve.",
];

/* ── FAQ (visível + schema) ──────────────────────────────────────────────── */

const faqs = [
  {
    q: "O que é um CRM imobiliário?",
    a: "É um sistema de gestão de relacionamento com clientes feito para a rotina de uma imobiliária. Ele reúne em um só lugar os leads que chegam de portais, campanhas e site, distribui cada contato para um corretor, acompanha cada negócio no funil de vendas e cruza o perfil do cliente com o cadastro de imóveis.",
  },
  {
    q: "Qual a diferença entre um CRM imobiliário e um CRM genérico?",
    a: "Um CRM genérico organiza contatos e funil, mas não conhece imóvel, portal nem corretor de plantão. O CRM imobiliário já vem com integração com os portais de anúncio, roleta para distribuir leads entre corretores, cadastro de imóveis ligado aos negócios e propostas, coisas que no genérico precisam ser adaptadas ou contratadas à parte.",
  },
  {
    q: "Planilha e grupo de WhatsApp não resolvem?",
    a: "Resolvem enquanto a operação é pequena. Com mais corretores e mais leads, a planilha fica desatualizada, o telefone do cliente fica exposto para a equipe inteira no grupo e a distribuição depende de alguém estar olhando. O gestor perde a visão de quem atendeu, quem deixou esfriar e de onde vêm as vendas.",
  },
  {
    q: "Quanto custa um CRM imobiliário?",
    a: "Depende do tamanho da equipe e do que vem incluso. Na comparação, vale somar o que cada opção exige contratar à parte, como roleta de leads, assinatura eletrônica, site e financeiro. No ImobDeal, o valor depende do número de usuários e dos módulos ativados, e o especialista apresenta a proposta na demonstração.",
  },
  {
    q: "Dá para trocar de CRM sem perder a base de imóveis e contatos?",
    a: "Sim. No ImobDeal, a implantação é conduzida pela nossa equipe: subimos a base de imóveis e contatos, configuramos o funil do jeito que a imobiliária trabalha e treinamos o time.",
  },
];

export default function CrmImobiliario() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: URL,
    inLanguage: "pt-BR",
    about: { "@type": "Thing", name: "CRM imobiliário" },
    publisher: { "@id": ORGANIZATION_ID },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://imobdeal.com.br" },
        { "@type": "ListItem", position: 2, name: "CRM imobiliário", item: URL },
      ],
    },
  };

  return (
    <>
      <Script
        id="crm-imobiliario-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Script
        id="crm-imobiliario-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-primary overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 pt-28 pb-20 md:pt-36 md:pb-24 text-center">
          <nav aria-label="Você está em" className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Início
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white/60">CRM imobiliário</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.1] text-balance">
            CRM imobiliário: o que é e{" "}
            <span className="text-accent-amber">como escolher o seu</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed text-pretty">
            O que um CRM precisa fazer por uma imobiliária com equipe de
            corretores, e as perguntas que separam um bom sistema de um
            cadastro que ninguém usa.
          </p>
        </div>
      </section>

      {/* ── DEFINIÇÃO ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight text-balance">
            O que é um CRM imobiliário
          </h2>
          <div className="mt-6 space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              <strong className="text-gray-900">CRM imobiliário</strong> é o
              sistema em que a imobiliária organiza a operação comercial: recebe
              os leads de portais, campanhas e site, distribui cada contato para
              um corretor, acompanha cada negócio no funil de vendas e cruza o
              perfil do cliente com o cadastro de imóveis.
            </p>
            <p>
              A sigla vem de <em>Customer Relationship Management</em>, gestão do
              relacionamento com o cliente. Na prática, é o que tira a operação
              da planilha e do grupo de WhatsApp: cada lead tem dono, cada
              negócio tem etapa e o gestor vê o que está acontecendo sem
              precisar perguntar para ninguém.
            </p>
            <p>
              A diferença para um CRM genérico está no que vem pronto. Um CRM de
              vendas comum organiza contatos, mas não conhece imóvel, portal de
              anúncio nem corretor de plantão. No CRM imobiliário, isso já faz
              parte do sistema.
            </p>
          </div>
        </div>
      </section>

      {/* ── O QUE PRECISA TER ────────────────────────────────────────── */}
      <section className="bg-surface-light py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight text-balance">
              O que um CRM imobiliário precisa ter
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed text-pretty">
              Para uma imobiliária com equipe de corretores, estes são os pontos
              que mais pesam no dia a dia.
            </p>
          </div>

          <ol className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-10">
            {requisitos.map((r, i) => (
              <li key={r.titulo} className="border-t border-gray-200 pt-5">
                <span className="text-sm font-bold text-accent-amber tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1.5">
                  {r.titulo}
                </h3>
                <p className="text-gray-600 text-[0.95rem] mt-2 leading-relaxed">
                  {r.texto}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-12 text-gray-600 text-base leading-relaxed max-w-3xl">
            A distribuição de leads é o ponto em que as imobiliárias mais
            variam. Os modos de roleta e o que funciona em cada um estão neste
            artigo:{" "}
            <Link
              href="/blog/como-distribuir-leads-entre-corretores"
              className="text-primary font-semibold underline underline-offset-4 hover:text-primary-light"
            >
              como distribuir leads entre corretores
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── COMO ESCOLHER ────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight text-balance">
            Como escolher: perguntas para fazer na demonstração
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed">
            Toda demonstração mostra o sistema no melhor cenário. Estas
            perguntas trazem a conversa para a rotina da sua imobiliária.
          </p>
          <ul className="mt-8 space-y-4">
            {perguntasDemo.map((p) => (
              <li key={p} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <MdCheck className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-base md:text-lg mt-8 leading-relaxed">
            Na hora de comparar preço, some também o que cada opção obriga a
            contratar à parte. Um CRM mais barato que exige um sistema de
            roleta, outro de assinatura e outro de site pode sair mais caro no
            fim do mês.
          </p>
        </div>
      </section>

      {/* ── O IMOBDEAL ───────────────────────────────────────────────── */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-extrabold text-white tracking-tight leading-tight text-balance">
              Como o ImobDeal responde a esse checklist
            </h2>
            <p className="text-white/65 text-base md:text-lg mt-5 leading-relaxed">
              O ImobDeal é um CRM imobiliário feito para imobiliárias com equipe
              de corretores. Tudo o que está acima vem no mesmo sistema, sem
              versão básica com recurso bloqueado.
            </p>
          </div>
          <ul className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-5">
            {respostasImobdeal.map((r) => (
              <li key={r} className="flex items-start gap-3 text-white/80 text-[0.95rem] leading-relaxed">
                <MdCheck className="text-accent-amber mt-0.5 flex-shrink-0" size={18} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
            <CtaButton
              variant="primary"
              size="large"
              source="crm_imobiliario"
              className="w-full sm:w-auto px-10 !bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold !shadow-lg !shadow-accent-amber/20"
            >
              Ver o ImobDeal na minha operação
            </CtaButton>
            <Link
              href="/"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              Conhecer o sistema
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-surface-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight text-center">
            Perguntas frequentes sobre CRM imobiliário
          </h2>
          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[0.95rem] md:text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {f.q}
                  </h3>
                  <MdAdd
                    size={20}
                    className="flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-200 group-open:rotate-45 group-open:text-primary"
                  />
                </summary>
                <p className="pb-5 -mt-1 text-gray-600 text-[0.95rem] leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
