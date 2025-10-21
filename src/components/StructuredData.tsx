import Script from 'next/script'

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImobDeal",
    "url": "https://imobdeal.com.br",
    "logo": "https://imobdeal.com.br/imobDeal.png",
    "description": "Plataforma para criação e acompanhamento de propostas imobiliárias",
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
    "description": "Software para criação e acompanhamento de propostas imobiliárias. Simplifique a criação de propostas sem burocracia.",
    "url": "https://imobdeal.com.br",
    "screenshot": "https://imobdeal.com.br/imobDeal.png",
    "author": {
      "@type": "Organization",
      "name": "ImobDeal"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Teste grátis por 3 dias"
    },
    "featureList": [
      "Criação de propostas imobiliárias",
      "Acompanhamento de visualizações",
      "Envio via WhatsApp",
      "Dashboard de análises",
      "Modelos personalizáveis"
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
          "text": "O ImobDeal simplifica a criação e o acompanhamento das suas propostas imobiliárias. Você pode criar propostas em segundos, enviá-las via WhatsApp e acompanhar quando seus clientes as visualizam."
        }
      },
      {
        "@type": "Question", 
        "name": "É possível testar gratuitamente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Oferecemos teste grátis por 3 dias sem necessidade de cartão de crédito."
        }
      },
      {
        "@type": "Question",
        "name": "Para quem é indicado o ImobDeal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O ImobDeal é ideal para corretores de imóveis, imobiliárias e profissionais do setor imobiliário que querem criar propostas profissionais e acompanhar o engajamento dos clientes."
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
