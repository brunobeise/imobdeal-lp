import { CheckCRMButton, PartnershipButton, ContactButton } from "@/components/WhatsAppIntegrationButtons";

export default function Integracoes() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Integre o ImobDeal com seu{" "}
            <span className="text-secondary">CRM</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Automatize seu fluxo de trabalho e economize horas do seu dia
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            O cadastro dos imóveis é o processo que mais pode demorar no seu dia
            a dia. Com nossas integrações, você importa todos os dados
            diretamente do seu CRM e cria propostas profissionais em segundos,
            sem retrabalho.
          </p>
        </div>
      </section>

      {/* Benefícios da Integração */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Por que integrar seu CRM?
            </h2>
            <p className="text-lg text-gray-600">
              Transforme sua rotina e aumente sua produtividade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-xl font-semibold text-primary mb-3">
                Economize até 80% do tempo
              </h3>
              <p className="text-gray-600">
                Não perca mais tempo digitando dados que já existem no seu CRM.
                Importe tudo automaticamente e foque no que importa: vender.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Dados sempre atualizados
              </h3>
              <p className="text-gray-600">
                Mantenha sincronização em tempo real entre seu CRM e o ImobDeal.
                Qualquer alteração é refletida automaticamente.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Zero erros de digitação
              </h3>
              <p className="text-gray-600">
                Elimine erros humanos na transferência de dados. Propostas mais
                precisas geram mais confiança dos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Seu CRM já está integrado?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Já temos integrações com os principais CRMs do mercado imobiliário.
            Se o seu ainda não estiver na lista, desenvolvemos a integração para
            você!
          </p>

          <CheckCRMButton className="bg-secondary hover:bg-[#e6961f] text-primary text-lg font-bold px-8 py-4 rounded-lg transition-colors mb-4">
            Consultar Meu CRM
          </CheckCRMButton>

          <p className="text-sm text-gray-500">Resposta em até 2 horas úteis</p>
        </div>
      </section>

      {/* Como Funciona a Integração */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Como funciona a integração?
            </h2>
            <p className="text-lg text-gray-600">
              Processo simples e rápido, sem complicações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Passo 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Contato Inicial
              </h3>
              <p className="text-gray-600 text-sm">
                Entre em contato conosco informando qual CRM você utiliza
              </p>
            </div>

            {/* Passo 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Análise Técnica
              </h3>
              <p className="text-gray-600 text-sm">
                Nossa equipe analisa a melhor forma de integrar com seu sistema
              </p>
            </div>

            {/* Passo 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Desenvolvimento
              </h3>
              <p className="text-gray-600 text-sm">
                Desenvolvemos e testamos a integração com total segurança
              </p>
            </div>

            {/* Passo 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Ativação
              </h3>
              <p className="text-gray-600 text-sm">
                Sua integração fica pronta e você já pode usar imediatamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção para Empresas e CRMs */}
      <section className="py-16 px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Você é uma empresa ou CRM?
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Se você desenvolve ou oferece soluções CRM para o mercado
            imobiliário, vamos conversar sobre uma parceria estratégica!
            Integrar com o ImobDeal pode agregar muito valor aos seus clientes e
            expandir o alcance da sua solução.
          </p>

          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Benefícios da parceria:
            </h3>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-secondary mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Agregue valor à sua solução CRM
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-secondary mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Ofereça propostas profissionais aos seus clientes
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-secondary mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Documentação técnica completa
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-secondary mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Suporte técnico dedicado
              </li>
            </ul>
          </div>

          <PartnershipButton className="bg-secondary hover:bg-[#e6961f] text-primary text-lg font-bold px-8 py-4 rounded-lg transition-colors">
            Quero ser Parceiro
          </PartnershipButton>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Pronto para integrar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fale conosco agora e descubra como podemos integrar o ImobDeal com
            seu CRM para turbinar suas vendas!
          </p>

          <ContactButton className="bg-primary hover:bg-primary/90 text-white text-lg font-bold px-8 py-4 rounded-lg transition-colors">
            Falar no WhatsApp
          </ContactButton>
        </div>
      </section>
    </>
  );
}
