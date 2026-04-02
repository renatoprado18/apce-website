import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Reflexões sobre Governança, Estratégia e Inovação",
  description:
    "Artigos sobre NeoGovernança, Inteligência Artificial, Estratégia Empresarial, Liderança e Complexidade. Insights para conselheiros e executivos do futuro.",
  keywords: [
    "Blog Governança",
    "NeoGovernança",
    "Inteligência Artificial",
    "Estratégia Empresarial",
    "Liderança",
    "Complexidade",
    "Conselho de Administração",
  ],
  openGraph: {
    title: "Blog - Reflexões sobre Governança, Estratégia e Inovação",
    description:
      "Artigos sobre NeoGovernança, Inteligência Artificial, Estratégia Empresarial, Liderança e Complexidade.",
    url: "https://almeida-prado.com/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
