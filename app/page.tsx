"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Heart, 
  Mail, 
  Phone, 
  Linkedin,
  Award,
  GraduationCap,
  Briefcase,
  ChevronRight
} from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/images/logo-ap.png" alt="Almeida Prado Conselhos Empresariais" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Início</Link>
            <Link href="/neogovernanca" className="text-foreground hover:text-primary transition-colors font-medium">NeoGovernança</Link>
            <Link href="/cases" className="text-foreground hover:text-primary transition-colors font-medium">Cases</Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">Blog</Link>
            <a href="/#contato" className="text-foreground hover:text-primary transition-colors font-medium">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00ek0xMiAyOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMjQgMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMjQgMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Renato de Faria e Almeida Prado
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Conselheiro do Futuro, Estrategista, AI Thinker, Co-fundador e Mentor da 10XMentorAI
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            Com quase 30 anos de trajetória em conselhos, inovação e liderança com propósito, 
            combino inteligência artificial generativa com décadas de experiência em alta gestão 
            para preparar líderes a crescerem com sustentabilidade, humanidade e inteligência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Agende uma Conversa
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="https://www.linkedin.com/in/renatoaprado/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Veja meu LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Navegação Rápida */}
      <section className="py-16 bg-muted/30 fade-in-section">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Explore Mais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/neogovernanca">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">NeoGovernança</CardTitle>
                  <CardDescription>Descubra a filosofia que une progresso, conexão e harmonia</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/cases">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Cases de Sucesso</CardTitle>
                  <CardDescription>Conheça histórias de transformação e impacto</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/blog">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Blog</CardTitle>
                  <CardDescription>Reflexões sobre governança, estratégia e inovação</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <a href="https://10xmentorai.com" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer h-full bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">10XMentorAI</CardTitle>
                  <CardDescription>Mentoria com IA para alta liderança</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre / Propósito */}
      <section className="py-24 bg-background fade-in-section">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <img 
                  src="/images/renato-photo.jpg" 
                  alt="Renato de Faria e Almeida Prado" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Propósito & Visão
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Vi de perto os desafios que executivos e conselheiros enfrentam para aplicar IA com foco estratégico. 
              A tecnologia existe. O que falta é sabedoria aplicada. É isso que construímos na <strong className="text-primary">10XMentorAI</strong>: 
              mentoria contínua, personalizada e estratégica para líderes, com agentes treinados para conversar na linguagem do boardroom.
            </p>
            <blockquote className="text-2xl md:text-3xl font-light italic text-primary border-l-4 border-primary pl-6 my-12">
              &ldquo;a verdadeira inovação surge quando tecnologia e humanidade trabalham em harmonia&rdquo;
            </blockquote>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Com esta iniciativa, complemento minha atuação em conselhos do futuro, preparando a alta liderança 
              para exponencializar seus resultados através da Inteligência Artificial.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valor Agregado */}
      <section className="py-24 bg-muted/30 fade-in-section">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Valor Agregado
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">IA na Alta Liderança</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pioneiro em IA para Governança no Brasil</li>
                  <li>• Fundador da 10XMentorAI</li>
                  <li>• AI Board Advisory para empresas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Estratégia Empresarial</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• +115% crescimento em portfólio</li>
                  <li>• M&A, Valuation e Modelagem Financeira</li>
                  <li>• Mentor para líderes e executivos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Governança</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Conselheiro de Administração - IBGC</li>
                  <li>• Presidente da Comissão do Conselho Consultivo do Futuro</li>
                  <li>• Experiência em NeoGovernança</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">ESG & Impacto</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• TOP 4% B-Corp Global (Best for the World 2021/2022)</li>
                  <li>• +150 pessoas em vulnerabilidade incluídas no mercado tech</li>
                  <li>• Impacto social + tecnologia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiência Profissional - Resumida */}
      <section className="py-24 bg-background fade-in-section">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Experiência Profissional
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Conselhos de Administração</CardTitle>
                </div>
                <CardDescription className="text-lg">Natique-Osborne | 2013 – 2017</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="font-semibold text-primary mb-2">Crescimento de 115% no período</p>
                <p>Coordenação de integração pós-aquisição, orientação estratégica e monitoramento de desempenho organizacional</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-6 w-6 text-accent" />
                  <CardTitle className="text-2xl">Conselhos Consultivos</CardTitle>
                </div>
                <CardDescription className="text-lg">Múltiplas organizações | 2024 – Presente</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>ASSESPRO-SP, Alba Consultoria, Board Academy (Presidente da Comissão do Conselho Consultivo do Futuro), entre outros</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-2xl">Experiência Executiva</CardTitle>
                </div>
                <CardDescription className="text-lg">Carambola, Natique, Suriana | 1996 – 2023</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="font-semibold text-accent mb-2">B-Corp TOP 4% Global (Best for the World 2021/2022)</p>
                <p>Fundador e CEO de múltiplas empresas de tecnologia, alimentos e serviços com foco em impacto social e inovação</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificações & Educação - Resumida */}
      <section className="py-24 bg-muted/30 fade-in-section">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Certificações & Educação
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Certificações Recentes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• Conselheiro Administração – IBGC (2024)</p>
                <p>• AI on Board – Board Academy (2024)</p>
                <p>• AI Applications – University of Pennsylvania (2023)</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl">Formação Acadêmica</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• MBA – UCLA Anderson School of Management</p>
                <p>• Engenharia de Produção – USP</p>
                <p>• Direito – Mackenzie</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise & Habilidades */}
      <section className="py-24 bg-background fade-in-section">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Expertise & Habilidades
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Governança & Conselhos</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base py-2 px-4">Governança Corporativa</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Conselhos de Administração</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">NeoGovernança</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Compliance</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">IA & Tecnologia</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base py-2 px-4">Inteligência Artificial</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">IA Generativa</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">AI Board Advisory</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Transformação Digital</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Estratégia & M&A</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base py-2 px-4">Visão Estratégica</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Fusões e Aquisições</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Valuation</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Negociação</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">ESG & Impacto</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base py-2 px-4">ESG</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">B-Corp</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Sustentabilidade</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Impacto Social</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white fade-in-section">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Vamos Conversar?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Estou sempre aberto a discutir novos projetos, oportunidades de consultoria em governança, 
              estratégia empresarial e aplicação de IA na alta liderança.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a 
                href="mailto:renato@almeida-prado.com"
                className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <Mail className="h-8 w-8" />
                <span className="font-semibold">Email</span>
                <span className="text-sm opacity-90">renato@almeida-prado.com</span>
              </a>
              
              <a 
                href="tel:+5511984153337"
                className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <Phone className="h-8 w-8" />
                <span className="font-semibold">Telefone</span>
                <span className="text-sm opacity-90">+55 (11) 98415-3337</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/renatoaprado/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <Linkedin className="h-8 w-8" />
                <span className="font-semibold">LinkedIn</span>
                <span className="text-sm opacity-90">linkedin.com/in/renatoaprado</span>
              </a>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:renato@almeida-prado.com">
                Entre em Contato
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary text-white/80">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Renato de Faria e Almeida Prado. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/renatoaprado/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:renato@almeida-prado.com"
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

