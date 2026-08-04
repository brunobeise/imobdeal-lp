"use client";

import Script from "next/script";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

/* ---------------------------------------------------------------------------
 * Perguntas frequentes.
 * Serve a dois públicos ao mesmo tempo: o gestor que chegou até o preço e
 * ainda tem objeção, e os buscadores/assistentes de IA — daí o JSON-LD de
 * FAQPage, que precisa espelhar exatamente o texto renderizado.
 *
 * Só entra pergunta cuja resposta a LP sustenta. Nada de inventar número.
 * --------------------------------------------------------------------------- */

interface QA {
  q: string;
  a: string;
}

const faqs: QA[] = [
  {
    q: "Quanto custa o ImobDeal?",
    a: "O plano Imobiliária começa em R$ 569 por mês. O valor final depende do número de usuários e dos módulos que a sua imobiliária ativar. Não existe versão básica com recurso bloqueado: o que muda é o tamanho da operação, não o que o sistema faz. O especialista fecha o número exato na conversa, depois de entender como a sua equipe trabalha.",
  },
  {
    q: "Preciso de outro sistema para receber e distribuir os leads dos portais?",
    a: "Não. A roleta de leads é nativa do ImobDeal. O lead do portal entra já como negócio aberto e é distribuído automaticamente para o corretor da vez, seguindo as regras que você definir por equipe, plantão, tipo de imóvel ou região. É comum a imobiliária cancelar a assinatura do sistema de captação que pagava à parte ao migrar para o ImobDeal.",
  },
  {
    q: "Com quais portais de anúncio o ImobDeal integra?",
    a: "OLX, ImovelWeb e Chaves na Mão. O contato preenchido no portal cai direto no sistema, sem exportar planilha e sem ninguém transcrever nada. Como a origem fica registrada no lead, você compara os portais por negócio fechado e não por volume de contatos.",
  },
  {
    q: "Os leads das campanhas no Facebook e no Instagram entram automaticamente?",
    a: "Sim. A integração com o Meta Ads é nativa. Você conecta a conta uma vez e todo formulário preenchido na campanha entra no ImobDeal em segundos, já distribuído pela roleta e com a campanha de origem registrada no negócio. Não precisa exportar planilha do Gerenciador nem usar ferramenta de automação no meio.",
  },
  {
    q: "Como funciona a migração da minha base de imóveis e contatos?",
    a: "A implantação é conduzida pela nossa equipe. Nós subimos a base de imóveis e contatos, configuramos o funil do jeito que a sua imobiliária trabalha e treinamos o time até a operação rodar por conta própria. Você não recebe um login e um manual para se virar sozinho.",
  },
  {
    q: "Minha equipe vai conseguir usar? A maioria dos corretores tem dificuldade com sistema.",
    a: "É a objeção mais comum e por isso a implantação inclui treinamento da equipe. O corretor trabalha principalmente pelo aplicativo, que é nativo para iOS e Android, e recebe o lead com aviso na hora em que ele entra. O gestor acompanha pelo painel quem respondeu e quem deixou esfriar, o que faz a adoção acontecer na prática e não só no papel.",
  },
  {
    q: "O ImobDeal serve para imobiliária de que tamanho?",
    a: "O sistema foi desenhado para imobiliárias com equipe de corretores, onde o gestor precisa distribuir leads, acompanhar o funil e cobrar meta. Funciona tanto para operações pequenas, de poucos corretores, quanto para times maiores com várias equipes e regras de distribuição diferentes por equipe.",
  },
  {
    q: "O site da imobiliária está incluso na mensalidade?",
    a: "O site é um projeto à parte, cobrado uma vez e parcelável, sem acréscimo na mensalidade de quem já é cliente. Ele não é template: cada cliente recebe um site desenvolvido do zero com a identidade visual da própria marca, integrado ao CRM, com os imóveis publicados direto do sistema e os leads do site caindo na roleta.",
  },
  {
    q: "O que é a Central Operacional?",
    a: "É uma tela feita para ficar rodando no telão do escritório, com a marca da sua imobiliária. Ela alterna sozinha entre pipeline ao vivo, meta do mês, conversão entre etapas e as últimas vendas realizadas. Quando um negócio é fechado, o time inteiro vê no mesmo segundo, sem ninguém precisar avisar no grupo.",
  },
  {
    q: "Consigo ver quanto a minha imobiliária vai faturar no mês?",
    a: "Sim. O forecast e os dashboards se montam sozinhos conforme a equipe usa o CRM no dia a dia, sem ninguém exportar dados para planilha. O painel compara o realizado com o dia do mês e avisa quando o time está abaixo do ritmo necessário para bater a meta, enquanto ainda dá tempo de reagir.",
  },
  {
    q: "Como é o suporte?",
    a: "O atendimento é direto com quem desenvolve o sistema e conhece o mercado imobiliário, por WhatsApp e chat. Sem fila de chamado e sem atendente lendo script. Boa parte do que o ImobDeal faz hoje nasceu de um pedido de imobiliária cliente, então o que você pede é avaliado para entrar no produto.",
  },
  {
    q: "Existe fidelidade ou multa de cancelamento?",
    a: "Não. Você pode cancelar a qualquer momento, sem multa e sem burocracia.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Cartão de crédito, boleto bancário ou PIX, com cobrança mensal automática.",
  },
  {
    q: "Consigo conhecer o sistema antes de contratar?",
    a: "Sim, e é assim que a maioria começa. Um especialista faz uma demonstração com o cenário da sua imobiliária, mostra o sistema rodando e tira as dúvidas antes de qualquer contratação. Se preferir ouvir de quem já usa, os sites dos nossos clientes estão nesta página: entre em contato com qualquer um deles e pergunte.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-surface-light py-20 md:py-28">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight text-balance">
            Perguntas frequentes
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-4 text-pretty">
            O que os gestores costumam perguntar antes da primeira conversa.
          </p>
        </div>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left cursor-pointer group"
                  >
                    <span className="text-[0.95rem] md:text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                    <MdAdd
                      size={20}
                      className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-primary" : ""
                      }`}
                    />
                  </button>
                </h3>

                {/* Grid animado: abre sem precisar medir a altura no JS */}
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-[0.95rem] text-gray-600 leading-relaxed pb-6 pr-10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
