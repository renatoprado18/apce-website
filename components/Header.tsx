"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Menu reduzido em 12/08/2026: o site deixou de ser vitrine e virou cartao.
  // /neogovernanca, /cases e /blog seguem NO AR e indexaveis — so nao aparecem
  // no menu. Nenhuma URL quebrou; e reversivel devolvendo as linhas abaixo.
  const navLinks: { href: string; label: string }[] = [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm shadow-sm border-b border-primary/40">
      <div className="container px-4 py-4 flex items-center justify-between">
        <Link href="/" onClick={closeMenu}>
          <img
            src="/images/logo-ap-light.png"
            alt="Almeida Prado Conselhos Empresariais"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-secondary-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-primary/30">
          <nav className="container px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-secondary-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-secondary-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
