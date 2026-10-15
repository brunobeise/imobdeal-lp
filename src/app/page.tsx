import LightboxImage from "@/components/LightboxImage";
import PeopleBehind from "@/components/PeopleBehind";
import SocialProof from "@/components/SocialProof";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import StructuredData from "@/components/StructuredData";
import CtaButton from "@/components/CtaButton";
import HeroBackground from "@/components/HeroBackground";
import ManagementCycle from "@/components/ManagementCycle";
import TvMode from "@/components/TvMode";
import PricingPlans from "@/components/PricingPlans";
import Faq from "@/components/Faq";
import ScreenshotShowcase from "@/components/ScreenshotShowcase";
import FloatingElements from "@/components/FloatingElements";
import DashboardShowcase from "@/components/DashboardShowcase";
import LeadRoulette from "@/components/LeadRoulette";
import MobileApp from "@/components/MobileApp";
import PortalIntegrations from "@/components/PortalIntegrations";
import AiAssistants from "@/components/AiAssistants";

/* ---------------------------------------------------------------------------
 * Público único: dono/gestor de imobiliária.
 * A LP não alterna mais copy por persona — o corretor autônomo saiu do foco.
 * --------------------------------------------------------------------------- */

/* Depoimentos: só de dono/gestor de imobiliária. O de corretor autônomo saiu
   junto com a persona. O primeiro da lista ocupa o card maior, então fica o
   mais completo — e o que fala do atendimento, que é o tema da section.
   Textos na íntegra das palavras de quem assina; onde há corte, "(...)". */
const testimonials = [
  {
    name: "Flávia Costa",
    role: "CEO na Investe Brasil Negócios Imobiliários",
    // Recorte no rosto: o original é um selo circular com moldura, que em
    // 44px deixava o rosto pequeno demais.
    image: "/depoimentos/flavia-costa.png",
    highlight:
      "Mais do que um sistema: um parceiro que cresce junto com a nossa empresa",
    paragraphs: [
      "O ImobDeal foi um divisor de águas na organização da nossa operação. Hoje conseguimos centralizar os leads, acompanhar cada etapa do atendimento e ter muito mais controle sobre o processo comercial. Isso trouxe mais agilidade para o time e uma visão muito mais estratégica do negócio.",
      "Mas o maior diferencial, sem dúvida, é o atendimento. Mais do que resolver dúvidas, eles escutam nossas necessidades e adaptam a plataforma à realidade da nossa operação. Essa proximidade nos dá a segurança de ter um parceiro que cresce junto com a nossa empresa.",
    ],
  },
  {
    name: "Ícaro Parisotto",
    role: "Gestor na Parisotto Imóveis",
    image:
      "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/85a0c264-4168-43d1-6f15-103f5048bc00/public",
    highlight: "Aumento de 50% na taxa de fechamento em 3 meses",
    paragraphs: [
      "Na Parisotto Imóveis, o ImobDeal revolucionou nossa gestão. Temos acesso rápido a informações essenciais, organização para os corretores e um aumento de 50% na taxa de fechamento. É mais que um sistema, é um diferencial competitivo.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <StructuredData />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-primary overflow-hidden">
        <HeroBackground />
        <FloatingElements />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-0 text-center">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Controle total da sua imobiliária em um só lugar.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            O CRM completo da imobiliária: roleta de leads, dashboards e forecast
            automáticos. Sem planilha e sem pagar um sistema para cada coisa.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex justify-center items-center">
            <CtaButton
              variant="primary"
              size="large"
              source="hero_section"
              showBlackNovemberBadge={false}
              className="w-full sm:w-auto px-10 !bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold !shadow-lg !shadow-accent-amber/20 hover:!shadow-xl hover:!shadow-accent-amber/30 !transition-all !duration-300"
            >
              Falar com especialista
            </CtaButton>
          </div>

          {/* Trust badges */}
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Demonstração sem compromisso
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Suporte Ágil e Humano
            </span>
          </div>

          {/* Produto à vista — corta a dobra de propósito para induzir o scroll.
              Proporção casada com a resolução nativa do print (1912x914). */}
          <div className="mt-14 md:mt-16 max-w-5xl mx-auto">
            <LightboxImage
              src="/screenshots/tarefas-equipe.webp"
              alt="Painel de tarefas da equipe no ImobDeal: tarefas em dia, atrasadas, corretores sem agenda e negócios estagnados"
              aspect="1912 / 914"
              sizes="(min-width: 1024px) 65vw, 100vw"
              priority
              bleedBottom
            />
          </div>
        </div>
      </section>

      {/* ── DASHBOARDS — a história de origem do produto.
             Vem logo após o hero: é a razão de existir do ImobDeal e o que
             dá sentido a todas as seções seguintes. ───────────────────── */}
      <DashboardShowcase />

      {/* ── CICLO DE GESTÃO — a profundidade que separa de um CRM comum ─ */}
      <ManagementCycle />

      {/* ── MODO TV — o diferencial que ninguém mais tem ─────────────── */}
      <TvMode />

      {/* ── TOUR DO PRODUTO ──────────────────────────────────────────── */}
      <ScreenshotShowcase />

      {/* ── APP MOBILE ───────────────────────────────────────────────── */}
      <MobileApp />

      {/* ── IA VIA MCP — o CRM conversa com Claude, ChatGPT e Gemini ──── */}
      <AiAssistants />

      {/* ── PORTAIS — por onde o lead entra, logo antes da roleta ────── */}
      <PortalIntegrations />

      {/* ── ROLETA DE LEADS — encadeia com os portais (é por onde o lead
             entra) e ancora o valor logo antes do preço. ─────────────── */}
      <LeadRoulette />

      {/* ── GENTE POR TRÁS — o que segura o cliente não é o software,
             é o time. O argumento; a prova vem logo abaixo. ─────────── */}
      <PeopleBehind />

      {/* ── PROVA — a palavra de quem já opera assim. ────────────────── */}
      <SocialProof testimonials={testimonials} />

      {/* ── SITE SOB MEDIDA — último gatilho antes do preço. A galeria é
             ao mesmo tempo a prova do argumento e a parede de clientes. ── */}
      <WebsiteShowcase />

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <PricingPlans />

      {/* ── FAQ — derruba a objeção que sobrou depois do preço e alimenta
             o FAQPage do schema.org para busca e assistentes. ────────── */}
      <Faq />

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            O CRM imobiliário completo para quem
            <span className="block text-accent-amber">quer resultado.</span>
          </h2>
          <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto">
            Converse com um especialista, veja o sistema rodando com o cenário da sua imobiliária e descubra o que dá para eliminar da sua operação hoje.
          </p>
          <div className="mt-10">
            <CtaButton
              variant="primary"
              size="large"
              source="cta_final"
              showBlackNovemberBadge={false}
              className="!bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold !shadow-lg !shadow-accent-amber/20 hover:!shadow-xl hover:!shadow-accent-amber/30 !transition-all !duration-300 px-12"
            >
              Falar com especialista
            </CtaButton>
          </div>
          <p className="text-white/30 text-xs mt-6">
            Sem compromisso · Resposta no mesmo dia útil
          </p>
        </div>
      </section>
    </>
  );
}
