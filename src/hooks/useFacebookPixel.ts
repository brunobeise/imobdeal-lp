// Hook para eventos do Facebook Pixel
import { useCallback } from 'react';

declare global {
  interface Window {
    fbq: (action: string, event: string, parameters?: Record<string, unknown>) => void;
  }
}

export const useFacebookPixel = () => {
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
      console.log(`Facebook Pixel - Evento rastreado: ${eventName}`, parameters);
    }
  }, []);

  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
      console.log(`Facebook Pixel - Evento customizado rastreado: ${eventName}`, parameters);
    }
  }, []);

  // Eventos específicos para o ImobDeal
  const trackStartFreeTrial = useCallback((source?: string) => {
    trackEvent('Lead', {
      content_name: 'Teste Grátis ImobDeal',
      content_category: 'Free Trial',
      source: source || 'unknown',
      value: 0,
      currency: 'BRL'
    });
    
    // Também como evento customizado
    trackCustomEvent('StartFreeTrial', {
      source: source || 'unknown',
      timestamp: new Date().toISOString()
    });
  }, [trackEvent, trackCustomEvent]);

  const trackViewPricing = useCallback(() => {
    trackEvent('ViewContent', {
      content_name: 'Página de Preços',
      content_category: 'Pricing',
      content_type: 'page'
    });
  }, [trackEvent]);

  const trackWatchDemo = useCallback(() => {
    trackEvent('ViewContent', {
      content_name: 'Demo ImobDeal',
      content_category: 'Demo',
      content_type: 'video'
    });
  }, [trackEvent]);

  const trackWhatsAppContact = useCallback(() => {
    trackEvent('Contact', {
      content_name: 'WhatsApp Contact',
      content_category: 'Support'
    });
  }, [trackEvent]);

  const trackCompleteRegistration = useCallback((method: string = 'email') => {
    trackEvent('CompleteRegistration', {
      content_name: 'Cadastro ImobDeal',
      registration_method: method
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackCustomEvent,
    trackStartFreeTrial,
    trackViewPricing,
    trackWatchDemo,
    trackWhatsAppContact,
    trackCompleteRegistration
  };
};

export default useFacebookPixel;
