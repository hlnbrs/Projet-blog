import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hélène Barroso — Agent immobilière à Toulouse",
    template: "%s | Hélène Barroso Immobilier Toulouse",
  },
  description:
    "Hélène Barroso, agente immobilière indépendante à Toulouse. Accompagnement personnalisé pour vendre ou acheter votre bien. Expertise bancaire, mandats en exclusivité.",
  metadataBase: new URL("https://helenebarroso.fr"),
  openGraph: {
    siteName: "Hélène Barroso Immobilier",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
