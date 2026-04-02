import type { Metadata } from "next";
import "./globals.css";
import { generatePersonJsonLd } from "@/lib/seo";

const baseUrl = "https://almeida-prado.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Renato de Faria e Almeida Prado - Conselheiro do Futuro & AI Thinker",
    template: "%s | Renato de Faria e Almeida Prado",
  },
  description:
    "Conselheiro do Futuro, Estrategista, AI Thinker, Cofundador 10XMentorAI & imensIAH. Especialista em NeoGovernança, IA e Estratégia Empresarial.",
  keywords: [
    "NeoGovernança",
    "Governança Corporativa",
    "Conselho de Administração",
    "Conselheiro",
    "Inteligência Artificial",
    "IA Estratégica",
    "AI Board Advisory",
    "Estratégia Empresarial",
    "Liderança",
    "ESG",
    "Sustentabilidade",
    "10XMentorAI",
    "imensIAH",
    "Renato Almeida Prado",
  ],
  authors: [{ name: "Renato de Faria e Almeida Prado" }],
  creator: "Renato de Faria e Almeida Prado",
  publisher: "Almeida Prado Conselhos Empresariais",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "Renato de Faria e Almeida Prado",
    title: "Renato de Faria e Almeida Prado - Conselheiro do Futuro & AI Thinker",
    description:
      "Conselheiro do Futuro, Estrategista, AI Thinker, Cofundador 10XMentorAI & imensIAH. Especialista em NeoGovernança, IA e Estratégia Empresarial.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Renato de Faria e Almeida Prado - Conselheiro do Futuro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renato de Faria e Almeida Prado - Conselheiro do Futuro & AI Thinker",
    description:
      "Conselheiro do Futuro, Estrategista, AI Thinker, Cofundador 10XMentorAI & imensIAH.",
    images: ["/images/og-default.jpg"],
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
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generatePersonJsonLd();

  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
