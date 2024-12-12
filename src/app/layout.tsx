// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Orpheo Jurídico | Soluções Jurídicas Inteligentes",
  description:
    "Transformação digital para o setor jurídico. Controladoria, desenvolvimento de sistemas e automação de processos jurídicos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
