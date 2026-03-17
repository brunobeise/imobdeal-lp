import {
  MdOutlineLink,
  MdAutoAwesome,
  MdDashboardCustomize,
  MdTrendingUp,
  MdCalendarMonth,
  MdDescription,
  MdPeople,
  MdIntegrationInstructions,
  MdHomeWork,
  MdLanguage,
  MdFolder,
  MdShuffle,
} from "react-icons/md";
import type { ReactNode } from "react";

interface FeatureCategory {
  icon: ReactNode;
  title: string;
  badge?: string;
  features: string[];
}

const categories: FeatureCategory[] = [
  {
    icon: <MdTrendingUp size={24} />,
    title: "CRM & Pipeline",
    features: [
      "Gestão de leads e contatos",
      "Negócios com Kanban drag-and-drop",
      "Funis personalizáveis",
      "Forecast de vendas automático",
      "Histórico completo de interações",
    ],
  },
  {
    icon: <MdShuffle size={24} />,
    title: "Leads",
    features: [
      "Roleta de leads automática",
      "Distribuição por rodízio entre corretores",
      "Alerta de lead no Whatsapp em tempo real",
      "Importação automática de portais",
      "Histórico de atribuição",
    ],
  },
  {
    icon: <MdFolder size={24} />,
    title: "Portfólios",
    features: [
      "Portfólios interativos por cliente",
      "Comparador de imóveis lado a lado",
      "Link inteligente com tracking",
      "Notificação no WhatsApp em tempo real",
      "Análise de engajamento por seção",
    ],
  },
  {
    icon: <MdOutlineLink size={24} />,
    title: "Propostas",
    features: [
      "Propostas interativas com tracking",
      "Notificação de abertura em tempo real",
      "Templates personalizáveis",
      "Envio via WhatsApp ou e-mail",
      "Histórico de visualizações",
    ],
  },
  {
    icon: <MdHomeWork size={24} />,
    title: "Gestão de Imóveis",
    features: [
      "Cadastro completo de imóveis",
      "Fotos, vídeos e localização",
      "Filtros avançados de busca",
      "Gestão de disponibilidade",
      "Publicação em portais integrada",
    ],
  },
  {
    icon: <MdLanguage size={24} />,
    title: "Site Imobiliário",
    badge: "Integrado",
    features: [
      "Site próprio da imobiliária",
      "Catálogo de imóveis atualizado",
      "Captação de leads automática",
      "Design responsivo e SEO",
      "Domínio personalizado",
    ],
  },
  {
    icon: <MdPeople size={24} />,
    title: "Gestão de Equipe",
    features: [
      "Ranking de corretores",
      "Metas e objetivos individuais",
      "Atribuição de tarefas",
      "Monitoramento de atividades",
      "Dashboard de produtividade",
    ],
  },
  {
    icon: <MdDashboardCustomize size={24} />,
    title: "Financeiro",
    badge: "Módulo",
    features: [
      "Contas a pagar e receber",
      "Comissões automáticas",
      "Relatório DRE",
      "Fluxo de caixa em tempo real",
      "Relatórios P&L",
    ],
  },
  {
    icon: <MdAutoAwesome size={24} />,
    title: "IA & Automação",
    badge: "IA",
    features: [
      "Cadastro de imóvel via link com IA",
      "Chat com IA para negociações",
      "Análise financeira por IA",
      "Scripts de objeção inteligentes",
      "Integração automática de leads",
    ],
  },
  {
    icon: <MdDescription size={24} />,
    title: "Documentos",
    features: [
      "Gestão documental centralizada",
      "Assinatura eletrônica",
      "Vinculação automática a negócios",
      "Vinculado a imóveis",
      "Compartilhado na imobiliária"
    ],
  },
  {
    icon: <MdCalendarMonth size={24} />,
    title: "Agenda & Tarefas",
    features: [
      "Calendário integrado com Google",
      "Resumo diário de compromissos",
      "Tarefas vinculadas ao negócios",
      "Visão diária, semanal e mensal",
      "Compromissos categorizados",
    ],
  },
  {
    icon: <MdIntegrationInstructions size={24} />,
    title: "Integrações",
    features: [
      "Google Calendar",
      "WhatsApp",
      "Portais imobiliários",
      "Chaves na Mão",
      "Exportação para Excel/CSV",
    ],
  },
];

export default function FeatureGrid() {
  return (
    <section id="funcionalidades" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
            Funcionalidades
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
            Tudo em um só lugar
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Mais de 50 funcionalidades para você parar de usar 5 ferramentas diferentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group border border-gray-100 rounded-2xl p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Icon + Badge row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {cat.icon}
                </div>
                {cat.badge && (
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      cat.badge === "IA"
                        ? "bg-accent-amber/15 text-accent-orange"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-4">{cat.title}</h3>

              {/* Features list */}
              <ul className="space-y-2.5">
                {cat.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-primary mt-0.5 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
