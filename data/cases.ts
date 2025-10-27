export interface Case {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  neoGovernancePillars: {
    progresso: string;
    conexao: string;
    harmonia: string;
  };
  lessons: string;
  highlights: string[];
}

export const cases: Case[] = [
  {
    id: "carambola",
    title: "Carambola",
    subtitle: "Transformando Escassez em Abundância",
    description: "No mercado de tecnologia, a narrativa dominante tem sido a falta de mão de obra qualificada. A Carambola mostrou que é possível transformar essa escassez em abundância, conectando talentos diversos ao mercado. A empresa criou equipes diversificadas, misturando talentos em vulnerabilidade com profissionais experientes, conectados a projetos de empresas por uma plataforma integrada.",
    neoGovernancePillars: {
      progresso: "Geração de valor para empresas e talentos através de uma plataforma inovadora de conexão.",
      conexao: "Diversidade como força motriz, integrando pessoas em vulnerabilidade ao mercado de tecnologia.",
      harmonia: "Contribuição para a sustentabilidade social, promovendo inclusão e oportunidades."
    },
    lessons: "A Carambola ensina que abundância e inclusão podem transformar mercados, mostrando que na NeoGovernança, o movimento é essencial para criar soluções dinâmicas.",
    highlights: [
      "Mais de 150 pessoas inseridas no mercado de tecnologia",
      "Reconhecimento como Empresa B, no top 4% global em impacto social",
      "Best of The World 2021 e 2022 na categoria Trabalhadores",
      "Parcerias com grandes corporações: Itaú, Grupo Fleury, Microsoft, Anima, TecBan e PwC"
    ]
  },
  {
    id: "muji",
    title: "MUJI",
    subtitle: "Essencialidade como Estratégia",
    description: "Como transformar produtos simples em símbolos de desejo? A MUJI mostrou como simplicidade, funcionalidade e brasilidade podem criar valor em mercados globais. A marca buscava no Brasil itens que capturassem a essência da cultura local. A parceria com a Suriana revelou oportunidades de reposicionar produtos brasileiros como a Panela de Ferro Mineira (representando autenticidade e durabilidade), Canecas de Cobre (artesanais e funcionais) e o Copo Americano (redefinido como objeto de design atemporal). Esses produtos foram introduzidos em lojas de luxo no Japão, tornando-se objetos de desejo.",
    neoGovernancePillars: {
      progresso: "Reposicionamento estratégico de produtos brasileiros no mercado global de luxo.",
      conexao: "Parcerias autênticas com artesãos locais, valorizando a cultura e o trabalho manual.",
      harmonia: "Uso de materiais sustentáveis e valorização da produção artesanal tradicional."
    },
    lessons: "A MUJI mostra que simplicidade pode ser uma estratégia poderosa de inovação e conexão cultural. Empresas que adotam a NeoGovernança podem aprender a criar valor repensando o que já existe.",
    highlights: [
      "Panela de Ferro Mineira em lojas de luxo no Japão",
      "Copo Americano redefinido como design atemporal",
      "Valorização da essencialidade e funcionalidade",
      "Conexão entre cultura brasileira e mercado japonês"
    ]
  },
  {
    id: "santo-grau",
    title: "Santo Grau",
    subtitle: "Da Tradição à Inovação",
    description: "Transformar um produto simples em um símbolo de inovação e sofisticação é um desafio que poucos se dispõem a enfrentar. Quando a Santo Grau surgiu, a cachaça era vista como um produto de baixo valor agregado, consumido em botecos ou relegado ao preparo de caipirinhas. Com um olhar visionário, a marca reposicionou a cachaça como um produto premium, misturando tradição, sustentabilidade e design minimalista. A Santo Grau nasceu da valorização de engenhos históricos espalhados pelo Brasil: Coronel Xavier Chaves (MG) - o engenho mais antigo do Brasil com produção artesanal desde 1755; Paraty (RJ) - operado pela família Mello desde 1803; e Itirapuã (SP) - movido por uma roda d'água desde 1860.",
    neoGovernancePillars: {
      progresso: "Reposicionamento de mercado transformando cachaça em produto premium com expansão internacional.",
      conexao: "Parcerias sólidas e duradouras com mestres alambiqueiros e famílias tradicionais.",
      harmonia: "Práticas de produção sustentáveis, valorização do terroir e design com materiais reciclados."
    },
    lessons: "A Santo Grau nos ensina que tradição e inovação podem caminhar juntas. Ela mostra que, ao respeitar as raízes culturais e investir em práticas sustentáveis, é possível construir um futuro próspero e resiliente.",
    highlights: [
      "Engenho mais antigo do Brasil (1755) - Coronel Xavier Chaves",
      "Conceito de terroir aplicado à cachaça",
      "Design minimalista com rótulos kraft reciclados",
      "Reposicionamento de produto popular para premium"
    ]
  }
];

