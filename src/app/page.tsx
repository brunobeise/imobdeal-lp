import Image from "next/image";
import imobdeal from "../../public/ImobDeal-branco.png";
import Preview1 from "../../public/proposta-mockup.png";
import Ideia from "../../public/ideia.svg";
import Sino from "../../public/sino.svg";
import House from "../../public/house.svg";
import File from "../../public/file2.svg";
import Time from "../../public/time.svg";
import Portfolio from "../../public/portfolio.png";
import Chart from "../../public/chart.svg";
import ChartPortfolio from "../../public/grafico-portfolio.png";
import ProposalCTA from "@/components/ProposalCTA";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import PricingPlans from "@/components/PricingPlans";
import WhatsAppButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <header className="absolute top-0 w-full flex justify-center p-5 z-2">
          <div className="flex flex-col items-center">
            <Image alt="imobDeal" width={60} height={60} src={imobdeal.src} />
            <div className="flex mt-[-5px] text-white">
              imob <b>Deal</b>
            </div>
          </div>
        </header>
        <main className="w-full flex flex-col overflow-x-hidden">
          <section className="relative bg-gradient-to-t from-[#0b2a41] to-[#174363] h-[1000px] text-white">
            <div className="absolute left-[50%] translate-x-[-50%] top-[140px] text-center w-[400px] md:w-[700px]">
              <h3 className="text-xl md:text-2xl mb-5">
                Do Cadastro ao Fechamento:
              </h3>
              <h1 className="text-5xl md:text-6xl font-bold leading-16 md:leading-[5rem]">
                Propostas Imobiliárias que Convertem
              </h1>
              <div className="flex gap-10 justify-center ">
                <a
                  target="_blank"
                  href="https://app.getdemo.com.br/d/0d0a8a80-5451-4d66-abfe-b187179ac707"
                >
                  <button className="border border-white text-white rounded-lg font-bold px-6 p-3 mt-10 hover:bg-[#174363] cursor-pointer">
                    Ver Demonstração
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute bottom-[-220px] md:bottom-[-200px] left-[50%] translate-x-[-50%] w-[200%] md:w-[120%] bg-white h-[640px] rounded-t-[100%]" />
            <Image
              alt="Montador de Proposta imobiliária"
              width={600}
              height={200}
              src={Preview1.src}
              className="z-2 absolute w-[340px] md:w-[600px] bottom-[250px] md:bottom-[130px] left-[50%] translate-x-[-50%]"
            />
          </section>
          <section className="features z-10 mt-[-160px] md:mt-[-50px] md:py-6">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                O jeito mais inteligente de enviar e acompanhar propostas
                imobiliárias.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <Image
                    width={50}
                    height={50}
                    src={Ideia.src}
                    alt="Criação Rápida"
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    Monte propostas em poucos cliques
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Gere propostas profissionais personalizadas para cada
                    cliente, incluindo fotos e condições de pagamento.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <Image
                    width={50}
                    height={50}
                    src={Sino.src}
                    alt="Tracking Inteligente"
                  />
                  <h3 className="text-xl font-semibold mt-4  mb-2">
                    Saiba quando seu cliente abriu a proposta
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Receba notificações em tempo real por WhatsApp e acompanhe
                    quais clientes estão mais engajados.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <Image
                    width={50}
                    height={50}
                    src={Chart.src}
                    alt="Imobdeal - Análise de viabilidade"
                  />
                  <h3 className="text-xl font-semibold mt-4  mb-2">
                    Calcule e apresente projeções de investimento
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Simule rentabilidade e retorno para investidores,
                    facilitando decisões estratégicas.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <ProposalCTA />
          <section className="features z-10 bg-white py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Crie Portfólios Interativos e Impressione seus Clientes
              </h2>

              {/* Cards de funcionalidades do Portfólio */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <Image
                    width={58}
                    height={58}
                    src={House.src}
                    alt="Mostrar Imóveis"
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    Mostrar imóveis
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Apresente todos os imóveis relevantes em um só link, com
                    fotos e informações detalhadas.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <Image
                    width={50}
                    height={50}
                    src={File.src}
                    alt="Comparar Propostas"
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    Comparar propostas
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Permita que o cliente compare diferentes condições de
                    pagamento e escolha com mais clareza.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <Image
                    width={50}
                    height={50}
                    src={Time.src}
                    alt="Tempo em cada item"
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    Tempo em cada item
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Descubra quanto tempo o cliente passou em cada imóvel e
                    saiba o que mais chamou a atenção dele.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className="text-left max-w-md">
                  <h3 className="text-2xl font-bold text-[#0b2a41] mb-4">
                    Exemplo de Link do Portfólio
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Envie um link como este para o seu cliente acessar o
                    portfólio completo:
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 text-sm break-words font-mono text-[#0b2a41] shadow-inner">
                    <a
                      target="blank"
                      className="hover:text-blue-500"
                      href="https://app.imobdeal.com.br/portfolio/seu-link-aqui "
                    >
                      https://app.imobdeal.com.br/portfolio/seu-link-aqui
                    </a>
                  </div>
                  <p className="text-gray-600 mt-4 mb-6">
                    Com um clique, o cliente acessa tudo o que precisa — e você
                    acompanha cada interação, e com gráfico para filtrar os
                    itens de maior interesse.
                  </p>

                  <Image
                    width={400}
                    height={300}
                    src={ChartPortfolio.src}
                    alt="Exemplo de Portfólio"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <Image
                  width={320}
                  height={570}
                  src={Portfolio.src}
                  alt="Exemplo de Portfólio"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
              {/* Texto explicativo */}
              <div className="md:w-1/2 md:text-left">
                <h2 className="text-3xl font-bold text-[#0b2a41]">
                  Como funciona o tracking?
                </h2>
                <p className="text-gray-600 mt-4">
                  Nosso sistema rastreia quando o cliente abre a proposta e
                  envia uma notificação em tempo real para você via WhatsApp.
                  Assim, você sabe exatamente quando e como abordar cada
                  cliente, aumentando suas chances de conversão.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#0b2a41] text-white font-bold rounded-full">
                      1
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Você envia a proposta personalizada para o cliente.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#0b2a41] text-white font-bold rounded-full">
                      2
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Nosso sistema rastreia quando a proposta é aberta e
                      registra a interação do cliente.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#0b2a41] text-white font-bold rounded-full">
                      3
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Você recebe um aviso via WhatsApp e pode acompanhar o
                      interesse do cliente em tempo real.
                    </p>
                  </div>
                </div>
              </div>

              {/* Imagem ilustrativa */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  width={250}
                  height={100}
                  alt="Tracking Example"
                  src="/tracking.png"
                />
              </div>
            </div>
          </section>
          <section className="py-12 white">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Por que usar o ImobDeal para enviar propostas?
              </h2>
              <p className="text-gray-600 mt-4">
                Comparado aos métodos tradicionais, o ImobDeal oferece mais
                controle, organização e inteligência para você fechar mais
                negócios.
              </p>

              {/* Tabela Comparativa */}
              <div className="mt-10">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg text-left text-[0.8rem] md:text-base">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="p-4 text-left">Recurso</th>
                      <th className="p-4 text-center">WhatsApp Manual</th>
                      <th className="p-4 text-center">PDF Enviado</th>
                      <th className="p-4 text-center">ImobDeal</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {/* Linha 1 */}
                    <tr className="">
                      <td className="p-4 text-left">Fácil de criar e enviar</td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 2 */}
                    <tr className=" bg-gray-50">
                      <td className="p-4 text-left">
                        Proposta profissional e interativa
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaExclamationTriangle
                          className="text-yellow-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 3 */}
                    <tr className="">
                      <td className="p-4 text-left">
                        Tracking de visualização em tempo real
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 4 */}
                    <tr className=" bg-gray-50">
                      <td className="p-4 text-left">
                        Notificação automática quando visualizado
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 5 */}
                    <tr className="">
                      <td className="p-4 text-left">
                        Cálculo de viabilidade para investidores
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 6 */}
                    <tr className=" bg-gray-50">
                      <td className="p-4 text-left">
                        Links personalizados para cada cliente
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 7 */}
                    <tr className="">
                      <td className="p-4 text-left">
                        Histórico e organização de propostas
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaExclamationTriangle
                          className="text-yellow-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 8 */}
                    <tr className=" bg-gray-50">
                      <td className="p-4 text-left">
                        Follow-up inteligente e estratégico
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaExclamationTriangle
                          className="text-yellow-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>

                    {/* Linha 9 */}
                    <tr className="">
                      <td className="p-4 text-left">
                        Customização total da proposta
                      </td>
                      <td className="p-4 text-center">
                        <FaTimesCircle
                          className="text-red-500 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                      <td className="p-4 text-center">
                        <FaCheckCircle
                          className="text-green-600 mx-auto"
                          size={16}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Corretores que já aumentaram suas vendas com o ImobDeal
              </h2>
              <p className="text-gray-600 mt-4">
                Veja como o ImobDeal está transformando a rotina de corretores e
                imobiliárias.
              </p>

              {/* Grid de depoimentos */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Depoimento 1 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-left flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/dpegpgjpr/image/upload/v1727118096/mhsqpe00kdfml8jchpjt.jpg"
                    alt="Ícaro Parisotto"
                    className="h-16 w-16 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700 h-[280px]">
                    &quot;Na Parisotto Imóveis, o ImobDeal revolucionou nossa
                    gestão de propostas. Antes, faltava feedback dos clientes,
                    dificultando os fechamentos. Agora, temos acesso rápido a
                    informações essenciais, organização para os corretores e um
                    aumento de 50% na taxa de fechamento. O ImobDeal é mais que
                    um sistema, é um diferencial competitivo que nos faz vender
                    mais e melhor! &quot;
                  </p>
                  <h4 className="mt-4 font-semibold text-gray-900">
                    Ícaro Parisotto
                  </h4>
                  <span className="text-gray-500 text-sm">
                    Gestor de imobiliária
                  </span>
                </div>

                {/* Depoimento 2 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-left flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/dpegpgjpr/image/upload/v1730392692/bfmotq1hhzrkn5c9vuij.jpg"
                    alt="Rodrigo Barbosa"
                    className="h-16 w-16 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700  h-[280px]">
                    &quot;Eu sempre perdia tempo reenviando propostas ou
                    explicando detalhes que os clientes esqueciam. Com o
                    ImobDeal, envio tudo organizado, e se vejo que abriram, mas
                    não responderam, sei que posso dar um follow-up na hora
                    certa. Isso fez toda diferença nos fechamentos!&quot;
                  </p>
                  <h4 className="mt-4 font-semibold text-gray-900">
                    Rodrigo Barbosa
                  </h4>
                  <span className="text-gray-500 text-sm">
                    Corretor Imobiliário
                  </span>
                </div>

                {/* Depoimento 3 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-left flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/dpegpgjpr/image/upload/v1730900349/glod2en1ddrsqivqzhdn.png"
                    alt="Lucas Larralde"
                    className="h-16 w-16 rounded-full mb-4"
                  />
                  <p className="text-gray-700  h-[280px]">
                    &quot;Os relatórios do ImobDeal trazem uma credibilidade
                    enorme para meus clientes, tornando as negociações mais
                    transparentes e profissionais. Além disso, o sistema é
                    extremamente intuitivo, fácil de usar e me ajuda a
                    economizar um tempo precioso no dia a dia. Com ele, consigo
                    focar no que realmente importa: fechar mais negócios com
                    eficiência e confiança.&quot;
                  </p>
                  <h4 className="mt-4 font-semibold text-gray-900">
                    Lucas Larralde
                  </h4>
                  <span className="text-gray-500 text-sm">
                    Corretor imobiliário
                  </span>
                </div>
              </div>
            </div>
          </section>

          <PricingPlans />
        </main>
      </div>
      <WhatsAppButton />
    </>
  );
}
