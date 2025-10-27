"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";
import { ExternalLink, Calendar, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Reflexões sobre governança, estratégia, inovação e liderança na era da complexidade
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Posts */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  {post.description && (
                    <CardDescription className="mt-2">{post.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Ler no LinkedIn
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer discutir esses temas?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Estou sempre aberto a conversas sobre governança, estratégia e inovação
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

