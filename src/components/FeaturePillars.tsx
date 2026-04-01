"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { MdOutlineLink, MdTrendingUp, MdMic, MdCalendarMonth } from "react-icons/md";
import { BsGraphUpArrow, BsPeopleFill } from "react-icons/bs";
import type { ReactNode } from "react";

type Persona = "gestor" | "corretor";

interface Pillar {
  icon: ReactNode;
  title: string;
  description: string;
  screenshotAlt: string;
  src: string;
}

const gestorPillars: Pillar[] = [
  {
    icon: <BsGraphUpArrow size={22} />,
    title: "Dados Automáticos",
    description: "Corretores preenchem o CRM, você vê os dados. Sem Power BI manual. Dashboards em tempo real com KPIs, gráficos e métricas de performance.",
    screenshotAlt: "Dashboard do gestor com KPIs e gráficos de performance",
    src: "/screenshots/gestao-de-leads.png",
  },
  {
    icon: <BsPeopleFill size={22} />,
    title: "Controle Total da Equipe",
    description: "Saiba o que cada corretor está fazendo. Acompanhe tarefas, metas, ranking de performance e produtividade de toda a equipe.",
    screenshotAlt: "Ranking de corretores e metas de performance",
    src: "/screenshots/inicio-gestor.png",
  },
  {
    icon: <MdTrendingUp size={22} />,
    title: "Funis e Previsão de Receita",
    description: "Pipeline visual Kanban com drag-and-drop. Forecast de vendas automático. Identifique gargalos antes que virem perdas.",
    screenshotAlt: "Board Kanban de negócios com funil de vendas",
    src: "/screenshots/kanban.png",
  },
];

const corretorPillars: Pillar[] = [
  {
    icon: <MdOutlineLink size={22} />,
    title: "Propostas e Portfólios Inteligentes",
    description: "Links personalizados por cliente com tracking de abertura. Receba notificação no WhatsApp quando seu cliente abre a proposta.",
    screenshotAlt: "Proposta interativa com tracking de visualização",
    src: "/screenshots/propostas.png",
  },
  {
    icon: <MdMic size={22} />,
    title: "Cadastro por Áudio com IA",
    description: "Fale os dados do imóvel e a IA transcreve e preenche o cadastro automaticamente. Tecnologia Whisper integrada. Economize 80% do tempo.",
    screenshotAlt: "Interface de cadastro de imóvel por áudio com IA",
    src: "/screenshots/audio.png",
  },
  {
    icon: <MdCalendarMonth size={22} />,
    title: "CRM Completo + Agenda",
    description: "Leads, contatos, negócios, tarefas e agenda — tudo integrado com Google Calendar. Nunca mais perca um follow-up ou visita.",
    screenshotAlt: "Calendário integrado com compromissos e tarefas",
    src: "/screenshots/agenda.png",
  },
];

export default function FeaturePillars({ persona }: { persona: Persona }) {
  const pillars = persona === "gestor" ? gestorPillars : corretorPillars;
  const sectionTitle = persona === "gestor"
    ? "Tudo que o gestor precisa para ter controle total"
    : "Tudo que o corretor precisa para potencializar o que ele realmente sabe fazer: VENDER IMÓVEIS";

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = pillars.map((p) => ({
    src: p.src,
    width: 1920,
    height: 1080,
  }));

  return (
    <section className="bg-primary relative overflow-hidden py-20 md:py-28">
      {/* Subtle background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-light rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-tight">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:bg-white/[0.1] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">{pillar.description}</p>

              {/* Screenshot */}
              <div
                className="screenshot-frame cursor-pointer group/img"
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              >
                <div className="bg-surface rounded-lg aspect-video overflow-hidden border border-white/10 relative">
                  <Image
                    src={pillar.src}
                    alt={pillar.screenshotAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 shadow-lg">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-primary">
                        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                        <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 6.5v5M6.5 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        controller={{ closeOnBackdropClick: true }}
        on={{ view: ({ index: i }) => setLightboxIndex(i) }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.85)" } }}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 5 }}
      />
    </section>
  );
}
