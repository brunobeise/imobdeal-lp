import { MdCheck, MdClose, MdRemove } from "react-icons/md";
import type { ReactNode } from "react";

type CellValue = true | false | "partial";

interface ComparisonRow {
  feature: string;
  imobdeal: CellValue;
  crmGenerico: CellValue;
  planilha: CellValue;
  /** Optional emphasis text shown below the feature name */
  emphasis?: string;
}

const rows: ComparisonRow[] = [
  {
    feature: "Dashboard com BI automático",
    imobdeal: true,
    crmGenerico: false,
    planilha: false,
    emphasis: "Sem preencher planilha — os dados vêm direto do CRM.",
  },
  {
    feature: "Forecast de vendas automático",
    imobdeal: true,
    crmGenerico: false,
    planilha: false,
    emphasis: "Projeção de receita sem montar fórmulas no Excel.",
  },
  {
    feature: "Propostas interativas com tracking",
    imobdeal: true,
    crmGenerico: false,
    planilha: false,
    emphasis: "Saiba quando o cliente abriu e quanto tempo ficou em cada seção.",
  },
  {
    feature: "Notificação no WhatsApp em tempo real",
    imobdeal: true,
    crmGenerico: "partial",
    planilha: false,
    emphasis: "Follow-up no momento certo, não no feeling.",
  },
  {
    feature: "Cadastro de imóvel via link com IA",
    imobdeal: true,
    crmGenerico: false,
    planilha: false,
  },
  {
    feature: "Pipeline Kanban de negócios",
    imobdeal: true,
    crmGenerico: "partial",
    planilha: false,
    emphasis: "CRMs genéricos têm Kanban, mas sem forecast integrado.",
  },
  {
    feature: "Ranking e metas por corretor",
    imobdeal: true,
    crmGenerico: "partial",
    planilha: false,
  },
  {
    feature: "Módulo financeiro + DRE",
    imobdeal: true,
    crmGenerico: "partial",
    planilha: false,
    emphasis: "Comissões, contas e fluxo de caixa integrados ao CRM.",
  },
  {
    feature: "Roleta de leads automática",
    imobdeal: true,
    crmGenerico: false,
    planilha: false,
  },
  {
    feature: "Histórico centralizado de interações",
    imobdeal: true,
    crmGenerico: "partial",
    planilha: false,
    emphasis: "CRMs genéricos centralizam, mas sem tracking de propostas.",
  },
  {
    feature: "Site imobiliário integrado ao CRM",
    imobdeal: true,
    crmGenerico: "partial",
    planilha: false,
  },
  {
    feature: "Assinatura eletrônica nativa",
    imobdeal: true,
    crmGenerico: "partial",
    planilha: false,
  },
];

function CellIcon({ value }: { value: CellValue }): ReactNode {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 text-emerald-600">
        <MdCheck size={18} />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-400">
        <MdClose size={18} />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-50 text-amber-500">
      <MdRemove size={18} />
    </span>
  );
}

export default function CompetitorComparison() {
  return (
    <section className="bg-gray-50 py-20 md:pt-28 overflow-x-auto">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
            Comparativo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
            Por que o ImobDeal?
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Compare com o que você usa hoje — seja planilha, WhatsApp ou outro CRM.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-4 px-6 text-sm font-medium text-gray-400">
                    Funcionalidade
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-bold text-primary w-[120px]">
                    <span className="relative">
                      ImobDeal
                      <span className="absolute -top-1 -right-4 w-2 h-2 rounded-full bg-accent-amber" />
                    </span>
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-medium text-gray-400 w-[120px]">
                    CRM Genérico
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-medium text-gray-400 w-[120px]">
                    Planilha + WhatsApp
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-50 last:border-b-0 ${
                      i % 2 === 1 ? "bg-gray-50/50" : ""
                    }`}
                  >
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-700 font-medium">
                        {row.feature}
                      </span>
                      {row.emphasis && (
                        <span className="block text-xs text-gray-400 mt-0.5">
                          {row.emphasis}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/[0.03]">
                      <CellIcon value={row.imobdeal} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CellIcon value={row.crmGenerico} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CellIcon value={row.planilha} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Callout box — key pain point */}
        <div className="mt-8 rounded-xl border border-amber-200/60 bg-amber-50/60 p-5 text-center">
          <p className="text-sm text-gray-700 font-medium">
            💡 A realidade de quem usa planilha + WhatsApp:{" "}
            <span className="text-primary font-bold">
              dados espalhados, sem visibilidade de pipeline, e follow-ups no feeling.
            </span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            O ImobDeal centraliza tudo em um só lugar — com dashboards, forecast e relatórios automáticos.
          </p>
        </div>
      </div>
    </section>
  );
}
