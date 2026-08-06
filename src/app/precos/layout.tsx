import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços",
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
    title: "Preços | ImobDeal CRM Imobiliário",
    description: "CRM completo para imobiliárias a partir de R$ 569/mês.",
    url: "https://imobdeal.com.br/precos",
    images: [
      {
        url: "https://imobdeal.com.br/og-image.jpg",
        secureUrl: "https://imobdeal.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Preços ImobDeal: CRM Imobiliário Completo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preços | ImobDeal CRM Imobiliário",
    description: "CRM completo para imobiliárias a partir de R$ 569/mês.",
    images: ["https://imobdeal.com.br/og-image.jpg"],
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
