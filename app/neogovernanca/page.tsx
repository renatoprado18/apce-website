"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Leaf, Infinity } from "lucide-react";
import Link from "next/link";

export default function NeoGovernanca() {
  return (
    <div className="min-h-screen bg-background">
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

      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20 pt-32">
        <div className="container px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Button>
          </Link>
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/images/neogovernanca-symbol.webp" 
              alt="Logo NeoGovernança" 
              className="w-32 h-32 mb-6"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">NeoGovernança</h1>
          </div>
          <p className="text-2xl md:text-3xl font-light mb-4">
            Progresso. Conexão. Harmonia.
          </p>
          <p className="text-xl opacity-90">
            Em equilíbrio, tudo gira.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Uma postura diante da complexidade
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Em um cenário de crescente complexidade, a governança tradicional não é mais suficiente. 
              A NeoGovernança surge para inspirar as empresas rumo ao futuro.
            </p>
            <blockquote className="text-2xl md:text-3xl font-light italic text-primary border-l-4 border-primary pl-6 my-12">
              &quot;Não estamos apenas em uma era de mudanças - estamos vivendo uma mudança de era.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              O que é NeoGovernança?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 leading-relaxed">
              A NeoGovernança é uma filosofia viva: adaptável, humana, conectada à natureza. 
              Ela une três eixos fundamentais que giram juntos, criando estabilidade em meio ao movimento.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-center">Progresso Econômico</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Sustentabilidade e inteligência financeira, inovação e visão de longo prazo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-center">Conexão Humana</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Empatia, escuta coletiva e inteligência colaborativa
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Leaf className="h-10 w-10 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-center">Harmonia com a Natureza</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Decisões alinhadas aos ciclos naturais e regenerativos
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-xl text-foreground font-semibold mb-4">
                NeoGovernança não é fórmula.
              </p>
              <p className="text-2xl text-primary font-bold">
                É consciência aplicada à liderança em tempos complexos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifestação Prática */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Como os Três Eixos se Manifestam na Prática
            </h2>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <TrendingUp className="h-7 w-7 text-primary" />
                    Progresso Econômico
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Inovação com viabilidade. Reposicionar produtos, adotar IA com propósito, 
                    ampliar valor sem perder essência.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Users className="h-7 w-7 text-accent" />
                    Conexão Humana
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Liderança com escuta ativa. Cuidar das pessoas dentro e ao redor da empresa. 
                    Incluir vozes diversas nas decisões e fortalecer vínculos de confiança.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Leaf className="h-7 w-7 text-secondary" />
                    Harmonia com a Natureza
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Respeito pelo tempo e pelo território. Tomar decisões com consciência ecológica.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Abundância */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Infinity className="h-20 w-20 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                A Abundância como Fundamento
              </h2>
            </div>
            
            <Card className="border-2 bg-background">
              <CardContent className="pt-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O símbolo da NeoGovernança é inspirado no infinito — mas com três alças, 
                  representando os três eixos que sustentam esse novo modelo: progresso econômico, 
                  conexão humana e harmonia com a natureza.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Enquanto o mundo atual ainda baseia seus modelos de negócio na escassez — 
                  gerando acumulação, destruição e competição — a NeoGovernança propõe um novo 
                  fundamento: <strong className="text-primary">a abundância</strong>.
                </p>
                <p className="text-xl text-foreground font-semibold text-center">
                  A abundância não é excesso. É fluidez, regeneração e interdependência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equilíbrio Dinâmico */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              O Equilíbrio Dinâmico
            </h2>
            <p className="text-xl text-primary font-semibold mb-6">
              A nova inteligência da liderança
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Governar no século XXI não é manter tudo sob controle. É manter tudo em equilíbrio.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Vivemos em um mundo que exige decisões rápidas, mas conscientes. Tensões não devem 
              ser eliminadas - devem ser navegadas.
            </p>
            <blockquote className="text-2xl md:text-3xl font-light italic text-primary border-l-4 border-primary pl-6 my-12">
              &quot;Assim como um giroscópio: quanto mais gira, mais estável se torna.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Filosofias */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Filosofias que Inspiram a NeoGovernança
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Wabi-Sabi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A beleza da imperfeição, do que é natural e passageiro.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Kintsugi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As cicatrizes não são escondidas — são valorizadas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Kaizen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Melhoria contínua, paciente e constante.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Yin-Yang</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Movimento e equilíbrio entre forças opostas e complementares.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Kairós (vs. Chronos)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nem sempre o relógio dita o tempo. A sabedoria está em agir no momento certo.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-foreground font-semibold">
                Filosofias que perduram há milênios são perfeitas para se tornarem os valores 
                fundamentais da governança do futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu conselho com inteligência e equilíbrio?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Vamos conversar sobre como implementar a NeoGovernança na sua organização
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            asChild
          >
            <Link href="/#contato">
              Entre em Contato
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

