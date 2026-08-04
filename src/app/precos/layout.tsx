import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços — ImobDeal CRM Imobiliário",
  description: "CRM completo para imobiliárias a partir de R$ 569/mês. Roleta de leads, dashboards, integração com portais e site sob medida.",
  keywords: [
    "CRM imobiliário preço",
    "planos imobdeal",
    "software imobiliário preço",
    "CRM corretor de imóveis",
    "sistema imobiliário custo",
    "plataforma imobiliária valor",
  ],
  openGraph: {
    title: "Preços — ImobDeal CRM Imobiliário",
    description: "CRM completo para imobiliárias a partir de R$ 569/mês.",
    url: "https://imobdeal.com.br/precos",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "Preços ImobDeal — CRM Imobiliário Completo",
      },
    ],
  },
  alternates: {
    canonical: "https://imobdeal.com.br/precos",
  },
};

export default function PrecosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
