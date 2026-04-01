"use client";

import { MdCheck, MdAutoAwesome } from "react-icons/md";
import { useLeadModal } from "@/contexts/LeadModalContext";

interface PricingPlansProps {
  persona?: "gestor" | "corretor";
}

interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  users: string;
  additionalInfo: string[];
  features: string[];
  highlighted: boolean;
  cta: string;
  link: string;
}

const plans: Plan[] = [
  {
    name: "Autônomo",
    description: "Para corretores independentes que querem se profissionalizar.",
    price: "R$ 197",
    period: "/mês",
    users: "1 usuário incluído",
    additionalInfo: ["Usuário adicional: R$ 99,90/mês"],
    features: [
      "CRM completo com funis",
      "Propostas e portfólios interativos",
      "Cadastro de imóvel por áudio com IA",
      "Chat com IA para negociações",
      "Agenda integrada com Google",
      "Gestão de documentos",
      "Assinatura eletrônica (R$ 3,99/doc)",
      "Notificações via WhatsApp",
      "Suporte por chat e WhatsApp",
    ],
    highlighted: false,
    cta: "Começar teste grátis",
    link: "https://app.imobdeal.com.br/cadastro",
  },
  {
    name: "Imobiliária",
    description: "Para imobiliárias que querem controle total da operação.",
    price: "R$ 569",
    period: "/mês",
    users: "5 usuários incluídos",
    additionalInfo: [
      "Adicional (6–10): R$ 59,90/mês",
      "Adicional (11+): R$ 39,90/mês",
    ],
    features: [
      "Tudo do plano Autônomo, mais:",
      "Dashboard gerencial com KPIs",
      "Ranking e metas por corretor",
      "Controle de equipe e tarefas",
      "Funis e forecast de receita",
      "Gestão de leads com distribuição",
      "Relatórios de performance",
      "Suporte prioritário",
    ],
    highlighted: true,
    cta: "Começar teste grátis",
    link: "https://app.imobdeal.com.br/cadastro",
  },
];

interface Module {
  name: string;
  price: string;
  detail: string;
  icon: string;
}

const modules: Module[] = [
  {
    name: "Financeiro",
    price: "R$ 269/mês",
    detail: "Contas a pagar/receber, comissões, fluxo de caixa",
    icon: "",
  },
  {
    name: "Site Imobiliária",
    price: "R$ 2.000",
    detail: "Setup único — site próprio integrado ao CRM",
    icon: "",
  },
];

export default function PricingPlans({ persona = "gestor" }: PricingPlansProps) {
  const { open: openLeadModal } = useLeadModal();
  const orderedPlans =
    persona === "corretor" ? [plans[0], plans[1]] : [plans[1], plans[0]];

  return (
    <section id="precos" className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
            Preços
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
            Investimento transparente
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Sem surpresas. Teste grátis por 7 dias, cancele quando quiser.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {orderedPlans.map((plan, i) => {
            const isHighlighted =
              (persona === "corretor" && plan.name === "Autônomo") ||
              (persona === "gestor" && plan.name === "Imobiliária") ||
              plan.highlighted;

            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${isHighlighted
                    ? "border-2 border-primary bg-white shadow-xl shadow-primary/8 ring-1 ring-primary/10"
                    : "border border-gray-200 bg-white"
                  }`}
              >

                {/* Plan info */}
                <h3 className="text-xl font-bold text-gray-900 mt-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 font-medium">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{plan.users}</p>
                {plan.additionalInfo.map((info, j) => (
                  <p key={j} className="text-xs text-gray-400 mt-0.5">
                    {info}
                  </p>
                ))}

                {/* CTA */}
                <button
                  onClick={openLeadModal}
                  className={`mt-6 block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${isHighlighted
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <MdCheck className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Modules */}
        <div className="mt-10">
          <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Módulos adicionais
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {modules.map((mod, i) => (
              <span key={i} className="text-xs text-gray-400">
                {mod.name} · <span className="text-gray-500">{mod.price}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Variable costs note */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-gray-400">
          <MdAutoAwesome size={14} className="text-accent-amber" />
          <span>
            Custos variáveis: Assinatura eletrônica R$ 3,99/doc · Tokens de IA sob demanda
          </span>
        </div>
      </div>
    </section>
  );
}
