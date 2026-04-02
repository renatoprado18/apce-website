import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { ShareButtons } from "@/components/ShareButtons";
import { articles, getArticleBySlug, getFeaturedArticles } from "@/data/articles";
import { generateSEO, generateArticleJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return generateSEO({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt || article.publishedAt,
    tags: article.tags,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getFeaturedArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const jsonLd = generateArticleJsonLd({
    title: article.title,
    description: article.description,
    slug: article.slug,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    author: article.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Article Header */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20 pt-32">
          <div className="container px-4">
            <Link href="/blog">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>

            <Badge className="bg-white/20 text-white mb-4">
              {article.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl md:text-2xl font-light mb-8 opacity-90 max-w-4xl">
              {article.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min de leitura</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg prose-slate max-w-none
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-primary
                  prose-ul:my-6 prose-ul:pl-6 prose-li:text-muted-foreground prose-li:mb-2
                  prose-ol:my-6 prose-ol:pl-6
                  prose-hr:my-12 prose-hr:border-border
                  prose-a:text-primary prose-a:underline hover:prose-a:no-underline"
              >
                {article.content.split("\n").map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Handle headers
                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2 key={index}>{trimmed.replace("## ", "")}</h2>
                    );
                  }
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3 key={index}>{trimmed.replace("### ", "")}</h3>
                    );
                  }

                  // Handle horizontal rules
                  if (trimmed === "---") {
                    return <hr key={index} />;
                  }

                  // Handle blockquotes
                  if (trimmed.startsWith("> ")) {
                    return (
                      <blockquote key={index}>
                        <p>{trimmed.replace("> ", "").replace(/"/g, "")}</p>
                      </blockquote>
                    );
                  }

                  // Handle list items
                  if (trimmed.startsWith("- ")) {
                    return (
                      <ul key={index}>
                        <li
                          dangerouslySetInnerHTML={{
                            __html: trimmed
                              .replace("- ", "")
                              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                          }}
                        />
                      </ul>
                    );
                  }

                  // Regular paragraphs with bold text support
                  return (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: trimmed
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                      }}
                    />
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Tags:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t">
                <ShareButtons
                  url={`https://almeida-prado.com/blog/${article.slug}`}
                  title={article.title}
                  description={article.description}
                />
              </div>

              {/* LinkedIn Link */}
              {article.linkedInUrl && (
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    Este artigo foi originalmente publicado no LinkedIn.
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href={article.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no LinkedIn
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/blog/${related.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {related.category}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {related.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer discutir esse tema?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Estou sempre aberto a conversas sobre governança, estratégia e
              inovação
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <Link href="/#contato">Entre em Contato</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
