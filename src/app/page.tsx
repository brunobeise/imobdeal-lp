import { Suspense } from "react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StructuredData from "@/components/StructuredData";
import FreeTrialButton from "@/components/FreeTrialButton";
import HeroBackground from "@/components/HeroBackground";
import PersonaToggle from "@/components/PersonaToggle";
import FeaturePillars from "@/components/FeaturePillars";
import FeatureGrid from "@/components/FeatureGrid";
import CompetitorComparison from "@/components/CompetitorComparison";
import MetricsBar from "@/components/MetricsBar";
import PricingPlans from "@/components/PricingPlans";
import ScreenshotShowcase from "@/components/ScreenshotShowcase";
import FloatingElements from "@/components/FloatingElements";
import DashboardShowcase from "@/components/DashboardShowcase";

/* ---------------------------------------------------------------------------
 * Dynamic persona content — resolved server-side via searchParams.
 * No "use client" needed for persona switching. SEO-friendly.
 * --------------------------------------------------------------------------- */

type Persona = "gestor" | "corretor";

const heroContent: Record<Persona, { headline: string; sub: string }> = {
  gestor: {
    headline: "Controle total da sua imobiliária em um só lugar.",
    sub: "Dashboard gerencial, funis de venda, ranking da equipe e previsão de receita — tudo automatizado para você tomar decisões melhores, mais rápido.",
  },
  corretor: {
    headline: "Propostas que vendem, cadastro por áudio e IA ao seu lado.",
    sub: "Portfólios interativos, notificação em tempo real no WhatsApp e um CRM que trabalha por você — para fechar mais negócios sem planilha.",
  },
};

const testimonials = [
  {
    name: "Ícaro Parisotto",
    role: "Gestor — Parisotto Imóveis",
    image:
      "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/85a0c264-4168-43d1-6f15-103f5048bc00/public",
    highlight: "Aumento de 50% na taxa de fechamento em 3 meses",
    text: "Na Parisotto Imóveis, o ImobDeal revolucionou nossa gestão. Temos acesso rápido a informações essenciais, organização para os corretores e um aumento de 50% na taxa de fechamento. É mais que um sistema, é um diferencial competitivo.",
  },
  {
    name: "Paulo Eduardo",
    role: "Corretor de Imóveis",
    image:
      "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/a1ea00bb-20dd-46de-159e-f461566c0700/public",
    highlight: "Follow-ups assertivos com tracking em tempo real",
    text: "Agora sei quando aquele cliente que sumiu está vendo a proposta, e no momento exato que ele está olhando, eu sei a hora de fazer um follow-up assertivo!",
  },
  {
    name: "Júnior Borges",
    role: "Corretor Imobiliário",
    image:
      "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/35f43732-f783-46a5-1957-ec7b3a5edc00/public",
    highlight: "Respostas em poucos minutos após abertura da proposta",
    text: "Quando estou em conversa com um cliente e ele acessa, em poucos minutos já envio uma mensagem. Está funcionando muito bem!",
  },
  {
    name: "Lucas Larralde",
    role: "Corretor Imobiliário",
    image:
      "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/3e488c82-0d46-4852-36c7-5d260d2f2d00/public",
    highlight: "Mais credibilidade com relatórios profissionais e economia de tempo",
    text: "Os relatórios trazem credibilidade enorme. O sistema é intuitivo e me ajuda a economizar tempo. Consigo focar no que importa: fechar mais negócios.",
  },
  {
    name: "Jonas Senhorini",
    role: "Corretor Imobiliário",
    image:
      "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/e0e64084-d216-46b4-21e2-9d8275521700/public",
    highlight: "Vendas alavancadas com atendimento mais assertivo",
    text: "O ImobDeal foi fundamental para alavancar minhas vendas. Consigo verificar em tempo real onde o cliente dedicou mais tempo. Atendimento mais assertivo e mais vendas.",
  },
  {
    name: "Rodrigo Barbosa",
    role: "Corretor Imobiliário",
    image:
      "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/6b7a4684-7a20-47b1-1bbe-216a8e508400/public",
    highlight: "Diferença direta nos fechamentos com follow-up na hora certa",
    text: "Com o ImobDeal, envio tudo organizado, e se vejo que abriram mas não responderam, sei que posso dar um follow-up na hora certa. Fez toda diferença nos fechamentos!",
  },
];

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const persona: Persona =
    params.para === "corretor" ? "corretor" : "gestor";

  const hero = heroContent[persona];

  return (
    <>
      <StructuredData />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-primary overflow-hidden">
        <HeroBackground />        <FloatingElements />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 py-28 md:py-36 text-center">
          {/* Persona toggle */}
          <div className="mb-10">
            <Suspense fallback={null}>
              <PersonaToggle dark />
            </Suspense>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            {hero.sub}
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FreeTrialButton
              variant="primary"
              size="large"
              source="hero_section"
              showBlackNovemberBadge={false}
              className="w-full sm:w-auto px-10 !bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold !shadow-lg !shadow-accent-amber/20 hover:!shadow-xl hover:!shadow-accent-amber/30 !transition-all !duration-300"
            >
              Teste Grátis por 7 Dias
            </FreeTrialButton>
            <a
              href="#funcionalidades"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              Ver funcionalidades →
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Crie sua conta em 5 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Suporte Ágil e Humano
            </span>
          </div>

          {/* Slogan */}
          <p className="mt-14 text-gradient-accent text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            Sua imobiliária no próximo nível.
          </p>
        </div>
      </section>

      {/* ── DASHBOARD SHOWCASE (planilha vs dashboards) ────────────── */}
      <DashboardShowcase persona={persona} />

      {/* ── PILARES (3 features destaque por persona) ────────────────── */}
      <FeaturePillars persona={persona} />

      {/* ── SCREENSHOT SHOWCASE ──────────────────────────────────────── */}
      <ScreenshotShowcase />

      {/* ── FEATURE GRID (40+ funcionalidades) ───────────────────────── */}
      <FeatureGrid />

      {/* ── METRICS BAR ──────────────────────────────────────────────── */}
      <MetricsBar />

      {/* ── COMPARATIVO ──────────────────────────────────────────────── */}
      <CompetitorComparison />

      {/* ── LINKS INTELIGENTES (promo) ────────────────────────────────── */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Texto */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-gradient-accent text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Recurso exclusivo
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight">
                Links Inteligentes:
                <br />
                <span className="text-gradient-accent">seu diferencial competitivo.</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg mt-5 max-w-xl leading-relaxed">
                Envie propostas, portfólios e análises por links rastreáveis. Saiba em tempo real quem abriu, o que olhou e por quanto tempo — e receba um alerta no WhatsApp na hora exata de fazer o follow-up.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/como-funciona"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent-yellow via-accent-amber to-accent-orange text-primary font-bold rounded-xl shadow-lg shadow-accent-amber/20 hover:shadow-xl hover:shadow-accent-amber/30 transition-all duration-300"
                >
                  Conheça os Links Inteligentes
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Cards visuais */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-accent-amber/20 flex items-center justify-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent-amber">
                      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">URL única por cliente</p>
                  <p className="text-white/40 text-xs mt-1">Cada link é exclusivo e rastreável</p>
                </div>
                <div className="glass-card rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">Tracking em tempo real</p>
                  <p className="text-white/40 text-xs mt-1">Saiba o que o cliente viu e por quanto tempo</p>
                </div>
                <div className="glass-card rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/80">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">Alerta no WhatsApp</p>
                  <p className="text-white/40 text-xs mt-1">Notificação instantânea ao abrir o link</p>
                </div>
                <div className="glass-card rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-400/20 flex items-center justify-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-sky-400">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">4 tipos de link</p>
                  <p className="text-white/40 text-xs mt-1">Imóvel, proposta, portfólio e viabilidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────────────────────────── */}
      <section className="bg-surface-light py-18 px-5 md:px-8 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
              Depoimentos
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
              Quem usa, recomenda.
              <br />
              <span className="text-primary">Quem já conhece, não vive sem!</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto">
              Veja o que os corretores estão dizendo sobre o ImobDeal
            </p>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <PricingPlans persona={persona} />

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pronto para o próximo nível?
          </h2>
          <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto">
            Teste o ImobDeal grátis por 7 dias. Setup em 5 minutos, sem compromisso — e veja por que centenas de imobiliárias já migraram.
          </p>
          <div className="mt-10">
            <FreeTrialButton
              variant="primary"
              size="large"
              source="cta_final"
              showBlackNovemberBadge={false}
              className="!bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold !shadow-lg !shadow-accent-amber/20 hover:!shadow-xl hover:!shadow-accent-amber/30 !transition-all !duration-300 px-12"
            >
              Começar Teste Grátis
            </FreeTrialButton>
          </div>
          <p className="text-white/30 text-xs mt-6">
            7 dias grátis · Setup em 5 minutos · Cancele quando quiser
          </p>
        </div>
      </section>
    </>
  );
}
