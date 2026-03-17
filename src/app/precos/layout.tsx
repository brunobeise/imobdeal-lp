import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços — ImobDeal CRM Imobiliário",
  description: "Planos a partir de R$ 197/mês. CRM completo para imobiliárias e corretores autônomos. Teste grátis por 7 dias, setup em 5 minutos.",
  keywords: [
    "CRM imobiliário preço",
    "planos imobdeal",
    "software imobiliário preço",
    "CRM corretor de imóveis",
    "sistema imobiliário custo",
    "plataforma imobiliária valor",
    "teste grátis CRM imobiliário",
  ],
  openGraph: {
    title: "Preços — ImobDeal CRM Imobiliário",
    description: "Planos a partir de R$ 197/mês. Teste grátis por 7 dias, setup em 5 minutos.",
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
