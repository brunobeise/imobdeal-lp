"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const plans = {
  corretores: [
    {
      name: "Starter",
      price: "R$ 49,90",
      per: "",
      popular: false,
      features: [
        { text: "Até 5 imóveis cadastrados", included: true },
        { text: "Acompanhe quando o cliente abre a proposta", included: true },
        { text: "Notificações automáticas no WhatsApp", included: true },
        { text: "Propostas interativas básicas", included: true },
        { text: "Dashboard simplificado", included: true },
        { text: "Suporte por email", included: true },
        { text: "Imóveis ilimitados", included: false },
        { text: "Relatórios avançados", included: false },
        { text: "Suporte especializado", included: false },
      ],
      color: "text-gray-600",
      borderColor: "text-gray-400",
      link: "https://app.imobdeal.com.br/cadastro",
    },
    {
      name: "Pro",
      price: "R$ 99,00",
      per: "",
      originalPrice: "R$ 169,90",
      discount: "41% OFF",
      popular: true,
      features: [
        { text: "Até 5 imóveis cadastrados", included: true },
        { text: "Acompanhe quando o cliente abre a proposta", included: true },
        { text: "Notificações automáticas no WhatsApp", included: true },
        { text: "Propostas interativas básicas", included: true },
        { text: "Dashboard simplificado", included: true },
        { text: "Suporte por email", included: true },
        { text: "Imóveis ilimitados", included: true },
        { text: "Relatórios avançados", included: true },
        { text: "Suporte especializado", included: true },
      ],
      color: "text-primary",
      borderColor: "text-primary",
      link: "https://app.imobdeal.com.br/cadastro",
    },
  ],
  imobiliarias: [
    {
      name: "Bronze",
      price: "R$ 89,90",
      per: "por corretor (5 corretores)",
      popular: false,
      features: [
        "Dashboard com histórico de propostas",
        "Envio ilimitado de propostas",
        "Integração com WhatsApp para follow-up",
        "Acompanhamento detalhado das interações",
      ],
      color: "text-[#CD7F32]",
      borderColor: "[#B5651D]",
      link: "https://www.asaas.com/c/3wo2j55dgagxexb9",
    },
    {
      name: "Prata",
      price: "R$ 74,90",
      per: "por corretor (10 corretores)",
      popular: true,
      features: [
        "Todos os benefícios do plano Bronze",
        "Suporte especializado para equipe",
        "Organização avançada por corretor",
      ],
      color: "text-gray-400",
      borderColor: "gray-500",
      link: "https://www.asaas.com/c/g0wphmygwlblgjbw",
    },
    {
      name: "Ouro",
      price: "R$ 59,90",
      per: "por corretor (15 corretores)",
      popular: false,
      features: [
        "Todos os benefícios do plano Prata",
        "Treinamento personalizado para equipe",
        "Relatórios de performance detalhados",
      ],
      color: "text-[#ddad31]",
      borderColor: "[#b78c1f]",
      link: "https://www.asaas.com/c/eg09xmpgwr6j4bqf",
    },
    {
      name: "Diamante",
      price: "Consulte",
      per: "Planos personalizados",
      popular: false,
      features: [
        "Consultoria personalizada",
        "Integração avançada",
        "Suporte premium",
      ],
      color: "[#00BFFF]",
      borderColor: "[#009ACD]",
      link: "#",
    },
  ],
};

export default function PricingPlans() {
  const [activePlan, setActivePlan] = useState("corretores");

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Escolha o plano ideal para você
        </h2>
        <p className="text-gray-600 mt-4">
          Envie propostas profissionais, acompanhe visualizações e feche mais
          negócios com o ImobDeal.
        </p>

        {/* Botões de alternância */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-md transition cursor-pointer ${
              activePlan === "corretores"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            onClick={() => setActivePlan("corretores")}
          >
            Corretores
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-md transition cursor-pointer ${
              activePlan === "imobiliarias"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            onClick={() => setActivePlan("imobiliarias")}
          >
            Imobiliárias
          </button>
        </div>

        {/* Grid de Planos */}
        <div className={`mt-10 flex flex-wrap justify-center gap-10 ${
          activePlan === "corretores" ? "max-w-4xl mx-auto" : ""
        }`}>
          {plans[activePlan as keyof typeof plans].map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-lg shadow-md p-6 w-[320px] relative ${
                plan.popular ? "ring-2 ring-blue-500 bg-white" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              
              <h3 className={"text-lg font-semibold " + plan.color}>
                {plan.name}
              </h3>
              <div className="flex items-end justify-center">
                {plan.name === "Pro" ? (
                  <div className="flex flex-col items-center">
                    <span className="text-gray-400 line-through text-lg">R$ 169,90</span>
                    <div className="flex items-center gap-2">
                      <p className="text-4xl font-bold text-gray-900 mt-2">{plan.price}</p>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full ml-2">-41% OFF</span>
                    </div>
                    <span className="text-xs">/ mês</span>
                  </div>
                ) : (
                  <>
                    <p className="text-4xl font-bold text-gray-900 mt-2">{plan.price}</p>
                    {plan.price !== "Consulte" && (
                      <span className="text-xs">/ mês</span>
                    )}
                  </>
                )}
              </div>
              <span className="text-gray-500 text-sm">{plan.per}</span>

              {/* Botão de Pagamento */}
              <a href={plan.link}>
                <button
                  className={`cursor-pointer mt-4 w-full block text-center bg-[#0b2a41]  text-white font-semibold py-2 rounded-md border hover:bg-opacity-80 transition`}
                >
                  {" "}
                  Teste Grátis
                </button>
              </a>

              {/* Lista de Features */}
              <div className="mt-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <p key={idx} className={`flex items-center ${
                    typeof feature === 'object' 
                      ? feature.included 
                        ? 'text-gray-700' 
                        : 'text-gray-400 line-through'
                      : 'text-gray-700'
                  }`}>
                    {typeof feature === 'object' ? (
                      feature.included ? (
                        <FaCheck className="text-[#0b2a41] flex-shrink-0 w-5 h-5 mr-3" />
                      ) : (
                        <svg className="text-gray-400 flex-shrink-0 w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )
                    ) : (
                      <FaCheck className="text-[#0b2a41] flex-shrink-0 w-5 h-5 mr-3" />
                    )}
                    {typeof feature === 'object' ? feature.text : feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
