"use client";

import { useState } from "react";


interface Screenshot {
  id: string;
  label: string;
  description: string;
  screenshotInstruction: string;
}

const screenshots: Screenshot[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Visão completa da operação com KPIs, pipeline e gráficos de performance em tempo real.",
    screenshotInstruction:
      "SCREENSHOT 1: Dashboard do gestor com KPIs e gráficos — acessar /inicio-gestor",
  },
  {
    id: "kanban",
    label: "Pipeline",
    description: "Board Kanban drag-and-drop com negócios organizados por etapa do funil.",
    screenshotInstruction:
      "SCREENSHOT 2: Board Kanban de negócios — tela de funil de vendas",
  },
  {
    id: "propostas",
    label: "Propostas",
    description: "Propostas e portfólios interativos com tracking em tempo real e notificações no WhatsApp.",
    screenshotInstruction:
      "SCREENSHOT 4: Proposta / portfólio interativo — tela de propostas",
  },
  {
    id: "equipe",
    label: "Equipe",
    description: "Ranking de corretores, metas individuais e monitoramento de atividades da equipe.",
    screenshotInstruction:
      "SCREENSHOT 3: Ranking de corretores e metas — tela de performance",
  },
  {
    id: "ia",
    label: "IA",
    description: "Chat com IA para negociações, análise financeira e cadastro de imóveis por áudio.",
    screenshotInstruction:
      "SCREENSHOT 9: Chat IA — deal chat ou financial chat",
  },
];

export default function ScreenshotShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
            Plataforma
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
            Conheça por dentro
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Uma plataforma pensada para o mercado imobiliário — cada detalhe importa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto scrollbar-none -mx-5 px-5">
          <div className="flex gap-2 bg-gray-100 rounded-xl p-1.5">
            {screenshots.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  active === i
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot display */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gray-200 shadow-2xl shadow-gray-300/50">
            {/* Browser chrome mockup */}
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

            {/* Screenshot placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              {/* If you have a real screenshot, replace this with Image component */}
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                    <path
                      d="M21 15l-5-5L5 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  {screenshots[active].screenshotInstruction}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Dimensão recomendada: 1920×1080 · PNG · Light mode · Com dados de exemplo
                </p>
              </div>
            </div>
          </div>

          {/* Description below */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg max-w-lg mx-auto">
              {screenshots[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
