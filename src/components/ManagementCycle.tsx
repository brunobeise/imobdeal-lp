/* ---------------------------------------------------------------------------
 * O ciclo de gestão comercial — módulos reais do produto encadeados:
 * meta → plano de ação → KPI de atividade → mapa de objeções → resultado.
 * É o que separa o ImobDeal de um CRM que só guarda dado.
 * --------------------------------------------------------------------------- */

const etapas = [
  {
    titulo: "Você define a meta",
    texto:
      "Meta de vendas, de VGV e taxa de conversão esperada em cada etapa do funil. A meta deixa de ser um número no quadro e passa a ser um parâmetro do sistema.",
  },
  {
    titulo: "O sistema cobra o plano de ação",
    texto:
      "Cada meta tem um plano com ações e indicadores. O ImobDeal acompanha previsto contra realizado e mostra o percentual de avanço sem ninguém precisar perguntar.",
  },
  {
    titulo: "Cada corretor tem os próprios números",
    texto:
      "Metas de atividade por pessoa (ligações, reuniões e visitas), além do resultado. O corretor enxerga o próprio painel; você enxerga o de todos.",
  },
  {
    titulo: "O que trava o negócio vira pauta",
    texto:
      "O mapa de objeções registra por que os negócios empacam. O corretor responde com o plano dele, você aprova ou devolve. Vira rotina de gestão, não conversa de corredor.",
  },
  {
    titulo: "E tudo volta como número",
    texto:
      "Ciclo médio de venda, negócios parados, tempo até o primeiro contato com o lead, conversão por etapa. Os mesmos dados que a equipe alimenta viram a sua leitura da operação.",
  },
];

export default function ManagementCycle() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight leading-[1.15] text-balance">
            Um CRM guarda o que aconteceu.
            <span className="block text-primary">
              O ImobDeal conduz o que vai acontecer.
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed max-w-md">
            A diferença entre registrar a operação e gerenciar a operação está
            neste ciclo. É por ele que uma imobiliária troca um CRM genérico
            pelo ImobDeal.
          </p>
        </div>

        <ol className="relative">
          {/* Espinha */}
          <span
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-gray-200 to-primary/40"
            aria-hidden="true"
          />

          {etapas.map((etapa, i) => (
            <li key={i} className="relative pl-10 pb-10 last:pb-0">
              {/* Marcador */}
              <span
                className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-white bg-primary ring-1 ring-primary/25"
                aria-hidden="true"
              />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                {etapa.titulo}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed max-w-2xl">
                {etapa.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
