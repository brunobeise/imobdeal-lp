import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o ImobDeal - Plataforma de Propostas Imobiliárias",
  description: "Conheça a história do ImobDeal, a plataforma que revoluciona a gestão de propostas imobiliárias. Fundada por profissionais com vasta experiência no mercado imobiliário.",
  keywords: [
    "sobre imobdeal",
    "história imobdeal",
    "empresa propostas imobiliárias",
    "fundadores imobdeal",
    "missão imobiliária",
    "visão corretor imóveis",
    "equipe plataforma imobiliária",
    "software brasileiro imóveis"
  ],
  openGraph: {
    title: "Sobre o ImobDeal - Plataforma de Propostas Imobiliárias",
    description: "Conheça a história e missão do ImobDeal, a plataforma que revoluciona a gestão de propostas imobiliárias.",
    url: "https://imobdeal.com.br/sobre",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "Sobre o ImobDeal",
      },
    ],
  },
  alternates: {
    canonical: "https://imobdeal.com.br/sobre",
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
