"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface Screenshot {
  id: string;
  label: string;
  description: string;
  screenshotInstruction: string;
  src?: string;
}

const screenshots: Screenshot[] = [
  {
    id: "dashboard",
    label: "Dashboard Gerencial",
    description: "Acompanhe os status de tarefas e negócios da sua equipe.",
    screenshotInstruction:
      "SCREENSHOT: Dashboard do gestor com KPIs e gráficos",
    src: "/screenshots/inicio-gestor.png",
  },
  {
    id: "leads",
    label: "CRM de Leads",
    description: "Acompanhe cada oportunidade de negócio.",
    screenshotInstruction:
      "SCREENSHOT: Gestão de Leads com tabela e filtros",
    src: "/screenshots/gestao-de-leads.png",
  },
  {
    id: "kanban",
    label: "Pipeline de Vendas",
    description: "Negócios organizados por etapa no Kanban drag-and-drop.",
    screenshotInstruction:
      "SCREENSHOT: Board Kanban de negócios",
    src: "/screenshots/kanban.png",
  },
  {
    id: "imoveis",
    label: "Gestão de Imóveis",
    description: "Cadastro completo com fotos, vídeos e localização.",
    screenshotInstruction:
      "SCREENSHOT: Catálogo de imóveis com galeria",
    src: "/screenshots/imoveis.png",
  },
  {
    id: "propostas",
    label: "Propostas Interativas",
    description: "Propostas com tracking em tempo real e notificação no WhatsApp.",
    screenshotInstruction:
      "SCREENSHOT: Proposta interativa com tracking",
    src: "/screenshots/propostas.png",
  },
  {
    id: "equipe",
    label: "Gestão de Equipe",
    description: "Ranking de corretores, metas e monitoramento de atividades.",
    screenshotInstruction:
      "SCREENSHOT: Ranking de corretores e metas",
    src: "/screenshots/metas.png",
  },
  {
    id: "financeiro",
    label: "Financeiro",
    description: "Contas a pagar, receber e comissões automáticas.",
    screenshotInstruction:
      "SCREENSHOT: Módulo financeiro — lançamentos e fluxo de caixa (/financeiro/lancamentos)",
    src: "/screenshots/financeiro.png",
  },
  {
    id: "dre",
    label: "Painel DRE",
    description: "Demonstrativo de resultados e análise financeira completa da imobiliária.",
    screenshotInstruction:
      "SCREENSHOT: Painel financeiro DRE com gráficos (/financeiro/painel)",
    src: "/screenshots/fluxo-caixa.png",
  },
  {
    id: "portfolios",
    label: "Portfólios Interativos",
    description: "Seleção personalizada de imóveis por cliente com comparador lado a lado.",
    screenshotInstruction:
      "SCREENSHOT: Portfólio interativo com imóveis selecionados (/portfolios)",
    src: "/screenshots/portfolios.png",
  },
  {
    id: "forecast",
    label: "Forecast de Receita",
    description: "Previsão de vendas automática — sem planilha, sem BI manual.",
    screenshotInstruction:
      "SCREENSHOT: Forecast de receita com projeção mensal (/imobiliaria/forecast)",
    src: "/screenshots/forecast.png",
  },
  {
    id: "ia",
    label: "Assistente de Negócios com IA",
    description: "Chat com IA integrado para perguntar o que quiser sobre o negócio.",
    screenshotInstruction:
      "SCREENSHOT: Chat IA — deal chat ou financial chat",
    src: "/screenshots/assitente-negocio.png",
  },
  {
    id: "agenda",
    label: "Agenda",
    description: "Calendário integrado com Google Calendar, visitas e follow-ups.",
    screenshotInstruction:
      "SCREENSHOT: Calendário de agenda com compromissos (/agenda)",
    src: "/screenshots/agenda.png",
  },
  {
    id: "site",
    label: "Site Imobiliário",
    description: "Portal de imóveis próprio da imobiliária, integrado ao CRM.",
    screenshotInstruction:
      "SCREENSHOT: Configuração do site imobiliário (/website)",
    src: "/screenshots/website.png",
  },
  {
    id: "entrada-leads",
    label: "Entrada de Leads",
    description: "Captura automática de leads de portais, site e redes sociais direto no CRM.",
    screenshotInstruction:
      "SCREENSHOT: Tela de entrada de leads com fontes de captação",
    src: "/screenshots/leads.png",
  },
  {
    id: "notificacao-whatsapp",
    label: "Notificação no WhatsApp",
    description: "Alertas automáticos no WhatsApp para novos leads, propostas abertas e follow-ups.",
    screenshotInstruction:
      "SCREENSHOT: Configuração de notificações WhatsApp",
    src: "/tracking.png",
  },
  {
    id: "documentos",
    label: "Documentos",
    description: "Gestão de contratos, fichas cadastrais e documentos por negócio com assinatura digital.",
    screenshotInstruction:
      "SCREENSHOT: Módulo de documentos com contratos e anexos",
    src: "/screenshots/documentos.png",
  },
  {
    id: "contatos",
    label: "Contatos",
    description: "Base completa de clientes, proprietários e parceiros com histórico de interações.",
    screenshotInstruction:
      "SCREENSHOT: Lista de contatos com detalhes e histórico",
    src: "/screenshots/contatos.png",
  },
];

function getOffset(i: number, active: number) {
  let offset = i - active;
  const len = screenshots.length;
  if (offset > len / 2) offset -= len;
  if (offset < -len / 2) offset += len;
  return offset;
}

function getCardStyle(offset: number): React.CSSProperties {
  if (offset === 0) {
    return {
      width: "clamp(280px, 54%, calc(100% - 3rem))",
      left: "50%",
      transform: "translateX(-50%)",
      transformOrigin: "center center",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
    };
  }
  if (offset === -1) {
    return {
      width: "clamp(160px, 24%, calc(100% - 3rem))",
      left: "12%",
      transform: "translateX(-50%) perspective(1200px) rotateY(8deg) scale(0.88)",
      transformOrigin: "right center",
      opacity: 0.5,
      zIndex: 5,
      pointerEvents: "auto",
    };
  }
  if (offset === 1) {
    return {
      width: "clamp(160px, 24%, calc(100% - 3rem))",
      left: "88%",
      transform: "translateX(-50%) perspective(1200px) rotateY(-8deg) scale(0.88)",
      transformOrigin: "left center",
      opacity: 0.5,
      zIndex: 5,
      pointerEvents: "auto",
    };
  }
  return {
    width: "clamp(160px, 24%, calc(100% - 3rem))",
    left: offset < 0 ? "-15%" : "115%",
    transform: "translateX(-50%) scale(0.8)",
    transformOrigin: "center center",
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
  };
}

export default function ScreenshotShowcase() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxSlides = screenshots.map((s) => ({
    src: s.src || "/placeholder-screenshot.png",
    width: 1920,
    height: 1080,
  }));

  const openLightbox = useCallback((index: number) => {
    if (screenshots[index].src) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  }, []);

  const prev = useCallback(() => {
    setActive((a) => (a === 0 ? screenshots.length - 1 : a - 1));
  }, []);

  const next = useCallback(() => {
    setActive((a) => (a === screenshots.length - 1 ? 0 : a + 1));
  }, []);

  return (
    <section className="bg-[#f5f6fa] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 tracking-tight leading-tight">
            Explore as{" "}
            <span>Funcionalidades</span>
          </h2>
          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Clique em qualquer tela para ver em detalhes. Uma plataforma
            completa para transformar sua imobiliária.
          </p>
        </div>

        {/* ── Sliding Carousel ────────────────────────────────────── */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-2 md:-left-6 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg shadow-gray-200/60 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
            aria-label="Anterior"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4.5L6.5 9l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-6 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg shadow-gray-200/60 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
            aria-label="Próximo"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4.5L11.5 9 7 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="relative">
            {/* Invisible spacer — sets container height to match center card */}
            <div
              className="mx-auto invisible pointer-events-none"
              aria-hidden="true"
              style={{ width: "clamp(280px, 54%, calc(100% - 3rem))" }}
            >
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5"><span className="w-3 h-3" /></div>
                <div className="flex-1 mx-3"><div className="px-3 py-1 text-xs">&nbsp;</div></div>
              </div>
              <div className="aspect-[16/9]" />
            </div>

            {/* All cards — always mounted, positioned via CSS transforms */}
            {screenshots.map((s, i) => {
              const offset = getOffset(i, active);
              const isCenter = offset === 0;
              const style = getCardStyle(offset);

              return (
                <div
                  key={s.id}
                  onClick={() => (isCenter ? openLightbox(i) : setActive(i))}
                  className={`absolute top-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                    isCenter
                      ? "shadow-2xl shadow-gray-400/30 group"
                      : "shadow-lg"
                  }`}
                  style={style}
                >
                  <div className="w-full relative bg-white">
                    {/* Browser chrome */}
                    <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-amber-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 mx-3">
                        <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 max-w-sm mx-auto text-center">
                          app.imobdeal.com.br
                        </div>
                      </div>
                    </div>
                    {/* Screenshot */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={s.src || "/placeholder-screenshot.png"}
                        alt={s.label}
                        fill
                        priority={i <= 2}
                        quality={95}
                        sizes="(min-width: 768px) 54vw, 100vw"
                        className="object-cover object-top"
                      />
                      {/* Hover overlay — only triggers on center card via group-hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M9 6.5v5M6.5 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description below active card */}
          <div className="text-center mt-10">
            <h3 className="text-xl font-bold text-gray-900">
              {screenshots[active].label}
            </h3>
            <p className="text-gray-500 text-base mt-1.5 max-w-lg mx-auto">
              {screenshots[active].description}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2.5 mt-7">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2.5"
                }`}
                aria-label={`Ir para ${screenshots[i].label}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        controller={{ closeOnBackdropClick: true }}
        on={{ view: ({ index: i }) => setLightboxIndex(i) }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.85)" } }}
        plugins={[Zoom, Thumbnails]}
        animation={{ navigation: 500 }}
        zoom={{ maxZoomPixelRatio: 5 }}
      />
    </section>
  );
}
