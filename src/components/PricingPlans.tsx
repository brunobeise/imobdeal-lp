"use client";

import { MdCheck } from "react-icons/md";
import { useLeadModal } from "@/contexts/LeadModalContext";

/* ---------------------------------------------------------------------------
 * Preço para venda assistida, não PLG.
 * Um valor de entrada que ancora e qualifica; o número fechado sai na
 * conversa, porque depende do tamanho da equipe e dos módulos. Sem tabela de
 * usuário adicional, sem custo variável no rodapé: a conta é do comercial,
 * não do visitante.
 * --------------------------------------------------------------------------- */

const inclusos = [
  "CRM completo, do lead ao contrato assinado",
  "Roleta de leads e integração com os portais",
  "Integração nativa com Meta Ads",
  "Dashboards, forecast e metas da equipe",
  "Central Operacional para o telão do escritório",
  "Aplicativo nativo iOS e Android",
  "Propostas, portfólios e gestão de documentos",
  "Implantação, migração da base e treinamento",
];

export default function PricingPlans() {
  const { open: openLeadModal } = useLeadModal();

  return (
    <section id="precos" className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight text-balance">
            Um plano só, no tamanho da sua operação.
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto text-pretty">
            Sem edição básica, sem recurso bloqueado por plano. O que muda é o
            tamanho da equipe e os módulos que a sua imobiliária usa.
          </p>
        </div>

        {/* Duas colunas: o que você recebe à esquerda, a conversa comercial
            à direita. O preço não disputa espaço com a lista. */}
        <div className="max-w-4xl mx-auto rounded-2xl border-2 border-primary bg-white shadow-xl shadow-primary/8 ring-1 ring-primary/10 overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Escopo. No mobile vem depois do preço: quem rola no celular
                precisa do valor antes da lista, não depois de oito itens. */}
            <div className="order-2 lg:order-1 lg:col-span-3 p-8 md:p-10">
              <h3 className="text-xl font-bold text-gray-900">Imobiliária</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                A operação inteira da sua imobiliária em um único sistema.
              </p>

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-4">
                Vem tudo dentro
              </p>
              <ul className="space-y-3">
                {inclusos.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <MdCheck
                      className="text-primary mt-0.5 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comercial */}
            <div className="order-1 lg:order-2 lg:col-span-2 bg-surface border-b lg:border-b-0 lg:border-l border-gray-200 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-sm font-semibold text-gray-400">a partir de</p>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  R$ 569
                </span>
                <span className="text-gray-400 font-medium">/mês</span>
              </div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                O valor exato depende do número de usuários e dos módulos
                ativos. O especialista fecha isso com você na conversa.
              </p>

              <button
                onClick={openLeadModal}
                className="mt-7 w-full text-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-200 cursor-pointer"
              >
                Falar com especialista
              </button>

              {/* O site é projeto, não item de plano — evita a expectativa
                  errada de que entra na mensalidade. */}
              <p className="mt-7 pt-6 border-t border-gray-200 text-xs text-gray-500 leading-relaxed">
                O site sob medida é um projeto à parte: cobrado uma vez,
                parcelável, e sem acréscimo na mensalidade de quem já é cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
