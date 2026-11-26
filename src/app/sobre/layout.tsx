import { Metadata } from "next";

const title = "Sobre o ImobDeal";
const description =
  "Conheça o ImobDeal, o CRM imobiliário de Santa Cruz do Sul (RS) construído junto com imobiliárias clientes, com atendimento direto com quem desenvolve o sistema.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | ImobDeal CRM Imobiliário`,
    description,
    url: "https://imobdeal.com.br/sobre",
    images: [
      {
        url: "https://imobdeal.com.br/og-image.jpg",
        secureUrl: "https://imobdeal.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Sobre o ImobDeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ImobDeal CRM Imobiliário`,
    description,
    images: ["https://imobdeal.com.br/og-image.jpg"],
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
