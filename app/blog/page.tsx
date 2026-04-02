"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { articles, getAllCategories } from "@/data/articles";
import { Calendar, ArrowLeft, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...getAllCategories()];

  const filteredArticles = selectedCategory === "Todos"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Sort articles by date (newest first)
  const sortedArticles = [...filteredArticles].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Featured articles for hero section
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

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

      {/* Featured Articles */}
      {selectedCategory === "Todos" && (
        <section className="py-12 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-2xl font-bold mb-6">Artigos em Destaque</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardHeader>
                      <Badge className="w-fit mb-2">{article.category}</Badge>
                      <CardTitle className="text-xl leading-tight line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(article.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readingTime} min
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtros */}
      <section className="py-8 border-b">
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

      {/* Lista de Artigos */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 flex flex-col h-full group"
                >
                  <CardHeader className="flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readingTime} min de leitura
                      </div>
                      <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ler artigo
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
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
