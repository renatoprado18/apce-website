import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renato de Faria e Almeida Prado - Conselheiro do Futuro & AI Thinker",
  description: "Conselheiro do Futuro, Estrategista, AI Thinker, Co-fundador e Mentor da 10XMentorAI. Especialista em NeoGovernança, IA e Estratégia Empresarial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

