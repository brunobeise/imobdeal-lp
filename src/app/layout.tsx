import type { Metadata } from "next";

import "./globals.css";
import "../assets/fonts/font.css"

export const metadata: Metadata = {
  title: "Imobdeal",
  description: "Propostas imobiliárias que convertem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
