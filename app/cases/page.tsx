"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cases } from "@/data/cases";
import { ArrowLeft, TrendingUp, Users, Leaf, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Cases() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cases de Sucesso</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Exemplos práticos de como a NeoGovernança transforma organizações e cria valor sustentável
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16">
        <div className="container px-4">
          <div className="space-y-24">
            {cases.map((caseItem, index) => (
              <div key={caseItem.id} className="max-w-6xl mx-auto">
                {/* Título do Case */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    {caseItem.title}
                  </h2>
                  <p className="text-2xl text-primary font-light">
                    {caseItem.subtitle}
                  </p>
                </div>

                {/* Descrição */}
                <Card className="mb-8 border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">O Desafio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {caseItem.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Pilares da NeoGovernança */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                    NeoGovernança na Prática
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Progresso Econômico</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {caseItem.neoGovernancePillars.progresso}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                          <Users className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-lg">Conexão Humana</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {caseItem.neoGovernancePillars.conexao}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                          <Leaf className="h-6 w-6 text-secondary" />
                        </div>
                        <CardTitle className="text-lg">Harmonia com a Natureza</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {caseItem.neoGovernancePillars.harmonia}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Destaques */}
                <Card className="mb-8 bg-muted/30 border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Resultados e Destaques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseItem.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Lições */}
                <Card className="border-l-4 border-l-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-2xl">Lições para o Futuro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-foreground leading-relaxed">
                      {caseItem.lessons}
                    </p>
                  </CardContent>
                </Card>

                {/* Divisor entre cases */}
                {index < cases.length - 1 && (
                  <div className="mt-24 border-t-2 border-muted"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer transformar sua organização?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Vamos conversar sobre como a NeoGovernança pode criar valor sustentável para seu negócio
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

