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
        <section className="pt-32 pb-12">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground mb-6 -ml-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Blog
                </Button>
              </Link>

              <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-xl p-8 md:p-10">
                <Badge className="bg-white/20 text-white mb-4">
                  {article.category}
                </Badge>

                <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {article.title}
                </h1>

                <p className="text-base md:text-lg font-light mb-6 opacity-90">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm opacity-80">
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
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="max-w-none
                  [&>h2]:text-xs [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-primary [&>h2]:uppercase [&>h2]:tracking-[0.2em] [&>h2]:font-semibold [&>h2]:border-b [&>h2]:border-border [&>h2]:pb-2
                  [&>h3]:text-sm [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:text-foreground [&>h3]:font-medium
                  [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-base
                  [&_strong]:text-foreground [&_strong]:font-medium
                  [&>blockquote]:border-l-4 [&>blockquote]:border-primary/50 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-sm [&>blockquote]:text-muted-foreground [&>blockquote]:my-6
                  [&>ul]:my-4 [&>ul]:pl-6 [&_li]:text-muted-foreground [&_li]:mb-1 [&_li]:text-base
                  [&>ol]:my-4 [&>ol]:pl-6
                  [&>hr]:my-8 [&>hr]:border-border
                  [&_a]:text-primary [&_a]:underline hover:[&_a]:no-underline"
              >
                {article.content.split("\n").map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Skip if this paragraph is the same as the description (avoid duplication)
                  if (index < 3 && trimmed.replace(/\*\*/g, "").substring(0, 50) === article.description.substring(0, 50)) {
                    return null;
                  }

                  // Helper to convert ALL CAPS to Sentence Case
                  const toSentenceCase = (str: string) => {
                    const upperCount = (str.match(/[A-ZÀ-Ú]/g) || []).length;
                    const letterCount = (str.match(/[a-zA-ZÀ-ú]/g) || []).length;
                    if (letterCount > 0 && upperCount / letterCount > 0.5) {
                      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                    }
                    return str;
                  };

                  // Helper to normalize ALL CAPS words in text (like "EMERGÊNCIA:" -> "Emergência:")
                  const normalizeAllCaps = (str: string) => {
                    return str.replace(/\b([A-ZÀ-Ú]{2,})\b/g, (match) => {
                      return match.charAt(0) + match.slice(1).toLowerCase();
                    });
                  };

                  // Handle headers
                  if (trimmed.startsWith("## ")) {
                    const headerText = trimmed.replace("## ", "").replace(/:$/, "");
                    return (
                      <h2 key={index}>{toSentenceCase(headerText)}</h2>
                    );
                  }
                  if (trimmed.startsWith("### ")) {
                    const headerText = trimmed.replace("### ", "").replace(/:$/, "");
                    return (
                      <h3 key={index}>{toSentenceCase(headerText)}</h3>
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
                        <p>{normalizeAllCaps(trimmed.replace("> ", "").replace(/"/g, ""))}</p>
                      </blockquote>
                    );
                  }

                  // Handle list items
                  if (trimmed.startsWith("- ")) {
                    return (
                      <ul key={index}>
                        <li
                          dangerouslySetInnerHTML={{
                            __html: normalizeAllCaps(trimmed
                              .replace("- ", "")
                              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")),
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
                        __html: normalizeAllCaps(trimmed
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\*(.*?)\*/g, "<em>$1</em>")),
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
          <section className="py-12 bg-muted/30">
            <div className="container px-4">
              <h2 className="text-xl font-semibold mb-6 text-center text-foreground">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
        <section className="py-12 border-t">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                Quer discutir esse tema?
              </h2>
              <p className="text-muted-foreground mb-6">
                Estou sempre aberto a conversas sobre governança, estratégia e inovação
              </p>
              <Button asChild>
                <Link href="/#contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
