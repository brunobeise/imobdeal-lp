import Script from 'next/script'

export default function BusinessStructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ImobDeal",
    "image": "https://imobdeal.com.br/imobDeal.png",
    "description": "Software para criação e acompanhamento de propostas imobiliárias. Simplifique seu processo de vendas sem burocracia.",
    "url": "https://imobdeal.com.br",
    "telephone": "+55-21-60537-1",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "Brasil"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.9068",
      "longitude": "-43.1729"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-21-60537-1",
      "contactType": "customer service",
      "availableLanguage": ["Portuguese"],
      "contactOption": "TollFree"
    },
    "sameAs": [
      "https://wa.me/5521605371"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços ImobDeal",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software para Propostas Imobiliárias",
            "description": "Criação e acompanhamento de propostas imobiliárias profissionais"
          }
        }
      ]
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://imobdeal.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Preços",
        "item": "https://imobdeal.com.br/precos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Como Funciona",
        "item": "https://imobdeal.com.br/como-funciona"
      }
    ]
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Criação de Propostas Imobiliárias",
    "description": "Serviço completo para criação, envio e acompanhamento de propostas imobiliárias profissionais",
    "provider": {
      "@type": "Organization",
      "name": "ImobDeal",
      "url": "https://imobdeal.com.br"
    },
    "serviceType": "Software como Serviço (SaaS)",
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "audience": {
      "@type": "BusinessAudience",
      "name": "Corretores de Imóveis e Imobiliárias"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos ImobDeal",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Teste Gratuito",
          "description": "3 dias de teste gratuito",
          "price": "0",
          "priceCurrency": "BRL"
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
    </>
  )
}
