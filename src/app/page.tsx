import Image from "next/image";
import imobdeal from "../../public/ImobDeal-branco.png";
import Preview1 from "../../public/proposta-mockup.png";
import Ideia from "../../public/ideia.svg";
import Sino from "../../public/sino.svg";
import Chart from "../../public/chart.svg";
import ProposalCTA from "@/components/ProposalCTA";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";

export default function Home() {
  return (
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
                href="https://app.getdemo.com.br/d/5a3bcd4a-e84a-45ac-b8ec-d2762e3747f7"
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
                  Gere propostas profissionais personalizadas para cada cliente,
                  incluindo fotos e condições de pagamento.
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
                  Simule rentabilidade e retorno para investidores, facilitando
                  decisões estratégicas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ProposalCTA />
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            {/* Texto explicativo */}
            <div className="md:w-1/2 md:text-left">
              <h2 className="text-3xl font-bold text-[#0b2a41]">
                Como funciona o tracking?
              </h2>
              <p className="text-gray-600 mt-4">
                Nosso sistema rastreia quando o cliente abre a proposta e envia
                uma notificação em tempo real para você via WhatsApp. Assim,
                você sabe exatamente quando e como abordar cada cliente,
                aumentando suas chances de conversão.
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
                    Nosso sistema rastreia quando a proposta é aberta e registra
                    a interação do cliente.
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
                <img
                  src="/corretor1.jpg"
                  alt="Corretor João"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-700">
                  &quot;Antes do ImobDeal, eu mandava PDFs para os clientes e não
                  fazia ideia se eles viam ou ignoravam. Agora, sei exatamente
                  quando abriram a proposta e posso entrar em contato no momento
                  certo. &quot;
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">João Silva</h4>
                <span className="text-gray-500 text-sm">
                  Corretor em São Paulo, 12 anos de experiência
                </span>
              </div>

              {/* Depoimento 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-left flex flex-col items-center">
                <img
                  src="/corretor2.jpg"
                  alt="Corretora Maria"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-700">
                  &quot;Eu sempre perdia tempo reenviando propostas ou explicando
                  detalhes que os clientes esqueciam. Com o ImobDeal, envio tudo
                  organizado, e se vejo que abriram, mas não responderam, sei
                  que posso dar um follow-up na hora certa. Isso fez toda
                  diferença nos fechamentos!&quot;
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">
                  Maria Souza
                </h4>
                <span className="text-gray-500 text-sm">
                  Diretora na Souza Imóveis, RJ
                </span>
              </div>

              {/* Depoimento 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-left flex flex-col items-center">
                <img
                  src="/corretor3.jpg"
                  alt="Corretor Carlos"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-700">
                  &quot;Trabalho com investidores e cada segundo conta. Saber que um
                  investidor abriu a proposta e ficou 5 minutos analisando me dá
                  uma vantagem absurda. Antes, eu enviava e ficava no escuro.
                  Agora, fecho negócios de forma mais estratégica e rápida.&quot;
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">
                  Carlos Mendes
                </h4>
                <span className="text-gray-500 text-sm">
                  Consultor de Investimentos Imobiliários
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Escolha o plano ideal para você
            </h2>
            <p className="text-gray-600 mt-4">
              Envie propostas profissionais, acompanhe visualizações e feche
              mais negócios com o ImobDeal.
            </p>

            {/* GRID DOS PLANOS */}
            <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {/* Corretores Autônomos */}
              <div className="bg-gray-100  border-gray-500 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Autônomo
                </h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">R$ 129</p>
                <span className="text-gray-500 text-sm">por corretor</span>

                <button className="cursor-pointer mt-4 w-full bg-gray-500 text-white font-semibold py-2 rounded-md border border-gray-600 hover:bg-gray-600 transition">
                  Fale com especialista
                </button>

                <div className="mt-6 space-y-2 text-left">
                  {[
                    "Acompanhe quando o cliente abre a proposta",
                    "Notificações automáticas no WhatsApp",
                    "Propostas interativas e personalizadas",
                    "Envio fácil e profissional para clientes",
                  ].map((feature, index) => (
                    <p key={index} className="flex items-center text-gray-700">
                      <FaCheck className="text-[#0b2a41] flex-shrink-0 w-4 h-4 mr-4" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Bronze */}
              <div className="bg-gray-100  border-[#CD7F32] rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Bronze</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                  R$ 89,90
                </p>
                <span className="text-gray-500 text-sm">
                  por corretor (5 corretores)
                </span>

                <button className="cursor-pointer mt-4 w-full bg-[#CD7F32] text-white font-semibold py-2 rounded-md border border-[#B5651D] hover:bg-[#B5651D] transition">
                  Fale com especialista
                </button>

                <div className="mt-6 space-y-2 text-left">
                  {[
                    "Dashboard com histórico de propostas",
                    "Envio ilimitado de propostas",
                    "Integração com WhatsApp para follow-up",
                    "Acompanhamento detalhado das interações",
                  ].map((feature, index) => (
                    <p key={index} className="flex items-center text-gray-700">
                      <FaCheck className="text-[#0b2a41] flex-shrink-0 w-4 h-4 mr-4" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Prata */}
              <div className="bg-gray-100  border-gray-400 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Prata</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                  R$ 79,90
                </p>
                <span className="text-gray-500 text-sm">
                  por corretor (10 corretores)
                </span>

                <button className="cursor-pointer mt-4 w-full bg-gray-400 text-white font-semibold py-2 rounded-md border border-gray-500 hover:bg-gray-500 transition">
                  Fale com especialista
                </button>

                <div className="mt-6 space-y-2 text-left">
                  {[
                    "Todos os benefícios do plano Bronze",
                    "Suporte especializado para equipe",
                    "Organização avançada por corretor",
                  ].map((feature, index) => (
                    <p key={index} className="flex items-center text-gray-700">
                      <FaCheck className="text-[#0b2a41] flex-shrink-0 w-4 h-4 mr-4" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Ouro */}
              <div className="bg-gray-100  border-[#ddad31] rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Ouro</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                  R$ 66,45
                </p>
                <span className="text-gray-500 text-sm">
                  por corretor (15 corretores)
                </span>

                <button className="cursor-pointer mt-4 w-full bg-[#ddad31] text-white font-semibold py-2 rounded-md border border-[#ddad31] hover:bg-[#b78c1f] transition">
                  Fale com especialista
                </button>

                <div className="mt-6 space-y-2 text-left">
                  {[
                    "Todos os benefícios do plano Prata",
                    "Treinamento personalizado para equipe",
                    "Relatórios de performance detalhados",
                  ].map((feature, index) => (
                    <p key={index} className="flex items-center text-gray-700">
                      <FaCheck className="text-[#0b2a41] flex-shrink-0 w-4 h-4 mr-4" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Diamante */}
              <div className="bg-gray-100  border-[#00BFFF] rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Diamante
                </h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                  Consulte
                </p>
                <span className="text-gray-500 text-sm text-nowrap">
                  Planos personalizados
                </span>

                <button className="cursor-pointer mt-4 w-full bg-[#00BFFF] text-white font-semibold py-2 rounded-md border border-[#009ACD] hover:bg-[#009ACD] transition">
                  Fale com especialista
                </button>

                <p className="text-gray-700 mt-4">
                  Consultoria personalizada, integração avançada e suporte
                  premium.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
