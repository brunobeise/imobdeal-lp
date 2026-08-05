import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import CtaButton from "./CtaButton";

/* ---------------------------------------------------------------------------
 * Site sob medida — último gatilho antes do preço.
 * O CRM barato entrega template: o mesmo site para centenas de imobiliárias,
 * trocando logo e cor. Aqui cada site é um projeto.
 * A galeria é a prova do argumento e, ao mesmo tempo, a parede de clientes:
 * os sites são de clientes reais, com link aberto para o visitante checar a
 * referência direto com eles.
 *
 * Para adicionar um cliente: `cover` é a capa do próprio site em
 * /public/sites (900x563 webp) e `logo` a marca em /public/clientes. Use
 * `plate` só quando o logo não se sustentar sozinho sobre a capa.
 * --------------------------------------------------------------------------- */

interface ClientSite {
  name: string;
  /** Cidade e/ou nicho, como aparece no portfólio. */
  detail: string;
  /** Imagem de capa do próprio site, em /public/sites. */
  cover: string;
  /** Logo da imobiliária, em /public/clientes. */
  logo: string;
  site: string;
  /**
   * Pastilha atrás do logo, quando ele não se sustenta sozinho sobre a capa:
   * "light" para logo escuro ou colorido, "dark" para logo dourado/claro
   * que cai sobre trecho claro da imagem.
   */
  plate?: "light" | "dark";
}

const sites: ClientSite[] = [
  {
    name: "Catenna Imobiliária",
    detail: "Balneário Camboriú · Alto padrão",
    cover: "/sites/catenna.webp",
    logo: "/clientes/catenna.png",
    site: "https://www.catennaimobiliaria.com.br",
  },
  {
    name: "DARA",
    detail: "Serra Gaúcha e Litoral · Boutique",
    cover: "/sites/dara.webp",
    logo: "/clientes/dara.png",
    site: "https://daraimob.com.br",
  },
  {
    name: "DK3M Consultoria",
    detail: "Serra Gaúcha · Alto padrão",
    cover: "/sites/dk3m.webp",
    logo: "/clientes/dk3m.png",
    site: "https://www.dk3mconsultoria.com.br",
  },
  {
    name: "Praialar Imóveis",
    detail: "Praia Grande · Litoral de São Paulo",
    cover: "/sites/praialar.webp",
    logo: "/clientes/praialar.png",
    site: "https://praialarimoveis.com.br",
    plate: "dark",
  },
  {
    name: "Investe Brasil Imóveis",
    detail: "Brasileiros no exterior · Investimento",
    cover: "/sites/investe-brasil.webp",
    logo: "/clientes/investe-brasil.png",
    site: "https://investebrasilimob.com",
    plate: "dark",
  },
  {
    name: "Parisotto Imóveis",
    detail: "Santa Cruz do Sul · RS",
    cover: "/sites/parisotto.webp",
    logo: "/clientes/parisotto.png",
    site: "https://www.parisottoimoveis.com.br",
    plate: "light",
  },
  {
    name: "New Lar Imobiliária",
    detail: "Vitória da Conquista · BA",
    cover: "/sites/new-lar.webp",
    logo: "/clientes/new-lar.png",
    site: "https://newlarimobiliaria.com.br",
    plate: "light",
  },
  /* Fora por enquanto — os domínios não respondem (weverealty.com sem
     resposta, crisolucoes.com.br devolvendo 404). Capa e logo já estão
     em /public; é só reativar quando os sites voltarem ao ar.
  { name: "Weve Realty", detail: "São Paulo · Lisboa · Miami · Orlando",
    cover: "/sites/weve.webp", logo: "/clientes/weve.png",
    site: "https://weverealty.com" },
  { name: "CRI Soluções Imobiliárias", detail: "Balneário Camboriú · Empreendimentos",
    cover: "/sites/cri.webp", logo: "/clientes/cri.png",
    site: "https://crisolucoes.com.br" },
  */
];

const entregas = [
  {
    titulo: "Identidade da sua marca",
    texto:
      "Tipografia, cor e linguagem visual da sua imobiliária. Não é um tema com a sua logo no canto.",
  },
  {
    titulo: "Estrutura do seu mercado",
    texto:
      "Alto padrão, lançamento, litoral e locação pedem páginas diferentes. O site é desenhado para o que você vende.",
  },
  {
    titulo: "Integrado ao CRM",
    texto:
      "Imóveis publicados direto do sistema e cada lead do site entrando na roleta, com a origem registrada.",
  },
];

/* Card = capa do próprio site + logo da imobiliária. É a diferença entre
   os cards que prova o argumento: nenhum se parece com o outro. */
function SiteCard({ item }: { item: ClientSite }) {
  return (
    <a
      href={item.site}
      target="_blank"
      rel="noopener noreferrer"
      /* Sem aria-label: ele substituía o nome acessível pelo texto "Visitar o
         site da X", que não continha o texto visível do card (a região). O
         nome computado do conteúdo — alt do logo + região + "Visitar" — já
         descreve melhor e casa com o que se vê. */
      className="group relative block aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
    >
      <Image
        src={item.cover}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Escurece o suficiente para o logo respirar sem apagar a capa */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/55" />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex-1 flex items-center justify-center">
          {item.plate ? (
            <span
              className={`rounded-lg px-4 py-3 backdrop-blur-sm ${
                item.plate === "light"
                  ? "bg-white/92"
                  : "bg-black/55 ring-1 ring-white/10"
              }`}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={200}
                height={64}
                className="max-h-11 w-auto object-contain"
              />
            </span>
          ) : (
            <Image
              src={item.logo}
              alt={item.name}
              width={220}
              height={72}
              className="max-h-14 w-auto object-contain drop-shadow-lg"
            />
          )}
        </div>

        <div className="flex items-end justify-between gap-3">
          <p className="text-white/70 text-xs leading-snug">{item.detail}</p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-white whitespace-nowrap">
            Visitar
            <MdArrowOutward
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function WebsiteShowcase() {
  return (
    <section className="bg-surface-light py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight leading-[1.15] text-balance">
            O site da sua imobiliária não deveria ser
            <span className="block text-primary">
              o mesmo de outras mil imobiliárias.
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-5 leading-relaxed text-pretty">
            Quando o site vem incluso no plano, ele é um template. O mesmo
            layout usado por centenas de imobiliárias, com a logo trocada e a
            cor ajustada — e o visitante não distingue a sua marca da do
            concorrente ao lado.
          </p>
        </div>

        {/* O que muda aqui */}
        <div className="mt-12 rounded-2xl border-2 border-primary bg-white p-8 md:p-10 shadow-xl shadow-primary/8">
          <p className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug text-balance">
            No ImobDeal, o site não é template. É projeto.
          </p>
          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed max-w-3xl">
            Cada cliente recebe um site desenvolvido do zero para a própria
            imobiliária: a identidade visual da marca, o público que ela
            atende, a região onde atua e as objeções de quem compra com ela.
            Dois clientes nossos nunca têm o mesmo site.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-100 grid md:grid-cols-3 gap-x-10 gap-y-8">
            {entregas.map((e) => (
              <div key={e.titulo}>
                <h3 className="text-gray-900 font-bold text-sm">{e.titulo}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {e.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Galeria = parede de clientes */}
        <div className="mt-16">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-[1.75rem] font-bold text-gray-900 tracking-tight leading-snug text-balance">
              Nenhum se parece com o outro.
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-3 leading-relaxed text-pretty">
              Os sites abaixo são de imobiliárias que operam no ImobDeal hoje.
              Estão no ar, pode navegar à vontade. E se quiser ouvir de alguma
              delas como é o sistema por dentro, a gente marca a conversa.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sites.map((item) => (
              <SiteCard key={item.name} item={item} />
            ))}

            {/* Fecha a linha do grid e leva o CTA para dentro da prova */}
            <div className="sm:col-span-2 rounded-xl bg-primary p-7 md:p-8 flex flex-col justify-center">
              <p className="text-white font-bold text-lg md:text-xl tracking-tight leading-snug text-balance">
                A próxima capa aqui pode ser a da sua imobiliária.
              </p>
              <p className="text-white/60 text-sm mt-2.5 leading-relaxed max-w-md">
                O projeto começa com uma conversa sobre a sua marca, o seu
                público e a sua região.
              </p>
              <div className="mt-6">
                <CtaButton
                  variant="primary"
                  size="large"
                  source="site_sob_medida"
                  showBlackNovemberBadge={false}
                  className="w-full sm:w-auto px-8 !bg-white !text-primary hover:!bg-white/90 !rounded-xl !font-bold"
                >
                  Quero o site da minha imobiliária
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
