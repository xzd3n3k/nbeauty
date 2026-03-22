import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Nbeauty Care | OC Rozkvět Brno",
  description:
    "Vaše místo pro krásu, relaxaci a péči o tělo v OC Rozkvět Brno. Thajské masáže, kosmetika, Head Spa, prodlužování řas, permanentní make-up, kadeřnictví a mnoho dalšího.",
  keywords: [
    "beauty salon Brno",
    "thajská masáž Brno",
    "kosmetika Brno",
    "head spa Brno",
    "prodlužování řas Brno",
    "OC Rozkvět",
    "nbeauty care",
  ],
  openGraph: {
    title: "Nbeauty Care | OC Rozkvět Brno",
    description:
      "Vaše místo pro krásu, relaxaci a péči o tělo v OC Rozkvět Brno.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${cormorant.variable} ${lato.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
