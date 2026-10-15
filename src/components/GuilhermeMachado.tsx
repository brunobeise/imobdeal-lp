import Image from "next/image";

/* ---------------------------------------------------------------------------
 * CRM oficial do Guilherme Machado.
 * Vem logo depois do DashboardShowcase de propósito: a história é a mesma
 * (o número que saía de planilha passa a sair do CRM), agora com o rosto de
 * quem o gestor já conhece. Na mentoria dele os indicadores vinham de uma
 * planilha preenchida à mão que alimentava um BI; o ImobDeal substitui isso.
 *
 * A copy fala do que o gestor ganha, não da sociedade. O vínculo aparece só
 * na legenda da foto: endosso de quem tem participação precisa ser
 * identificável, mas não é o argumento da section.
 *
 * Os números de `credenciais` vieram de fontes públicas (bio de palestrante e
 * perfis de terceiros). Confirmar com o próprio Guilherme antes de publicar.
 * --------------------------------------------------------------------------- */

const credenciais = [
  {
    valor: "20+ anos",
    texto: "de mercado imobiliário, de corretor a sócio de imobiliária",
  },
  {
    valor: "1 milhão+",
    texto: "de seguidores somando as redes sociais",
  },
  {
    valor: "Quebre as Regras",
    texto: "criador do método e do instituto que forma corretores e gestores",
  },
];

export default function GuilhermeMachado() {
  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      {/* Brilho laranja: puxa a cor da foto para dentro da section */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-accent-orange/20 blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[minmax(0,400px)_1fr] gap-10 lg:gap-16 items-stretch">
        {/* Foto: no desktop estica até a altura do texto, cortando as laterais */}
        <figure className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-none lg:h-full mx-auto">
          <div className="relative aspect-square lg:aspect-auto lg:h-full rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/40">
            <Image
              src="/guilherme-machado.webp"
              alt="Guilherme Machado, criador do Quebre as Regras e sócio do ImobDeal"
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 384px, 280px"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pt-14 pb-4">
              <p className="text-white font-bold text-base leading-tight">
                Guilherme Machado
              </p>
              <p className="text-white/70 text-xs mt-1">
                Criador do Quebre as Regras e sócio do ImobDeal
              </p>
            </figcaption>
          </div>
        </figure>

        {/* Texto */}
        <div>
          <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
            CRM oficial
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.12] text-balance">
            O CRM oficial do Guilherme Machado.
            <span className="block text-accent-amber">
              Os números da metodologia QR, prontos em tempo real.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-white/65">
            <p>
              Quem faz mentoria com o Guilherme sabe: a conversa começa pelos
              indicadores da imobiliária. Até pouco tempo, cada gestor montava
              esses números em uma planilha, na mão, para alimentar um BI.
            </p>
            <p className="text-white/85 font-medium">
              No ImobDeal eles saem direto do CRM que a equipe já usa. Sem
              planilha, sem BI paralelo e sem esperar o mês fechar para
              descobrir onde a venda travou.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-x-8 gap-y-6">
            {credenciais.map((c) => (
              <div key={c.valor} className="border-t border-white/15 pt-4">
                <p className="text-white font-bold text-lg leading-tight">
                  {c.valor}
                </p>
                <p className="text-white/55 text-sm mt-1.5 leading-relaxed">
                  {c.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
