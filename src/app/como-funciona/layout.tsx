import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Funciona o ImobDeal - Software para Propostas Imobiliárias",
  description: "Descubra como o ImobDeal funciona. Simplifique a criação e acompanhamento de propostas imobiliárias. Veja o passo a passo para criar propostas profissionais em segundos.",
  keywords: [
    "como funciona imobdeal",
    "criar propostas imobiliárias",
    "software propostas passo a passo",
    "tutorial corretor imóveis",
    "acompanhar propostas como",
    "sistema imobiliário tutorial",
    "enviar propostas whatsapp",
    "plataforma imobiliária guia"
  ],
  openGraph: {
    title: "Como Funciona o ImobDeal - Software para Propostas Imobiliárias",
    description: "Descubra como funciona a plataforma que simplifica a criação e acompanhamento de propostas imobiliárias.",
    url: "https://imobdeal.com.br/como-funciona",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "Como Funciona o ImobDeal",
      },
    ],
  },
  alternates: {
    canonical: "https://imobdeal.com.br/como-funciona",
  },
};

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
