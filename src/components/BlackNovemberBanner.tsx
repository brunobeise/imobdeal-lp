"use client";

import { useBlackNovember } from "@/hooks/useBlackNovember";

export default function BlackNovemberBanner() {
  const { isBlackNovember, timeLeft, discount } = useBlackNovember();

  if (!isBlackNovember) return null;

  const scrollToBlackNovemberCard = () => {
    const element = document.getElementById('black-november-card');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  return (
    <div 
      className="bg-black text-white py-2 md:py-3 px-2 md:px-4 overflow-hidden relative cursor-pointer hover:bg-gray-900 transition-colors duration-200"
      onClick={scrollToBlackNovemberCard}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-1 md:gap-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-1 md:gap-2">
            <span className="text-[#F9A826] font-bold text-sm md:text-xl">🔥 BLACK NOVEMBER</span>
            <span className="bg-[#F9A826] text-black px-2 md:px-3 py-0.5 md:py-1 rounded-full font-bold text-xs md:text-base">
              {discount}
            </span>
          </div>
          
          <div className="text-xs md:text-base">
            <span className="text-gray-300">Plano Trimestral • Oferta termina em:</span>
          </div>
          
          <div className="flex gap-1 md:gap-3 text-center">
            <div className="bg-[#F9A826] text-black px-1 md:px-2 py-0.5 md:py-1 rounded font-bold min-w-[35px] md:min-w-[45px] text-xs md:text-base">
              <div className="text-sm md:text-xl font-bold">{timeLeft.days}</div>
              <div className="text-[8px] md:text-xs">DIAS</div>
            </div>
            <div className="text-[#F9A826] text-sm md:text-2xl self-center">:</div>
            <div className="bg-[#F9A826] text-black px-1 md:px-2 py-0.5 md:py-1 rounded font-bold min-w-[35px] md:min-w-[45px] text-xs md:text-base">
              <div className="text-sm md:text-xl font-bold">{timeLeft.hours}</div>
              <div className="text-[8px] md:text-xs">HORAS</div>
            </div>
            <div className="text-[#F9A826] text-sm md:text-2xl self-center">:</div>
            <div className="bg-[#F9A826] text-black px-1 md:px-2 py-0.5 md:py-1 rounded font-bold min-w-[35px] md:min-w-[45px] text-xs md:text-base">
              <div className="text-sm md:text-xl font-bold">{timeLeft.minutes}</div>
              <div className="text-[8px] md:text-xs">MIN</div>
            </div>
            <div className="text-[#F9A826] text-sm md:text-2xl self-center">:</div>
            <div className="bg-[#F9A826] text-black px-1 md:px-2 py-0.5 md:py-1 rounded font-bold min-w-[35px] md:min-w-[45px] text-xs md:text-base">
              <div className="text-sm md:text-xl font-bold">{timeLeft.seconds}</div>
              <div className="text-[8px] md:text-xs">SEG</div>
            </div>
          </div>
          
          {/* Indicativo clicável */}
          <div className="hidden md:flex items-center gap-2 text-xs text-[#F9A826]">
            <span>Clique para ver a oferta</span>
            <span className="animate-bounce">👇</span>
          </div>
        </div>
      </div>
      
      {/* Efeito de brilho animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F9A826]/10 to-transparent transform -skew-x-12 animate-pulse"></div>
    </div>
  );
}