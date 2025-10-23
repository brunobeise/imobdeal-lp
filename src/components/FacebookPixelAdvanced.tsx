"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: (action: string, pixelId: string, parameters?: Record<string, unknown>) => void;
  }
}

export default function FacebookPixelAdvanced() {
  useEffect(() => {
    // Função para capturar dados do usuário de forma automática
    const initAdvancedMatching = () => {
      if (typeof window !== 'undefined' && window.fbq) {
        // Verifica se há dados salvos no localStorage (formulários preenchidos anteriormente)
        const savedUserData = localStorage.getItem('imobdeal_user_data');
        
        if (savedUserData) {
          try {
            const userData = JSON.parse(savedUserData);
            
            // Reinicializa o pixel com dados avançados se disponíveis
            window.fbq('init', '1253769810303729', {
              external_id: userData.external_id || 'imobdeal_visitor',
              em: userData.email || 'auto',
              ph: userData.phone || 'auto',
              fn: userData.firstName || undefined,
              ln: userData.lastName || undefined,
              ct: userData.city || undefined,
              st: userData.state || undefined,
              country: 'br'
            });
          } catch (error) {
            console.log('Dados de usuário inválidos no localStorage');
          }
        }
      }
    };

    // Executa após o pixel ser carregado
    const timer = setTimeout(initAdvancedMatching, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null; // Componente não renderiza nada visível
}

// Função utilitária para salvar dados do usuário
export const saveUserDataForPixel = (userData: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
}) => {
  if (typeof window !== 'undefined') {
    const dataToSave = {
      ...userData,
      external_id: userData.email || 'imobdeal_visitor',
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('imobdeal_user_data', JSON.stringify(dataToSave));
    
    // Atualiza o pixel imediatamente com os novos dados
    if (window.fbq) {
      window.fbq('init', '1253769810303729', {
        external_id: dataToSave.external_id,
        em: userData.email || 'auto',
        ph: userData.phone || 'auto',
        fn: userData.firstName || undefined,
        ln: userData.lastName || undefined,
        ct: userData.city || undefined,
        st: userData.state || undefined,
        country: 'br'
      });
    }
  }
};