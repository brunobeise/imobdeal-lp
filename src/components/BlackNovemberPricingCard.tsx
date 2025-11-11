"use client";

import { useBlackNovember } from "@/hooks/useBlackNovember";
import FreeTrialButton from "./FreeTrialButton";

export default function BlackNovemberPricingCard() {
  const { isBlackNovember, originalPrice, blackNovemberPrice, discount } = useBlackNovember();

  if (!isBlackNovember) return null;

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white p-4 md:p-6 rounded-xl border-2 md:border-4 border-[#F9A826] shadow-2xl relative">
      {/* Efeito de brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F9A826]/10 via-transparent to-[#F9A826]/10 animate-pulse"></div>
      
      {/* Badge do canto */}
      <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 bg-[#F9A826] text-black px-2 md:px-3 py-1 rounded-full font-bold text-xs md:text-sm rotate-12 shadow-lg">
        🔥 BLACK NOVEMBER
      </div>

      <div className="relative z-10">
        <div className="text-center mb-4 md:mb-6">
          <h3 className="text-lg md:text-2xl font-bold text-[#F9A826] mb-1 md:mb-2">
            💎 Oferta Exclusiva Black November
          </h3>
          <p className="text-xs md:text-base text-gray-300">
            Plano Trimestral com desconto especial
          </p>
        </div>

        <div className="text-center mb-4 md:mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3">
            <span className="text-base md:text-lg text-gray-400 line-through">{originalPrice}</span>
            <span className="bg-[#F9A826] text-black px-2 md:px-3 py-1 rounded-full font-bold text-xs md:text-sm">
              {discount}
            </span>
          </div>
          
          <div className="text-3xl md:text-5xl font-bold text-[#F9A826] mb-2">
            {blackNovemberPrice}
          </div>
          
          <p className="text-xs md:text-sm text-gray-300">
            <span className="font-semibold">Plano trimestral no PIX</span>
          </p>
          <p className="text-[10px] md:text-xs text-gray-400 mt-1">
            Equivale a R$ 60,67/mês • Economia de R$ 78,00
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-2 mb-6 md:mb-8 text-xs md:text-sm">
          {/* Coluna 1 */}
          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Propostas ilimitadas por 3 meses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Tracking em tempo real</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Notificações automáticas no WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Apresentação de imóvel profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Envio de vários imóveis</span>
            </div>
          </div>
          
          {/* Coluna 2 */}
          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Layout profissional e personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Suporte humanizado 24hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Insights de estratégias</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Landing pages de imóveis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F9A826] text-sm md:text-base">✓</span>
              <span>Links personalizados com nome do cliente</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <FreeTrialButton
            variant="secondary"
            size="large"
            className="w-full bg-[#F9A826] hover:bg-[#e6961f] text-black font-bold shadow-lg transform hover:scale-105 transition-all duration-200 text-sm md:text-base py-3 md:py-4"
            source="black_november_pricing_card"
          >
            🚀 Aproveitar Oferta Black November
          </FreeTrialButton>
          
          <p className="text-[10px] md:text-xs text-gray-400 mt-2 md:mt-3">
            Teste grátis por 3 dias • Sem cartão de crédito
          </p>
        </div>
      </div>
    </div>
  );
}