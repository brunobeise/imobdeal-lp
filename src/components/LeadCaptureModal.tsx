"use client";

import { useState, useEffect } from "react";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { InputMask } from "@react-input/mask";
import { HiX, HiCheck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// ID da conta do Google Ads (já carregado no layout.tsx)
const GOOGLE_ADS_ID = "AW-18077235039";

// Conversão diferente por função escolhida no modal.
// Crie 3 ações de conversão no Google Ads (uma por função) e cole aqui o
// label de cada uma — está no formato "AbC-dEfGhIj" (a parte depois da "/").
// Enquanto o label estiver vazio, nenhuma conversão é disparada para aquela função.
const CONVERSION_LABELS: Record<string, string> = {
  Dono: "jQhsCMDUy7wcEN_u8qtD", // conversão "Contato Dono"
  Gestor: "OyGcCPn94bwcEN_u8qtD", // conversão "Contato Gerente"
  Corretor: "76hICLKL5bwcEN_u8qtD", // conversão "Contato Corretor"
};

// Dispara a conversão do Google Ads correspondente à função e só então
// executa o callback (redirect). Usa event_callback para garantir que o
// evento seja enviado antes de sair da página, com fallback por timeout.
function dispararConversaoGoogle(funcao: string, callback: () => void) {
  const label = CONVERSION_LABELS[funcao];
  let executou = false;
  const seguir = () => {
    if (executou) return;
    executou = true;
    callback();
  };

  if (typeof window !== "undefined" && window.gtag && label) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      event_callback: seguir,
    });
    // Fallback: se o callback não disparar (bloqueador, falha de rede), segue mesmo assim.
    setTimeout(seguir, 1200);
  } else {
    seguir();
  }
}

export default function LeadCaptureModal() {
  const { isOpen, close } = useLeadModal();
  const {
    trackAbriuModal,
    trackPreencheuNome,
    trackPreencheuTelefone,
    trackEnviouLead,
    trackRedirecionouCadastro,
    trackFechouModal,
    atualizarDadosUsuario,
  } = useFacebookPixel();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [funcao, setFuncao] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [nameTracked, setNameTracked] = useState(false);
  const [phoneTracked, setPhoneTracked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      trackAbriuModal();
      setName("");
      setPhone("");
      setFuncao("");
      setNameTracked(false);
      setPhoneTracked(false);
      setError("");
      setSubmitted(false);
    }
  }, [isOpen, trackAbriuModal]);

  if (!isOpen) return null;

  const cleanPhone = phone.replace(/\D/g, "");
  const isValid =
    name.trim().length >= 2 && cleanPhone.length >= 10 && funcao !== "";

  function handleNameBlur() {
    if (name.trim().length >= 2 && !nameTracked) {
      trackPreencheuNome();
      setNameTracked(true);
    }
  }

  function handlePhoneBlur() {
    if (cleanPhone.length >= 10 && !phoneTracked) {
      trackPreencheuTelefone();
      setPhoneTracked(true);
    }
  }

  function handleClose() {
    trackFechouModal();
    close();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setError("");

    const nomeFinal = name.trim();
    const telefoneFinal = `55${cleanPhone}`;

    // Atualiza advanced matching do Pixel
    atualizarDadosUsuario({ nome: nomeFinal, telefone: telefoneFinal });

    // Evento: enviou lead
    trackEnviouLead({ nome: nomeFinal, telefone: telefoneFinal });

    try {
      await fetch(
        "https://api.imobdeal.com.br/api/leads/webhook/7f123c7d-9be5-48ad-8c65-d2349274c644",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: nomeFinal,
            telefone: telefoneFinal,
            funcao,
            tags: [funcao],
          }),
        }
      );
    } catch {
      // Não bloqueia o redirect se o webhook falhar
    }

    trackRedirecionouCadastro();

    // Dispara a conversão do Google Ads específica da função escolhida
    // (Dono / Gestor / Corretor). Venda assistida: o lead fica na LP e o
    // comercial faz o contato — não há mais redirect para o cadastro.
    dispararConversaoGoogle(funcao, () => {
      setSubmitted(true);
      setLoading(false);
    });
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) handleClose();
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
        {/* Header gradient */}
        <div className="bg-gradient-to-r from-accent-yellow via-accent-amber to-accent-orange p-6 pb-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-primary/60 hover:text-primary transition-colors"
            aria-label="Fechar"
          >
            <HiX size={22} />
          </button>
          <h2 className="text-xl font-bold text-primary">
            {submitted ? "Contato recebido!" : "Fale com um especialista"}
          </h2>
          <p className="text-primary/70 text-sm mt-1">
            {submitted
              ? "Já estamos com seus dados aqui."
              : "Uma demonstração com o cenário da sua imobiliária."}
          </p>
        </div>

        {/* Confirmação */}
        {submitted && (
          <div className="p-6 -mt-3 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <HiCheck size={30} className="text-emerald-500" />
            </div>
            <p className="text-gray-900 font-semibold">
              Obrigado, {name.trim().split(" ")[0]}!
            </p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Um especialista do ImobDeal entra em contato pelo seu WhatsApp no
              próximo dia útil para entender sua operação e mostrar o sistema
              funcionando.
            </p>

            <a
              href={`https://wa.me/5551997306897?text=${encodeURIComponent(
                `Olá! Sou ${name.trim()} e acabei de pedir contato pelo site do ImobDeal.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
            >
              <FaWhatsapp size={18} />
              Prefiro falar agora
            </a>

            <button
              type="button"
              onClick={handleClose}
              className="mt-3 w-full py-3 rounded-xl font-semibold text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Voltar para o site
            </button>
          </div>
        )}

        {/* Formulário */}
        {!submitted && (
        <form onSubmit={handleSubmit} className="p-6 space-y-4 -mt-3">
          <div>
            <label
              htmlFor="lead-name"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Seu nome
            </label>
            <input
              id="lead-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleNameBlur}
              placeholder="Como podemos te chamar?"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              autoFocus
            />
          </div>

          <div>
            <label
              htmlFor="lead-phone"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              WhatsApp
            </label>
            <InputMask
              id="lead-phone"
              mask="(__) _____-____"
              replacement={{ _: /\d/ }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={handlePhoneBlur}
              placeholder="(51) 99999-9999"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Hoje você se encontra em qual função dentro do mercado
              imobiliário?
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { value: "Dono", label: "Sou dono de uma imobiliária" },
                { value: "Gestor", label: "Sou gestor de uma imobiliária" },
                { value: "Corretor", label: "Sou corretor" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFuncao(opt.value)}
                  className={`w-full px-4 py-3 border rounded-xl text-sm text-left transition-all ${
                    funcao === opt.value
                      ? "border-primary bg-primary/5 text-primary font-medium ring-2 ring-primary/20"
                      : "border-gray-200 text-gray-700 hover:border-primary/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={!isValid || loading}
            className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Quero falar com um especialista"}
          </button>

          <p className="text-center text-xs text-gray-400">
            Sem compromisso · Seus dados não são compartilhados
          </p>
        </form>
        )}
      </div>
    </div>
  );
}
