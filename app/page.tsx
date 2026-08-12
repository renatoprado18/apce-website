import { Header } from "@/components/Header";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="min-h-[100svh] flex items-center justify-center px-6 py-28">
        <div className="w-full max-w-2xl">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Renato de Faria e Almeida Prado
          </h1>

          <div className="h-px w-16 bg-primary mt-8 mb-10" />

          <div className="flex flex-col gap-5">
            <a
              href="mailto:renato@almeida-prado.com"
              className="group flex items-center gap-4 text-lg hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span className="border-b border-transparent group-hover:border-primary">
                renato@almeida-prado.com
              </span>
            </a>

            <a
              href="https://wa.me/5511984153337"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-lg hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span className="border-b border-transparent group-hover:border-primary">
                +55 11 98415 3337
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/renatoaprado/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-lg hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5 text-primary shrink-0" />
              <span className="border-b border-transparent group-hover:border-primary">
                linkedin.com/in/renatoaprado
              </span>
            </a>
          </div>

          <p className="mt-14 text-sm text-muted-foreground">
            Conselheiro certificado pelo IBGC · São Paulo
          </p>

        </div>
      </main>
    </div>
  );
}
