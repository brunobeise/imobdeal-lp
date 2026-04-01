"use client";

import { useState, useEffect } from "react";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { InputMask } from "@react-input/mask";
import { HiX } from "react-icons/hi";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [nameTracked, setNameTracked] = useState(false);
  const [phoneTracked, setPhoneTracked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      trackAbriuModal();
      setName("");
      setPhone("");
      setNameTracked(false);
      setPhoneTracked(false);
      setError("");
    }
  }, [isOpen, trackAbriuModal]);

  if (!isOpen) return null;

  const cleanPhone = phone.replace(/\D/g, "");
  const isValid = name.trim().length >= 2 && cleanPhone.length >= 10;

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
          }),
        }
      );
    } catch {
      // Não bloqueia o redirect se o webhook falhar
    }

    // Evento: redirecionou para cadastro
    trackRedirecionouCadastro();

    const params = new URLSearchParams({
      nome: nomeFinal,
      telefone: telefoneFinal,
    });

    window.location.href = `https://app.imobdeal.com.br/cadastro?${params.toString()}`;
    setLoading(false);
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
            Comece seu teste grátis
          </h2>
          <p className="text-primary/70 text-sm mt-1">
            7 dias grátis, sem cartão de crédito.
          </p>
        </div>

        {/* Form */}
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

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={!isValid || loading}
            className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecionando..." : "Começar Teste Grátis"}
          </button>

          <p className="text-center text-xs text-gray-400">
            Setup em 5 minutos · Cancele quando quiser
          </p>
        </form>
      </div>
    </div>
  );
}
