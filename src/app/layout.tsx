import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import BusinessStructuredData from "@/components/BusinessStructuredData";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import FacebookPixelAdvanced from "@/components/FacebookPixelAdvanced";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButton";
import Providers from "@/components/Providers";

/* Self-hosted pelo Next: sem ida ao fonts.googleapis.com, com preload e
   swap. Antes vinha por @import dentro do CSS, o que criava uma cadeia
   bloqueante (HTML → CSS → CSS do Google → woff2) antes do primeiro texto. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "ImobDeal | CRM Imobiliário Completo para Quem Quer Resultado",
    template: "%s | ImobDeal CRM Imobiliário",
  },
  description:
    "O CRM imobiliário completo para gestores e corretores que querem resultado. Roleta de leads, dashboards automáticos, funis de venda, IA integrada e gestão de equipe, tudo em um só lugar.",
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
      "ImobDeal | CRM Imobiliário Completo para Quem Quer Resultado",
    description:
      "O CRM imobiliário completo. Roleta de leads nativa, funis de venda, dados automáticos, IA integrada e gestão de equipe. Fale com um especialista.",
    url: "https://imobdeal.com.br",
    siteName: "ImobDeal",
    images: [
      {
        url: "https://imobdeal.com.br/og-image.jpg",
        secureUrl: "https://imobdeal.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "ImobDeal: CRM Imobiliário Completo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImobDeal | CRM Imobiliário Completo",
    description:
      "Roleta de leads nativa, funis de venda, dados automáticos, IA integrada e gestão de equipe. Fale com um especialista.",
    images: ["https://imobdeal.com.br/og-image.jpg"],
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
    other: {
      "facebook-domain-verification": "a0bhtabj6mp9fpq3q63gcybmoe67z3",
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Meta Pixel Script — lazyOnload: dispara depois do load, sem
            competir com a renderização. O PageView continua sendo enviado. */}
        <Script
          id="facebook-pixel"
          strategy="lazyOnload"
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
        {/* Google tag (gtag.js) — lazyOnload pelo mesmo motivo do Pixel: em
            afterInteractive o gtag sozinho custava ~780ms de main thread e
            entrava direto no TBT. Depois do load, o config e as conversões
            seguem funcionando. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18077235039"
          strategy="lazyOnload"
        />
        <Script
          id="google-gtag"
          strategy="lazyOnload"
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
          strategy="lazyOnload"
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
