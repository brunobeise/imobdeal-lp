"use client";

import { FaCheck, FaStar, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import WhatsAppButton from "../../components/WhatsAppButtons";
import { useState, useEffect } from "react";
import { use } from "react";

interface SearchParams {
  plano?: string;
}

export default function Precos({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const [activePlan, setActivePlan] = useState("corretores");
  const params = use(searchParams);

  // Efeito para ler o parâmetro inicial da URL apenas uma vez
  useEffect(() => {
    if (params.plano) {
      setActivePlan(params.plano);
    }
  }, [params.plano]);

  interface Plan {
    name: string;
    price: string;
    per: string;
    subtitle?: string;
    originalPrice?: string;
    discount?: string;
    popular?: boolean;
    features: string[];
    color: string;
    bgColor: string;
    borderColor: string;
    link?: string;
    isCustom?: boolean;
  }

  const plans: { corretores: Plan[]; imobiliarias: Plan[] } = {
    corretores: [
      {
        name: "Autônomo",
        price: "R$ 169,90",
        per: "por mês",
        subtitle: "Para corretores independentes",
        originalPrice: "R$ 239,90",
        discount: "30% OFF",
        popular: true,
        features: [
          "Acompanhe quando o cliente abre a proposta",
          "Notificações automáticas no WhatsApp",
          "Propostas interativas e personalizadas",
          "Envio fácil e profissional para clientes",
          "Dashboard com histórico completo",
          "Suporte especializado",
        ],
        color: "text-primary",
        bgColor: "bg-white",
        borderColor: "border-primary",
        link: "https://app.imobdeal.com.br/cadastro",
      },
    ],
    imobiliarias: [
      {
        name: "Bronze",
        price: "R$ 109,90",
        per: "por corretor/mês",
        subtitle: "Mínimo 5 corretores",
        originalPrice: "R$ 149,90",
        discount: "27% OFF",
        features: [
          "Dashboard com histórico de propostas",
          "Envio ilimitado de propostas",
          "Integração com WhatsApp para follow-up",
          "Acompanhamento detalhado das interações",
          "Gestão de equipe básica",
          "Relatórios mensais",
        ],
        color: "text-[#CD7F32]",
        bgColor: "bg-white",
        borderColor: "border-[#CD7F32]",
        link: "https://app.imobdeal.com.br/cadastro",
      },
      {
        name: "Prata",
        price: "R$ 94,90",
        per: "por corretor/mês",
        subtitle: "Mínimo 10 corretores",
        originalPrice: "R$ 129,90",
        discount: "27% OFF",
        popular: true,
        features: [
          "Todos os benefícios do plano Bronze",
          "Suporte especializado para equipe",
          "Organização avançada por corretor",
          "Relatórios de performance detalhados",
          "Treinamento básico para equipe",
          "API para integrações",
        ],
        color: "text-gray-600",
        bgColor: "bg-white",
        borderColor: "border-gray-400",
        link: "https://app.imobdeal.com.br/cadastro",
      },
      {
        name: "Ouro",
        price: "R$ 78,90",
        per: "por corretor/mês",
        subtitle: "Mínimo 15 corretores",
        originalPrice: "R$ 109,90",
        discount: "28% OFF",
        features: [
          "Todos os benefícios do plano Prata",
          "Treinamento personalizado para equipe",
          "Relatórios de performance avançados",
          "Consultoria mensal de vendas",
          "Suporte prioritário 24/7",
          "Integração com CRM personalizada",
        ],
        color: "text-[#FFD700]",
        bgColor: "bg-white",
        borderColor: "border-[#FFD700]",
        link: "https://app.imobdeal.com.br/cadastro",
      },
      {
        name: "Diamante",
        price: "Consulte",
        per: "Condições especiais",
        subtitle: "Para grandes redes",
        features: [
          "Consultoria personalizada completa",
          "Integração avançada com sistemas",
          "Suporte premium dedicado",
          "Treinamento presencial da equipe",
          "Customizações exclusivas",
          "Gerente de conta dedicado",
        ],
        color: "text-[#00BFFF]",
        bgColor: "bg-gradient-to-br from-[#00BFFF]/10 to-[#009ACD]/10",
        borderColor: "border-[#00BFFF]",
        isCustom: true,
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6">
            Planos que se <span className="text-secondary">Adaptam</span> ao seu
            Negócio
          </h1>
          <p className="text-xl md:text-xl mb-8 text-white/90">
            Escolha o plano ideal e comece a fechar mais negócios hoje mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://app.imobdeal.com.br/cadastro"
              className="bg-secondary hover:bg-[#e6961f] text-primary text-lg font-bold px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Teste Grátis por 3 Dias
            </Link>
            <p className="text-sm text-white/70">
              Sem cartão de crédito • Acesso completo
            </p>
          </div>
        </div>
      </section>

      {/* Garantia e Benefícios */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Garantia de 7 dias</h3>
              <p className="text-gray-600">
                Se não gostar, devolvemos 100% do seu dinheiro
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaStar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Suporte especializado
              </h3>
              <p className="text-gray-600">
                Equipe dedicada para ajudar no seu sucesso
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Setup gratuito</h3>
              <p className="text-gray-600">
                Configuramos tudo para você começar hoje
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seletor de Planos */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Escolha seu Plano
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Todos os planos incluem teste grátis e garantia de devolução
            </p>

            {/* Botões de alternância */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActivePlan("corretores")}
                className={`px-8 py-3 text-lg font-semibold rounded-lg transition ${
                  activePlan === "corretores"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Corretor Autônomo
              </button>
              <button
                onClick={() => setActivePlan("imobiliarias")}
                className={`px-8 py-3 text-lg font-semibold rounded-lg transition ${
                  activePlan === "imobiliarias"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Imobiliárias
              </button>
            </div>
          </div>

          {/* Grid de Planos */}
          <div className="flex justify-center gap-4">
            {plans[activePlan as keyof typeof plans].map((plan, index) => (
              <div
                key={index}
                className={`relative ${
                  plan.bgColor
                } rounded-xl shadow-lg border-2 ${plan.borderColor} p-8 ${
                  plan.popular ? "transform scale-105" : ""
                }`}
              >
                {plan.discount && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {plan.discount}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${plan.color} mb-2`}>
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-sm text-gray-500 mb-4">
                      {plan.subtitle}
                    </p>
                  )}

                  <div className="mb-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <div className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </div>
                    <span className="text-gray-600">{plan.per}</span>
                  </div>
                </div>

                {/* Botão de Ação */}
                {plan.isCustom ? (
                  <WhatsAppButton
                    message="Olá! Gostaria de consultar condições personalizadas para minha empresa."
                    className="w-full bg-gradient-to-r from-[#00BFFF] to-[#009ACD] hover:from-[#009ACD] hover:to-[#0080AA] text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 mb-6"
                  >
                    Consultar Condições
                  </WhatsAppButton>
                ) : (
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <button
                      className={`w-full ${
                        plan.popular
                          ? "bg-secondary hover:bg-[#e6961f] text-primary"
                          : "bg-primary hover:bg-primary/90 text-white"
                      } font-bold py-3 rounded-lg transition-all transform hover:scale-105 mb-6`}
                    >
                      Começar Agora
                    </button>
                  </a>
                )}

                {/* Lista de Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 flex-shrink-0 w-4 h-4 mr-3 mt-1" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-2">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-gray-600">
                Sim! Você pode cancelar seu plano a qualquer momento sem multas
                ou taxas adicionais.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-2">
                Como funciona o teste grátis?
              </h3>
              <p className="text-gray-600">
                Você tem 3 dias para testar todas as funcionalidades
                gratuitamente, sem precisar informar cartão de crédito.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-2">
                Há limite de propostas?
              </h3>
              <p className="text-gray-600">
                Não! Todos os planos incluem envio ilimitado de propostas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-2">
                Posso trocar de plano depois?
              </h3>
              <p className="text-gray-600">
                Sim, você pode fazer upgrade ou downgrade do seu plano a
                qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar suas vendas?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Milhares de corretores já aumentaram suas vendas com o ImobDeal
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="https://app.imobdeal.com.br/cadastro"
              className="bg-secondary hover:bg-[#e6961f] text-primary text-lg font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-2"
            >
              Teste Grátis Agora
            </Link>

            <WhatsAppButton
              message="Olá! Gostaria de consultar condições personalizadas para minha empresa."
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Condições Personalizadas
            </WhatsAppButton>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <h3 className="text-lg font-semibold mb-4">
              Fale conosco diretamente:
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4" />
                <span>(51) 2160-5371</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" />
                <span>contato@imobdeal.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
