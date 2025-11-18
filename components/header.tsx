"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Nosotros",
      href: "/us",
    },
    {
      label: "Servicios",
      href: "/services",
    },
    {
      label: "Proyectos",
      href: "/projects",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center min-w-0 shrink-0">
            <Logo size="md" showText={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm lg:text-base font-medium text-foreground transition-colors hover:text-primary hover:bg-accent/50 rounded-md whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex md:items-center ml-4">
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all text-sm lg:text-base"
            >
              <Link href="/contact">Contáctanos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden ml-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent h-9 w-9"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1 border-t border-border bg-background px-2 pb-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-primary rounded-md active:bg-accent/70"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Contáctanos</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
