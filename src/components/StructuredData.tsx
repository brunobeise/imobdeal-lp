import Script from 'next/script'

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImobDeal",
    "url": "https://imobdeal.com.br",
    "logo": "https://imobdeal.com.br/imobDeal.png",
    "description": "CRM imobiliário completo para imobiliárias com equipe de corretores",
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
    "screenshot": "https://imobdeal.com.br/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "ImobDeal"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "569",
      "priceCurrency": "BRL",
      "offerCount": "1",
      "description": "Plano Imobiliária a partir de R$ 569/mês. O valor varia conforme o número de usuários e os módulos ativos."
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
      "Roleta de leads com distribuição automática",
      "Integração com portais de anúncio",
      "Aplicativo nativo iOS e Android"
    ]
  }

  /* O FAQPage saiu daqui: as perguntas precisam estar visíveis na página
     para o Google aceitar a marcação, e essas três não estavam. Quem publica
     o schema agora é o componente Faq, a partir do texto que ele renderiza. */

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
    </>
  )
}
