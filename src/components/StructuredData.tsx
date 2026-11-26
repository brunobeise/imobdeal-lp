import Script from 'next/script'
import { ORGANIZATION_ID } from '@/components/BusinessStructuredData'

/* Schema do produto, só na home. A empresa (Organization) é global e vem do
   layout; aqui o software aponta para ela pelo @id.

   O FAQPage não fica aqui: as perguntas precisam estar visíveis na página
   para o Google aceitar a marcação. Quem publica o schema é o componente
   Faq, a partir do texto que ele renderiza. */

export default function StructuredData() {
  const softwareData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ImobDeal',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'CRM imobiliário',
    operatingSystem: 'Web, iOS, Android',
    inLanguage: 'pt-BR',
    description:
      'CRM imobiliário completo para imobiliárias com equipe de corretores: roleta de leads nativa, funis de venda, dashboards e forecast automáticos, integração com portais e Meta Ads, propostas interativas, módulo financeiro e aplicativo nativo.',
    url: 'https://imobdeal.com.br',
    screenshot: 'https://imobdeal.com.br/og-image.jpg',
    publisher: { '@id': ORGANIZATION_ID },
    featureList: [
      'CRM completo com funis de venda',
      'Roleta de leads com distribuição automática',
      'Integração com portais de anúncio',
      'Integração nativa com Meta Ads',
      'Dashboards, forecast e metas da equipe',
      'Propostas e portfólios interativos',
      'Cadastro de imóveis por áudio com IA',
      'Gestão de equipe e ranking',
      'Módulo financeiro',
      'Assinatura eletrônica',
      'Aplicativo nativo iOS e Android',
    ],
  }

  return (
    <Script
      id="software-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareData) }}
    />
  )
}
