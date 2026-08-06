import { MdBolt, MdHistory, MdGroups, MdRule } from "react-icons/md";
import { FaMeta } from "react-icons/fa6";
import LightboxImage from "./LightboxImage";

/* ---------------------------------------------------------------------------
 * Roleta de leads — argumento central de compra.
 * A imobiliária normalmente assina o C2S, um sistema separado, só para receber
 * e rodiziar os leads dos portais. O ImobDeal faz isso nativamente, então o
 * cliente elimina essa assinatura ao migrar.
 *
 * O concorrente é citado pelo nome de propósito: publicidade comparativa é
 * lícita (art. 32 do Código do CONAR) desde que objetiva, comprovável e sem
 * depreciar a marca alheia. Daí as três regras deste arquivo:
 *   1. nenhum adjetivo sobre o C2S — só o fato de ser assinatura à parte;
 *   2. nenhum preço nem valor de economia, nosso ou deles;
 *   3. nada sobre o que o produto deles faz ou deixa de fazer.
 * Nomear também é decisão de AEO: é assim que a busca por "alternativa ao C2S"
 * encontra o ImobDeal.
 * --------------------------------------------------------------------------- */

const capabilities = [
  {
    icon: <MdRule size={20} />,
    title: "Rodízio automático",
    description:
      "O lead entra e já cai no corretor certo, seguindo a ordem que você definiu. Sem repasse manual.",
  },
  {
    icon: <MdGroups size={20} />,
    title: "Regras por equipe",
    description:
      "Distribua por equipe, plantão, tipo de imóvel ou região. Cada operação tem sua própria lógica.",
  },
  {
    icon: <MdBolt size={20} />,
    title: "Resposta em minutos",
    description:
      "O corretor é avisado na hora em que o lead chega. Você vê quem respondeu e quem deixou esfriar.",
  },
  {
    icon: <MdHistory size={20} />,
    title: "Origem registrada",
    description:
      "Cada lead guarda de onde veio: portal, campanha no Meta, site. No fim do mês você sabe qual canal realmente dá retorno.",
  },
];

export default function LeadRoulette() {
  return (
    <section className="bg-surface-light py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
            Roleta de leads nativa
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-[1.15] text-balance">
            O ImobDeal tem roleta de leads.
            <span className="block text-primary">
              Você não precisa mais assinar o C2S.
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-5 leading-relaxed text-pretty">
            O ImobDeal recebe os leads dos portais e das campanhas, distribui
            entre os corretores pela regra que você definir e registra a origem
            de cada um, tudo dentro do próprio CRM. A maioria das imobiliárias
            paga uma assinatura à parte, quase sempre o C2S, só para fazer isso.
            Aqui a roleta já vem incluída no plano.
          </p>
        </div>

        {/* Antes x depois do fluxo */}
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Hoje */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Como funciona hoje
            </p>
            <ol className="space-y-4">
              {[
                { step: "Portal ou campanha no Meta", note: "o lead chega" },
                {
                  step: "C2S",
                  note: "assinatura separada, fora do CRM",
                  highlight: true,
                },
                { step: "Planilha ou grupo de mensagem", note: "repasse manual" },
                { step: "CRM", note: "cadastro de novo, na mão" },
              ].map((item, i, arr) => (
                <li key={i}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        item.highlight
                          ? "bg-red-50 text-red-600 ring-1 ring-red-200"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          item.highlight ? "text-red-600" : "text-gray-700"
                        }`}
                      >
                        {item.step}
                      </p>
                      <p className="text-xs text-gray-400">{item.note}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="ml-3.5 h-4 w-px bg-gray-200 mt-2" />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Com o ImobDeal */}
          <div className="rounded-2xl border-2 border-primary bg-white p-8 shadow-xl shadow-primary/8">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">
              Com o ImobDeal
            </p>
            <ol className="space-y-4">
              {[
                { step: "Portal ou campanha no Meta", note: "o lead chega" },
                {
                  step: "Roleta do ImobDeal",
                  note: "recebe, distribui e registra a origem, dentro do CRM",
                  highlight: true,
                },
                { step: "Corretor da vez", note: "já com o negócio criado" },
              ].map((item, i, arr) => (
                <li key={i}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        item.highlight
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          item.highlight ? "text-primary" : "text-gray-700"
                        }`}
                      >
                        {item.step}
                      </p>
                      <p className="text-xs text-gray-400">{item.note}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="ml-3.5 h-4 w-px bg-primary/20 mt-2" />
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-xl bg-primary/5 border border-primary/10 p-4">
              <p className="text-sm text-primary font-semibold">
                A roleta já vem no plano.
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Ao migrar, a imobiliária cancela o C2S: receber e distribuir
                lead faz parte do ImobDeal, junto com o CRM que a equipe usa
                todo dia. É uma assinatura a menos na conta todo mês.
              </p>
            </div>
          </div>
        </div>

        {/* Meta Ads — o lead da campanha entra sem passar por planilha */}
        <div className="mt-6 rounded-2xl bg-primary p-8 md:p-10 overflow-hidden relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#0866FF]/25 blur-[90px]"
          />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/80 mb-5">
                <FaMeta size={14} className="text-[#4a9bff]" />
                Integração nativa com Meta Ads
              </span>
              <h3 className="text-2xl md:text-[1.75rem] font-bold text-white tracking-tight leading-[1.2] text-balance">
                O lead da sua campanha no Facebook e Instagram cai direto no CRM.
              </h3>
              <p className="text-white/60 text-sm md:text-base mt-4 leading-relaxed">
                Conecte a conta uma vez e todo formulário preenchido na campanha
                entra no ImobDeal em segundos, já distribuído pela roleta e com
                a origem registrada. Sem planilha, sem automação no meio, sem
                ninguém digitando lead na mão.
              </p>
            </div>

            {/* Fluxo do lead pago */}
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6">
              <ol className="space-y-3.5">
                {[
                  { step: "Lead preenche o formulário na campanha", meta: true },
                  { step: "Entra no ImobDeal na hora" },
                  { step: "Roleta manda para o corretor da vez" },
                  { step: "Campanha fica registrada no negócio" },
                ].map((item, i, arr) => (
                  <li key={i}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          item.meta
                            ? "bg-[#0866FF] text-white"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {item.meta ? <FaMeta size={13} /> : i + 1}
                      </span>
                      <p className="text-sm font-medium text-white/85">
                        {item.step}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="ml-3.5 h-3 w-px bg-white/15 mt-1.5" />
                    )}
                  </li>
                ))}
              </ol>
              <p className="text-xs text-white/40 mt-6 leading-relaxed">
                No fim do mês você compara quanto cada campanha custou com quanto
                ela realmente fechou.
              </p>
            </div>
          </div>
        </div>

        {/* Print da tela de leads + capacidades, dividindo o espaço */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <LightboxImage
            src="/screenshots/leads-roleta.webp"
            alt="Tela de leads do ImobDeal: origem, canal de atração, corretor da vez, status do negócio e configuração das roletas"
            aspect="1912 / 965"
            sizes="(min-width: 1024px) 45vw, 100vw"
            objectPosition="object-top"
          />

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-8">
              O que a roleta do ImobDeal faz
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {capabilities.map((cap, i) => (
                <div key={i}>
                  <span className="text-primary">{cap.icon}</span>
                  <p className="text-gray-900 font-bold text-sm mt-2.5">
                    {cap.title}
                  </p>
                  <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
