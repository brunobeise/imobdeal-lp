import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links Inteligentes - Como Funciona o ImobDeal",
  description: "Envie propostas, portfólios e análises por links rastreáveis. Saiba em tempo real quem abriu, o que olhou e por quanto tempo, e receba o aviso no aplicativo.",
  keywords: [
    "links inteligentes imobiliários",
    "tracking propostas imobiliárias",
    "rastrear propostas imóveis",
    "notificação proposta imóvel",
    "link rastreável imobiliária",
    "como funciona imobdeal",
    "acompanhar propostas tempo real",
    "follow-up inteligente corretor"
  ],
  openGraph: {
    title: "Links Inteligentes - Como Funciona o ImobDeal",
    description: "Envie propostas por links rastreáveis. Saiba em tempo real quem abriu, o que olhou e quando agir.",
    url: "https://imobdeal.com.br/como-funciona",
    images: [
      {
        url: "https://imobdeal.com.br/og-image.jpg",
        secureUrl: "https://imobdeal.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Links Inteligentes do ImobDeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Links Inteligentes - Como Funciona o ImobDeal",
    description: "Envie propostas por links rastreáveis. Saiba em tempo real quem abriu, o que olhou e quando agir.",
    images: ["https://imobdeal.com.br/og-image.jpg"],
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
