import Link from "next/link";
import WhatsAppButton from "@/components/WhatsappButton";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import DemoButton from "@/components/DemoModal";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ImobDeal - Crie e Acompanhe Propostas Imobiliárias em Segundos",
  description:
    "O ImobDeal simplifica a criação e o acompanhamento das suas propostas imobiliárias. Sem a necessidade de burocracia ou de um CRM completo, envie suas propostas de alto padrão em segundos!",
  keywords: [
    "propostas imobiliárias",
    "envio de propostas de imóveis",
    "software imobiliário",
    "corretor de imóveis",
    "acompanhar propostas",
    "criar propostas",
    "sistema para corretor",
    "automação imobiliária",
    "gestão de propostas",
    "plataforma imobiliária",
  ],
  openGraph: {
    title: "ImobDeal - Crie e Acompanhe Propostas Imobiliárias em Segundos",
    description:
      "O ImobDeal simplifica a criação e o acompanhamento das suas propostas imobiliárias. Envie suas propostas de alto padrão em segundos!",
    url: "https://imobdeal.com.br",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "ImobDeal - Software para Propostas Imobiliárias",
      },
    ],
  },
  alternates: {
    canonical: "https://imobdeal.com.br",
  },
};

export default function Home() {
  const testimonials = [
    {
      name: "Júnior Borges",
      role: "Corretor Imobiliário",
      image:
        "https://res.cloudinary.com/dpegpgjpr/image/upload/v1750459615/xfv6oqz3ddgbptjox4yb.webp",
      text: "O layout com meus imóveis funciona muito bem! É muito gostoso ver quando o cliente clica e já recebo a notificação de que acessou meu produto. Quando estou em conversa com um cliente e ele acessa, em poucos minutos já envio uma mensagem para lembrar sobre o produto. Está funcionando muito bem!",
    },
    {
      name: "Paulo Eduardo",
      role: "Corretor de Imóveis",
      image:
        "https://res.cloudinary.com/dpegpgjpr/image/upload/v1746468370/juofqjzenr12snqrlj6l.webp",
      text: "Encontrei no ImobDeal uma plataforma muito legal para saber exatamente quando o cliente está acessando nossas informações. Sabemos que o cliente entra, pede informações e some. Agora sei quando aquele cliente que sumiu está vendo a proposta, e no momento exato que ele está olhando, eu sei a hora de fazer um follow-up assertivo!",
    },
    {
      name: "Ícaro Parisotto",
      role: "Gestor de imobiliária",
      image:
        "https://res.cloudinary.com/dpegpgjpr/image/upload/v1727118096/mhsqpe00kdfml8jchpjt.jpg",
      text: "Na Parisotto Imóveis, o ImobDeal revolucionou nossa gestão de propostas. Antes, faltava feedback dos clientes, dificultando os fechamentos. Agora, temos acesso rápido a informações essenciais, organização para os corretores e um aumento de 50% na taxa de fechamento. O ImobDeal é mais que um sistema, é um diferencial competitivo que nos faz vender mais e melhor!",
    },
    {
      name: "Rodrigo Barbosa",
      role: "Corretor Imobiliário",
      image:
        "https://res.cloudinary.com/dpegpgjpr/image/upload/v1730392692/bfmotq1hhzrkn5c9vuij.jpg",
      text: "Eu sempre perdia tempo reenviando propostas ou explicando detalhes que os clientes esqueciam. Com o ImobDeal, envio tudo organizado, e se vejo que abriram, mas não responderam, sei que posso dar um follow-up na hora certa. Isso fez toda diferença nos fechamentos!",
    },
    {
      name: "Lucas Larralde",
      role: "Corretor imobiliário",
      image:
        "https://res.cloudinary.com/dpegpgjpr/image/upload/v1730900349/glod2en1ddrsqivqzhdn.png",
      text: "Os relatórios do ImobDeal trazem uma credibilidade enorme para meus clientes, tornando as negociações mais transparentes e profissionais. Além disso, o sistema é extremamente intuitivo, fácil de usar e me ajuda a economizar um tempo precioso no dia a dia. Com ele, consigo focar no que realmente importa: fechar mais negócios com eficiência e confiança.",
    },
    {
      name: "Jonas Senhorini",
      role: "Corretor Imobiliário",
      image:
        "https://res.cloudinary.com/dpegpgjpr/image/upload/v1753364733/vtlpy7xzgciodexfrq05.webp",
      text: "O ImobDeal foi fundamental para alavancar minhas vendas. Além de tornar meu processo mais profissional, consigo verificar em tempo real onde o cliente dedicou mais tempo. Com isso, tenho um atendimento mais assertivo e, consequentemente, mais vendas.",
    },
  ];
  return (
    <>
      <StructuredData />
      <div className="flex justify-center py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-4xl  lg:text-[45px] leading-tight text-primary">
              Crie e acompanhe as suas Propostas Imobiliárias <br />
              <strong className="text-primary">em Segundos</strong>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-6 md:leading-8 lg:pe-16 max-sm:my-6">
              O ImobDeal simplifica a criação e o acompanhamento das suas
              propostas imobiliárias. Sem a necessidade de burocracia ou de um
              CRM completo, envie suas propostas de alto padrão em segundos!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Link
                href="https://app.imobdeal.com.br/cadastro"
                className="max-sm:order-last bg-secondary hover:bg-secondary/90 text-primary px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold transition-colors text-sm md:text-[14px] inline-block text-center"
              >
                Teste Grátis por 3 Dias
              </Link>
              <DemoButton />
            </div>
            <div className="flex max-sm:justify-between gap-1 md:gap-6 text-xs md:text-sm text-gray-600 justify-center lg:justify-start">
              <div className="flex items-center gap-1 md:gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Configuração em 5 minutos</span>
              </div>
            </div>
          </div>

          {/* Vídeo */}
          <div className="relative order-first lg:order-last lg:mt-0">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://player.mux.com/Vp6Q9WfpGa2r01gLKttBrWDKTLdtgG00gyzbQ9M9JYoJY?metadata-video-title=Venda+mais+com+o+ImobDeal&video-title=Venda+mais+com+o+ImobDeal"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Recursos */}
      <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recursos <span className="text-primary">poderosos</span> para você
              vender <span className="text-primary">mais!</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Tudo que você precisa para <strong>criar</strong>,{" "}
              <strong>enviar</strong> e <strong>acompanhar</strong> propostas
              vencedoras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Crie propostas 3x mais rápido
              </h3>
              <p className="text-gray-600">
                Crie propostas em segundos com nossos modelos pré-prontos, ou
                personalize propostas já existentes. Triplique a sua
                produtividade!
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Feche negócios direto no WhatsApp
              </h3>
              <p className="text-gray-600">
                Compartilhe propostas diretamente pelo WhatsApp e acompanhe em
                tempo real quando abriu e qual seção mais interessou.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Saiba quem está prestes a fechar com você
              </h3>
              <p className="text-gray-600">
                Identifique prospects que mais visualizam suas propostas e
                priorize seus follow-ups.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Transformação com Vídeo */}
      <div className="bg-primary py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Vídeo */}
          <div className="relative order-last lg:order-first">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
              <Image
                src="/looping.gif"
                height={720}
                width={1280}
                alt="Vídeo Looping"
              />
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="text-white text-left">
            <h2 className="text-2xl md:text-2xl lg:text-xl font-bold mb-4 md:mb-6 leading-8 text-center lg:text-left">
              Transforme seu processo de vendas com análises acionáveis e fluxos
              de trabalho simplificados.
            </h2>

            <div className="space-y-4 md:space-y-6">
              {/* Bullet 1 - Ícone de Gráfico */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Aumente as Taxas de Conversão
                  </h3>
                  <p className="text-white/90">
                    Acompanhe o engajamento para focar em quem realmente está
                    interessado
                  </p>
                </div>
              </div>

              {/* Bullet 2 - Ícone de Relógio */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Economize Tempo
                  </h3>
                  <p className="text-white/90">
                    Crie propostas 10x mais rápido com modelos automatizados
                  </p>
                </div>
              </div>

              {/* Bullet 3 - Ícone de Estrela */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Design Profissional
                  </h3>
                  <p className="text-white/90">
                    Impressione clientes com propostas de alto impacto visual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Depoimentos */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Seção CTA Final */}
      <div className="bg-primary py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Pronto para vender mais?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de corretores que já estão usando o ImobDeal
            para fechar mais negócios.
          </p>

          <Link
            href="https://app.imobdeal.com.br/cadastro"
            className="bg-secondary hover:bg-[#e6961f] text-primary text-base md:text-lg font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors mb-6 inline-block"
          >
            Comece seu Teste Grátis de 3 Dias
          </Link>

          <p className="text-xs md:text-sm text-white/70">
            Sem cartão de crédito • Cancele a qualquer momento • Acesso completo
            a todos os recursos
          </p>
        </div>
      </div>

      <WhatsAppButton />
    </>
  );
}
