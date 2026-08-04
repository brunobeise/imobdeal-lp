import Image from "next/image";
import { MdSync, MdCallReceived, MdInsights } from "react-icons/md";

/* ---------------------------------------------------------------------------
 * Integração com os portais de anúncio.
 * Logos servidos localmente (public/portais) para não depender de CDN de
 * terceiro. Cada marca tem altura própria porque são formatos diferentes:
 * ícone quadrado (OLX, Chaves na Mão) x wordmark horizontal (ImovelWeb).
 *
 * ⚠️ CONFERIR: manter aqui apenas os portais realmente integrados.
 * --------------------------------------------------------------------------- */

const portals = [
  {
    name: "Chaves na Mão",
    src: "/portais/chavesnamao.png",
    width: 512,
    height: 512,
    className: "h-11 w-auto",
  },
  {
    name: "ImovelWeb",
    src: "/portais/imovelweb.svg",
    width: 148,
    height: 29,
    className: "h-6 w-auto",
  },
  {
    name: "OLX",
    src: "/portais/olx.png",
    width: 180,
    height: 180,
    className: "h-11 w-auto",
  },
];

const benefits = [
  {
    icon: <MdCallReceived size={20} />,
    title: "O lead entra sozinho",
    text: "O contato do portal cai direto no ImobDeal, já como negócio aberto. Ninguém precisa transcrever nada.",
  },
  {
    icon: <MdSync size={20} />,
    title: "Sem exportar planilha",
    text: "Nada de baixar relatório de um lado e subir do outro. A entrada é contínua, o dia inteiro.",
  },
  {
    icon: <MdInsights size={20} />,
    title: "Você sabe o que cada portal rende",
    text: "Como a origem fica registrada no lead, dá para comparar os portais por negócio fechado, não por volume.",
  },
];

export default function PortalIntegrations() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
            Integração com portais
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight leading-[1.15] text-balance">
            Conectado aos portais
            <span className="block text-primary">onde você já anuncia.</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-5 leading-relaxed">
            Você continua anunciando onde sempre anunciou. A diferença é que o
            lead não passa mais por planilha nem por grupo de mensagem antes de
            chegar no corretor.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {portals.map((portal) => (
            <div
              key={portal.name}
              className="flex h-24 min-w-[13rem] flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white px-8 transition-colors hover:border-gray-300"
            >
              <Image
                src={portal.src}
                alt={portal.name}
                width={portal.width}
                height={portal.height}
                className={portal.className}
              />
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-8">
          {benefits.map((b) => (
            <div key={b.title}>
              <span className="text-primary">{b.icon}</span>
              <p className="text-gray-900 font-bold text-sm mt-2.5">{b.title}</p>
              <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
