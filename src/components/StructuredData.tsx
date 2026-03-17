import Script from 'next/script'

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImobDeal",
    "url": "https://imobdeal.com.br",
    "logo": "https://imobdeal.com.br/imobDeal.png",
    "description": "CRM imobiliário completo para imobiliárias e corretores autônomos",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-21-60537-1",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://wa.me/51995529578"
    ]
  }

  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ImobDeal",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "CRM imobiliário completo com gestão de equipe, propostas interativas, IA e módulo financeiro. A plataforma soberana para imobiliárias e corretores.",
    "url": "https://imobdeal.com.br",
    "screenshot": "https://imobdeal.com.br/imobDeal.png",
    "author": {
      "@type": "Organization",
      "name": "ImobDeal"
    },
    "offers": {
      "@type": "Offer",
      "price": "197",
      "priceCurrency": "BRL",
      "description": "Plano Autônomo a partir de R$ 197/mês. Teste grátis por 7 dias."
    },
    "featureList": [
      "CRM completo com funis de venda",
      "Propostas e portfólios interativos",
      "Cadastro de imóveis por áudio com IA",
      "Chat com IA integrado",
      "Gestão de equipe e ranking",
      "Módulo financeiro",
      "Assinatura eletrônica",
      "Dashboard gerencial com KPIs",
      "Integração com WhatsApp"
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona o ImobDeal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O ImobDeal é um CRM imobiliário completo que centraliza gestão de equipe, propostas interativas, cadastro por áudio com IA, módulo financeiro e muito mais em uma única plataforma."
        }
      },
      {
        "@type": "Question", 
        "name": "É possível testar gratuitamente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Oferecemos teste grátis por 7 dias com acesso completo a todas as funcionalidades, sem necessidade de cartão de crédito."
        }
      },
      {
        "@type": "Question",
        "name": "Para quem é indicado o ImobDeal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O ImobDeal é ideal para gestores de imobiliárias que querem controle total da operação e para corretores autônomos que desejam profissionalizar seus processos com IA e propostas interativas."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareData),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  )
}
