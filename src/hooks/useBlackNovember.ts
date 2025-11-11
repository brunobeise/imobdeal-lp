"use client";

import { useState, useEffect } from "react";

export function useBlackNovember() {
  const [isBlackNovember, setIsBlackNovember] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const checkDate = () => {
      const now = new Date();
      const currentMonth = now.getMonth(); // 0 = Janeiro, 10 = Novembro
      
      // Verifica se estamos em novembro (mês 10)
      const isNovember = currentMonth === 10;
      setIsBlackNovember(isNovember);

      if (isNovember) {
        // Calcula o tempo restante até o final de novembro
        const endOfNovember = new Date(now.getFullYear(), 10, 30, 23, 59, 59); // 30 de novembro 23:59:59
        const diff = endOfNovember.getTime() - now.getTime();

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }
    };

    checkDate();
    
    // Atualiza a cada segundo se estamos em novembro
    let interval: NodeJS.Timeout | null = null;
    if (isBlackNovember) {
      interval = setInterval(checkDate, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBlackNovember]);

  return { 
    isBlackNovember, 
    timeLeft,
    originalPrice: "R$ 260,00",
    blackNovemberPrice: "R$ 182,00",
    discount: "30% OFF"
  };
}