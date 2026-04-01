import { useCallback } from 'react';

declare global {
  interface Window {
    fbq: (action: string, event: string, parameters?: Record<string, unknown>) => void;
  }
}

function pixelTrack(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}

function pixelCustom(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }
}

export function useFacebookPixel() {
  // ── Evento genérico ─────────────────────────────────────────
  const trackCustom = useCallback((nome: string, params?: Record<string, unknown>) => {
    pixelCustom(nome, { ...params, timestamp: new Date().toISOString() });
  }, []);

  // ── Modal de lead ───────────────────────────────────────────
  const trackAbriuModal = useCallback((origem?: string) => {
    pixelCustom('AbriuModalTesteGratis', {
      origem: origem || 'desconhecido',
      timestamp: new Date().toISOString(),
    });
  }, []);

  const trackPreencheuNome = useCallback(() => {
    pixelCustom('PreencheuNome', { timestamp: new Date().toISOString() });
  }, []);

  const trackPreencheuTelefone = useCallback(() => {
    pixelCustom('PreencheuTelefone', { timestamp: new Date().toISOString() });
  }, []);

  const trackEnviouLead = useCallback((dados?: { nome?: string; telefone?: string }) => {
    pixelTrack('Lead', {
      content_name: 'Teste Gratis ImobDeal',
      content_category: 'Free Trial',
      value: 0,
      currency: 'BRL',
    });
    pixelCustom('EnviouLeadTesteGratis', {
      nome: dados?.nome,
      telefone: dados?.telefone,
      timestamp: new Date().toISOString(),
    });
  }, []);

  const trackRedirecionouCadastro = useCallback(() => {
    pixelCustom('RedirecionouParaCadastro', {
      timestamp: new Date().toISOString(),
    });
  }, []);

  const trackFechouModal = useCallback(() => {
    pixelCustom('FechouModalSemConverter', {
      timestamp: new Date().toISOString(),
    });
  }, []);

  // ── Contato WhatsApp ────────────────────────────────────────
  const trackClicouWhatsApp = useCallback((origem?: string) => {
    pixelTrack('Contact', {
      content_name: 'WhatsApp',
      content_category: 'Contato',
    });
    pixelCustom('ClicouWhatsApp', {
      origem: origem || 'desconhecido',
      timestamp: new Date().toISOString(),
    });
  }, []);

  // ── Demo / vídeo ────────────────────────────────────────────
  const trackAssistiuDemo = useCallback(() => {
    pixelTrack('ViewContent', {
      content_name: 'Demo ImobDeal',
      content_category: 'Demo',
      content_type: 'video',
    });
    pixelCustom('AssistiuDemo', { timestamp: new Date().toISOString() });
  }, []);

  // ── Navegação / engajamento ─────────────────────────────────
  const trackViuPrecos = useCallback(() => {
    pixelTrack('ViewContent', {
      content_name: 'Pagina de Precos',
      content_category: 'Pricing',
      content_type: 'page',
    });
    pixelCustom('ViuPrecos', { timestamp: new Date().toISOString() });
  }, []);

  const trackClicouFuncionalidade = useCallback((funcionalidade: string) => {
    pixelCustom('ClicouFuncionalidade', {
      funcionalidade,
      timestamp: new Date().toISOString(),
    });
  }, []);

  const trackScrollouAteSecao = useCallback((secao: string) => {
    pixelCustom('ScrollouAteSecao', {
      secao,
      timestamp: new Date().toISOString(),
    });
  }, []);

  // ── Advanced matching ───────────────────────────────────────
  const atualizarDadosUsuario = useCallback((dados: {
    nome?: string;
    telefone?: string;
    email?: string;
  }) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', '1253769810303729', {
        external_id: dados.email || 'imobdeal_visitor',
        em: dados.email || 'auto',
        ph: dados.telefone || 'auto',
        fn: dados.nome || undefined,
        country: 'br',
      });
    }
  }, []);

  return {
    trackCustom,
    trackAbriuModal,
    trackPreencheuNome,
    trackPreencheuTelefone,
    trackEnviouLead,
    trackRedirecionouCadastro,
    trackFechouModal,
    trackClicouWhatsApp,
    trackAssistiuDemo,
    trackViuPrecos,
    trackClicouFuncionalidade,
    trackScrollouAteSecao,
    atualizarDadosUsuario,
  };
}

export default useFacebookPixel;
