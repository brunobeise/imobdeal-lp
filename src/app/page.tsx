import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StructuredData from "@/components/StructuredData";
import FreeTrialButton from "@/components/FreeTrialButton";
import PictureInPictureVideo from "@/components/PictureInPictureVideo";
import BlackNovemberPricingCard from "@/components/BlackNovemberPricingCard";
import { Metadata } from "next";
import Image from "next/image";
import { GrMultiple } from "react-icons/gr";
import AnaPortfolioModal from "@/components/AnaPortfolioModal";

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
        "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/35f43732-f783-46a5-1957-ec7b3a5edc00/public",
      text: "O layout com meus imóveis funciona muito bem! É muito gostoso ver quando o cliente clica e já recebo a notificação de que acessou meu produto. Quando estou em conversa com um cliente e ele acessa, em poucos minutos já envio uma mensagem para lembrar sobre o produto. Está funcionando muito bem!",
    },
    {
      name: "Paulo Eduardo",
      role: "Corretor de Imóveis",
      image:
        "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/a1ea00bb-20dd-46de-159e-f461566c0700/public",
      text: "Encontrei no ImobDeal uma plataforma muito legal para saber exatamente quando o cliente está acessando nossas informações. Sabemos que o cliente entra, pede informações e some. Agora sei quando aquele cliente que sumiu está vendo a proposta, e no momento exato que ele está olhando, eu sei a hora de fazer um follow-up assertivo!",
    },
    {
      name: "Ícaro Parisotto",
      role: "Gestor de imobiliária",
      image:
        "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/85a0c264-4168-43d1-6f15-103f5048bc00/public",
      text: "Na Parisotto Imóveis, o ImobDeal revolucionou nossa gestão de propostas. Antes, faltava feedback dos clientes, dificultando os fechamentos. Agora, temos acesso rápido a informações essenciais, organização para os corretores e um aumento de 50% na taxa de fechamento. O ImobDeal é mais que um sistema, é um diferencial competitivo que nos faz vender mais e melhor!",
    },
    {
      name: "Rodrigo Barbosa",
      role: "Corretor Imobiliário",
      image:
        "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/6b7a4684-7a20-47b1-1bbe-216a8e508400/public",
      text: "Eu sempre perdia tempo reenviando propostas ou explicando detalhes que os clientes esqueciam. Com o ImobDeal, envio tudo organizado, e se vejo que abriram, mas não responderam, sei que posso dar um follow-up na hora certa. Isso fez toda diferença nos fechamentos!",
    },
    {
      name: "Lucas Larralde",
      role: "Corretor imobiliário",
      image:
        "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/3e488c82-0d46-4852-36c7-5d260d2f2d00/public",
      text: "Os relatórios do ImobDeal trazem uma credibilidade enorme para meus clientes, tornando as negociações mais transparentes e profissionais. Além disso, o sistema é extremamente intuitivo, fácil de usar e me ajuda a economizar um tempo precioso no dia a dia. Com ele, consigo focar no que realmente importa: fechar mais negócios com eficiência e confiança.",
    },
    {
      name: "Jonas Senhorini",
      role: "Corretor Imobiliário",
      image:
        "https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/e0e64084-d216-46b4-21e2-9d8275521700/public",
      text: "O ImobDeal foi fundamental para alavancar minhas vendas. Além de tornar meu processo mais profissional, consigo verificar em tempo real onde o cliente dedicou mais tempo. Com isso, tenho um atendimento mais assertivo e, consequentemente, mais vendas.",
    },
  ];
  return (
    <>
      <StructuredData />
      <div className="flex justify-center py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 md:space-y-8 text-center">
            <div className="mb-6 md:mb-8">
              <Image
                src="https://imagedelivery.net/OSaOCMwq07nhXnBaDdauwA/4a8be372-df24-4469-2e1a-3dbca6adfe00/public"
                alt="ImobDeal Logo"
                width={300}
                height={80}
                className="mx-auto w-auto h-12 md:h-16 lg:h-20"
                priority
              />
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-5xl leading-tight text-primary font-bold">
              Transforme seus imóveis em links inteligentes e{" "}
              <span className="text-primary">descubra o interesse dos seus clientes em segundos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-7 md:leading-9 max-w-4xl mx-auto">
              O ImobDeal cria vitrines digitais e propostas elegantes em
              segundos, com alertas de visualização e insights em tempo real
              para você falar com o cliente na hora certa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FreeTrialButton
                variant="primary"
                size="large"
                className="w-full sm:w-auto px-8"
                source="hero_section"
              >
                Teste Grátis por 3 Dias
              </FreeTrialButton>
              {/* <DemoButton /> */}
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
                <GrMultiple size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Portfólios personalizados para cada cliente
              </h3>
              <p className="text-gray-600">
                Monte uma vitrine sob medida com os imóveis certos para cada
                cliente, em segundos, e envie um link elegante que guia o
                cliente pela experiência.
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
                Receba sinais de interesse no WhatsApp
              </h3>
              <p className="text-gray-600">
                Seja avisado quando o cliente abrir o portfólio ou proposta e
                quais seções ele explora. Faça o follow-up no momento exato em
                que o interesse está quente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção VSL - Vídeo com Copy Persuasiva */}
      <div className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Veja Como Funciona na Prática
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Descubra em apenas <strong>3 minutos</strong> como corretores estão{" "}
              <span className="text-primary font-semibold">aumentando as vendas</span>{" "}
              transformando o seu atendimento com links inteligentes que mantem você no <strong> controle </strong> da negociação.
            </p>

          </div>

          <div className="relative max-w-4xl mx-auto">
            <PictureInPictureVideo />
          </div>

          <div className="mt-10 text-center">
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Pronto para implementar essas estratégias no seu negócio?
            </p>
            <FreeTrialButton
              variant="primary"
              size="large"
              source="video_section"
              className="px-8"
            >
              Quero Testar Grátis por 3 Dias
            </FreeTrialButton>
          </div>
        </div>
      </div>


      {/* Seção Link Inteligente - Exemplo */}
      <div className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O que é um link inteligente?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              É um link único que reúne propostas ou imóveis personalizadas e te avisa quando, e por quanto tempo o cliente acessa.
              Veja como funciona na prática:
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Imagine enviar isso para sua cliente:
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <p className="text-gray-800 mb-4">
                    "Oi Ana Clara! 👋<br />
                    Preparei uma seleção especial de imóveis pensando no seu perfil.<br />
                    Acesse seu portfólio exclusivo:"
                  </p>
                  <AnaPortfolioModal />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personalizado com o nome do cliente</h4>
                    <p className="text-gray-600">A Ana Clara se sente especial ao ver que você criou algo exclusivo para ela</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tudo em um só lugar</h4>
                    <p className="text-gray-600">Imóveis, preços, detalhes e simulações organizados em uma página limpa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Você sabe quando ela acessa</h4>
                    <p className="text-gray-600">Recebe notificação no WhatsApp quando ela visualiza e quanto tempo ficou em cada imóvel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Clique no link acima e veja como seus clientes vão receber suas propostas
            </p>
            <FreeTrialButton
              variant="primary"
              size="large"
              source="smart_link_section"
              className="px-8"
            >
              Criar meu primeiro link inteligente
            </FreeTrialButton>
          </div>
        </div>
      </div>

      {/* Seção Comparativa: Como o corretor trabalha */}
      <div className="bg-sectionBackground py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-primary bg-white border border-primary/20 rounded-full">
              Comparativo: do tradicional ao profissional
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              Clareza para o cliente, previsibilidade para você.
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Em poucos pontos, veja o que muda ao estruturar propostas e acompanhamento dentro do Imobdeal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase">Sem Imobdeal</p>
                <h3 className="text-xl font-bold text-gray-900">Operação improvisada</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed list-disc list-inside">
                <li>Propostas espalhadas em WhatsApp, Excel ou PDFs</li>
                <li>Simulações confusas para o cliente</li>
                <li>Explicações repetidas sobre o pagamento</li>
                <li>Sem visibilidade de abertura ou leitura</li>
                <li>Acompanhamento manual de visitas e imóveis</li>
                <li>Follow-up no instinto, com risco de esquecer</li>
                <li>Pouca diferenciação frente a outros corretores</li>
                <li>Cliente inseguro e decisão mais lenta</li>
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm font-semibold">
                Resultado: esforço alto, pouco controle e vendas lentas.
              </div>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase">Com Imobdeal</p>
                <h3 className="text-xl font-bold text-gray-900">Operação profissional</h3>
              </div>
              <ul className="space-y-2 text-gray-800 text-sm md:text-base leading-relaxed list-disc list-inside">
                <li>Propostas claras, padronizadas e personalizadas</li>
                <li>Simulação organizada em um link (entrada, parcelas, banco)</li>
                <li>Cliente entende rápido; você negocia com dados</li>
                <li>Tracking de abertura, tempo e seções vistas</li>
                <li>Portfólios prontos para visitas e follow-up</li>
                <li>Imóveis, propostas e clientes centralizados</li>
                <li>Follow-up guiado por sinais, não por tentativa e erro</li>
                <li>Mais autoridade, confiança e velocidade de fechamento</li>
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-primary text-sm font-semibold">
                Resultado: mais controle, cliente seguro e vendas previsíveis.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Menos tempo explicando", "Mais conversões", "Cliente seguro para decidir", "Processo previsível"].map((label) => (
              <div
                key={label}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-center">
              <div className="space-y-2">
                <p className="text-lg font-semibold leading-relaxed">
                  “O cliente não compra quando entende o preço. <br /> Ele compra quando entende o negócio.”
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  O Imobdeal deixa isso claro em cada proposta e no momento certo do follow-up.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <FreeTrialButton
                  variant="secondary"
                  size="large"
                  className="w-full lg:w-auto"
                  source="comparison_section"
                >
                  Criar minha primeira proposta
                </FreeTrialButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialsCarousel testimonials={testimonials} />

      {/* Seção Quanto Custa - Estratégia de Conversão */}
      <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Quanto Custa Perder um Cliente?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Você já perdeu quantas vendas por não saber quando o cliente viu sua
            proposta?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-red-600">R$ 15.000</h3>
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-red-700 text-sm">
                Comissão perdida por não fazer follow-up no momento certo, ou
                nem saber se o cliente está interessado
              </p>
            </div>

            <div className=" bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-2">69%</h3>
              <p className="text-primary text-sm">
                Dos leads que &quot;somem&quot; voltam a visualizar propostas depois, mas você não sabe quando isso acontece
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-red-600">R$ 180.000</h3>
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-red-700 text-sm">
                Faturamento perdido anualmente por trabalhar no escuro, sem saber quando clientes visualizam propostas ou qual o momento ideal para o follow-up
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-7">
              Recupere Essas Vendas Perdidas
            </h3>

            {/* Card da Black November - Aparece apenas em novembro */}
            <div id="black-november-card" className="mb-8">
              <BlackNovemberPricingCard />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Plano Starter */}
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">R$ 49,90</div>
                  <p className="font-semibold text-primary text-lg">Plano Starter</p>
                  <p className="text-sm text-gray-600 mb-4">Ideal para começar</p>
                </div>

                <div className="text-left space-y-2">
                  <p className="text-sm text-gray-700 flex items-center">
                    - Até 5 imóveis cadastrados
                  </p>
                  <p className="text-sm text-gray-700 flex items-center">
                    - Acompanhe visualizações da proposta
                  </p>
                  <p className="text-sm text-gray-700 flex items-center">
                    - Notificações automáticas no WhatsApp
                  </p>
                  <p className="text-sm text-gray-700 flex items-center">
                    - Dashboard simplificado
                  </p>
                </div>
              </div>

              {/* Plano Pro */}
              <div className="text-center p-6 border-2 border-primary rounded-lg relative bg-gradient-to-br from-blue-50 to-white">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold">
                    MAIS POPULAR
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-gray-400 line-through">R$ 169,90</div>
                  <div className="text-4xl font-bold text-primary mb-2">R$ 99,00</div>
                  <p className="font-semibold text-primary text-lg">Plano Pro</p>
                  <p className="text-sm text-gray-600 mb-4">Para corretores profissionais</p>
                </div>

                <div className="text-left space-y-2">
                  <p className="text-sm text-primary font-semibold flex items-center">
                    - Imóveis ilimitados
                  </p>
                  <p className="text-sm text-gray-700 flex items-center">
                    - Acompanhe visualizações da proposta
                  </p>
                  <p className="text-sm text-gray-700 flex items-center">
                    - Notificações automáticas no WhatsApp
                  </p>
                  <p className="text-sm text-primary font-semibold flex items-center">
                    - Propostas personalizadas
                  </p>
                  <p className="text-sm text-primary font-semibold flex items-center">
                    - Opções avançadas de customização
                  </p>
                  <p className="text-sm text-primary font-semibold flex items-center">
                    - Relatórios avançados
                  </p>
                  <p className="text-sm text-primary font-semibold flex items-center">
                    - Suporte especializado
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FreeTrialButton
                variant="primary"
                size="large"
                source="pricing_section"
              >
                Teste Grátis
              </FreeTrialButton>
              <p className="text-sm text-gray-500">
                3 dias grátis • Sem cartão • Upgrade a qualquer momento
              </p>
            </div>

            <div className="mt-6 p-4 rounded-lg">
              <p className="text-primary font-semibold text-center">
                Teste nossa plataforma sem compromisso e aumente suas vendas com propostas profissionais!
              </p>
              <p className="text-center text-sm text-gray-500 mt-3">
                Imobiliárias e incorporadoras: <a href="/precos?plano=imobiliarias" className="text-primary hover:underline">consulte nossos planos com desconto para equipes</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Depoimentos */}


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

          <FreeTrialButton
            variant="secondary"
            size="large"
            source="cta_section"
          >
            Comece seu Teste Grátis de 3 Dias
          </FreeTrialButton>

          <p className="text-xs md:text-sm text-white/70 mt-4">
            Sem cartão de crédito • Cancele a qualquer momento • Acesso completo
            a todos os recursos
          </p>
        </div>
      </div>
    </>
  );
}
