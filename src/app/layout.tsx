import type { Metadata } from "next";
import Script from "next/script";
import BusinessStructuredData from "@/components/BusinessStructuredData";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import FacebookPixelAdvanced from "@/components/FacebookPixelAdvanced";
import BlackNovemberBanner from "@/components/BlackNovemberBanner";

import "./globals.css";
import "../assets/fonts/font.css";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: {
    default:
      "ImobDeal - Envio de Propostas de Imóveis | Software para Corretores",
    template: "%s | ImobDeal - Envio de Propostas de Imóveis",
  },
  description:
    "Plataforma líder para envio de propostas de imóveis. Crie, envie e acompanhe propostas imobiliárias profissionais em segundos. Software completo para corretores e imobiliárias aumentarem vendas.",
  keywords: [
    "envio de propostas de imóveis",
    "propostas imobiliárias",
    "software imobiliário",
    "corretor de imóveis",
    "plataforma imobiliária",
    "gestão de propostas",
    "enviar proposta imóvel",
    "sistema para corretor",
    "CRM imobiliário",
    "automação imobiliária",
  ],
  authors: [{ name: "ImobDeal" }],
  creator: "ImobDeal",
  publisher: "ImobDeal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://imobdeal.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "ImobDeal - Envio de Propostas de Imóveis | Software para Corretores",
    description:
      "Plataforma líder para envio de propostas de imóveis. Crie, envie e acompanhe propostas imobiliárias profissionais em segundos.",
    url: "https://imobdeal.com.br",
    siteName: "ImobDeal",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "ImobDeal - Envio de Propostas de Imóveis",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImobDeal - Envio de Propostas de Imóveis",
    description:
      "Plataforma líder para envio de propostas de imóveis. Crie, envie e acompanhe propostas imobiliárias profissionais.",
    images: ["/imobDeal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1253769810303729', {
                external_id: 'imobdeal_visitor',
                em: 'auto',
                ph: 'auto'
              });
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <BusinessStructuredData />
        <MicrosoftClarity />
        <FacebookPixelAdvanced />
        {/* Meta Pixel NoScript */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1253769810303729&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <BlackNovemberBanner />
        {children}

        {/* Footer */}
        <footer className="bg-gray-50 py-12 px-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Link href={"/"}>
                <div className="flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://app.imobdeal.com.br/assets/static/imobDeal.CDKKpTq1.png"
                    alt="Logo imobdeal"
                  />
                  <p className="text-primary">
                    imob<span className="font-bold">Deal</span>
                  </p>
                </div>
              </Link>

              {/* Produto */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Produto</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/como-funciona"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Como Funciona
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/precos"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Preços
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/integracoes"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Integrações
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Suporte */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Suporte</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://wa.me/51995529578?text=Olá! Tenho dúvidas sobre o ImobDeal e preciso de ajuda."
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Dúvidas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://wa.me/5551995529578?text=Olá! Gostaria de falar sobre parcerias com o ImobDeal."
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Parcerias
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Empresa */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/sobre"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politica-privacidade"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Política de Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/termos-servico"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Termos de Serviço
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 mt-8 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 ImobDeal. Todos os direitos reservados. CNPJ
                62.081.400/0001-26
              </p>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
