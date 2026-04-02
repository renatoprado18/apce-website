import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeoGovernança - Progresso, Conexão e Harmonia",
  description:
    "Descubra a NeoGovernança: uma filosofia que equilibra Progresso Econômico, Conexão Humana e Harmonia com a Natureza. O novo paradigma para governança corporativa na era da complexidade.",
  keywords: [
    "NeoGovernança",
    "Governança Corporativa",
    "Progresso Econômico",
    "Conexão Humana",
    "Sustentabilidade",
    "ESG",
    "Liderança",
    "Complexidade",
  ],
  openGraph: {
    title: "NeoGovernança - Progresso, Conexão e Harmonia",
    description:
      "Descubra a NeoGovernança: uma filosofia que equilibra Progresso Econômico, Conexão Humana e Harmonia com a Natureza.",
    url: "https://almeida-prado.com/neogovernanca",
    type: "website",
  },
};

export default function NeoGovernancaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
