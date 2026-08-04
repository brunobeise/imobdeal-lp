import HeroBackground from "./HeroBackground";

/* ---------------------------------------------------------------------------
 * Gente por trás do sistema.
 * O argumento que a concorrência não copia: o que segura a imobiliária não é
 * a funcionalidade, é o time. A prova (depoimentos e clientes) vem na section
 * seguinte, em fundo claro.
 * --------------------------------------------------------------------------- */

const pilares = [
  {
    titulo: "Atendimento com quem desenvolve",
    texto:
      "Sem fila de chamado e sem script. Você fala com quem construiu o sistema e conhece o mercado imobiliário.",
  },
  {
    titulo: "Roadmap construído com clientes",
    texto:
      "Boa parte do que o ImobDeal faz hoje nasceu do pedido de uma imobiliária. Você ajuda a decidir para onde o produto vai.",
  },
  {
    titulo: "Implantação conduzida por nós",
    texto:
      "Migração da base, configuração do funil e treinamento da equipe até a operação rodar por conta própria.",
  },
];

export default function PeopleBehind() {
  return (
    <section className="relative bg-primary py-20 md:py-24 overflow-hidden">
      {/* Mesmo fundo animado do hero */}
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.12] text-balance">
            Nenhuma imobiliária fica anos em um sistema
            <span className="block text-accent-amber">
              só porque o sistema é bom.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-white/65">
            <p>
              Fica porque tem com quem contar. Software se copia. O que não se
              copia é uma equipe que conhece a sua operação e responde quando
              você precisa.
            </p>
            <p className="text-white/85 font-medium">
              Contratar o ImobDeal não é assinar um software. É passar a ter um
              time do seu lado.
            </p>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-10">
          {pilares.map((p) => (
            <div key={p.titulo} className="border-t border-white/15 pt-5">
              <h3 className="text-white font-bold text-base">{p.titulo}</h3>
              <p className="text-white/60 text-sm mt-2.5 leading-relaxed">
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
