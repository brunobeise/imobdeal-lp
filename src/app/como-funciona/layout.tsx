import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links Inteligentes - Como Funciona o ImobDeal",
  description: "Envie propostas, portfólios e análises por links rastreáveis. Saiba em tempo real quem abriu, o que olhou e por quanto tempo — e receba alertas no WhatsApp.",
  keywords: [
    "links inteligentes imobiliários",
    "tracking propostas imobiliárias",
    "rastrear propostas imóveis",
    "notificação whatsapp proposta",
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
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "Links Inteligentes do ImobDeal",
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
