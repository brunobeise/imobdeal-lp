import HeroBackground from "./HeroBackground";
import LightboxImage from "./LightboxImage";

/* ---------------------------------------------------------------------------
 * Central Operacional (modo Live) — o painel que fica no telão da imobiliária.
 * Alterna sozinho entre Pulso, Arena e Pipeline.
 * --------------------------------------------------------------------------- */

const destaques = [
  {
    titulo: "Ritmo, não só resultado",
    texto:
      "O painel compara o realizado com o dia do mês e avisa quando a equipe está abaixo do ritmo para bater a meta, enquanto ainda dá tempo de reagir.",
  },
  {
    titulo: "Conversão etapa por etapa",
    texto:
      "Quantos negócios avançam de atendimento para agendamento, de visita para proposta. Cada etapa com a meta ao lado do número real.",
  },
  {
    titulo: "Venda fechada vira evento",
    texto:
      "As últimas vendas aparecem com o corretor e o valor. O time inteiro vê no mesmo segundo, sem ninguém precisar avisar no grupo.",
  },
];

export default function TvMode() {
  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      {/* Mesmo fundo animado do hero */}
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.12] text-balance">
            A operação inteira da sua imobiliária,
            <span className="block text-accent-amber">
              ao vivo na parede do escritório.
            </span>
          </h2>
          <p className="text-white/65 text-base md:text-lg mt-5 leading-relaxed">
            Uma tela para deixar rodando no telão, com a marca da sua
            imobiliária. Pipeline ao vivo, meta do mês, conversão entre etapas e
            as últimas vendas, alternando sozinha entre Pulso, Arena e Pipeline,
            o dia inteiro.
          </p>
        </div>

        {/* Painel real */}
        <div className="mt-12">
          <LightboxImage
            src="/screenshots/central-live.webp"
            alt="Central Operacional do ImobDeal em modo Live: pipeline ao vivo por etapa, meta de VGV do mês, conversão entre etapas e últimas vendas realizadas"
            aspect="1912 / 914"
            sizes="(min-width: 1024px) 90vw, 100vw"
            objectPosition="object-center"
          />
        </div>

        {/* Destaques */}
        <div className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-8">
          {destaques.map((d) => (
            <div key={d.titulo}>
              <h3 className="text-white font-bold text-base">{d.titulo}</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                {d.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
