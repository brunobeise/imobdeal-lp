import type { Metadata } from "next";
import Script from "next/script";
import BusinessStructuredData from "@/components/BusinessStructuredData";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import FacebookPixelAdvanced from "@/components/FacebookPixelAdvanced";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import "../assets/fonts/font.css";
import WhatsAppButton from "@/components/WhatsappButton";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default:
      "ImobDeal — CRM Imobiliário Completo | Sua Imobiliária no Próximo Nível",
    template: "%s | ImobDeal — CRM Imobiliário",
  },
  description:
    "O CRM imobiliário completo para gestores e corretores. Propostas inteligentes, funis de venda, dados automáticos, IA integrada e gestão de equipe — tudo em um só lugar. Teste grátis.",
  keywords: [
    "CRM imobiliário",
    "software imobiliário",
    "gestão de imobiliária",
    "corretor de imóveis",
    "plataforma imobiliária",
    "propostas imobiliárias",
    "funil de vendas imobiliário",
    "sistema para corretor",
    "dados automáticos imobiliária",
    "IA para corretores",
    "gestão de equipe imobiliária",
    "software para imobiliárias",
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
      "ImobDeal — CRM Imobiliário Completo | Sua Imobiliária no Próximo Nível",
    description:
      "O CRM imobiliário completo. Propostas inteligentes, funis de venda, dados automáticos, IA integrada e gestão de equipe. Teste grátis.",
    url: "https://imobdeal.com.br",
    siteName: "ImobDeal",
    images: [
      {
        url: "/imobDeal.png",
        width: 1200,
        height: 630,
        alt: "ImobDeal — CRM Imobiliário Completo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImobDeal — CRM Imobiliário Completo",
    description:
      "Propostas inteligentes, funis de venda, dados automáticos, IA integrada e gestão de equipe. Teste grátis.",
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18077235039"
          strategy="afterInteractive"
        />
        <Script
          id="google-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18077235039');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PNDWZ9D9');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNDWZ9D9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
