import Image from "next/image";
import ProposalCTA from "@/components/ProposalCTA";
import FreeTrialButton from "@/components/FreeTrialButton";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import WhatsAppButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <main className="w-full flex flex-col overflow-x-hidden">
          {/* Hero Section */}
          <section className="bg-primary text-white py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Como Funciona o ImobDeal
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Descubra como criar propostas profissionais e acompanhar seus clientes 
                de forma inteligente em poucos minutos
              </p>
              <FreeTrialButton
                variant="primary"
                size="large" 
                source="como_funciona_hero"
              >
                Comece seu Teste Grátis de 3 Dias
              </FreeTrialButton>
            </div>
          </section>
          
          <section className="features z-10 md:py-6">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-2xl text-gray-900 mb-10">
                O jeito mais inteligente de enviar e acompanhar propostas
                imobiliárias.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <Image
                    width={50}
                    height={50}
                    src="/ideia.svg"
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
                    src="/sino.svg"
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
                    src="/chart.svg"
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
                    src="/house.svg"
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
                    src="/file2.svg"
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
                    src="/time.svg"
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
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Exemplo de Link do Portfólio
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Envie um link como este para o seu cliente acessar o
                    portfólio completo:
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 text-sm break-words font-mono text-primary shadow-inner">
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
                    src="/grafico-portfolio.png"
                    alt="Exemplo de Portfólio"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <Image
                  width={320}
                  height={570}
                  src="/portfolio.png"
                  alt="Exemplo de Portfólio"
                  className="rounded-lg shadow-md"
                />
              </div>
              
              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Pronto para Impressionar seus Clientes?
                </h3>
                <p className="text-gray-600 mb-6">
                  Crie portfólios profissionais e acompanhe cada interação em tempo real
                </p>
                <FreeTrialButton
                  variant="primary"
                  size="large"
                  source="como_funciona_portfolio"
                >
                  Teste Grátis por 3 Dias
                </FreeTrialButton>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
              {/* Texto explicativo */}
              <div className="md:w-1/2 md:text-left">
                <h2 className="text-3xl font-bold text-primary">
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
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white font-bold rounded-full">
                      1
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Você envia a proposta personalizada para o cliente.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white font-bold rounded-full">
                      2
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Nosso sistema rastreia quando a proposta é aberta e
                      registra a interação do cliente.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white font-bold rounded-full">
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
            
            {/* CTA Section */}
            <div className="bg-primary text-white py-16 mt-12">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Nunca Mais Perca uma Oportunidade
                </h3>
                <p className="text-xl mb-8 text-white/90">
                  Saiba exatamente quando seus clientes abrem suas propostas e tome ação no momento certo
                </p>
                <FreeTrialButton
                  variant="secondary"
                  size="large"
                  source="como_funciona_tracking"
                >
                  Comece a Acompanhar seus Clientes Agora
                </FreeTrialButton>
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
              
              {/* Final CTA */}
              <div className="text-center mt-16">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Pronto para Revolucionar suas Vendas?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Junte-se a centenas de corretores que já usam o ImobDeal para 
                  criar propostas profissionais e acompanhar clientes de forma inteligente
                </p>
                <div className="space-y-4">
                  <FreeTrialButton
                    variant="primary"
                    size="large"
                    className="px-10 py-4 text-xl"
                    source="como_funciona_final_cta"
                  >
                    Teste Grátis por 3 Dias
                  </FreeTrialButton>
                  <p className="text-sm text-gray-500">
                    Sem cartão de crédito • Cancele a qualquer momento • Suporte completo
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <WhatsAppButton />
    </>
  );
}
