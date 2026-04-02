import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases de Sucesso - Transformação e Impacto",
  description:
    "Conheça cases reais de NeoGovernança em ação: Santo Grau, Carambola e outras empresas que equilibram progresso econômico, conexão humana e sustentabilidade.",
  keywords: [
    "Cases de Sucesso",
    "NeoGovernança",
    "Santo Grau",
    "Carambola",
    "B-Corp",
    "Transformação Digital",
    "ESG",
    "Impacto Social",
  ],
  openGraph: {
    title: "Cases de Sucesso - Transformação e Impacto",
    description:
      "Conheça cases reais de NeoGovernança em ação: empresas que equilibram progresso econômico, conexão humana e sustentabilidade.",
    url: "https://almeida-prado.com/cases",
    type: "website",
  },
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
