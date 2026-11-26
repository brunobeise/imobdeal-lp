import Script from 'next/script'

/* ---------------------------------------------------------------------------
 * Dados estruturados globais (entram em todas as páginas pelo layout).
 *
 * Só o que vale para o site inteiro: quem é a empresa (Organization) e qual é
 * o site (WebSite, que ajuda o Google a mostrar "ImobDeal" como nome do site
 * no resultado). Breadcrumb não entra aqui: ele descreve o caminho de UMA
 * página, então cada página publica o seu.
 *
 * Sem LocalBusiness: o ImobDeal é software vendido para o Brasil inteiro, não
 * um ponto de atendimento físico. O endereço é o da sede (Santa Cruz do Sul).
 * --------------------------------------------------------------------------- */

export const ORGANIZATION_ID = 'https://imobdeal.com.br/#organization'

export default function BusinessStructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'ImobDeal',
    legalName: 'IMOBDEAL LTDA',
    taxID: '62.081.400/0001-26',
    url: 'https://imobdeal.com.br',
    logo: 'https://imobdeal.com.br/imobDeal.png',
    description:
      'CRM imobiliário para imobiliárias com equipe de corretores: roleta de leads, funis de venda, dashboards, integração com portais e aplicativo nativo.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Cruz do Sul',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-51-99730-6897',
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
    },
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ImobDeal',
    alternateName: 'ImobDeal CRM Imobiliário',
    url: 'https://imobdeal.com.br',
    inLanguage: 'pt-BR',
    publisher: { '@id': ORGANIZATION_ID },
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}
