import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços ImobDeal - Planos para Propostas Imobiliárias",
  description: "Confira os planos do ImobDeal para criação e acompanhamento de propostas imobiliárias. Teste grátis por 3 dias. Envio ilimitado de propostas. Preços acessíveis para corretores e imobiliárias.",
  keywords: [
    "preços propostas imobiliárias",
    "planos imobdeal",
    "software imobiliário preço",
    "corretor de imóveis preço",
    "sistema propostas custo",
    "plataforma imobiliária valor",
    "envio propostas ilimitado",
    "teste grátis corretor"
  ],
  openGraph: {
    title: "Preços ImobDeal - Planos para Propostas Imobiliárias",
    description: "Confira os planos do ImobDeal. Teste grátis por 3 dias, envio ilimitado de propostas e preços acessíveis para corretores.",
    url: "https://imobdeal.com.br/precos",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "Preços ImobDeal - Planos para Propostas Imobiliárias",
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
