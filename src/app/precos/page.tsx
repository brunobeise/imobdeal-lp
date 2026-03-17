import PricingPlans from "@/components/PricingPlans";
import FreeTrialButton from "@/components/FreeTrialButton";
import HeroBackground from "@/components/HeroBackground";
import { MdHeadsetMic, MdEmail } from "react-icons/md";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Precos({ searchParams }: PageProps) {
  const params = await searchParams;
  const persona = params.para === "corretor" ? "corretor" as const : "gestor" as const;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Investimento transparente
          </h1>
          <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto">
            Sem surpresas. Teste grátis por 7 dias, cancele quando quiser.
          </p>
          <div className="mt-8">
            <FreeTrialButton
              variant="primary"
              size="large"
              source="precos_hero"
              showBlackNovemberBadge={false}
              className="!bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold"
            >
              Começar Teste Grátis
            </FreeTrialButton>
          </div>
        </div>
      </section>

      {/* Pricing component */}
      <PricingPlans persona={persona} />

      {/* FAQ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Perguntas frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Posso testar antes de pagar?",
                a: "Sim! Você tem 7 dias de teste grátis com acesso completo a todas as funcionalidades. Setup em 5 minutos.",
              },
              {
                q: "Como funciona o cancelamento?",
                a: "Você pode cancelar a qualquer momento direto na plataforma. Sem multas, sem burocracia.",
              },
              {
                q: "Posso mudar de plano depois?",
                a: "Sim, você pode fazer upgrade ou downgrade a qualquer momento. A cobrança será ajustada proporcionalmente.",
              },
              {
                q: "Os módulos financeiro e site são obrigatórios?",
                a: "Não. São módulos adicionais contratados separadamente, somente se você precisar.",
              },
              {
                q: "O que são os tokens de IA?",
                a: "Tokens são usados para funcionalidades de inteligência artificial como cadastro por áudio, chat com IA e análise financeira. O consumo varia conforme o uso.",
              },
              {
                q: "Qual a forma de pagamento?",
                a: "Cartão de crédito, boleto bancário ou PIX via ASAAS. Cobrança mensal automática.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform duration-200 text-lg">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Precisa de ajuda para escolher?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Nossa equipe está pronta para entender sua operação e recomendar o melhor plano.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <MdHeadsetMic size={18} />
              Falar com consultor
            </a>
            <a
              href="mailto:contato@imobdeal.com.br"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              <MdEmail size={18} />
              contato@imobdeal.com.br
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
