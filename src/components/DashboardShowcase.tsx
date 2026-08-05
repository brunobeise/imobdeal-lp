"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useCallback, useEffect, useRef } from "react";

/* Só baixa o pacote do lightbox quando alguém clica para ampliar. */
const ImageLightbox = dynamic(() => import("./ImageLightbox"), { ssr: false });

interface SlideGroup {
  id: string;
  label: string;
  description: string;
  images: string[];
}

/* ── Gestor: dashboards/BI ────────────────────────────────────────── */
const gestorSlides: SlideGroup[] = [
  {
    id: "vendas",
    label: "Relatório de Vendas",
    description:
      "Visão consolidada de vendas por período, corretor e tipo de negócio.",
    images: ["/dashboards/vendas-1.webp", "/dashboards/vendas-3.webp"],
  },
  {
    id: "analise-funil",
    label: "Análise de Funil",
    description:
      "Taxas de conversão por etapa do funil e gargalos identificados automaticamente.",
    images: ["/dashboards/analise-funil-1.webp", "/dashboards/analise-funil-2.webp"],
  },
  {
    id: "metas",
    label: "Metas & Ranking",
    description:
      "Acompanhe a performance da equipe com metas individuais e ranking.",
    images: ["/dashboards/metas-1.webp", "/dashboards/metas-2.webp"],
  },
  {
    id: "gestao-leads",
    label: "Gestão de Leads",
    description:
      "Leads organizados por origem, status e distribuição automática.",
    images: [
      "/dashboards/gestao-de-leads-1.webp",
      "/dashboards/gestao-de-leads-2.webp",
      "/dashboards/getsao-de-leads-3.webp",
    ],
  },
  {
    id: "atividade",
    label: "Atividade da Equipe",
    description:
      "Monitoramento de tarefas, ligações e atividades dos corretores em tempo real.",
    images: ["/dashboards/atividade-1.webp", "/dashboards/atividade-2.webp"],
  },
  {
    id: "perdas",
    label: "Análise de Perdas",
    description:
      "Identifique motivos de perda e ajuste a estratégia comercial com dados reais.",
    images: [
      "/dashboards/perdas-1.webp",
      "/dashboards/perdas-2.webp",
      "/dashboards/perdas-4.webp",
    ],
  },
  {
    id: "visitas",
    label: "Relatório de Visitas",
    description:
      "Controle de visitas realizadas, agendadas e taxa de conversão pós-visita.",
    images: ["/dashboards/visitas-1.webp", "/dashboards/visitas-2.webp"],
  },
  {
    id: "pci",
    label: "Performance Comercial",
    description:
      "Indicadores individuais de cada corretor: volume, conversão e receita.",
    images: ["/dashboards/pci-1.webp", "/dashboards/pci-2.webp"],
  },
];

/* ── Header copy ──────────────────────────────────────────────────── */
const headerContent = {
  badge: "Por que o ImobDeal existe",
  headline: "A maioria dos CRMs guarda dado.",
  headlineAccent: "O ImobDeal te entrega o número.",
  sub: "Guardar informação é fácil. Difícil é ela virar decisão antes do fim do mês.",
  leftLabel: "Horas preenchendo planilha",
  leftSub: "Dados desatualizados, erros manuais, zero automação.",
  callout:
    "Sua equipe preenche o CRM normalmente, e todos os dashboards, relatórios e previsões são gerados automaticamente.",
};

/* ── A origem do produto, em três tempos ──────────────────────────── */
const story = [
  {
    tag: "O problema",
    title: "Alguém tinha que montar o número",
    text: "Exportar o CRM, jogar em planilha, fazer gráfico na mão. Quando ficava pronto, já era passado.",
  },
  {
    tag: "A decisão",
    title: "Começar pelo número, não pelo cadastro",
    text: "Especialistas do mercado imobiliário desenharam o CRM a partir do relatório que o gestor precisa ver — e não o contrário.",
  },
  {
    tag: "Hoje",
    title: "O dashboard se monta sozinho",
    text: "A equipe usa o CRM no dia a dia. Dashboards e forecast se atualizam sozinhos, sem BI paralelo.",
  },
];

/* ── Helpers ──────────────────────────────────────────────────────── */
function flattenImages(slides: SlideGroup[]) {
  return slides.flatMap((d) => d.images);
}

function getLightboxIndex(slides: SlideGroup[], groupIdx: number, subIdx: number): number {
  let total = 0;
  for (let i = 0; i < groupIdx; i++) total += slides[i].images.length;
  return total + subIdx;
}

/** Distância circular no carrossel — define o que fica montado no DOM. */
function isNear(i: number, active: number, len: number) {
  const d = Math.abs(i - active);
  return Math.min(d, len - d) <= 1;
}

function getGroupFromLightboxIndex(
  slides: SlideGroup[],
  flatIdx: number
): { group: number; sub: number } {
  let total = 0;
  for (let i = 0; i < slides.length; i++) {
    if (flatIdx < total + slides[i].images.length) {
      return { group: i, sub: flatIdx - total };
    }
    total += slides[i].images.length;
  }
  return { group: 0, sub: 0 };
}

export default function DashboardShowcase() {
  const slides = gestorSlides;
  const header = headerContent;
  const allImages = flattenImages(slides);

  const [active, setActive] = useState(0);
  const [subActive, setSubActive] = useState<number[]>(
    () => slides.map(() => 0)
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setActive(0);
    setSubActive(slides.map(() => 0));
    setIsAutoPlaying(true);
  }, [slides]);

  const lightboxSlides = allImages.map((src) => ({
    src,
    width: 1920,
    height: 1080,
  }));

  const currentGroup = slides[active];
  const currentSub = subActive[active] ?? 0;

  const next = useCallback(() => {
    setActive((a) => (a === slides.length - 1 ? 0 : a + 1));
  }, [slides.length]);

  const prev = useCallback(() => {
    setActive((a) => (a === 0 ? slides.length - 1 : a - 1));
  }, [slides.length]);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setIsAutoPlaying(false);
  }, []);

  const setSubForActive = useCallback(
    (subIdx: number) => {
      setSubActive((prev) => {
        const copy = [...prev];
        copy[active] = subIdx;
        return copy;
      });
      setIsAutoPlaying(false);
    },
    [active]
  );

  // Auto-play: cycle through sub-images then move to next group
  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      setSubActive((prev) => {
        const copy = [...prev];
        const currentGroupImages = slides[active]?.images ?? [];
        const currentSubIdx = copy[active] ?? 0;
        if (currentSubIdx < currentGroupImages.length - 1) {
          copy[active] = currentSubIdx + 1;
          return copy;
        }
        // Move to next group
        copy[active] = 0;
        setActive((a) => (a === slides.length - 1 ? 0 : a + 1));
        return copy;
      });
    }, 3500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, active, slides]);

  // Touch swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      setIsAutoPlaying(false);
      if (diff > 0) next();
      else prev();
    }
  }, [next, prev]);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* ── Header ────────────────────────────────────────────── */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">
            {header.badge}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 tracking-tight leading-[1.15] max-w-3xl mx-auto text-balance">
            {header.headline}
            <span className="block text-primary">{header.headlineAccent}</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-5 max-w-xl mx-auto leading-relaxed text-pretty">
            {header.sub}
          </p>
        </div>

        {/* ── A história, em três tempos ─────────────────────────── */}
        <div className="mb-16 md:mb-24 grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {story.map((ato, i) => {
            const isLast = i === story.length - 1;
            return (
              <div key={i} className="relative">
                {/* Linha conectora até o próximo marcador (desktop) */}
                {!isLast && (
                  <div
                    className={`hidden md:block absolute top-5 left-12 -right-4 h-px ${
                      i === 0
                        ? "bg-gradient-to-r from-red-200 to-gray-200"
                        : "bg-gradient-to-r from-gray-200 to-primary/40"
                    }`}
                    aria-hidden="true"
                  />
                )}

                {/* Marcador */}
                <div
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-5 mx-auto md:mx-0 ${
                    isLast
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : i === 0
                      ? "bg-red-50 text-red-500 ring-1 ring-red-200"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {i + 1}
                </div>

                <div className="text-center md:text-left">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                      isLast
                        ? "text-primary"
                        : i === 0
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {ato.tag}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {ato.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2.5 leading-relaxed">
                    {ato.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Split layout ──────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* ── LEFT: Planilha com X ───────────────────────────── */}
          <div className="w-full lg:w-[38%] flex-shrink-0">
            <div className="relative group">
              {/* Card da planilha */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-200 shadow-lg shadow-red-100/40">
                {/* Browser chrome */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-white rounded-md px-3 py-1 text-[11px] text-gray-400 max-w-[200px] mx-auto text-center truncate">
                      planilha-controle-vendas.xlsx
                    </div>
                  </div>
                </div>

                {/* Imagem da planilha */}
                <div className="aspect-[4/3] relative bg-white">
                  <Image
                    src="/screenshots/planilha.webp"
                    alt="Planilha de controle de vendas, o método antigo"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />

                  {/* Overlay escuro com X */}
                  <div className="absolute inset-0 bg-red-950/30 flex items-center justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-red-500/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-red-500/40">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        className="text-white md:w-[72px] md:h-[72px]"
                      >
                        <path
                          d="M16 16L40 40M40 16L16 40"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Label abaixo da planilha */}
              <div className="mt-5 text-center">
                <p className="text-red-500 font-bold text-sm uppercase tracking-wide">
                  {header.leftLabel}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {header.leftSub}
                </p>
              </div>
            </div>
          </div>

          {/* ── Seta / Separador ───────────────────────────────── */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {/* Mobile: seta para baixo */}
            <div className="lg:hidden flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                  <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {/* Desktop: seta para direita */}
            <div className="hidden lg:flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-white">
                  <path d="M5 11h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Carrossel de Dashboards ─────────────────── */}
          <div className="w-full lg:flex-1 min-w-0">
            <div className="relative">
              {/* Carousel container */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-400/20 border border-gray-100"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Browser chrome */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-white rounded-md px-3 py-1 text-[11px] text-gray-400 max-w-[200px] mx-auto text-center truncate">
                      app.imobdeal.com.br
                    </div>
                  </div>
                  {/* Badge verde "ao vivo" */}
                  <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">
                      Tempo real
                    </span>
                  </div>
                </div>

                {/* Slides — one per group, showing sub-active image.
                    Só o grupo ativo e os vizinhos imediatos são montados: com
                    os 8 grupos no DOM o navegador dispara as 19 imagens de uma
                    vez e a seção fica em branco no mobile até tudo chegar. */}
                <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                  {slides.map((d, i) => {
                    const sub = subActive[i] ?? 0;
                    if (!isNear(i, active, slides.length)) return null;
                    return (
                      <div
                        key={d.id}
                        className="absolute inset-0 transition-all duration-500 ease-out"
                        style={{
                          opacity: i === active ? 1 : 0,
                          transform: `translateX(${(i - active) * 100}%)`,
                          pointerEvents: i === active ? "auto" : "none",
                        }}
                      >
                        {/* Sub-images within the group — no grupo ativo mantém a
                            seguinte pré-carregada para o autoplay não piscar;
                            nos vizinhos, só a primeira. */}
                        {d.images.map((src, si) => {
                          const keep =
                            i === active ? si <= sub + 1 && si >= sub - 1 : si === 0;
                          if (!keep) return null;
                          return (
                            <div
                              key={src}
                              className="absolute inset-0 transition-opacity duration-400 ease-out"
                              style={{
                                opacity: si === sub ? 1 : 0,
                                pointerEvents: si === sub ? "auto" : "none",
                              }}
                            >
                              <Image
                                src={src}
                                alt={`${d.label} — ${si + 1} de ${d.images.length}`}
                                fill
                                quality={72}
                                sizes="(min-width: 1024px) 56vw, 100vw"
                                className="object-cover object-top cursor-pointer"
                                onClick={() => {
                                  setLightboxIndex(getLightboxIndex(slides, i, si));
                                  setLightboxOpen(true);
                                  setIsAutoPlaying(false);
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-primary">
                        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                        <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 6.5v5M6.5 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Sub-image indicators (inside the slide, bottom-right) */}
                  {currentGroup.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                      {currentGroup.images.map((_, si) => (
                        <button
                          key={si}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSubForActive(si);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            si === currentSub
                              ? "bg-white w-4"
                              : "bg-white/40 hover:bg-white/60 w-1.5"
                          }`}
                          aria-label={`Imagem ${si + 1} de ${currentGroup.images.length}`}
                        />
                      ))}
                      <span className="text-[10px] text-white/70 ml-1 font-medium">
                        {currentSub + 1}/{currentGroup.images.length}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => { prev(); setIsAutoPlaying(false); }}
                className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg shadow-gray-200/60 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
                aria-label="Dashboard anterior"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M11 4.5L6.5 9l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => { next(); setIsAutoPlaying(false); }}
                className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg shadow-gray-200/60 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
                aria-label="Próximo dashboard"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4.5L11.5 9 7 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Label + Description */}
              <div className="mt-5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {currentGroup.label}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mt-1 max-w-md mx-auto lg:mx-0">
                  {currentGroup.description}
                </p>
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center lg:justify-start gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === active
                        ? "bg-primary w-6"
                        : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                    aria-label={`Ir para ${slides[i].label}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom callout ────────────────────────────────────── */}
        <div className="mt-16 bg-primary/[0.04] border border-primary/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-gray-600 text-sm md:text-base text-center sm:text-left leading-relaxed">
            <strong className="text-gray-900">Zero trabalho extra.</strong>{" "}
            {header.callout}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
      <ImageLightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        controller={{ closeOnBackdropClick: true }}
        on={{
          view: ({ index: i }) => {
            setLightboxIndex(i);
            const { group, sub } = getGroupFromLightboxIndex(slides, i);
            setActive(group);
            setSubActive((prev) => {
              const copy = [...prev];
              copy[group] = sub;
              return copy;
            });
          },
        }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.85)" } }}
        animation={{ navigation: 500 }}
        zoom={{ maxZoomPixelRatio: 5 }}
      />
      )}
    </section>
  );
}
