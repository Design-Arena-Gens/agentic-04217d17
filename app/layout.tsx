import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: ['400', '600', '700']
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['300', '400', '600']
});

export const metadata: Metadata = {
  title: "AETERNUM - Haute Horlogerie Suisse",
  description: "Montres de luxe suisses - Collections exclusives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cinzel.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
