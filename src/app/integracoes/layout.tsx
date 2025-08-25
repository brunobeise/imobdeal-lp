import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrações ImobDeal - Conecte com WhatsApp e Outras Plataformas",
  description: "Descubra as integrações do ImobDeal com WhatsApp, CRM e outras ferramentas. Envie propostas diretamente e integre com seus sistemas favoritos.",
  keywords: [
    "integrações imobdeal",
    "whatsapp propostas",
    "integração crm imobiliário",
    "conectar sistemas imóveis",
    "api propostas imobiliárias",
    "automação corretor",
    "ferramentas integradas",
    "plataforma conectada"
  ],
  openGraph: {
    title: "Integrações ImobDeal - Conecte com WhatsApp e Outras Plataformas",
    description: "Descubra as integrações do ImobDeal. Conecte com WhatsApp, CRM e outras ferramentas para automatizar seu processo.",
    url: "https://imobdeal.com.br/integracoes",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "Integrações ImobDeal",
      },
    ],
  },
  alternates: {
    canonical: "https://imobdeal.com.br/integracoes",
  },
};

export default function IntegracoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
