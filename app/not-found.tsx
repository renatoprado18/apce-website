import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, BookOpen, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-9xl font-bold mb-4 opacity-20">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 -mt-16">
          Página não encontrada
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Parece que você navegou para uma página que não existe.
          Mas não se preocupe, vamos te ajudar a encontrar o caminho.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Ir para o Início
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <Link href="/blog">
              <BookOpen className="mr-2 h-5 w-5" />
              Ver Blog
            </Link>
          </Button>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-sm opacity-70 mb-4">Páginas populares:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/neogovernanca"
              className="text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              NeoGovernança
            </Link>
            <Link
              href="/cases"
              className="text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              Cases
            </Link>
            <Link
              href="/blog/por-que-falar-em-neogovernanca"
              className="text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              O que é NeoGovernança?
            </Link>
            <Link
              href="/#contato"
              className="text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
