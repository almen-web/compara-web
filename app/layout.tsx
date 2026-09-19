import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ComparaWeb - Compara precios y encuentra ofertas",
    template: "%s | ComparaWeb",
  },
  description:
    "Compara precios, tiendas y ofertas de productos de tecnología en un solo lugar.",
  keywords: [
    "comparador de precios",
    "comparar precios",
    "ofertas",
    "productos baratos",
    "tecnología",
    "móviles",
    "portátiles",
    "gaming",
    "audio",
  ],
  authors: [
    {
      name: "ComparaWeb",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "WT84Ax7n58IQFY3yhed_mAawuft4aT_LczCljPlYISA",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}