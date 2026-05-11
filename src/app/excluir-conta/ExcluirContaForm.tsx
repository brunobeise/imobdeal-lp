"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ExcluirContaForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [motivo, setMotivo] = useState("");
  const [confirmacao, setConfirmacao] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirmacao) return;
    setStatus("submitting");

    // TODO: integrar com endpoint real de solicitação de exclusão
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Solicitação enviada com sucesso
            </h3>
            <p className="text-green-900/90 mb-2">
              Recebemos seu pedido de exclusão da conta vinculada ao e-mail{" "}
              <strong>{email}</strong>. Em até <strong>2 dias úteis</strong>{" "}
              você receberá um e-mail de confirmação para validar a identidade
              e iniciar o processo.
            </p>
            <p className="text-green-900/90 text-sm">
              A exclusão definitiva da conta e dos dados pessoais ocorre em até
              30 dias após a confirmação, conforme a LGPD. Se não receber o
              e-mail de confirmação, verifique sua caixa de spam ou escreva para{" "}
              <a
                href="mailto:privacidade@imobdeal.com.br"
                className="underline font-medium"
              >
                privacidade@imobdeal.com.br
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-bold text-primary mb-1">
        Formulário de solicitação
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Use o mesmo e-mail cadastrado no aplicativo para que possamos validar
        sua identidade.
      </p>

      <div>
        <label
          htmlFor="nome"
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          Nome completo <span className="text-red-600">*</span>
        </label>
        <input
          id="nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          autoComplete="name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          E-mail cadastrado na conta <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <p className="text-xs text-gray-500 mt-1">
          Use exatamente o e-mail com o qual você acessa o app.
        </p>
      </div>

      <div>
        <label
          htmlFor="telefone"
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          Telefone (opcional)
        </label>
        <input
          id="telefone"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="motivo"
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          Motivo da exclusão (opcional)
        </label>
        <textarea
          id="motivo"
          rows={4}
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          placeholder="Conte rapidamente o que motivou a decisão. Isso nos ajuda a melhorar o produto."
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        />
      </div>

      <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={confirmacao}
            onChange={(e) => setConfirmacao(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-amber-900">
            Estou ciente de que a exclusão é{" "}
            <strong>irreversível</strong> e que minha conta, juntamente com os
            dados pessoais associados, será removida em até 30 dias após a
            confirmação. Confirmo que sou o titular do e-mail informado.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || !confirmacao}
        className="w-full md:w-auto bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {status === "submitting"
          ? "Enviando solicitação..."
          : "Solicitar exclusão da conta"}
      </button>
    </form>
  );
}
