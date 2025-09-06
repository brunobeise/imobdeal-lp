"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const plans = {
  corretores: [
    {
      name: "Autônomo",
      price: "R$ 99,00",
      per: "",
      features: [
        "Acompanhe quando o cliente abre a proposta",
        "Notificações automáticas no WhatsApp",
        "Propostas interativas e personalizadas",
        "Envio fácil e profissional para clientes",
      ],
      color: "text-gray-500",
      borderColor: "text-gray-600",
      link: "https://www.asaas.com/c/ou1u7cajriwld3uz",
    },
  ],
  imobiliarias: [
    {
      name: "Bronze",
      price: "R$ 90,00",
      per: "por corretor (5 corretores)",
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
      price: "R$ 80,00",
      per: "por corretor (10 corretores)",
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
      price: "R$ 70,00",
      per: "por corretor (15 corretores)",
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
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {plans[activePlan as keyof typeof plans].map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-100  rounded-lg shadow-md p-6 w-[320px]`}
            >
              <h3 className={"text-lg font-semibold " + plan.color}>
                {plan.name}
              </h3>
              <div className="flex items-end justify-center">
                {plan.name === "Autônomo" ? (
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
                  Assinar agora
                </button>
              </a>

              {/* Lista de Features */}
              <div className="mt-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-gray-700">
                    <FaCheck className="text-[#0b2a41] flex-shrink-0 w-5 h-5 mr-3" />
                    {feature}
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
